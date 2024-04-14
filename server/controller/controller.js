const modelfilecalling = require('../model/model');

exports.createfile = (req,res)=>{
    let checking = new modelfilecalling({
        firstname : req.body.firstname,
        email : req.body.email,
        phonenumber : req.body.phonenumber,
        message : req.body.message
    })

    checking.save().then((data)=>{
        console.log(data);
        res.redirect('/thankyou');
    })
}