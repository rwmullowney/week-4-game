// Establish variables

// Fighters
var fighter1 = {
    HP: 110,
    AP: 0,
    CAP: 0,
}

var fighter2 = {
    HP: 120,
    AP: 0,
    CAP: 0,
}

var fighter3 = {
    HP: 130,
    AP: 0,
    CAP: 0,
}

var fighter4 = {
    HP: 140,
    AP: 0,
    CAP: 0,
}

// Player's character
var yourFighter = {}

function testFunction() {
    console.log("Your fighter is:")
    console.log(yourFighter)
}


// Fighter button
$("#button1").on("click", function () {
    yourFighter = fighter1;
    testFunction();
})
$("#button2").on("click",function () {
    yourFighter = fighter2;
    testFunction();
})
$("#button3").on("click",function () {
    yourFighter = fighter3;
    testFunction();
})
$("#button4").on("click",function () {
    yourFighter = fighter4;
    testFunction();
})