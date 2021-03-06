import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <p>
            <strong>SpaceXplorer</strong> by <a href="https://seancollins.io">Sean Collins</a>
            <br />
            Built with <a href="https://reactjs.org/">React</a> and <a href="https://material-ui-next.com/">Material-UI</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
