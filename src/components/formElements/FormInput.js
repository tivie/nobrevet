import {Form} from "react-bootstrap";

function FormInput(props) {
  
  const {id, type, title, value, required, className, mb, updateValores, onChange, ...rest} = props;
  
  let classes = (typeof className === 'undefined') ? 'data-for-save' : ' data-for-save';
  let parentClasses = mb || 'mb-3';
  let warningBox = '';
  if (!!required) {
    classes = classes + ' required';
    parentClasses = parentClasses + ' required';
    warningBox = <div className="invalid-feedback" data-sb-feedback={id + ':required'}>{title} is required.</div>;
  }
  
  let onChangeHandler = updateValores ? e => updateValores(id, e.target.value) : onChange;
  
  
  return (
    <Form.Floating className={parentClasses}>
      <Form.Control
        id={id}
        type={type}
        placeholder={title}
        required={required}
        value={value}
        className={classes}
        onChange={onChangeHandler}
        {...rest}
      />
      <label htmlFor={id}>{title}</label>
      {warningBox}
    </Form.Floating>
  );
}

export default FormInput;
