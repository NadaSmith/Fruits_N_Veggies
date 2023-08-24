/*const React = require('react');

class Index extends React.Component {
  render() {
      const { fruits } = this.props;
      return (
              <div>
                <div>
                  <h1>Fruits Index Page</h1>
                  <ul>
                      {fruits.map((fruit, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/fruits/${i}`}>
                                      {fruit.name}
                                  </a>{' '}
                                  is {fruit.color} <br></br>
                                  {fruit.readyToEat
                                      ? `It is ready to eat`
                                      : `It is not ready to eat`}
                                  <br />
                              </li>
                          );
                      })}
                  </ul>
                </div>
                <div>
                    <nav>
                        <a href="/fruits/new">Create A New Fruits</a>
                    </nav>
               </div>
              </div>
      );
  }
}
module.exports = Index;*/

const React = require('react');
const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
  render() {
    return (
      <DefaultLayout title={'Fruits Index Page'}>
        <nav>
          <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <ul>
          {
            this.props.fruits?.map((fruit, i) => {
              return (
                <li key={i}>
                  The <a href={`/fruits/${fruit._id}`}> { fruit.name } </a> is { fruit.color } and { fruit.readyToEat ? 'It is ready to eat!' : 'It is not ready to eat!' }
                  <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                  </form>
                  <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit!</a>
                </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index