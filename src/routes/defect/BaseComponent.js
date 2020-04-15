import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './BaseComponent.css';

class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.renderHelper = this.renderHelper.bind(this);
    this.renderHelperMessage = 'Render Helper';
  }

  renderHelper() {
    return (
      <div className={styles.renderHelper}>{this.renderHelperMessage}</div>
    );
  }

  render() {
    return Error('Not implemented');
  }
}

export default withStyles(styles)(BaseComponent);
