// This is how you can deploy a site using github pages for free

// For this you have to first download the desktop app of github from their site 
// And then open the folder in their app and make sure the folder is git initialised

// First you have to create a build model of the app 
// For this you can run a command 
// npm run build
// After this you have to install
// npm install --save gh-pages

// After this you have to add this to your package.json folder at the top
// "https://lakshayletsgo.github.io/name Of The Github Repo"

// After that you have to add this also to your package.json in script
// "predeploy":"npm run build"
// "deploy":"gh-pages -d build"

// After that you have to just run the command 
// npm run deploy

// And then you have just go the github then go to setting of that repo and then open pages 
// After that you have to just select the gh-pages and save  
