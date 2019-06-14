import React, { Fragment, Component, Text } from 'react';

class Main extends Component {
  state = {
    showAddBox: false,
  };

  render() {
    const { showAddBox } = this.state;
    return (
      <Fragment>
        <Text>Oi</Text>
        <Text>{showAddBox}</Text>
      </Fragment>
    );
  }
}

export default Main;
