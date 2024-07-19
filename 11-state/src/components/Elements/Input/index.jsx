import Label from "./label";
import Input from "./input";
const FormLabel = (props) => {
  const { textLabel, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{textLabel}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default FormLabel;
