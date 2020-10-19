// Vamos a ver qué son y para qué sirven los spread operators con arrays

// Para eso vamos a empezar con dos arrays sobre los que trabajaremos, uno contendrá
// a los xmen originales y el otro a algunos de los que se unieron más tarde al equipo
const originalXmen = ['Cyclops', 'Iceman', 'Beast', 'Marvel Girl', 'Angel'];
const newXmen = ['Wolverine', 'NightCrawler', 'Storm'];

// Para limpiar la sintaxis y evitar dolores de cabezas al escribir, tenemos los tres puntos suspensivos (...), el SPREAD OPERATOR
// Para entender el concepto e imaginar lo que ocurre cuando lo usamos, vamos a suponer que es un CONCAT con superpoderes
const allXmen = [...originalXmen, ...newXmen];

// Entonces, que pasará con allXmen?
const allXmen = [...originalXmen, ...newXmen]; 
// 'Cyclops', 'Iceman', 'Beast', 'Marvel Girl', 'Angel', 'Wolverine', 'NightCrawler', 'Storm'

// Ha pasado exactamente lo mismo que con concat! Y esto es solo el principio, si quisiésemos añadir de nuevo a Wolverine?
const originalXmenPlusOne = [...originalXmen, newXmen[0]];
// Ahora no estamos editando ningún array original, mantenemos la "fuente de la verdad" en nuestro código
// ['Cyclops', 'Iceman', 'Beast', 'Marvel Girl', 'Angel', 'Wolverine']

// Y si queremos añadir uno al final y otro al principio
const originalAndNewXmen = [newXmen[2], ...originalXmen, newXmen[1]]; 
// ['Storm', 'Cyclops', 'Iceman', 'Beast', 'Marvel Girl', 'Angel', 'NightCrawler']

// Esto podemos hacerlo con tantos arrays como queramos, ¿probamos con tres?
const moreNewXmen = ['Gambit', 'Jubilee', 'Rogue'];

// Vamos a crear un nuevo array con los dos primeros superheroes de cada array
const finalXmen = [
  // Por si no recuerdas slice, pasamos un índice como primer argumento, y luego el número de elementos que queremos quedarnos
  // ['Cyclops', 'Iceman', 'Beast', 'Marvel Girl', 'Angel'].slice(0, 2)
  ...originalXmen.slice(0, 2), // ['Cyclops', 'Iceman']
  ...newXmen.slice(0, 2), // ['Wolverine', 'NightCrawler']
  ...moreNewXmen.slice(0, 2), // ['Gambit', 'Jubilee']
];

// //////////////// Ejemplo práctico ////////////////
// Vamos a convertir todos los nombres a mayúsculas, cosa que podamos hacer rápidamente con un .map
const allUppercaseXmen = originalXmen.map((xmen) => xmen.toUpperCase());

// Pero, aunque en este caso sea más ineficiente, vamos a verlo con un .reduce para que aprendamos bien como utilizar el spread.
// Este caso es algo que encontraréis a menudo en proyectos que empiecen a tener cierta complejidad para transformar los datos que
// recibimos de una API, para formatear lo que queremos pintar en React y demás.
const allUpperWithReduce = originalXmen.reduce((acc, next) => {
  // Reduce recibe siempre el acumulador que ponemos al final de la función que utilizamos para decirle al bucle lo que hacer en cada vuelta
  // Y recibe como segundo argumento el siguiente elemento que toca, en este caso será cada uno de nuestros xmen
  return [...acc, next.toUpperCase()];
  // Pues aplicando lo aprendido, vamos a devolver en cada vuelta el array acumulado junto con el siguiente xmen en mayúsculas
}, []);

// Y ya lo tenemos, hemos simulado el map con uppercase usando reduce
