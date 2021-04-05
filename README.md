# MS2 - Interactive Front End Milestone Project "RPS, Rock Paper Scissors"
![Image](/asset/docs/ms2RPS-amiresponsive.jpg)

### View the live project [here.](https://ajba1973.github.io/ms2-RPS/index.html)

---

## [**Table of Contents**](#table-of-contents)

[**1. UX**](#1-ux)
- [1.1 Overview](#11-overview)
- [1.2 Project Goals](#12-project-goals)
- [1.3 User Stories](#13-user-stories)
- [1.4 Design Process](#14-design-process)
    * [Colour Scheme](#colour-scheme)
    * [Images](#images)
    * [Typography](#typography)
    * [Wireframes](#wireframes)


[**2. Features**](#2-features)
- [2.1 Existing Features](#21-existing-features)
- [2.2 Features Left to Implement](#22-future-features)

[**3. Technologies Used**](#3-technologies-used)
- [3.1 Languages](#31-languages)
- [3.2 Libraries](#32-libraries)
- [3.3 Version Control](#33-version-control)
- [3.4 Tools and Other Resources](#33-tools-and-other-resources)
- [3.4 Code Resources](#34-code-resources)

[**4. Testing**](#4-testing)

[**5. Bugs and Solutions**](#5-bugs-and-solutions)
- [5.1 Resolved Bugs](#51-resolved-bugs)
- [5.2 Existing Bugs](#52-existing-bugs)

[**6. Deployment**](#6-deployment)
- [6.1 Deploy to Github Pages](#61-deploy-to-github-pages)
- [6.2 Clone or Downloading](#62-clone-or-downloading)
- [6.3 To Fork the Project](#63-to-fork-the-project)

[**7. Credits**](#7-credits)
- [7.1 Content](#71-content)
- [7.2 Media](#72-media)
- [7.3 Code](#73-code)
- [7.4 Acknowledgements](#74-acknowledgements)

---

## 1. UX

### 1.1 Overview

This project has been commissioned by my young son. We are always playing "Rock, Paper, Scissors" from this fact I throw myself this challenge. 
Fulfilling the following requirements that it was intuitive, simple, fun and could play on the mobile devices. Especially it had to meet this last specification.

### 1.2 Project Goals

Following my son's specifications, I created a rock-paper-scissors game for my second milestone project. When creating a fun and user-friendly game, I wanted to create a challenging but fun exercise; The big thrust of this project is to exercise as much Javascript learning practice as possible.

### 1.3 User Stories

As a site user:
- A application to play on a mobile, tablet devices instead of laptop or desktop computer.
- I want a site that is easy to navigate and play a game that is fun and interactive.
- To be able to change game options, such as customizing it (Player's name, gender, background color).
- Very intuitive and very easy to use. ( For little kids).


As a site developer, I would like the site to accomplish:
- As part a challange I build the application without use of libraries such as Bootstrap or Font Awesome.
- Use elements to attract attention such as icons and sounds.
- Incorporate animations to make the game more fun.
- Play against the computer and have your movement reflected.
- Implement a button to restart a new game when it has finished.

### 1.4 Design Process

#### Colour Scheme

- For the colors I have decided to use four of them (black, blue, red and purple). For each of them I have used linear-gradient to create different backgrounds that enhance the game environment, in addition to applying other effects such as background-blend-mode, back-ground repeat, or background-color.

####   Images

- For this application I have not used images, but icons to create the different elements of the game such as buttons, markers, seeking attention as well as the fact that it is fun.

**Icons**

![image](/asset/docs/ms2RPS-icons.jpg)

####   Typography

- I used Googlefonts to browse for suitable fonts to implement into the project and decided on **"Grandstander"** for all website. The creators of this font were inspired by the fonts used in children's books.While working on Grandstander we could see the "fun" come out in each glyph.

####   Wireframes

The RPS (Rock Paper Scissors) game simply has two sections: a welcome page with an form to fill with the Player's name, Player's gender (Boy / Girl) and the colors to change the game area.
And the game area that includes a scoreboard, computer moves and navigation buttons, results banner, player's buttons, a new game button that appears as soon as the game ends.

- Wireframes for large screens and desktops: <a href= "asset/docs/wireframes/ms2RPS-computer.pdf" target="_blank"> Desktop View</a>
- Wireframes for mobiles and tablets: <a href= "asset/docs/wireframes/ms2RPS-smart.pdf" target="_blank"> Smart Devices View</a>

---

## 2. Features

### 2.1 Existing Features

For this project, I decided to split the site into **two** sections, a landing area and a game area.

- Landing area   
    - It is a floating page that disappears when the start button is pressed. 
    - For customization of the game by the player:
        - Player's name, where the player can introduce his name, by default is "user". (By input method)
        - Player's Gender (Boy / Girl), the player can select boy or girl in the game an icon appear in the score board by default is boy.
        - Pick a color to change the background by default is blue.
        - Play button that trigger the game with above data to fill different elements of the game page and sound message of "Rock, Paper, Scissors".

    ![Image](/asset/docs/ms2RPS-landing.jpg)

- Game Page
    - A score board where feet the icons of player, robot (CPU), player, robot name and the score of the moves win each players.
    - Computer and navigation banner area, there are three buttons from left to right:
        - A button to return to the landing page. 
        - A button where it animates the selection of the robot move. 
        - A help button "?" which launches a modal screen with the game rules. 
    - Result banner where the messages of the results of movements are collected, who wins the game, and game status.
    - A player's grid can select one of the three icons (Rock, Paper or Scissors), it is very intuitive.
    - New game button that appears when the game is finished to the best of 3 moves won.
    - A footer with social icons and copyright
    ![Image](To be filled)

     **Scoreboard**

    ![image](/asset/docs/ms2RPS-scoreboard.jpg)

     **Gameboard**

    ![image](/asset/docs/ms2RPS-gameboard.jpg)
    
    **Help Modal:**

    ![image](/asset/docs/ms2RPS-modal.jpg)

   

### 2.2 Features Left to Implement

-   Improve the visual appearance on large screens.  
-   Implement the two player option.
-   Select the number of moves to win the game.
-   Implement "x" button to close modal screen.

---

## 3. Technologies Used

### 3.1 Languages

-   [HTML](https://en.wikipedia.org/wiki/HTML)
-   [CSS](https://en.wikipedia.org/wiki/CSS)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### 3.2 Libraries:

-   [Googlefonts](https://fonts.google.com/) used to source the font for the title of the game on both pages
-   [Balsamiq](https://balsamiq.com/) used to create the wireframes during the "skeleton" phase of the project.

### 3.3 Version control

-   [Git](https://git-scm.com/) used as the version control in utilising [Gitpod](https://www.gitpod.io/) to add code and commit to Git/push to Github.
-   [Github](https://github.com/) used to store the code following being pushed from Git. 

### 3.4 Tools and Other Resources:

-   [AmIResponsive](http://ami.responsivedesign.is/) to check if the site is responsive across various devices
-   [Autoprefixer CSS](https://autoprefixer.github.io/) used to check CSS browser compatibility.
-   [Browserstack](https://www.browserstack.com/) used to check the responsiveness of project across a range of devices and browsers
-   [CSS](https://css-tricks.com/)- handy guide used for css tips/questions
-   [Youtube](https://www.youtube.com/) used as a very handy reference for online JS tutorials and refreshers on JS code learned from the course
-   [Real Favicon Generator](https://realfavicongenerator.net/)- to create the sites favicon
-   [W3 Schools](https://www.w3schools.com/) used as a general reference guide for CSS tips and Javascript function queries.
-   [Beautifier](https://beautifier.io/) used to beautify all code for the project.
-   [Stack Overflow](https://stackoverflow.com/) as a reference for several tips on ...
-   [Markdown CheatSheet](https://www.markdownguide.org/cheat-sheet/) guide for refreshing memory on markdown use
-   [MobiReady](https://ready.mobi/) used to check if the site is mobile responsive
-   [Responsinator](https://www.responsinator.com/?url=https%3A%2F%2Fajba1973.github.io%2Fms2-RPS%2Findex.html) used to check how the responsive the design of the project was across different devices.
-   [Unused-CSS](https://unused-css.com/)- a helpful tool to check for any unused CSS

### 3.4 Code Resources:
- [Web Development Tutorial - JavaScript, HTML, CSS - Rock Paper Scissors Game](https://www.youtube.com/watch?v=jaVNP3nIAv0&t=413s) on how to build a Rock, Paper, Scissors Game by [whatsdev] (https://www.youtube.com/channel/UC0tRdbXVDbhaRvZPKsRgmxg)
- [carloscdev/PiedraPapelTijera](https://github.com/carloscdev/PiedraPapelTijera) for giving me the foundation stone to be able to develop and implement my idea.
- [What-the-JS](https://www.ci-resources.online/js.html) by Jim Morel

##### Back to [Contents](#table-of-contents)

---

## 4. Testing

A full testing report can be found in the [Testing Section](TESTING.md)

---

## 6. Deployment

### 6.1 Deploy to GitHub Pages

The site was deployed to GitHub pages using these steps below:
1. All code for this project was created in Gitpod, a local IDE (Integrated Development Environment)
2. The code was pushed to Github stored in a [repository](https://github.com/ajba1973/ms2-RPS)
3. Once in the repository, I selected "Settings" and scrolled down to the Github pages section.
4. Under "Source" in the drop down, "Master-Branch" was selected.
5. Following this, the site was then published to GitHub Pages and the site URL was displayed.

### 6.2 Cloning or Downloading

-   The code can be run locally by cloning or downloading. 
-   This is done by clicking on the green "code" button and from here, you can then select either clone or download. 
-   You can choose to clone using HTTPS, SSH, or GitHub CLI, then click the copy button to the right.
-   If you choose the Download ZIP option, a link to download the ZIP file is provided which can be unzipped on the local machine.

### 6.3 To Fork the Project:

If you would like to contribute to this project or have anything to add, you may fork the project using the following steps:
-   Log on to [Github](https://github.com/) or create account and locate the Github repository.
-   Open the [repository](https://github.com/ajba1973/ms2-RPS)
-   On the top right-hand of the page, click "Fork"
-   You will now have a copy of your own of the repository in your own Github account.

##### Back to [Contents](#table-of-contents)

---

## 7. Credits

### 7.1 Content

All content is written by the developer, Alejandro Bastor-Alvarez.

### 7.2 Media

-   All icons come from [icon8](https://www.icons8.com)
-   Grandstander font by Tyler Finck (https://fonts.google.com/specimen/Grandstander?query=grand#about) 

### 7.3 Code

-   whatsdev [tutorial](https://www.youtube.com/watch?v=jaVNP3nIAv0&t=413s) on how to build a Rock, Paper Scissors game. 
-   Carlos Cordova (https://github.com/carloscdev/PiedraPapelTijera) For giving me the foundation stone to be able to develop and implement my idea.

### 7.4 Acknowledgements

For this project, my sincere thanks goes out to:
- My mentor, **Nishant Kumar** for his relentless support and guidance given throughout this time.
- Carlos Cordova, the Whatdev you tube channel and other youtubers for dedication in teaching and showing new forms of collaboration.
- The Slack Community, and Jim Morel for his very useful site "What the JS" which was incredibly helpful
- Code Institute Student Care for their guidance in the past few weeks
- My wife for his support and patience, and my little troublemaker Morgan, encouraging me to finish his game.

##### Back to [Contents](#table-of-contents)