import { Input } from "../../components";
import "./desktopForm.scss"
const DesktopForm = (props) => {
  const { errors, touched } = props;
  return (
    <div className="desktop-form-wrapp">
      <Input
        name="name"
        className="text-field name-input"
        label="Name"
        error={!!errors.name && touched.name}
        variant="standard"
        fullWidth
      />
      <Input
        name="email"
        className="text-field"
        label="Email"
        error={!!errors.email && touched.email}
        variant="standard"
        fullWidth
      />
      <Input
        name="message"
        className="text-field message-input"
        label="Message"
        error={!!errors.message}
        variant="standard"
        fullWidth
      />
    </div>
  );
};

export default DesktopForm;
