# ev_energy_app
React App for ev.energy coding challenge

# Installation

This project uses React.js and Typescript. To get it running locally, you're going to need to go through a few setup steps.

First, make sure you've got Node installed by running `node --version` from the command line. If you get any version back, 
great! You should be good to go. If not, you're gonna need to install Node. That process can vary a lot from OS to OS, so 
I don't want to tell you how to live your life - but I _would_ recommend using `nvm` to do that. `nvm` is short for Node Version Manager, and without it managing Node versions can be sort of a nightmare. Here's the page for `nvm` with installation and usage instructions for different systems: https://github.com/nvm-sh/nvm

(This project uses Node 16.11.0.)

`npm` will be installed along with Node. From the `ev-energy-ui` folder, run `npm install`. This will install all of the packages this project relies on. 

Now you should be good to go! 

From the `ev-energy-ui` folder, run `npm start` to start the project locally. It should automatically open a browser window with the app. If it doesn't, open a window and go to `localhost:3000`. 

# Setting up your environment

But wait! There's more.

The call to the `openchargemap.org ` API requires an API key, and that's a thing I don't want to commit to version control. Call me paranoid.

The landing page is making a call to `process.env` to retrieve that value, and pulling it from a `.env` file that I haven't included in this repo. To get this working locally, sign up for an account on the OpenChargeMap site (they're free), then generate an API key. Then create a `.env` file in the root of this project with one value:
```
REACT_APP_API_KEY=<your API key goes here>
```
That should do it!

Note: If this were a real live app, this obviously isn't how I'd do this. In a production app the frontend would communicate with a server that had that API key injected as a secret at build time using whatever pipeline tool you want to use.

# Style Guide
## (Visual style, not code style)

This app uses the Material UI component library, because its components are pretty and also because home rolling CSS can make very complicated and hard to maintain layout logic. I'm not married to Material UI, but I _do_ think it's a good idea to have a library of styled components so that the CSS can be tested to death once and then abstracted away forever.

