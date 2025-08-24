'use strict';

const list = document.querySelector('ul');
const listElements = document.querySelectorAll('li');

function parseSalary(salary) {
  return Number(salary.replace('$', '').replace(',', ''));
}

function sortedList(items) {
  const sortedBySalary = Array.from(items).sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  sortedBySalary.forEach((item) => list.appendChild(item));
}

function getEmployees(items) {
  const employees = [];

  items.forEach((item) => {
    const employee = {
      name: item.textContent,
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: item.dataset.age,
    };

    employees.push(employee);
  });

  return employees;
}

sortedList(listElements);
getEmployees(listElements);
