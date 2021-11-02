import {Form} from "react-bootstrap";

export default function FormSelect(props) {

  const {id, title, value, options, required, className, updateValores, ...rest} = props;
  let classes = (typeof className === 'undefined') ? 'data-for-save' : ' data-for-save';
  let warningBox = '';
  let parentClasses = 'mb-3';
  if (!!required) {
    classes = classes + ' required';
    parentClasses = parentClasses + ' required';
    warningBox = <div className="invalid-feedback" data-sb-feedback={id + ':required'}>{title} is required.</div>;
  }

  
  return (
    <Form.Floating className={parentClasses}>
      <Form.Select 
        id={id} 
        placeholder={title}
        required={required}
        value={value}
        className={classes}
        onChange={function (e) {
          // noinspection JSUnresolvedVariable
          updateValores(id, e.target.value)
        }}
        {...rest}
      >
        <option/>
        {options.map( ({val, txt}) => (<option key={val} value={val}>{txt}</option>))}
      </Form.Select>
      <label htmlFor={id}>{title}</label>
      {warningBox}
    </Form.Floating>
  );
}
