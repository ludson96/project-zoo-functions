const data = require('../data/zoo_data');

const stephId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// const managers = [stephId, olaId, burlId];

function isManager(id) {
  if (id === stephId) {
    return true;
  } if (id === olaId) {
    return true;
  } if (id === burlId) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (managerId === stephId) {
    return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

const actual = '4b40a139-d4dc-4f09-822d-ec25e819a5ad';
console.log(getRelatedEmployees(actual));

module.exports = { isManager, getRelatedEmployees };
