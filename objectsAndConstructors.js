// function Person(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
// }

// Person.prototype.greet = function(other){
//     console.log('Hello ' + other.name + ', I am ' + this.name + '!');
// }

// // 1 instantiate an instance object of Person Sonny
// var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');

// // 2 instantiate an instance object of Person Jordan
// var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// // 3 sonny greet jordan
// sonny.greet(jordan);

// // 4 jordan greet sonny
// jordan.greet(sonny);

// // 5 print contact info (email and phone) of sonny
// Person.prototype.contactInfo = function(){
//     console.log(this.name + "'s email: " + this.email + " Phone: " + this.phone)
// }

// sonny.contactInfo();

// // 6 print contact info (email and phone) of jordan
// jordan.contactInfo();



// Card Constructor

function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

// var myCard = new Card(5, 'diamonds');



// get image url

// Card.prototype.getImageUrl = function(){
//     return 'images/' + this.point + '_of_' + this.suit + '.png'
// }

// console.log(myCard.getImageUrl());



// hand constructor

function Hand() {

    this.cardsInHand = [];
    this.addCard = function(card){
        this.cardsInHand.push(card);
    }

}



// Hand.prototype.addCard = function (card) {

//     this.cardsInHand.push(card);

//     // console.log("current cards",this.cardInHand);

// }


var myHand = Hand();
card1 = new Card(5,'diamonds');
console.log(myHand);
// myHand.addCard(card1)

