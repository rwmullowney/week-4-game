(function () {

    // Establish variables

    // Fighters
    var fighter1 = {
        name: 'Bokoblin',
        HP: 110,
        AP: 0,
        APIncrement: 5,
        CAP: 5,
        button: '#button1',
        sortId: 'button1'
    }

    var fighter2 = {
        name: 'Zelda',
        HP: 120,
        AP: 0,
        APIncrement: 8,
        CAP: 10,
        button: '#button2',
        sortId: 'button2'
    }

    var fighter3 = {
        name: 'Link',
        HP: 130,
        AP: 0,
        APIncrement: 10,
        CAP: 15,
        button: '#button3',
        sortId: 'button3'
    }

    var fighter4 = {
        name: 'Ganon',
        HP: 140,
        AP: 0,
        APIncrement: 12,
        CAP: 20,
        button: '#button4',
        sortId: 'button4'
    }

    // List of initial fighters - will be sorted through to determine who to move to enemies
    var fighters = [fighter1, fighter2, fighter3, fighter4]

    // Player's character
    var yourFighter = {}

    // Defender
    var defender = {}

    // Determines if a defender has been chosen or not
    var fighterChosen = false
    var defenderChosen = false


    // Sorts the fighters after the player chooses their character
    function fighterSort() {
        // Removes the player's choice from the 'fighters' array
        fighters.splice($.inArray(yourFighter, fighters), 1);
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

    // Plays out the fight of the game
    function attack() {
        // Check if player fighter and defender have been chosen
        if (defenderChosen === true) {
            // First reduce enemy HP and increase player AP
            yourFighter.AP += yourFighter.APIncrement;
            defender.HP -= yourFighter.AP;

            // Check if enemy is defeated
            if (defender.HP <= 0) {
                // Remove the defeated enemy from the 'defeated' section and the 'fighters' array
                $("#defender").empty();
                fighters.splice($.inArray(defender, fighters), 1);
                
                // Check to see if all fighters have been defeated
                if (fighters.length > 0) {
                    defenderChosen = false;
                    $("#combatlog").html("You have defeated " + defender.name + "! Choose another enemy to fight");
                } else {
                    $("#combatlog").html("You win!");
                }
            }

            // Defender hits back
            else if (defender.HP > 1) {
                yourFighter.HP -= defender.CAP;
                $("#combatlog").html("You attack " + defender.name + " for " + yourFighter.AP + " damage!<br>" + defender.name + " attacks you for " + defender.CAP + " damage!");
            }

            // Check if player defeated? Not sure of order yet

            // Check that neither player or defender are defeated
            console.log("Your HP: " + yourFighter.HP)
            console.log("Your attack power: " + yourFighter.AP)
            console.log("Enemy HP: " + defender.HP)
            // $("#combatlog").html("you fought a nerd")
        }

        // Display message if fighter/defender haven't been chosen
        else {
            if (fighterChosen === false) {
                $("#combatlog").html("You must choose a fighter first")
            } else if (defenderChosen === false) {
                $("#combatlog").html("You must choose an opponent to fight")
            }
        }
    }



    // Buttons
    // This code is trash and you should totally fix it later

    // Functionality depending on button id
    // enemy-button ids sort the chosen enemy into the Defender element
    // Fighter 1
    $(document).on('click', "#button1", function () {
        yourFighter = fighter1;
        fighterChosen = true;
        fighterSort();
    }).on('click', "#enemy-button1", function () {
        if (defenderChosen === false) {
            defender = fighter1;
            $("#defender").append($("#enemy-button1"));
            defenderChosen = true;
        }

        // Fighter 2
    }).on('click', "#button2", function () {
        yourFighter = fighter2;
        fighterChosen = true;
        fighterSort();
    }).on('click', "#enemy-button2", function () {
        if (defenderChosen === false) {
            defender = fighter2;
            $("#defender").append($("#enemy-button2"));
            defenderChosen = true;
        }

        // Fighter 3
    }).on('click', "#button3", function () {
        yourFighter = fighter3;
        fighterChosen = true;
        fighterSort();
    }).on('click', "#enemy-button3", function () {
        if (defenderChosen === false) {
            defender = fighter3;
            $("#defender").append($("#enemy-button3"));
            defenderChosen = true;
        }

        // Fighter 4
    }).on('click', "#button4", function () {
        yourFighter = fighter4;
        fighterChosen = true;
        fighterSort();
    }).on('click', "#enemy-button4", function () {
        if (defenderChosen === false) {
            defender = fighter4;
            $("#defender").append($("#enemy-button4"));
            defenderChosen = true;
        }


        // Attack button
    }).on('click', "#attack", attack);



})();