import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { Client } from 'basic-ftp';
import { readdir, stat } from 'fs/promises';

/**
 * Deploys the public directory to an FTP server
 * @param {string} host - FTP server host
 * @param {string} user - FTP username
 * @param {string} password - FTP password
 */
async function deployToFTP(host, user, password) {
  const client = new Client();
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
      secure: true,
      secureOptions: {
        rejectUnauthorized: false
      }
    });

    // Upload all files from dist directory recursively
    async function uploadFiles(localPath, remotePath = '') {
      const stats = await stat(localPath);
      
      if (stats.isDirectory()) {
        const files = await readdir(localPath);
        for (const file of files) {
          const nextLocalPath = join(localPath, file);
          const nextRemotePath = remotePath ? `${remotePath}/${file}` : file;
          await uploadFiles(nextLocalPath, nextRemotePath);
        }
      } else {
        // Ensure the remote directory exists
        const remoteDir = dirname(remotePath);
        if (remoteDir !== '.') {
          try {
            await client.ensureDir(remoteDir);
          } catch (error) {
            console.error(`Error ensuring directory ${remoteDir}:`, error);
            throw error;
          }
        }

        console.log(`Uploading ${localPath} to ${remotePath}...`);
        try {
          await client.uploadFrom(localPath, remotePath);
          // Small delay between file uploads
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          console.error(`Error uploading file ${localPath}:`, error);
          throw error;
        }
      }
    }

    await uploadFiles(localDir);
    console.log('Deployment completed successfully!');
  } catch (error) {
    console.error('Deployment failed:', error);
    process.exit(1);
  } finally {
    client.close();
  }
}

// Get environment variables
const host = process.env.FTP_HOST;
const user = process.env.FTP_USER;
const password = process.env.FTP_PASSWORD;

// Validate required environment variables
if (!host || !user || !password) {
  console.error('Error: FTP_HOST, FTP_USER, and FTP_PASSWORD environment variables are required');
  process.exit(1);
}

// Run deployment
deployToFTP(host, user, password); 