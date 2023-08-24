/* const React = require('react');

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>New Fruits Page</h1>
                <form action='/fruits' method='post'>
                Name: <input type="text" name="name" /><br/>
                Color: <input type="text" name="color" /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                    <button type='submit'>Create Vegetable</button>
                </form>
            </div>
        );
    }
}

module.exports = New; */

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