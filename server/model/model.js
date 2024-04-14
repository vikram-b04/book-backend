const mongodb = require('mongoose');

const mongodbfields = new mongodb.Schema({
    firstname : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    phonenumber : {
        type : String,
        required : true
    },

    message : {
        type : String,
        required : true
    }

})

const mongodbfieldsexports = mongodb.model("Contactforminfo",mongodbfields);
module.exports = mongodbfieldsexports;