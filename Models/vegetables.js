/*const vegetables = [
    {
        name:'tomato',
        color: 'red',
        readyToEat: true
    },
    {
        name:'cabbage',
        color: 'green',
        readyToEat: false
    },
    {
        name:'squash',
        color: 'yellow',
        readyToEat: true
    },
    {
        name:'carrot',
        color: 'orange',
        readyToEat: false
    },
    {
        name:'beets',
        color: 'purple',
        readyToEat: true
    }
]; 

module.exports = vegetables;*/

const mongoose = require('mongoose');

//blueprint or structure
const vegetableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean
});

//model adds all the methods to the schema that we can use to edit our data
const Vegetable = mongoose.model('Vegetable', vegetableSchema);

module.exports = Vegetable;