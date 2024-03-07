Esercizio 07/03/2024<br>
JSnack
===
### JSnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.<br>
#### Svolgimento
1. creo un array contenente di oggetti con ognuno avente 3 valori varietà, peso, lunghezza.
2. calcolo il peso totale utilizzando il metodo reduce sugli elementi dell'array.
### JSnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
#### Svolgimento
1. Utilizzo filter per creare due arrey separati uno con zucchine maggiori di 15 ed un altro con minori di 15. Creo due costanti che conterranno le zucchine secondo i miei parametri.
2. Calcolo il peso dei due nuovi array utilizzando reduce come nel primo snack.
### JSnack 3
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
#### Svolgimento
1. Creo una funzione utilizzando split che mi divite i caratteri della stringa, reverse inverte l'ordine degli elementi dell'array e join me li unisce creando una nuova stringa. 
### JSnack 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
#### Svolgimento
1. creo due array ed uno vuoto che verrà riempito attraverso un ciclo for
2. creo una funzione utilizzando un ciclo for che cicla per tutta la lunghezza dell'arrayUno e per ogni ciclo mi fa push di un elemento del primo e del secondo array nell'array vuoto e mi restituirà l'array "nuovo".
3. Invoco la funzione fatta e le dò arrayUno ed arrayDue
4. Creo una costante che sarà uguale al risultato della funzione.
5. Faccio un console.log del risultato
### JSnack 5
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
#### Svolgimento
1. 