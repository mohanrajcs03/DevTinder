# ----------------- Commands ---------------------
  - npm init
  - npm i express
  Optional
  - npm install -g nodemon
  - Add "scripts":{"start":"node src/App.js", "dev":"nodemon src/App.js"}
  - git init
  - npm install --> it will install all dependency in package.json
  - 

# ----------------- Summary ----------------------
  - reate a repository
  - Initialize the repository node_modules, package.json, package-lock.json
  - Install express
  - Create a server
  - Listen to port 7777
  - Write request handlers for /test, /hello
  - Install nodemon and update scripts inside package.json
  - What are dependencies
  - What is the use of "-g" while npm install is
  - Difference between caret and tilde (^ vs ~ )

# -------------- Creating Server ---------------
  - Major.Minor.Patch (Version) [BackwardCompactable]
  - ^ caret (patch, minor change update) ~ tilt ()
  - create express App 
  - Request Handler (req, res)=>{}
  - res.send --> always respond this whatevere the req comes in
  - its anoying to stop and re-start the server use [Nodemon]