// var express = require('express');
// var app = express();
var request = require('request');
// var bodyParser = require('body-parser');

// app.set('view engine', 'ejs');
//
// app.use(bodyParser.urlencoded({ extended: true }));

  request('https://jsonplaceholder.typicode.com/users/1',         (error, response, body) => {
    // eval(require('locus'))
    if(!error && response.statusCode == 200){
      var parsedData = JSON.parse(body)
      console.log(parsedData["name"] + " lives in " + parsedData.address.city);
    }
})

// app.listen(3000, function(){
//   console.log("Running on Port 3000...");
// })
