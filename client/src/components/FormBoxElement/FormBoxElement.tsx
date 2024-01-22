import { Box } from "@mui/material";

interface FormBoxElementProps {
  className: string;
  children: React.ReactNode;
}
const FormBoxElement: React.FC<FormBoxElementProps> = ({
  className,
  children,
}) => {
  return <Box className={className}>{children}</Box>;
};

export default FormBoxElement;
