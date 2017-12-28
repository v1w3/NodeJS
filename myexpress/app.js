// 1. load in the modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// 9 set up Pug template engine
// var pug = require('pug')
// 10 set up EJS
var ejs = require('ejs')

var port = 4000;

//2. Instantiate express
var app = express();


//3. Setup the middleware
app.use(function(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

//9.1 Setup the view engine
// app.set('view engine', 'pug');
// 10.1 set up the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//8. Serving up static content
app.use(express.static(path.join(__dirname, 'public')));


//6. Set up a route
app.get('/', function(req, res) {
    // res.send('Hello World')
    //9.2 render the index
    res.render('index', {
        //9.3 loading i n dynamic values
        title: 'Hello World',
        showTitle: true,
        //9.5 using each loops
        people: ['Tom', 'Dick', 'Harry'] 
    });
})
//7. Set up some more routes
app.get('/about', function(req, res) {
    res.render('about')
})

//11. Set up the contact route
app.get('/contact', function(req, res) {
    res.render('contact')
})


//4 .listen in on the port
app.listen(port);
console.log('Server start on port '+port);

//5 .Export the module
module.exports = app;