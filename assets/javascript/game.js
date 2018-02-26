// Establish variables

// Fighters
var fighter1 = {
    name: 'fighter1',
    HP: 110,
    AP: 5,
    CAP: 5,
    button : '#button1',
    sortId : 'button1'
}

var fighter2 = {
    name: 'fighter2',
    HP: 120,
    AP: 8,
    CAP: 10,
    button : '#button2',
    sortId : 'button2'
}

var fighter3 = {
    name: 'fighter3',
    HP: 130,
    AP: 10,
    CAP: 15,
    button : '#button3',
    sortId : 'button3'
}

var fighter4 = {
    name: 'fighter4',
    HP: 140,
    AP: 12,
    CAP: 20,
    button : '#button4',
    sortId : 'button4'
}

// List of initial fighters - will be sorted through to determine who to move to enemies
var fighters = [fighter1, fighter2, fighter3, fighter4]

// Player's character
var yourFighter = {}

// Defender
var defender = {}

// Determines if a defender has been chosen or not
var defenderChosen = false


function fighterSort(){
    // Removes the player's choice from the 'fighters' array
    fighters.splice($.inArray(yourFighter, fighters),1);
    // Adds the player's choice to the 'yourCharacter' div and changes its id (not sure its id needs to change though?)
    $("#yourCharacter").append($(yourFighter.button))
    $(yourFighter.button).attr('id', 'player-' + yourFighter.sortId)
    // Sorts through the remaining fighters in the 'fighters' array and appends them to the 'enemies' element
    for (var i = 0; i < fighters.length; i++) {
        $("#enemies").append($(fighters[i].button))
        // Changes fighter button id to 'enemy-' + their previous id, so they won't follow the previous button rules for "#buttonx"
        $(fighters[i].button).attr('id', 'enemy-' + fighters[i].sortId)
    }
}

function selectDefender(){

}



// Buttons
// This code is trash and you should totally fix it later

// Functionality depending on button id
// enemy-button ids sort the chosen enemy into the Defender element
    // Fighter 1
$(document).on('click', "#button1", function() {
    yourFighter = fighter1;
    fighterSort();
}).on('click', "#enemy-button1", function() {
    if (defenderChosen === false) {
    defender = fighter1;
    $("#defender").append($("#enemy-button1"));
    defenderChosen = true;
    }

    // Fighter 2
}).on('click', "#button2", function() {
    yourFighter = fighter2;
    fighterSort();
}).on('click', "#enemy-button2", function() {
    if (defenderChosen === false) {
    defender = fighter2;
    $("#defender").append($("#enemy-button2"));
    defenderChosen = true;
    }

    // Fighter 3
}).on('click', "#button3", function() {
    yourFighter = fighter3;
    fighterSort();
}).on('click', "#enemy-button3", function() {
    if (defenderChosen === false) {
    defender = fighter3;
    $("#defender").append($("#enemy-button3"));
    defenderChosen = true;
    }

    // Fighter 4
}).on('click', "#button4", function() {
    yourFighter = fighter4;
    fighterSort();
}).on('click', "#enemy-button4", function() {
    if (defenderChosen === false) {
    defender = fighter4;
    $("#defender").append($("#enemy-button4"));
    defenderChosen = true;
    }
});