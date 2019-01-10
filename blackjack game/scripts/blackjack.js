//creates deck of 52 cards and calculates points for blackjack game
function createDeck() {
    var deck = [];
    var suits = ['H', 'D', 'C', 'S'];
    var name1 = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

    for (var s = 0; s < suits.length; s++) {
        for (var n = 0; n < name1.length; n++) {
            var card = {};
            card.points = points[n];
            card.name1 = name1[n];
            card.cardImgUrl = "images/" + name1[n] + suits[s] + ".jpg";
            card.suits = suits[s];
            deck.push(card);

        }
    }
    return deck;
}


//empty arrays for pop() cards
var dealerHand = [];
var playerHand = [];


//create deck
deck = createDeck();

// deal 2 cards on click deal button
//pop and push cards 2 cards to dealer and player
function dealCards () {
    
    var x = 0;
    while (x < 2) {
        x += 1;

        shuffleArray(deck);
        
        //pop and push cards to dealerHand
        var cardsDealer = deck.pop();
        dealerHand.push(cardsDealer);

        //pop and push cards to player hand
        var cardsPlayer = deck.pop();
        playerHand.push(cardsPlayer);

        //create img tag and display image on dealer hand when deal button clicked
        var dealer = document.getElementById('dealerCards');
        dealer_cards = document.createElement('img');
        dealer_cards.setAttribute('src', getCardImageUrl(cardsDealer));
        dealer.appendChild(dealer_cards);

        //total points for dealer
        var displayPoints = document.getElementById('dealer-points');
        displayPoints.innerHTML = totalPoints(dealerHand);

        //create img tag and display image on player hand when deal button clicked
        var player = document.getElementById('playerCards');
        player_cards = document.createElement('img');
        player_cards.setAttribute('src', getCardImageUrl(cardsPlayer));
        player.appendChild(player_cards);
        
        //total points for player
        var displayPoints = document.getElementById('player-points');
        displayPoints.innerHTML = totalPoints(playerHand);
        
    }
    if (x == 2){
        var disable = document.getElementById('deal-button');
        disable.setAttribute('onclick', 'true')
    }

    if (totalPoints(playerHand) == 21 || (totalPoints(dealerHand) == 21)){
        winner();
    }
}

// 1 card for player on click hit button
function hitPlayer() {

    //pop and push cards to player hand
    var playerHit = deck.pop();
    playerHand.push(playerHit);

    //create image and display when hit button clicked
    var player = document.getElementById('playerCards');
    player_card = document.createElement('img');
    player_card.setAttribute('src', getCardImageUrl(playerHit));
    player.appendChild(player_card);

    //total points for player
    var displayPoints = document.getElementById('player-points');
    displayPoints.innerHTML = totalPoints(playerHand);

    bust()
}

// get img url 
function getCardImageUrl(card){

    return card.cardImgUrl;   
}


// calculate points for player and dealerand return total point
function totalPoints(arr) {
    var point = 0;
    for (i = 0; i < arr.length; i++) {
        point += arr[i].points
        
    }
    
    return point;
}


//shuffle deck
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//Busted over 21 points
function bust(){
    if (totalPoints(playerHand) > 21){
        var messages = document.getElementById('messages');
        messages.setAttribute('class', 'text-center h1');
        messages.innerHTML = 'You Busted';
    }
    else if (totalPoints(dealerHand) > 21){
        var messages = document.getElementById('messages');
        messages.setAttribute('class', 'text-center h1');
        messages.innerHTML = 'Dealer Busted';
    }
    
}


//deal cards to dealer on click stand button
function playerStand() {
    while (totalPoints(dealerHand)  < 17) {
        var dealerHit = deck.pop();
        dealerHand.push(dealerHit);

        //create image and display when hit button clicked
        var dealer = document.getElementById('dealerCards');
        var dealer_card = document.createElement('img');
        dealer_card.setAttribute('src', getCardImageUrl(dealerHit));
        dealer.appendChild(dealer_card);

        //total points for dealer
        var displayPoints = document.getElementById('dealer-points');
        displayPoints.innerHTML = totalPoints(dealerHand);

        
    }
    
    winner();
    bust();

}

//determine a winner
function winner(){
    if (totalPoints(dealerHand) > totalPoints(playerHand) || (totalPoints(dealerHand)) == 21){
        var displayWinner = document.getElementById('messages');
        displayWinner.setAttribute('class', 'text-center h1')
        displayWinner.textContent = 'Dealer Wins';
        
    }
    else if (totalPoints(dealerHand) < totalPoints(playerHand) || (totalPoints(playerHand) == 21)){
        var displayWinner = document.getElementById('messages');
        displayWinner.setAttribute('class', 'text-center h1')
        displayWinner.textContent = 'You Win';
        
    }

    else if (totalPoints(dealerHand) == totalPoints(playerHand)){
        var displayWinner = document.getElementById('messages');
        displayWinner.setAttribute('class', 'text-center h1')
        displayWinner.textContent = 'Tie';
    }

    
}   




//restart game
function restart(){

    var playAgain_button = document.getElementById('playAgain-button');

    location.reload();
}



