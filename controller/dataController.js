const { db } = require('../models/mongoDB');

module.exports.getData = async function getData(req, res) {
    try {

        let data = await db.find();

        res.status(200).json({
            data: data
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports.addData = async function addData(req, res) {
    try {

        const { name, email, passoutYear, mobileNumber, currentCompany, linkedInUrl } = req.body;

        const newUserData = new db({
            name: name,
            email: email,
            passoutYear: passoutYear,
            mobileNumber: mobileNumber,
            currentCompany: currentCompany,
            linkedInUrl: linkedInUrl
        });

        await newUserData.save();

        res.status(200).json({
            Message: "Data Added",
        });

    } catch (err) {
        console.log(err);
    }
}
