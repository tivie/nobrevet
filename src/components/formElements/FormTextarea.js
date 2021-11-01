import {Form} from "react-bootstrap";
export default function FormTextarea(props) {

  const {id, title, value, required, className, updateValores, ...rest} = props;
  let parentClasses = 'mb-3';
  let warningBox = '';
  let classes = (typeof className === 'undefined') ? 'data-for-save' : ' data-for-save';
  if (!!required) {
    classes = classes + ' required';
    parentClasses = parentClasses + ' required';
    warningBox = <div className="invalid-feedback" data-sb-feedback={id + ':required'}>{title} is required.</div>;
  }


  return (
    <Form.Floating className={parentClasses}>
      <Form.Control
        as="textarea"
        id={id}
        placeholder={title}
        required={required}
        value={value}
        className={classes}
        onChange={(e) => updateValores(id, e.target.value)}
        {...rest}
      />
      <label htmlFor={id}>{title}</label>
      {warningBox}
    </Form.Floating>
  );
}
