// L'utente indica un livello di difficoltà in base al quale viene
//  generata una griglia di gioco quadrata, in cui ogni cella contiene
//  un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora 
// di azzurro.



// 1 L'utente indica il livello di difficoltà che vuole usare/giocare
// usare un prompt per chiedere il livello all'utente

// 2 creare le 3 griglie in base alla difficoltà scelta dall'utente

// 3 colorare la cella d'azzurro al click dell'utente

// Assegno al bottone un click
const playBtn = document.getElementById('play_button').addEventListener('click', startGame);


// Griglia generata se l'utente sceglie Easy dalla Select (100 numeri -> da 1 a 100)
function startGame() {
    // Seleziono dall'html il grid principale che conterrà poi tutti i quadratini
    const myGrid = document.getElementById('grid');
    myGrid.innerHTML = '';

    // Prendiamo la scelta dell'utente e in base al valore selezionato scegliamo la griglia da stampare
    const levelSelected = document.getElementById('select_level').value;

    // Preso il valore selezionato, dobbiamo creare i box in base alle dimensioni della griglia
    // Creiamo 2 variabili , una avrà il numero di box, e lìaltra avrà la dimensione di ogni singolo box
    let maxSquareNum;
    let thisSquareDimension;

    // In base al valore della select creo i quadratini che avranno tot dimensioni
    if(levelSelected === 'easy'){
        maxSquareNum = 100;
        thisSquareDimension = 10;
    } else if(levelSelected === 'normal'){
        maxSquareNum = 81;
        thisSquareDimension = 9;
    } else if(levelSelected === 'hard'){
        maxSquareNum = 49;
        thisSquareDimension = 7;
    }

    for(let i = 1; i <= maxSquareNum; i++){
        const newGeneratedSquare = createThisSquare(i, thisSquareDimension);

        newGeneratedSquare.addEventListener('click', handleSquareClick);

        myGrid.appendChild(newGeneratedSquare);
        
    }
}



// Funzione che al click del singolo box aggiunge la classe active con sfondo blu e colore del testo bianco
function handleSquareClick(){
    this.classList.add('active');
}



// Funzione che crea ogni singolo box all'interno del grid principale
function createThisSquare(squareNumber, squareDimension) {
    const thisSquare = document.createElement('div');
    thisSquare.classList.add('square');
    thisSquare.innerHTML = `<span>${squareNumber}</span>`;

    thisSquare.style.width = `calc(100% / ${squareDimension})`;
    thisSquare.style.height = `calc(100% / ${squareDimension})`;

    return thisSquare;
}