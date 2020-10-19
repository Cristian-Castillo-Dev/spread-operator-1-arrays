const expect = require('chai').expect;

const { completeToTen } = require('../ejercicio2');

describe('Ejercicio 2', () => {
  it('Devuelve un array con los números ordenados de 0 a 10', () => {
    const result = completeToTen();
    expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
