let numeros = [25, 64, 4, 9, 81, 36, 49, 1, 100, 121, 16 ];

numeros = numeros.sort((a,b) => a-b);
console.log(`Ordem crescente array ${numeros}.`);

const dobro = numeros.map((e) => e * 2);
console.log(`O dobro de cada valor dentro desse array ${dobro}.`);

const metade = numeros.map((e) => e /2);
console.log("A metade de cada valor dentro desse array "+metade+".");

const raiz = numeros.map((e) => Math.sqrt(e));
console.log(`A raiz de cada valor dentro desse array ${raiz}.`);