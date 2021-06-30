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
If no match, one life must be substracted. (counter of some sort, with hangman image changing)
If lives reach zero, player notified, word displayed, offer to play again. Same if player won.

Instructions were added for clarity. They can be toggled on and off using a button.
All guessing attempts go through filling in a text box, then clicking the button "Try" below.
All images, as well as victory and defeat screens are initially hidden, and displayed only when the situation requires it.

## Artistic choices
The game is based on the game League of Legends, for the colors and images used, but also the "story".
In the community of the game, the character Teemo is quite despised, and jokingly dubbed the Devil.
In this version of Hangman, the hangman character has been replaced by Teemo, who will appear gradually, every time the player guesses a letter wrong.
Flavor texts have been added in the instructions, victory and defeat screens to stay in the lore.

## Technologies
The website was designed using HTML, CSS (SASS) and Javascript. The code editor used was VS CODE.
The images used were the following:
- An original artwork from user NestKeeper on the website DeviantArt, modified using Paint 3D to create the Hangman and the first victory screen.
- A lightbult image from user Ra20Ga on the website similarpng.com, for the first victory screen.
- An original artwork from user Instagram on the website Pikpng.com, for the second victory screen.
- A screenshot of the Little Devil Teemo skin from the game League of Legends itself.
All the names to guess are champions from the game League of Legends, all rights reserved to Riot Games.

## Author 
Website by Frank WANG.
All rights of the images and names used regarding the game League of Legends are owned by Riot Games.
