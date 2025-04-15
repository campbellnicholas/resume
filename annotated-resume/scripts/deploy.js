import { createReadStream } from 'fs';
import { join } from 'path';
import { Client } from 'basic-ftp';
import { readdir } from 'fs/promises';

/**
 * Deploys the public directory to an FTP server
 * @param {string} host - FTP server host
 * @param {string} user - FTP username
 * @param {string} password - FTP password
 * @param {string} remoteDir - Remote directory to upload to
 */
async function deployToFTP(host, user, password, remoteDir) {
  const client = new Client();
  // Ensure we're in the annotated-resume directory
  const localDir = join(process.cwd(), 'dist');
  const currentDir = process.cwd();

  // Verify we're in the correct directory
  if (!currentDir.endsWith('annotated-resume')) {
    console.error('Error: Deployment must be run from the annotated-resume directory');
    process.exit(1);
  }

  try {
    // Connect to FTP server
    await client.access({
      host,
      user,
      password,
      secure: true
    });

    // Ensure remote directory exists
    await client.ensureDir(remoteDir);

    // Upload all files from dist directory
    const files = await readdir(localDir);
    for (const file of files) {
      const localPath = join(localDir, file);
      const remotePath = join(remoteDir, file);
      
      console.log(`Uploading ${file}...`);
      await client.uploadFrom(localPath, remotePath);
    }

    console.log('Deployment completed successfully!');
  } catch (error) {
    console.error('Deployment failed:', error);
    process.exit(1);
  } finally {
    client.close();
  }
}

// Get credentials from environment variables
const host = process.env.FTP_HOST;
const user = process.env.FTP_USER;
const password = process.env.FTP_PASSWORD;
const remoteDir = process.env.FTP_REMOTE_DIR || '/';

if (!host || !user || !password) {
  console.error('Missing FTP credentials. Please set FTP_HOST, FTP_USER, and FTP_PASSWORD environment variables.');
  process.exit(1);
}

deployToFTP(host, user, password, remoteDir); 