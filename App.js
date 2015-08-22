import React from 'react';

class App extends React.Component {
  render() {
    return (
      <p>{this.props.content}</p>
    );
  }
}

App.propTypes = {
  content: React.PropTypes.string.isRequired
};

React.render(<App content="hello world" />, document.body);
