// Establish variables

// Fighters
var fighter1 = {
    name: 'fighter1',
    HP: 110,
    AP: 5,
    CAP: 5,
    button : '#button1',
    idButton : 'button1'
}

var fighter2 = {
    name: 'fighter2',
    HP: 120,
    AP: 8,
    CAP: 10,
    button : '#button2',
    idButton : 'button2'
}

var fighter3 = {
    name: 'fighter3',
    HP: 130,
    AP: 10,
    CAP: 15,
    button : '#button3',
    idButton : 'button3'
}

var fighter4 = {
    name: 'fighter4',
    HP: 140,
    AP: 12,
    CAP: 20,
    button : '#button4',
    idButton : 'button4'
}

// List of available fighters - also determines who to move to enemy fighters
var fighters = [fighter1, fighter2, fighter3, fighter4]
var enemies = []

// Identify button pressed
var button = ''

// Player's character
var yourFighter = {}

function testFunction() {
    console.log(fighters);
    fighters.splice($.inArray(yourFighter, fighters),1);
    console.log("Your fighter is:");
    console.log(yourFighter);
    console.log(fighters);
}

function fightersSwap(){
    for (var i = 0; i < fighters.length; i++) {
        $("#enemies").append($(fighters[i].button))
    }
}


// Fighter button
$("#button1").on("click", function () {
    yourFighter = fighter1;
    testFunction();
    fightersSwap();
})
$("#button2").on("click",function () {
    yourFighter = fighter2;
    testFunction();
    fightersSwap();
})
$("#button3").on("click",function () {
    yourFighter = fighter3;
    testFunction();
    fightersSwap();
})
$("#button4").on("click",function () {
    yourFighter = fighter4;
    testFunction();
    fightersSwap();
})