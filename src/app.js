let React = require('react');

let App = React.createClass({
  render() {
    return (
      <div>
        <h1>Whoops</h1>
        <h2>Testing this watch step</h2>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app_content'));
