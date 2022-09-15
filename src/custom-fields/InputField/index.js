import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  // field này là của Formik bao gồm name, value, onChange, onBlur
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input id={name} {...field} type={type} placeholder={placeholder} />
    </FormGroup>
  );
}

export default InputField;
