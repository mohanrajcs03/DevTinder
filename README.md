# ----------------- Commands ---------------------
  - npm init
  - npm i express
  - npm install --> it will install all dependency in package.json
  Optional
  - npm install -g nodemon
  - Add "scripts":{"start":"node src/App.js", "dev":"nodemon src/App.js"}
  Github repository 
  - git init
  - git add .
  - git commit -m "message"
  - git remote add origin https://github.com/mohanrajcs03/DevTinder.git
  - git branch -M main
  - git push -u origin main

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

  - Order of the Routes matter a lot !
  - Http methods
  - Use [Postman]


# -------------- Creating Server ---------------
  - Major.Minor.Patch (Version) [BackwardCompactable]
  - ^ caret (patch, minor change update) ~ tilt ()
  - create express App 
  - Request Handler (req, res)=>{}
  - res.send --> always respond this whatevere the req comes in
  - its anoying to stop and re-start the server use [Nodemon]