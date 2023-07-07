import { readFile } from 'node:fs/promises';

async function readDijkstra() {
  try {
    const contentsOfDijkstra = await readFile('./dijkstra.txt', 'utf8');
    console.log('contents of Dijkstra.txt:', contentsOfDijkstra);
  } catch (error) {
    console.error('Oops, there was an error:', error);
  }
}

readDijkstra();
