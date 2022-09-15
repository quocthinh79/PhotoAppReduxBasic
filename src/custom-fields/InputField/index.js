import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  // field này là của Formik bao gồm name, value, onChange, onBlur
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;

  // Validate form
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        placeholder={placeholder}
        invalid={showError} // Dùng để show form feed back
      />
      <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
    </FormGroup>
  );
}

export default InputField;
