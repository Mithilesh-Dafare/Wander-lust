const mongoose = require("mongoose")
const initData = require("./data.js")
const Listing = require("../models/listing.js")

main().then (() => {
    console.log("Connected to DB")
}).catch (err =>{
    console.log(err)
})


async function main() {
    await mongoose.connect( "mongodb://127.0.0.1:27017/wanderlust")
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        console.log("All existing data deleted.");

        console.log("Input Data:", initData.data); // Log the input data
        await Listing.insertMany(initData.data);
        console.log("Data is initialized.");

        const savedData = await Listing.find({}); // Fetch all data from the database
        console.log("Saved Data in Database:", savedData); // Log the saved data
    } catch (err) {
        console.error("Error initializing data:", err);
    }
};



initDB();