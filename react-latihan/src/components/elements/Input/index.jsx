import Label from "./label";
import Input from "./input";
import { forwardRef } from "react";
const FormLabel = forwardRef((props, ref) => {
  const { textLabel, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{textLabel}</Label>
      <Input type={type} placeholder={placeholder} name={name} ref={ref} />
    </div>
  );
});

export default FormLabel;
