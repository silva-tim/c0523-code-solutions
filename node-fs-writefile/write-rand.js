import { writeFile } from 'node:fs/promises';

async function writeRandom() {
  const randomNumber = Math.floor(Math.random() * 1000);
  try {
    await writeFile('./random.txt', `${randomNumber.toString()} \n`);
  } catch (error) {
    console.log('Oops! There was an error:', error);
  }
}

writeRandom();
