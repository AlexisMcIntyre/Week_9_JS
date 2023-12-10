/*
Coding Steps:
For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players. Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.

- You do not need to do anything special when there is a tie in a round.
- You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.

The completed project should, when executed, do the following:
- Deal 26 Cards to each Player from a Deck of 52 cards.
- Iterate through the turns where each Player plays a Card.
- The Player who played the higher card is awarded a point.
- Ties result in zero points for both Players.
- After all cards have been played, display the score and declare the winner. 
*/

//Set up Game

/*Here I am creating the class Card and passing in the card value as the arguement. */
class Card {
    constructor(value){
        this.value = value;
    }
}

/*Here I am creating the class Main where the game is initiated and played. The constructor creates the deck, player1Hand, and player2Hand arrays. The main class is composed of 3 methods: createCards, dealCards, and playGame. */

class Main{

    constructor() {
        this.deck = [];
        this.player1Hand = [];
        this.player2Hand = [];
    }

/*In the createCards method, the empty array created above, this.deck, is populated with 52 cards. A for loop is used where as long as "i" is less than or equal to 13 (the highest value of each card suite), it will loop through adding 1 to the value of "i", and pushing a new card into the this.deck array. Inside the for loop, if "i" is equal to 13 (the highest card value), it will reset "i" to 0, representing the creation of a new card suite. A full deck is 52 cards, so within this loop is also the condition where if the this.deck total array length equals 52, it will break the loop. Finally, the populated this.deck array is returned out of this method.*/
    createCards() {
        for(let i=1; i<=13; i++){
            
            this.deck.push(new Card(i));
            if(i==13){
                i=0;
            }
            if(this.deck.length == 52){
                break;
            }
        }
     
        return(this.deck);
    }

/*In the dealCards method, a while loop is created where if the this.deck length array is greater than 0 (which represents the cards being completely distributed) the loop will run. The loop creates the variable "random" and assigns it the value of a random element inside of the this.deck array (representing dealing one card out of a deck), then it pushes this random value into the player1Hand array (representing Player 1's card hand).  Finally, this random value pulled from the this.deck is removed (representing the card being in Player 1's hand, and not in the deck anymore). The same thing is done for Player 2 immediately after (representing the back-and-forth dealing out of the deck). */
    dealCards() {

        while(this.deck.length > 0){
            let random = Math.floor(Math.random() * this.deck.length)
            this.player1Hand.push(this.deck[random]);
            this.deck.splice(random,1);
        
            random = Math.floor(Math.random() * this.deck.length)
            this.player2Hand.push(this.deck[random]);
            this.deck.splice(random,1);

            //console.log(this.player1Hand.length);
            //console.log(this.player2Hand.length);
        }        
    }

/*In the playGame method, some variables are initiated representing the points for Player 1 & Player 2, and the rounds that are played. A while loop is used where if player1Hand (from the dealCards method above) is greater than 0 (0 represents when the player's hand is depleted of cards) it will run the loop. The loop uses randomPlay1 and sets it equal to a random index out of the this.player1Hand array. Then it does the same for Player 2. The if condition sets the index value as the card value in the player's hand, and if the player1Hand is greater than the value of player2Hand, Player 1 (player1Hand) wins one point by adding 1 to the player1Points variable. Using "else if", if the condition is the opposite, Player 2 gets the point instead.
To not reuse the cards, after each randomPlay is used, the value (card) is removed from the player1Hand & player2Hand using splice.*/
    playGame(){

        let player1Points = 0;
        let player2Points = 0;
        let randomPlay1 = 0
        let randomPlay2 = 0
        while(this.player1Hand.length > 0){
            randomPlay1 = Math.floor(Math.random() * this.player1Hand.length);  
            randomPlay2 = Math.floor(Math.random() * this.player2Hand.length);   

        if ((this.player1Hand[randomPlay1].value) > (this.player2Hand[randomPlay2].value)){
            player1Points = player1Points + 1;
         }
        else if ((this.player1Hand[randomPlay1].value) < (this.player2Hand[randomPlay2].value)){
            player2Points = player2Points + 1;   
        }    

        this.player1Hand.splice(randomPlay1,1);
        this.player2Hand.splice(randomPlay2,1);
    }

/*After the above while loop is completed, the final score is loggged using console.log and a string concatenated with the final variable value of player1Points & player2Points. An "if" statement is used to announce the winner where is player1Points is greater than player2Points, Player 1 is the winner and vice versa.  */

    console.log("PLAYER 1 Final Score: " + player1Points)
    console.log("PLAYER 2 Final Score: " + player2Points)

    if(player1Points > player2Points){
        console.log("PLAYER 1 IS THE WINNER!!");
    }
    else if(player1Points < player2Points){
     console.log("PLAYER 2 IS THE WINNER!!");
    }

    }
}

/* Below is where the game setup and play is actually called. I initiate the main class and call the methods creatCards, dealCards, and playGame.*/

//Play Game
let main = new Main();
main.createCards();
main.dealCards();
main.playGame();





