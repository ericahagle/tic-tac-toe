# tic-tac-toe
Turing Mod1 Final Solo Project

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

What we have here is a simple Tic Tac Toe game:
- Each player in the game is controlled manually by the user
- The top banner displays which player’s turn it is
- Each player can only place their token in an empty square
  - If a player attempts to place their token on a square that’s already occupied, it will not work
  - It remains that player's turn
- Once a player places their token, it becomes the other player’s turn
  - The banner updates to communicate this
- If a player wins (by connecting 3 horizontally, vertically, or diagonally)
  - The top banner changes to declare the winner
  - The declared winner's total wins updates
- If a draw occurs (all squares are filled, but no win was detected)
  - The top banner changes to declare a draw
  - Neither player’s win count increases nor decreases
- If either a win or draw occurs
  - The game restarts automatically after 3 seconds
  - The player who didn’t begin the previous match now is the first player to go in the new match

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

To clone the repo and run it locally on your own machine: </br>
1. Navigate to the repo in your browser: https://github.com/ericahagle/tic-tac-toe
2. Clone the repo to the desired location on your machine
3. `cd` into the new `tic-tac-toe` directory
4. Type `open index.html` in your terminal and hit enter to launch the app in your default browser
5. Have fun!

### Preview of App:
[//]: <> (Provide gifs or screenshots of your application - choose the "coolest" piece of functionality to show off.)

https://github.com/ericahagle/tic-tac-toe/assets/133910120/3f4dc984-3810-4c0a-a100-cffd368c45ca


### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

**Kickoff Date:** Tuesday, September 18, 2023, 11am MT </br>
**Due Date:** Tuesday, September 26, 2023, 6pm MT

As of Tuesday, September 26, 2023, and the end of this project, I will be in the middle of the sixth (and final) week of FE Mod 1 at Turing School of Software & Design.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

[Erica Hagle](https://github.com/ericahagle)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with? Add bullets from spec.)

- Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge


### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

**Wins:**
- I got it working and looking halfway decent! Honestly, that was a big win to me. It's nothing too fancy, but I think it looks pretty good and functions as expected.
- I was able to implement some refactoring on my own, and then a little more after discussing with Nik what could possibly still be updated. I may not have gotten it perfect, but I was able to get it at least a little cleaner, DRYer, and more pure than it was!

**Challenges:**
- Honestly? Refactoring. Sheesh. That's probably the hardest part for me. I think it will get easier with time and practice, but right now, it's hard to move past the way I thought of something the first time.
- I struggled a bit with splitting the data model updates and DOM updates. This is another area where I think I could refactor this in the future to be a better app. But right now, I just can't seem to find a better solution than what I already have. I think, if I have time, I might try to redo this during intermission and see if I can do better the second time.

### Additional Notes:
- A [GitHub Project](https://github.com/users/ericahagle/projects/3) was created to manage the flow of this project.
- As a bonus, I've added a button at the bottom of the screen that allows a user to switch between Tic-Tac-Toe (a yellow/red color scheme with ❌ and ⭕️ tokens) and Tic-Tac-Rainbow (a rainbow color scheme with 🦄 and 🌈 tokens).
  - The page title is also updated to reflect the change
  - Users cannot switch views during a match; once a token is placed, the button is disabled until the board resets
  - The function being used to accomplish this is pretty meaty. It could almost certainly be refactored, but for now, I'm just happy that it works!
