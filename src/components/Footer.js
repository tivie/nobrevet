import {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const {copyright} = this.props;
    return (
      <footer className="no-print copyright">copyright (c) {copyright}</footer>
    );
  }
}

export default Footer;



