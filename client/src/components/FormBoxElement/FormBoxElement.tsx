import { Box } from "@mui/material";

type FormBoxElementProps = React.ComponentProps<typeof Box>;

const FormBoxElement: React.FC<FormBoxElementProps> = (props) => {
  return <Box {...props} />;
};

export default FormBoxElement;
