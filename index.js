const express = require('express') //- Npm innit    - Running npm i express
const app = express() // Initialised express to use its features

// Four methods: Get, Post, put & Delete. (very much like CRUD (create, read, update, delete))

app.listen(3000, () => {
    console.log("I am listening on port 3000")
})                   // creates a connection on a specified port 

// Cannot get ./ is the result 

// get is a function inside of express - for more infor look at express mod on npmjs

app.get('/')


