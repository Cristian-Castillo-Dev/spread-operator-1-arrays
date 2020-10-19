const expect = require('chai').expect;

const { flattenArray } = require('../ejercicio3');

describe('Ejercicio 3', () => {
  it('Devuelve un array de una sola dimensión', () => {
    const result = flattenArray();
    expect(result).to.deep.equal([
      'HTML',
      'CSS',
      'JavaScript',
      'Angular',
      'React',
      'Vue',
      'Node',
      'Express',
      'Fastify',
    ]);
  });
});
