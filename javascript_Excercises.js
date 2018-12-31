
// Madlib
function madLib(name, subject) {
    var output = name + "'s favorite subject in school is " + subject;
    return output;    
}

console.log(madLib("Anushka", "art"))

// Tip Calculator

function tip(bill, service) {
    if (service == "good") {
        return goodService(bill);
    }
    else if (service == "fair") {
        return fairService(bill);
    }
    else if (service == "bad") {
        return badService(bill);
    }
}

function goodService(bill) {
    var good = bill * .2;
    return good;
}

function fairService(bill) {
    var fair = bill * .15;
    return fair;
}

function badService(bill) {
    var bad = bill * .1;
    return bad;
}

console.log(tip(100, "good"))

// Tip Calculator 2

function totalBill(bill, service) {
    if (service == "good") {
        good = goodService(bill);
        total = bill + good;
        return total;
    }
    else if (service == "fari") {
        fair = fairService(bill);
        total = bill + fair;
        return total;
    }
    else if (service == "bad") {
        bad = badService(bill);
        total = bill + bad;
        return total;
    }
}

console.log(totalBill(100, "good"))

// Print Numbers

function printNumbers(start, end) {
    while (start < end) {
        console.log((start));
        start++;
    }
}

printNumbers(1, 11)

// Print a square

function printSquare(number) {
    for (var i = 0; i < number; i++) {
        console.log("*".repeat(number));
    }    
}
printSquare(5)

// Print a box

function printBox(w,h) {
    for (var i = 0; i < 1; i++) {
        console.log("*".repeat(w));
        for (var j = 0; j < (h-2); j++) {
            console.log("*" + " ".repeat(w-2) +  "*");
            }
        for (var k = 0; k < 1; k++) {
            console.log("*".repeat(w));
        }
        
    }
}

printBox(6,4)

// Print a Banner

function printBanner(sentence) {
    var sentenceArray = sentence.split;
    for (var i=sentence.length; i==sentence.length; i++) {
        console.log("*".repeat(sentence.length + 4));
        console.log("* " + sentence + " *");
        console.log("*".repeat(sentence.length + 4));
    }
}

printBanner("Welcome to DigitalCrafts")

// leetspeak

function leetSpeak(word) {
    var leetWord =[];
    var word = word.toUpperCase();
    const alphabet = {
        "A": "4",
        "E": "3",
        "G": "6",
        "L": "1",
        "O": "0",
        "S": "5",
        "T": "7",
    }
    
    for (var i=0; i<word.length; i++) {
        if (word[i] == "L") {
            leetWord.push(alphabet["L"]);
        }
        else if (word[i] == "E") {
            leetWord.push(alphabet["E"]);
        }
        else if (word[i] == "T") {
            leetWord.push(alphabet["T"]);
        }
    }
    console.log("The leetspeak converstion of " + word.toLowerCase() + " is " + leetWord.join(''));
}

leetSpeak("leet")

// long-long vowels

function longLongVowels(word) {
    word = word.toUpperCase()
    var vowels = {
        "A": "AAAAA", 
        "E": "EEEEE",
        "I": "IIIII",
        "O": "OOOOO",
        "U": "UUUUU"
    }

    for (var i=0; i<word.length; i++) {
        for (var j=0; j<vowels.length; j++) {
            if (word[i] == vowels[i]) {
                console.log(vowels[i])
            }
        }
    }
}

longLongVowels("Good")