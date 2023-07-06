import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  try {
    const responseThrowOnce = await fetch('foo', true);
    console.log(elapsed(), 'throwOnce:', responseThrowOnce);
  } catch (error) {
    console.log(elapsed(), 'throwOnce', error);
  }
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  try {
    const responseThrowSeveral1 = await fetch('foo1', true);
    console.log(elapsed(), 'throwSeveral1:', responseThrowSeveral1);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral1', error);
  }

  try {
    const responseThrowSeveral2 = await fetch('foo2', true);
    console.log(elapsed(), 'throwSeveral2:', responseThrowSeveral2);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral2', error);
  }

  try {
    const responseThrowSeveral3 = await fetch('foo3', true);
    console.log(elapsed(), 'throwSeveral3:', responseThrowSeveral3);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral3', error);
  }
}

async function throwChained() {
  try {
    const responseThrowChained1 = await fetch('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', responseThrowChained1);

    const responseThrowChained2 = await fetch(responseThrowChained1, true);
    console.log(elapsed(), 'throwChained1:', responseThrowChained2);

    const responseThrowChained3 = await fetch(responseThrowChained2, true);
    console.log(elapsed(), 'throwChained1:', responseThrowChained3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
  }
}

throwOnce()
  .then(() => throwSeveral())
  .then(() => throwChained());
