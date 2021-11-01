import {Component} from "react";
import './Fieldset.css';

class Fieldset extends Component {
  render() {
    const {title, children, ...rest} = this.props;

    return (
      <fieldset {...rest}>
        <legend>{title}</legend>
        {children}
      </fieldset>
    );
  }
}

export default Fieldset;
