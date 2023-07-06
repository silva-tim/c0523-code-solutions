import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  const responseOnce = await fetch('foo/bar.html');
  console.log(elapsed(), 'fetchOnce:', responseOnce);
}

async function fetchSeveral() {
  const responseSeveral1 = await fetch('foo1/bar.html');
  console.log(elapsed(), 'fetchSeveral1:', responseSeveral1);

  const responseSeveral2 = await fetch('foo2/bar.html');
  console.log(elapsed(), 'fetchSeveral2:', responseSeveral2);

  const responseSeveral3 = await fetch('foo3/bar.html');
  console.log(elapsed(), 'fetchSeveral3:', responseSeveral3);
}

async function fetchChained() {
  const responseChained1 = await fetch('foo-chain/bar.html');
  console.log(elapsed(), 'fetchSeveral1:', responseChained1);

  const responseChained2 = await fetch(responseChained1);
  console.log(elapsed(), 'fetchSeveral2:', responseChained2);

  const responseChained3 = await fetch(responseChained2);
  console.log(elapsed(), 'fetchSeveral3:', responseChained3);
}

await fetchOnce();
await fetchSeveral();
await fetchChained();
