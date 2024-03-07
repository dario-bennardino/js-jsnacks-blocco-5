//JSNACK 1

const zucchine = [
    {
        varieta: 'Zucchina Verde',
        peso: 50,
        lunghezza: 15,
    },
    {
        varieta: 'Zucchina Gialla',
        peso: 49,
        lunghezza: 14,
    },
    {
        varieta: 'Zucchina Bianca',
        peso: 48,
        lunghezza: 12,
    },
    {
        varieta: 'Zucchina Nera',
        peso: 30,
        lunghezza: 10,
    },
    {
        varieta: 'Zucchina Arancione',
        peso: 10,
        lunghezza: 17,
    },
    {
        varieta: 'Zucchina Rosa',
        peso: 15,
        lunghezza: 8,
    },
    {
        varieta: 'Zucchina Blu',
        peso: 45,
        lunghezza: 9,
    },
    {
        varieta: 'Zucchina Marrone',
        peso: 31,
        lunghezza: 7,
    },
    {
        varieta: 'Zucchina Verde Chiaro',
        peso: 22,
        lunghezza: 5,
    },
    {
        varieta: 'Zucchina Rossa',
        peso: 28,
        lunghezza: 11,
    }
]

//calcolo il peso totale utilizzando reduce
const pesoTotale = zucchine.reduce((somma, zucchina) => somma + zucchina.peso, 0);

console.log(pesoTotale);


//JSNACK 2
//Utilizzo filter per creare due array >15 e <15

const zucchineGrandi = zucchine.filter(zucchina=>zucchina.lunghezza > 15);

const zucchinePiccole = zucchine.filter(zucchina=>zucchina.lunghezza < 15);

console.log(zucchineGrandi);
console.log(zucchinePiccole);

//stampo peso dei due nuovi array

const pesoZucchineGrandi = zucchineGrandi.reduce((somma, zucchina) => somma + zucchina.peso, 0);

console.log(pesoZucchineGrandi);

const pesoZucchinePiccole = zucchinePiccole.reduce((somma, zucchina) => somma + zucchina.peso, 0);

console.log(pesoZucchinePiccole);



//JSNACK 3

function stringaInvertita(testo) {
    return testo.split('').reverse().join('');
  }

    const stringaDaInvertire = 'Ciao';

    const output = stringaInvertita(stringaDaInvertire);

    console.log(output);



   //JSNACK 4

    const arrayUno = ['a', 'b', 'c'];
    const arrayDue = [1, 2, 3];

    fusioneDueArray(arrayUno, arrayDue);

    const risultato = fusioneDueArray(arrayUno, arrayDue);

    console.log(risultato);


    //Funzione

    function fusioneDueArray(arrayUno, arrayDue){
        const arrayFuso = [];

        for (let i = 0; i < arrayUno.length; i++ ){
            arrayFuso.push(arrayUno[i], arrayDue[i]);
        }

        return arrayFuso;
    }



    //jSNACK 5
 

    const arrayProva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const a = 2;

    const b = 5;

    creaArray(arrayProva, a, b);

    const risultatoSnackCinque = creaArray(arrayProva, a, b);

    console.log(risultatoSnackCinque);

    
    //Funzione

    function creaArray(array, a, b) {
        // Verifica se "a" e "b" sono valori validi
        if (a > b || b >= array.length) {
          return false; 
       }

       const nuovoArray = array.slice(a, b + 1);
       
       return nuovoArray;

    }   

    //da aggiustare

