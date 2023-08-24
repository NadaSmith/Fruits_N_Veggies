/*const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
]; 

module.exports = fruits;*/


const mongoose = require('mongoose');

//blueprint or structure
const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

//model adds all the methods to the schema that we can use to edit our data
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;