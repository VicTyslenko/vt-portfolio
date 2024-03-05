import { TextField } from "@mui/material";
import { useField } from "formik";

interface InputProps extends React.ComponentProps<typeof TextField> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      {...otherProps}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default Input;
