// async function buscarTodosLosPersonajes() {
// const data = await fetch("https://rickandmortyapi.com/api/character");
// const dataJson = await data.json();

// const resultadosObtenidos = dataJson.results;

// const resultadosFormateados = [];

// resultadosObtenidos.forEach((personaje)=> {


//     let personajeReducido = {
// nombre: personaje.name,
// gender: personaje.gender,
// planetaDeOrigen: personaje.origin.name,
// urlPlaneta: personaje.origin.url, 

// };

// resultadosFormateados.push(personajeReducido);
// });

// console.log(resultadosFormateados);

// return resultadosFormateados;

// }
console.log("hola");
async function buscandoLosPersonajes() {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    
    const dataJson = await data.json()
    
    const resultadosObtenidos = dataJson.results;
    
    const resultadosFormateados = [];
    
    resultadosObtenidos.forEach((personaje)=> {
    
    
        let personajeFormateado = {
    nombre: personaje.name,
    gender: personaje.gender,
    planetaDeOrigen: personaje.origin.name,
    urlPlaneta: personaje.origin.url 
    
    };
    
    resultadosFormateados.push(personajeFormateado);
    });
    
    console.log(resultadosFormateados);
    
    return resultadosFormateados;
    
    }

    buscandoLosPersonajes();





















