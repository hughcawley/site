var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const path = require('path');

// create a new Express application instance
var app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(bodyParser.json());
app.use(cors());
//start application server on port 3000
//var port = process.env.PORT || 3000;


// define a sendmail endpoint, which will send emails and response with the corresponding status
app.use(express.static(__dirname + '/dist/site'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/site/index.html'));});
app.listen(process.env.PORT || 8080);

  var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
          user: 'jigsawpzzl@gmail.com',
          pass: 'Magenta1994'
      }
  });
/*
const sendMail = (user, callback) => {

};*/





app.post("/sendmail", (req, res) => {
  console.log("request came");
  var mail = req.body;
  console.log(mail);
  var mailOptions = {
    from: 'Hugh, "jigsawpzzl@gmail.com"',
    to: 'hughcawley@gmail.com',
    subject: "New Website Message" ,
    html: "<h1 font-size: 80px;>"+mail.message+"</h1><h2>"+mail.name+"</h2><h2>"+mail.email+"</h2>"
  };
  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       console.log(err);
     else
       console.log(info);
       res.end(JSON.stringify("done"));
  });
});
