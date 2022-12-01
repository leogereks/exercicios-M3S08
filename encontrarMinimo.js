function encontrarMinimo (array){
    let minimo = array.sort();
    return Math.min(...minimo);
}

let encontrar = [2,5,9,10,20,50,3,1,25,11,-5];

console.log("o menor argumento é "+ encontrarMinimo(encontrar));