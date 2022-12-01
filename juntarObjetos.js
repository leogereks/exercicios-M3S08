function juntarObjetos (objetoUm, objetoDois){
    const objeto = Object.assign(objetoUm,objetoDois);
    return objeto;
}

let objeto1 = {
    nome: "Leonardo",
    sobrenome: "Gereks",
    'estuda programacao': true
    
}

let objeto2 ={
    idade: "24 anos",
    altura: "1.80",
    lazer: ["jogar","seriados","ler"] 
}

console.log(juntarObjetos(objeto1,objeto2));