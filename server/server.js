//Importing plugins we need
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
const bodyParser = require("body-parser");
require("dotenv").config();

//grabs the port from .env - if fails, use 8094 as a default port
const PORT = process.env.PORT || 8094;

//creates an express instance called app, tells it to use cors and body parser
const app = express();
app.use(cors());
app.use(bp.json());

//imports cat from cat.js
const Cat = require("./modules/cat");

//tells the mongoose plugin to use your database
mongoose.connect(process.env.DATABASE_URL);

//tells the server what to do when it's interacted with
app.get("/", (request, response)=>{
    response.status(200).json("Around the world Around the world");
});

app.get("/cats", async (request, response) => {
    console.log("what a mystery...");
    try{
        const allCats = await Cat.find(request.query);
        response.status(200).json(allCats);
    }
    catch(error){
        console.log(error);
        response.status(500).json(error);
    }
});

//tells you the express instance is running on your terminal
app.listen(PORT, ()=> console.log(`App is listening on port: ${PORT}`));