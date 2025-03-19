const mongoos = require('mongoose');
require('dotenv').config()



module.exports = async() => {
    try {
        await mongoos.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
    } catch (err) {
        console.log(err)
    }

}