////////////////////////////////////////////////////////////////////
//Below is the different toggling and hiding settings of elements

document.getElementById("instructions").style.display = "none";
document.getElementById("1").style.display = "none";
document.getElementById("2").style.display = "none";
document.getElementById("3").style.display = "none";
document.getElementById("4").style.display = "none";
document.getElementById("5").style.display = "none";
document.getElementById("TransitionDefeat").style.display = "none";
document.getElementById("Defeat").style.display = "none";
document.getElementById("TransitionVictory").style.display = "none";
document.getElementById("Victory").style.display = "none";
//hidden victory and defeat boxes and images

function toggleText() {
    var text = document.getElementById("instructions");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
//textblock for instructions


////////////////////////////////////////////////////////////////////
//Below are the variables we'll use for the game


var Champions = ["AATROX","AHRI","AKALI","ALISTAR","AMUMU","ANIVIA","ANNIE","APHELIOS","ASHE","AURELION SOL","AZIR","BARD","BLITZCRANK","BRAND","BRAUM","CAITLYN","CAMILLE","CASSIOPEIA","CHO GATH","CORKI","DARIUS","DIANA","DR MUNDO","DRAVEN","EKKO","ELISE","EVELYNN","EZREAL","FIDDLESTICKS","FIORA","FIZZ","GALIO","GANGPLANK","GAREN","GNAR","GRAGAS","GRAVES","HECARIM","HEIMERDINGER","ILLAOI","IRELIA","IVERN","JANNA","JARVAN IV","JAX","JAYCE","JHIN","JINX","KAI SA","KALISTA","KARMA","KARTHUS","KASSADIN","KATARINA","KAYLE","KAYN","KENNEN","KHA ZIX","KINDRED","KLED","KOG MAW","LEBLANC","LEE SIN","LEONA","LILLIA","LISSANDRA","LUCIAN","LULU","LUX","MALPHITE","MALZAHAR","MAOKAI","MASTER YI","MISS FORTUNE","MORDEKAISER","MORGANA","NAMI","NASUS","NAUTILUS","NEEKO","NIDALEE","NOCTURNE","NUNU AND WILLUMP","OLAF","ORIANNA","ORNN","PANTHEON","POPPY","PYKE","QIYANA","QUINN","RAKAN","RAMMUS","REK SAI","RELL","RENEKTON","RENGAR","RIVEN","RUMBLE","RYZE","SAMIRA","SEJUANI","SENNA","SERAPHINE","SETT","SHACO","SHEN","SHYVANA","SINGED","SION","SIVIR","SKARNER","SONA","SORAKA","SWAIN","SYLAS","SYNDRA","TAHM KENCH","TALIYAH","TALON","TARIC","TEEMO","THRESH","TRISTANA","TRUNDLE","TRYNDAMERE","TWISTED FATE","TWITCH","UDYR","URGOT","VARUS","VAYNE","VEIGAR","VEL KOZ","VI","VIKTOR","VLADIMIR","VOLIBEAR","WARWICK","WUKONG","XAYAH","XERATH","XIN ZHAO","YASUO","YONE","YORICK","YUUMI","ZAC","ZED","ZIGGS","ZILEAN","ZOE","ZYRA"];
//Array with possible words

var WordToGuess = Champions[Math.floor(Math.random()*Champions.length)];
//Random word from array = word to guess

document.getElementById("ChampionDefeat").innerHTML = WordToGuess;
//Display word to guess in defeat screen
document.getElementById("ChampionVictory").innerHTML = WordToGuess;
//Display word to guess in victory screen

var LettersToGuess = WordToGuess.split('');
//Word to guess split into array of letters




var CurrentLetters = [];
//Array of letters showing current right and unknown letters

var CurrentWord = "";
//Actual state of the word to guess (with space to isolate letters)

function ChangeCurrentWord() {
    CurrentWord = "";
    for (x=0;x<CurrentLetters.length;x++){
        CurrentWord = CurrentWord + CurrentLetters[x] + " ";
    }
}
//Function to update Current Word as Current Letters change




var Lives = 6; 
//Number of mistakes the player can still make (initially 6)

var WrongLetters = [];
//Letters previously guessed but incorrect

var Wrong = "";
//Wrong letters, for displaying purposes

function ChangeWrong(){
    Wrong = "";
    for (x=0; x<WrongLetters.length;x++){
        Wrong = Wrong + WrongLetters[x] + " ";
    }
}



////////////////////////////////////////////////////////////////////
//Below is the code that makes the game work


//STARTING POINT!!:
for (x=0; x<LettersToGuess.length; x++){
    if (LettersToGuess[x] == " "){
        CurrentLetters.push (" ");
    }
    else {
        CurrentLetters.push ("_");
    }
};
//Create starting point: current letters are unknown, all replaced by underscores.

ChangeCurrentWord();
//Update Current state of guess to starting point

document.getElementById("RightLettersText").innerHTML = CurrentWord;
//Display number of letters to guess
console.log(WordToGuess);

//CLICK FUNCTION WHEN GUESSING (ACTUAL GAMEPLAY)
document.getElementById("try").addEventListener("click", () =>{
//create click function to check letter currently being guessed  

//EXCEPTIONS
    if (document.getElementById("InputText").value == ""){
        alert ("Give me a letter!");
    }
    //If no letter put in, alert.
    
    if ((WrongLetters.includes(document.getElementById("InputText").value.toUpperCase())) || (CurrentLetters.includes(document.getElementById("InputText").value.toUpperCase()))){
        alert ("You already said that!");
    }
    //If already used letter (correct or wrong), alert.

//CORRECT GUESS
    else if (WordToGuess.includes(document.getElementById("InputText").value.toUpperCase())){
    //If letter not used yet, when the word has the letter the player guessed, do this

        for (i = 0; i < LettersToGuess.length; i++){ 

            if (LettersToGuess[i] === document.getElementById("InputText").value.toUpperCase()) {  
                CurrentLetters[i] = document.getElementById("InputText").value.toUpperCase();
                ChangeCurrentWord();
                
            }
            // add newly guessed letter to current state of guessed word
        };
        
        document.getElementById("RightLettersText").innerHTML = CurrentWord;
        // update state of word to guess
          
    }

//WRONG GUESS
    else {
    // if letter not used, and the word doesn't have the guessed letter, do this

        WrongLetters.push(document.getElementById("InputText").value.toUpperCase());
        // add guessed letter to list of mistakes
        ChangeWrong();
        //update list of mistakes

        Lives--;
        if (Lives < 1) {
            document.getElementById("Lives").innerHTML ="You can only make " + Lives + " more mistakes!";
        }
        else {
            document.getElementById("Lives").innerHTML ="You can only make " + Lives + " more mistake!";
        }
        //update life counter

        document.getElementById("WrongLettersText").innerHTML = Wrong;
        // update list of mistakes shown on screen

        if (WrongLetters.length == 1){
            document.getElementById("0").style.display ="none";
            document.getElementById("1").style.display = "block";
        }
        if (WrongLetters.length == 2){
            document.getElementById("1").style.display = "none";
            document.getElementById("2").style.display = "block";
        }
        if (WrongLetters.length == 3){
            document.getElementById("2").style.display = "none";
            document.getElementById("3").style.display = "block";
        }
        if (WrongLetters.length == 4){
            document.getElementById("3").style.display = "none";
            document.getElementById("4").style.display = "block";
        }
        if (WrongLetters.length == 5){
            document.getElementById("4").style.display = "none";
            document.getElementById("5").style.display = "block";
        }
        if (WrongLetters.length == 6){
            document.getElementById("game").style.display ="none"
            document.getElementById("TransitionDefeat").style.display = "block";
        }
        //display an image according to number of wrong tries and transition screen when lost
    };

    document.getElementById("ToDefeat").addEventListener("click",() => {
        document.getElementById("TransitionDefeat").style.display = "none";
        document.getElementById("Defeat").style.display = "block";
    });
    //display lost screen with button to quit game (close tab) or try again (refresh)

    for (i = 0; i < LettersToGuess.length; i++) {
		if (CurrentLetters[i] !== LettersToGuess[i]) {
            return false;
        }
        if (i==LettersToGuess.length-1){
            document.getElementById("game").style.display ="none"
            document.getElementById("TransitionVictory").style.display = "block";
        }
	}  
    //Check if won (if any letter doesn't match, loop ends. when reaching last letter , win transition screen.)

    document.getElementById("ToVictory").addEventListener("click",() => {
        document.getElementById("TransitionVictory").style.display = "none";
        document.getElementById("Victory").style.display = "block";
    });
    //display win screen with button to quit game (close tab) or try again (refresh)
});