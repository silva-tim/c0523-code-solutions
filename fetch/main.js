async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok === false) {
      throw new Error(`An error occured. Status: ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.error(err);
  }
}

getUsers();
