/* //html for our show route
const React = require('react')

class Show extends React.Component {
   render () {
    const fruit = this.props.fruit
    return (
        <div>
            <h1> Show Page </h1>
            <p>The {fruit.name} is {fruit.color}.</p>
            <p>{fruit.readyToEat? 'Its is ready to eat!' : 'It is not ready to eat...Cant touch this!' }</p>
        </div>
     );
    }
}
module.exports  = Show; */

const React = require('react');
const DefaultLayout = require('./layout/Default');

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Fruits New Page">
        <form action="/fruits" method="POST">
          Name: <input type="text" name="name" /><br/>
          Color: <input type="text" name="color" /><br/>
          Is REady To Eat: <input type="checkbox" name="readyToEat" /><br/>
          <input type="submit" name="" value="Create Fruit" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New;