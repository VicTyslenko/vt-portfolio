import { Input } from "../../components";
import "./mobileForm.scss";
const MobileForm = (props) => {
  const { errors, touched } = props;
  return (
    <div className="mobile-form-wrapp">
      <Input
        name="name"
        className="text-field name-input"
        label="Full Name"
        error={!!errors.name && touched.name}
        variant="outlined"
        fullWidth
      />
      <Input
        name="email"
        className="text-field"
        label="Email Address"
        error={!!errors.email && touched.email}
        variant="outlined"
        fullWidth
      />
      <Input
        name="mobile"
        className="text-field"
        label="Mobile Number"
        error={!!errors.email && touched.email}
        variant="outlined"
        fullWidth
      />
      <Input
        name="message"
        className="text-field message"
        label="Message"
        error={!!errors.message}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default MobileForm;
