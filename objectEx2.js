// // var mom = {
// //     firstName: 'Alice',
// //     lastName: 'Wong',
// //     eyeColor: 'brown',
// //     hairColor: 'black'
// // };

// // var daughter = {
// //     firstName: 'Ilene',
// //     hairColor: 'brown'
// // };


// //1 write code to make daughter inherit properties from mom
// function Mom(){
//     this.firstName = 'Alice';
//     this.lastName = 'Wong';
//     this.eyeColor = 'brown';
//     this.hairColor = 'black';
//     this.showInfo = function(){
//         return 'Hi my name is ' + this.firstName + ' ' + this.lastName + '. I have ' + this.hairColor + ' hair and ' + this.eyeColor + ' eyes.'
//     };
// }


// function Daughter(firstName, hairColor){
//     Mom.call(this);

//     this.firstName = firstName;
//     this.hairColor = hairColor;
// }


// var mom = new Mom();
// console.log(mom);
// var daughter = new Daughter('Ilene', 'brown');
// console.log(daughter);

// //2 add a method called showInfo to mom. calling this method willl print out all four properties.
// console.log(mom.showInfo());
// console.log(daughter.showInfo());

// Person

class Person{
    constructor (name){
        this.name = name;
        this.friends = [];
    };

    addFriend(friend){
        this.friends.push(friend);
    };

    createGreeting(other){
        return 'Yo ' + other.name + '! from ' + this.name + '.';
    };
    greet(other){
        console.log(this.createGreeting(other));
    };

    lazyGreet(other){    
        
        return setTimeout(() => {
            this.greet(other);
        }, 2000);
        
    };

    createGreetingForFriends(){
        var self = this;
        
        var greetLst = this.friends.map((friendName) => self.createGreeting(friendName));
        return greetLst;
    };
};

var a1 = new Person("John");
var a2 = new Person('Allen');
var a3 = new Person('Alfie');
a3.addFriend(a1);
a3.addFriend(a2);
console.log(a3.createGreetingForFriends());







