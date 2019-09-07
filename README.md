# Weather App

This is implementation of simple weather website, tutorial originally written by Brandon Morelli for codebrust.io 
you can find more detailed explaination of this tutorial at 
---
https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b

I've added a layer of abstraction by using dotenv package

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on OSX (Mac)

  You can install nodejs by downloading installer form [official Node.js website](https://nodejs.org/en/download/)

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Install

    $ git clone https://github.com/sreesairaghava/weather-app-new.git
    $ cd weather-app-new
    $ npm install

## Configure app

Open .env file in directory and add API_KEY FROM [Openweathermap offical website](https://openweathermap.org)

## Running the project

    $ npm start

## Simple build for production

    $ npm build
