const mongoose = require('mongoose');
const DATABASEURL = process.env.DATABASEURL || "mongodb://localhost/e-commerce";
module.exports =  mongoose.connect(DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DataBase Connected!");
}).catch(() => {
    console.log("DataBase not Connected!");
});