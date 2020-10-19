const expect = require('chai').expect;

const { orderStarWarsMovies } = require('../ejercicio1');

describe('Ejercicio 1', () => {
  it('Las películas se ordenan correctamente', () => {
    const result = orderStarWarsMovies();
    expect(result).to.deep.equal([
      'Episode I – The Phantom Menace',
      'Episode II – Attack of the Clones',
      'Episode III – Revenge of the Sith',
      'Episode IV – A New Hope',
      'Episode V – The Empire Strikes Back',
      'Episode VI – Return of the Jedi',
      'Episode VII – The Force Awakens',
      'Episode VIII – The Last Jedi',
      'Episode IX – The Rise of Skywalker',
    ]);
  });
});
