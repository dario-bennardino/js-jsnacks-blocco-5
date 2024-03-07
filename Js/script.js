//JSnack 1

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

//JSnack 2
