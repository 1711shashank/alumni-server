const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

const db_link = process.env.MONGO_URL;

mongoose.set('strictQuery', false);
mongoose.connect(db_link)
    .then(() => {
        console.log("db connected");
    }).catch((err) => {
        console.log(err);
    })

const datasheet = mongoose.Schema([{
    name: String,
    email: String,
    passoutYear: String,
    mobileNumber: String,
    currentCompany: String,
    linkedInUrl: String
}])

const db = mongoose.model("datasheet", datasheet);
module.exports = { db };