const $userList = document.querySelector('#user-list');

const req = new XMLHttpRequest();

req.open('GET', 'https://jsonplaceholder.typicode.com/users');
req.responseType = 'json';
req.addEventListener('load', function () {
  console.log('status:', req.status);
  console.log('response:', req.response);

  for (let i = 0; i < req.response.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = req.response[i].name;
    $userList.append($li);
  }
});
req.send();
