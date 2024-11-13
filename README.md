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
  - Explore Routing and use of ?, +, *, () in routes
  - Reading Query params
  - Reading Dynamic Routes
  - app.use | app.all | app.send | next() --> (req, res, next)
  - a single route handler is responsible to send single res otherwise error
  - Middleware
  - router handlers


# -------------- Creating Server ---------------
  - Major.Minor.Patch (Version) [BackwardCompactable]
  - ^ caret (patch, minor change update) ~ tilt ()
  - create express App 
  - Request Handler (req, res)=>{} [RouteHandler]
  - res.send --> always respond this whatevere the req comes in
  - its anoying to stop and re-start the server use [Nodemon]
  - const app = express(); // creating Server

# ------------------- Routing Regex ----------------
  - ab?c   ---> b is Optional [(abc),(ac)]
  - ab+c   ---> b can be multiple but at least once [(abc),(abbc)]
  - ab*cd  ---> ab[writeAnything]cd  [(abWriteAnythingHerecd)]
  - a(bc)? ---> bc is Optional
  - (/a/)  ---> query contains a will work [car,a,hat,bat,ate,bca]
  - (/.*fly$/)  anything from start but ends with fly [butterfly,fly]

# --------------   Routing & Middleware  ----------
  - Reading Query params --> [abc?userId=101&password=Testing] [req.query]
  - Reading Dynamic Routes --> ["/abc/:userId/:name/:pass] [req.params]
  - Middleware -->
  - router handlers --> handles the req, res and actually sends res to client
  - 