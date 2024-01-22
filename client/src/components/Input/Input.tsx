import { TextField } from "@mui/material";

type InputProps = React.ComponentProps<typeof TextField>;

const Input: React.FC<InputProps> = (props) => {
  return <TextField {...props} />;
};

export default Input;
