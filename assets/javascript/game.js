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

function fightersSwap(){
    // Removes the player's choice from the 'fighters' array
    fighters.splice($.inArray(yourFighter, fighters),1);
    // Adds the player's choice to the 'yourCharacter' div and changes its id (not sure its id needs to change though?)
    $("#yourCharacter").append($(yourFighter.button))
    $(yourFighter.button).attr('id', 'player-' + yourFighter.idButton)
    // Sorts through the remaining fighters in the 'fighters' array and appends them to the 'enemies' element
    for (var i = 0; i < fighters.length; i++) {
        $("#enemies").append($(fighters[i].button))
        // Changes fighter button id to 'enemy-' + their previous id, so they won't follow the previous button rules for "#buttonx"
        $(fighters[i].button).attr('id', 'enemy-' + fighters[i].idButton)
    }
}


// Fighter button
$("#button1").on("click", function () {
    yourFighter = fighter1;
    fightersSwap();
})
$("#button2").on("click",function () {
    yourFighter = fighter2;
    fightersSwap();
})
$("#button3").on("click",function () {
    yourFighter = fighter3;
    fightersSwap();
})
$("#button4").on("click",function () {
    yourFighter = fighter4;
    fightersSwap();
})