# Hangman

## Introduction
This project is a hangman game, hosted on a single page website, using Javascript, HTML and SASS / CSS.

## Game
The hangman game is a classic game of guessing a word by guessing each letter within a limited amount of tries.

A word is chosen, to be guessed (here, it is the name of a character in the game League of Legends).
The player proposes a letter.
If the word contains it, every iteration of it is revealed.
If not, the player loses a "life", which is represented by a part of the hangman being drawn. The player has a total of 6 "lives".
Once the player reaches zero lives, he loses. If he guesses the word before, he wins.

## Conception of the website
In order to make the game work, here's what we have to do.
A word needs to be generated.
Player must be able to guess letters.
Match between letters guessed and letters of word must be checked (=> word decomposed into array of letters, empty array for guess).
If match, all iterations of letter must be displayed (in guess array).
If no match, one life must be substracted. (counter of some sort)
If lives reach zero, player notified, word displayed, offer to play again.


## Author 
Website by Frank WANG.
All rights of the images and names used regarding the game League of Legends are owned by Riot Games.

let Champions = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","Aurelion Sol","Azir","Bard","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","Cho Gath","Corki","Darius","Diana","Dr Mundo","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx","Kai Sa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Kha Zix","Kindred","Kled","Kog Maw","LeBlanc","Lee Sin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","Master Yi","Miss Fortune","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu and Willump","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","Rek Sai","Rell","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Vel Koz","Vi","Viktor","Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","Xin Zhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"];
//Array with possible words
