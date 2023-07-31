const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./modules/cat");

console.log(Cat);

async function seed(){
    await Cat.create(
        {
            name: "Jadzia",
            color: "Black",
            hasClaws: true,
            likes: ["stretching","yawning","chasing mice"]
        }
    );
    await Cat.create(
        {
            name: "crinkle",
            color: "Blue-Gray",
            hasClaws: false,
            likes: ["sleeping", "eating", "cuddling"]
        }
    );
    console.log("kitty time");
    mongoose.disconnect();
}

seed();