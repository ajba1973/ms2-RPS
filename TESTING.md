# <p align="center">Testing Report - Rock Paper Scissor - RPS </p>

## [Contents:](#contents)

 - [Manual Testing](#manual-testing)
 - [Device Testing](#device-testing)
 - [Online Validations](#online-validations)
 - [Project Bugs and Solutions](#project-bugs-and-solutions)
 - [Remaining Bugs](#remaining-bugs)
 - [Testing User Stories](#testing-user-stories)

## Manual Testing 

The following steps were taken to ensure the site was performing as it should:

- Ensure that it works collect the different game customization data in the landing page:

![image](/asset/docs/ms2RPS-data1.jpg)

![image](/asset/docs/ms2RSP-data2.jpg)

- Ensure the back button works back to landing page, It works as we expected.

![image](/asset/docs/ms2RPS-back.jpg)

- Ensure the help button works open a modal screen with the rules, It works as we expected. As made mention for futures update "x" button requires in the modal screen.

![image](/asset/docs/ms2RPS-help.jpg)

![image](/asset/docs/ms2RPS-modal.jpg)

- Ensure the players buttons works, scoreboard show the correct score and new game appears. They works as we expected.

![image](/asset/docs/ms2RPS-game.jpg)

![image](/asset/docs/ms2RPS-gameboard.jpg)

- All elements in the footer works as we expected.

---

## Device Testing

I wanted to make sure that the site was responsive as much as possible across all devices and used [Browserstack](https://www.browserstack.com/) and [Browserling](https://www.browserling.com/) as handy tools to check this. In the early stages of the project, I used [AmIResponsiveDesign](http://ami.responsivedesign.is/) and [Responsinator](https://www.responsinator.com/) in addition to check compatibility across browsers and several different devices.

The site was tested across: **Chrome, Internet Explorer, Safari, Firefox and Opera.**

The devices used to check Rock Paper Scissors - RPS , thanks to friends and family are as follows:

####  Android:    

-  Chrome on Google Nexus 9
-  Firefox on Google Pixel 4
-  Chrome on Redmi note 8
-  Chrome on Cubot 9
-  Firefox on LG Table
-  Chrome & Samsung Internet on Samsung A50

 **On Chrome Developer Tools:**
 Galaxy S5, Moto G4, Galaxy Fold, Surface Duo, Pixel 2, Pixel 2 XL

####   iOS:

-   Iphone 12, Mini (12), 11 (Pro Max), Iphone 8 Plus, Iphone XS, Iphone XE (tested both on Chrome and Safari)
-   IPad Pro 12.9 2020, IPad 7th, IPad Mini (2017)

---

## Online Validations

To make sure the code for my project passed without any errors or warnings, I used the following online validators:

-   [W3C HTML Validator:](https://validator.w3.org/)
![image](/asset/docs/ms2RPS-html.jpg)

-   [CSS Validator by Jigsaw:](https://jigsaw.w3.org/css-validator/)
![image](/asset/docs/ms2RPS-css.jpg)

-   [JShint](https://jshint.com/)

The only issues that showed in the JShint report were the use of 'let', 'const' 'arrow-function' and template literals use which is only available in ES6, causing no major concern. In addition, there were a few missing semi-colons in the code which I later added.

![image](/asset/docs/ms2RPS-jshint.jpg)

-   [Google Mobile Friendly Test:](https://search.google.com/test/mobile-friendly)
![image](/asset/docs/ms2RPS-mobile.jpg)

-   [LightHouse Report:](https://developers.google.com/web/tools/lighthouse)
![image](/asset/docs/ms2RPS-light.jpg)

---

- [AmIResponsiveDesign](http://ami.responsivedesign.is/#)

![image](/asset/docs/ms2RPS-amiresponsive.jpg)

- [Responsinator:](https://www.responsinator.com/?url=https%3A%2F%2Fajba1973.github.io%2Fms2-RPS%2Findex.html)

All appeared as normal in Responsinator, apart the game is designed to play in portait position instead of landscape that will be update in new revisions.

---

## Project Bugs and Solutions

-  **Uncaught TypeError: Cannot reapoperty 'classList' of null**
I few phases of the implementation of the code when the html transfer data to the javasript functions that back null.

![image](/asset/docs/ms2RPS-errorjs.jpg)

For debug this type errors I use console.log to check in the console tool in the Chrome devtool to spot where the implementation stopped.
In all the cases was mispelling ID tags in the HTML code and the js varibles.



## Testing User Stories

#### As a Site User:

-   A application to play on a mobile, tablet devices instead of laptop or desktop computer.
>   *It is nice to  see how to play the kids on the mobile...  Please bring back the mobile.*
-	I want a site that is easy to navigate and play a game that is fun and interactive.
>   *The kids understand quickly how to play, thanks specially to Fionn (3yrs), Morgan (7yrs), Agata (7yrs), Ollie (7yrs), Penelope (10yrs) and Miguel (12yrs) *
-	To be able to change game options, such as customizing it (Player's name, gender, background color).
>   *The kids love to customize the game with the selection of the name, gender and the background.*
-	Very intuitive and very easy to use. ( For little kids).
>   *As made mention before special thanks to Fionn that learn to play to ROCK PAPER SCISSORS in less that 3 minutes, sorry Anne for your mobile...*

### As a Site Developer:

As a site developer, I would like the site to accomplish:

-  As part a challange I build the application without use of libraries such as Bootstrap or Font Awesome.
>  * I'm happy to build an application for the kids to use with no libraries, in these case it is more complicate because it missing the factor to use templates, but help me to understand more code and how to use.*
-  Use elements to attract attention such as icons and sounds.
>  * Looking for icons, Fonts and different elements that can awaken the curiosity and attraction of children, in this case using the sounds.* 
-  Incorporate animations to make the game more fun.
>  * Add the emoticons elements in the result banner, provide time until you can take the next movement.*
-  Play against the computer and have your movement reflected.
>  * This was the most complicated part, how to make the cpu play with you and show its play after seeing a sequence of icons.*
-  Implement a button to restart a new game when it has finished.
>  * Implement a function that determines which of the players has reached the limit to determine the winner. When that limit is reached, show a button to restart a new game.*


---

[Back to README](README.md)


