import { writeFile, readFile } from 'node:fs/promises';

const originalFile = process.argv[2];
const newFile = process.argv[3];
async function copyFile() {
  try {
    const originalFileContents = await readFile(originalFile);
    await writeFile(newFile, originalFileContents);
  } catch (error) {
    console.log('Oops! There was an error:', error);
  }
}

copyFile();
