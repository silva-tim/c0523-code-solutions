const business = {
  opens: '8:00 AM',
  closes: '5:00 PM',
  totalEmployees: 4,
  daysOpen: ['M', 'T', 'W', 'Th', 'F'],
  employees: {
    tim: { position: 'CEO', daysOfWeekWorking: ['T', 'Th'] },
    joe: { position: 'CTO', daysOfWeekWorking: ['M', 'F'] },
    liam: { position: 'CFO', daysOfWeekWorking: ['T', 'W', 'F'] },
    chris: { position: 'COO', daysOfWeekWorking: ['M', 'T', 'Th'] },
  },
};

function addWeekends() {
  business.daysOpen.push('Sa', 'Su');

  for (const key in business.employees) {
    business.employees[key].daysOfWeekWorking.push('Sa', 'Su');
  }
}

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (let i = 0; i < 4; i++) {
      const currentName = xhr.response[i].name;
      business.employees[currentName] = {
        position: '',
        daysOfWeekWorking: ['Sa', 'Su'],
        fullTime: false,
      };

      switch (i) {
        case 0:
          business.employees[currentName].position = 'Cashier';
          break;
        case 1:
          business.employees[currentName].position = 'Accountant';
          break;
        case 2:
          business.employees[currentName].position = 'Janitor';
          break;
        case 3:
          business.employees[currentName].position = 'Designer';
      }

      const randomDayArray = [];
      const randomNumber = Math.floor(Math.random() * 5);

      for (let j = 0; j <= randomNumber; j++) {
        const randomDay = Math.floor(Math.random() * 5);
        if (randomDayArray.includes(randomDay)) {
          continue;
        }
        randomDayArray.push(randomDay);

        switch (randomDay) {
          case 0:
            business.employees[currentName].daysOfWeekWorking.push('M');
            break;
          case 1:
            business.employees[currentName].daysOfWeekWorking.push('T');
            break;
          case 2:
            business.employees[currentName].daysOfWeekWorking.push('W');
            break;
          case 3:
            business.employees[currentName].daysOfWeekWorking.push('Th');
            break;
          case 4:
            business.employees[currentName].daysOfWeekWorking.push('F');
        }
      }

      if (business.employees[currentName].daysOfWeekWorking.length > 4) {
        business.employees[currentName].fullTime = true;
      }

      business.totalEmployees++;
    }
  });
  xhr.send();
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees--;
}

window.addEventListener('DOMContentLoaded', function () {
  addWeekends();
  for (const key in business.employees) {
    if (business.employees[key].daysOfWeekWorking.length > 4) {
      business.employees[key].fullTime = true;
    } else {
      business.employees[key].fullTime = false;
    }
  }
  addEmployees();
  deleteEmployee('tim');
});
