class Card {
    constructor(value, suite){
        this.value = value;
        this.suite = suite;
    }
}

class Player {
    constructor(hand){
    this.player1Hand = [];
    this.player2Hand = [];
    }
}

class Main{

    constructor() {
        this.deck = [];
        this.player1Hand = [];
        this.player2Hand = [];
    }

    createCards() {
        this.deck.push(new Card(1,"Hearts"));
        this.deck.push(new Card(2,"Hearts"));
        this.deck.push(new Card(3,"Hearts"));
        this.deck.push(new Card(4,"Hearts"));
        this.deck.push(new Card(5,"Hearts"));
        this.deck.push(new Card(6,"Hearts"));
        this.deck.push(new Card(7,"Hearts"));
        this.deck.push(new Card(8,"Hearts"));
        this.deck.push(new Card(9,"Hearts"));
        this.deck.push(new Card(10,"Hearts"));
        this.deck.push(new Card(11,"Hearts"));
        this.deck.push(new Card(12,"Hearts"));
        this.deck.push(new Card(13,"Hearts"));

        this.deck.push(new Card(1,"Diamonds"));
        this.deck.push(new Card(2,"Diamonds"));
        this.deck.push(new Card(3,"Diamonds"));
        this.deck.push(new Card(4,"Diamonds"));
        this.deck.push(new Card(5,"Diamonds"));
        this.deck.push(new Card(6,"Diamonds"));
        this.deck.push(new Card(7,"Diamonds"));
        this.deck.push(new Card(8,"Diamonds"));
        this.deck.push(new Card(9,"Diamonds"));
        this.deck.push(new Card(10,"Diamonds"));
        this.deck.push(new Card(11,"Diamonds"));
        this.deck.push(new Card(12,"Diamonds"));
        this.deck.push(new Card(13,"Diamonds"));

        this.deck.push(new Card(1,"Spades"));
        this.deck.push(new Card(2,"Spades"));
        this.deck.push(new Card(3,"Spades"));
        this.deck.push(new Card(4,"Spades"));
        this.deck.push(new Card(5,"Spades"));
        this.deck.push(new Card(6,"Spades"));
        this.deck.push(new Card(7,"Spades"));
        this.deck.push(new Card(8,"Spades"));
        this.deck.push(new Card(9,"Spades"));
        this.deck.push(new Card(10,"Spades"));
        this.deck.push(new Card(11,"Spades"));
        this.deck.push(new Card(12,"Spades"));
        this.deck.push(new Card(13,"Spades"));

        this.deck.push(new Card(1,"Clubs"));
        this.deck.push(new Card(2,"Clubs"));
        this.deck.push(new Card(3,"Clubs"));
        this.deck.push(new Card(4,"Clubs"));
        this.deck.push(new Card(5,"Clubs"));
        this.deck.push(new Card(6,"Clubs"));
        this.deck.push(new Card(7,"Clubs"));
        this.deck.push(new Card(8,"Clubs"));
        this.deck.push(new Card(9,"Clubs"));
        this.deck.push(new Card(10,"Clubs"));
        this.deck.push(new Card(11,"Clubs"));
        this.deck.push(new Card(12,"Clubs"));
        this.deck.push(new Card(13,"Clubs"));

      

        return(this.deck)
    }

    createPlayers () {
        let player1 = "Player 1";
        let player2 = "Player 2";

    }

    dealCards() {

        for(let i=0; i<this.deck.length;i++){

            //let random = this.deck(Math.random());
            let random = Math.floor(Math.random() * this.deck.length)
        
            if (player1Hand < 26 || player2Hand < 26){
                this.player1Hand.push(random);
                this.player2Hand.push(random);
                return Player1Hand, Player2Hand
            }
        }
    }
}

// 1. Create cards
let main = new Main();
let deck = main.createCards();

let player1Hand = [];
let player2Hand = [];

// Assign players hand (deal deck)
let deckCount = deck.length;

while(deck.length > 0){
    //let random = this.deck(Math.random());
    let random = Math.floor(Math.random() * deck.length)
    player1Hand.push(deck[random]);
    deck.splice(random,1);

    random = Math.floor(Math.random() * deck.length)
    player2Hand.push(deck[random]);
    deck.splice(random,1);
}

let player1Points = 0;
let player2Points = 0;
let randomPlay1 = 0
let randomPlay2 = 0
while(player1Hand.length > 0){
    randomPlay1 = Math.floor(Math.random() * player1Hand.length);  
    randomPlay2 = Math.floor(Math.random() * player1Hand.length);   

    if ((player1Hand[randomPlay1].value) > (player2Hand[randomPlay2].value)){
        player1Points = player1Points + 1;
    }
    else if ((player1Hand[randomPlay1].value) < (player2Hand[randomPlay2].value)){
        player2Points = player2Points + 1;   
    }    

    player1Hand.splice(randomPlay1,1);
    player2Hand.splice(randomPlay2,1);
}

if(player1Points > player2Points){
    console.log("PLAYER 1 IS THE WINNER");
}
else if(player1Points < player2Points){
    console.log("PLAYER 2 IS THE WINNER");
}


