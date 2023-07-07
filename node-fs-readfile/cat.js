import { readFile } from 'node:fs/promises';

const files = process.argv.splice(2);
async function concatFiles() {
  try {
    const promises = await Promise.all(
      files.map((element) => readFile(element, 'utf8'))
    );
    promises.forEach((i) => console.log(i));
  } catch (error) {
    console.error('Oops, there was an error:', error);
  }
}

concatFiles();
