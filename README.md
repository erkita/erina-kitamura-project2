# Wordle Clone With Multiple Difficulty Levels

### Overview
* Frontend project
* Clone of NY Time's game, <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a> 
* Pages includes:
  * Home (includes all menus)
  * How To Play
  * Play Easy, Medium, or Hard level 
* Used React
* Deployed on Heroku

### Link
https://wordle-clone-erkita.herokuapp.com/

### Demo
Overview of all pages:<br />
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/82434097/169413035-0e0b7b1f-270d-4bb3-a42a-47922306e6fc.gif)

Win game, short and long word warning, highlight correct and incorrect word, start new game: <br />
![ezgif com-gif-maker](https://user-images.githubusercontent.com/82434097/169412684-87d9e6b9-ddac-4ca6-b52b-ad177ab50e75.gif)

Lose game, highlight letter in correct and incorrect position, show solution word after losing: <br />
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/82434097/169412840-734eae6e-ff77-4641-ba58-8f1a471970a5.gif)

Application in different screen sizes (laptop, mobile, tablet):<br />
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/82434097/169413196-729f3a97-490d-4cb5-92d2-4c145a69be9e.gif)

### Application Details
* Game to guess the word in multiple tries based on difficulty level:
  * Easy: 5 letter word, 7 tries
  * Medium: 6 letter word, 6 tries
  * Hard: 7 letter word, 5 tries
* Hints given in each tries on each letter and keyboard:
  * Green: guessed letter is in correct position of the solution word
  * Yellow: word contains the guessed letter but is in wrong position
  * Grey: word does not contain the guessed letter
* User enters letter using displayed keyboard which can input letters, delete letters, and enter word
* Gives warning for following situations:
  * Entered word is too short
  * Entered word is too long
* Includes button to replay or start another game
* Mobile friendly

### General Application Outline
<img width="637" alt="Screen Shot 2022-05-19 at 2 37 57 PM" src="https://user-images.githubusercontent.com/82434097/169408850-b034291b-cd21-4620-aa1a-df3ad4a469b3.png">
