import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import BaseComponent from './BaseComponent';

import styles from './DerivedComponent.css';

class DerivedComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = { message: 'Derived' };
  }

  render() {
    return (
      <div className={styles.derived}>
        {this.state.message}
        {this.renderHelper()}
      </div>
    );
  }
}

export default withStyles(styles)(DerivedComponent);
