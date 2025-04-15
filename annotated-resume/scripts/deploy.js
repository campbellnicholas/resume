import { createReadStream } from 'fs';
import { join, sep } from 'path';
import { Client } from 'basic-ftp';
import { readdir, stat } from 'fs/promises';

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
      secure: true,
      secureOptions: {
        rejectUnauthorized: false
      }
    });

    // Ensure remote directory exists
    await client.ensureDir(remoteDir);

    // Upload all files from dist directory recursively
    async function uploadDirectory(localPath, remotePath) {
      const stats = await stat(localPath);
      
      if (stats.isDirectory()) {
        // Convert path separators to forward slashes for FTP
        const ftpPath = remotePath.split(sep).join('/');
        
        try {
          // Try to create directory
          await client.ensureDir(ftpPath);
          // Small delay to ensure directory is created
          await new Promise(resolve => setTimeout(resolve, 100));
          
          const files = await readdir(localPath);
          for (const file of files) {
            const nextLocalPath = join(localPath, file);
            const nextRemotePath = join(remotePath, file);
            await uploadDirectory(nextLocalPath, nextRemotePath);
          }
        } catch (error) {
          console.error(`Error creating directory ${ftpPath}:`, error);
          throw error;
        }
      } else {
        // Convert path separators to forward slashes for FTP
        const ftpPath = remotePath.split(sep).join('/');
        console.log(`Uploading ${localPath} to ${ftpPath}...`);
        
        try {
          await client.uploadFrom(localPath, ftpPath);
          // Small delay between file uploads
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          console.error(`Error uploading file ${localPath}:`, error);
          throw error;
        }
      }
    }

    await uploadDirectory(localDir, remoteDir);
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
const remoteDir = process.env.FTP_REMOTE_DIR || '/';

// Validate required environment variables
if (!host || !user || !password) {
  console.error('Error: FTP_HOST, FTP_USER, and FTP_PASSWORD environment variables are required');
  process.exit(1);
}

// Run deployment
deployToFTP(host, user, password, remoteDir); 