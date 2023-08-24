const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connections;
// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const fruits = require('./Models/fruits.js');
const vegetables = require('./Models/vegetables.js');

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true }));

const methodOverride = require('method-override');


//////EXECUTES FOR ALL ROUTES
////MiddleWare
// This is called 'middleware'
// It runs in the middle of the request response cycle (in the middle)
// sometime after the request is received, but before the final route handler is called
// Be sure to put middleware at the top of your server.js file, so that other routes don't handle the request and send the response before the middleware can be executed
// Most of the time, you won't write your own middleware, but a lot of plugins and extended functionality of express exist as middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//-------------------------------FRUITS---------------------------------------

//INDEX ROUTE
app.get('/fruits', (req, res) => {
    res.render('Fruits/Index', { fruits: fruits });
}); 

//NEW ROUTE
app.get('/fruits/new', (req, res) => {
    res.render('Fruits/New');
});

//SHOW ROUTE
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.render('Fruits/Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    });
});

//POST ROUTE
app.post('/fruits', (req, res) => {
    console.log(req.body)
    res.send('data received');
});

//CREATE ROUTE
app.post('/fruits', (req, res) => {
    const newFruit = {
        name: req.body.name,
        color: req.body.name,
        readyToEat: req.body.readyToEat === 'on' ? true : false
    };

    fruits.push(newFruit);
    console.log(newFruit)
    res.redirect('/fruits');
});

//-------------------------------VEGETABLES-------------------------------------

//INDEX ROUTE
app.get('/vegetables', (req, res) => {
    res.render('Vegetables/Index', { vegetables: vegetables });
}); 

//NEW ROUTE
app.get('/vegetables/new', (req, res) => {
    res.render('Vegetables/New');
});

//SHOW ROUTE
app.get('/vegetables/:indexOfVegetablesArray', (req, res) => {
    res.render('Vegetables/Show', {
        vegetable: vegetables[req.params.indexOfVegetablesArray]
    });
});

//POST ROUTE
app.post('/vegetables', (req, res) => {
    console.log(req.body)
    res.send('data received');
});

//CREATE ROUTE
app.post('/vegetables', (req, res) => {
    const newVegetable = {
        name: req.body.name,
        color: req.body.name,
        readyToEat: req.body.readyToEat === 'on' ? true : false
    };

    vegetables.push(newVegetable);
    console.log(newVegetable)
    res.redirect('/vegetables');
});

//-------------------------------Connecting With Mongoose For Fruits-------------------------------------

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));


app.listen(3000, () => {
    console.log('listening');
});


//Models = data (javascript variables)
//Views = how the data is displayed to the user (HTML)
//Controllers (route) = the glue that use logic to connects the models with the views