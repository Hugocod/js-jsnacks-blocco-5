/* SNACK 3*/
/*
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchine = [
    {
        varietà: "zucchine nano",
        peso: 0.2,
        lunghezza: 10,
    },
    {
        varietà: "zucchine gialle",
        peso: 0.5,
        lunghezza: 4,
    },
    {
        varietà: "zucchine viola",
        peso: 0.5,
        lunghezza: 14,
    },
    {
        varietà: "zucchine gigante",
        peso: 0.8,
        lunghezza: 23,
    },
    {
        varietà: "zucchine soffice",
        peso: 0.5,
        lunghezza: 12,
    },
    {
        varietà: "zucchine simpatico",
        peso: 0.5,
        lunghezza: 30,
    },
    {
        varietà: "zucchine nano",
        peso: 0.2,
        lunghezza: 10,
    },
    {
        varietà: "zucchine giallo",
        peso: 0.5,
        lunghezza: 20,
    },
    {
        varietà: "zucchine blu",
        peso: 0.5,
        lunghezza: 20,
    },
    {
        varietà: "zucchine medio",
        peso: 0.5,
        lunghezza: 10,
    },
];

const zucchineLunghe = [];
const zucchineMenoLunghe = [];

for (let i = 0; i < zucchine.length; i++) {
    const lunghezzazucchine = parseInt(zucchine[i].lunghezza);

    if (lunghezzazucchine > 15) {
        zucchineLunghe.push(zucchine[i]);
    } else {
        zucchineMenoLunghe.push(zucchine[i]);
    }
}

/* Ecco i due array divisi */
console.log(zucchineLunghe);
console.log(zucchineMenoLunghe);

/* zucchine lunghe totale */

let totZucchineLunghe = 0;

zucchineLunghe.forEach((zucchina) => {
    totZucchineLunghe += zucchina.peso;
});

console.log(totZucchineLunghe);

/* zucchine meno lunghe totale */

let totZucchineMenoLunghe = 0;

zucchineMenoLunghe.forEach((zucchina) => {
    totZucchineMenoLunghe += zucchina.peso;
});

console.log(totZucchineMenoLunghe);
