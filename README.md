
# Project regarding testing basic functionality

Tested the basic functionality of the Mostly.ai site according to the provided document. The report was also generated using the Allure plugin.


## Table of Contents

* Site reference
* Installation
* Running Tests
* Git repo link
* Screenshot


## Site Reference


```
  https://mostly.ai/
```







## Installation

Before you start installing Cypress and Node, make sure that you have the following installed on your computer:

```
Node.js
VS code
```
## Installing Node.js

Node.js is a JavaScript runtime environment that is used to run JavaScript code outside of a web browser. To install Node.js, follow these steps:

  1. Go to the Node.js official website: https://nodejs.org/
  2. Click on the “Download” button for the latest version of Node.js.
  3. Follow the instructions for your operating system to install Node.js.
  4. Verify that Node.js has been installed successfully by opening a terminal or command prompt and running the following command:

```
node -v
```
## Installing Cypress

Cypress is a JavaScript-based end-to-end testing framework. To install Cypress, follow these steps:

Open a terminal or command prompt and navigate to the root directory of your project.
Run the following command to install Cypress as a development dependency:

```
npm install --save-dev cypress
```
Verify that Cypress has been installed successfully by running the following command:
```
npx cypress open
```
This should open the Cypress Test Runner in your default web browser.

With these steps, you should have both Node.js and Cypress installed on your computer and ready to use. If you encounter any issues during the installation process, refer to the official documentation for Node.js and Cypress(https://docs.cypress.io/) for more information and support.


## Install Allure report

**Install Java for windows**
```
https://www.oracle.com/java/technologies/downloads/#jdk19-windows
```

**Install Java for mac**

```
https://www.oracle.com/java/technologies/downloads/#jdk17-mac
```

Run the below command:

Link: https://www.npmjs.com/package/@shelex/cypress-allure-plugin

```
npm i -D @shelex/cypress-allure-plugin
```

https://www.npmjs.com/package/allure-commandline
```
npm i allure-commandline
```

For mac users any issue with allure installation run the below command:
```
sudo npm install -g allure-commandline
```
Check version for allure:

```
allure --version
```





## How to run test

```
npm run reportTest
```

Check allure results folder is created.

To open the allure report, type below command.

```
allure open
```

## Git clone
```
git clone https://github.com/nishigandhap/MostlyAIProjectTest
```
## Screenshot
<img width="751" alt="MostlyAI screenshot" src="https://user-images.githubusercontent.com/58659856/218334035-f1231388-49be-4eb0-b88e-01c139eebb5b.png">

## Screenshot
