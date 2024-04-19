import { Input } from "../../components";
import "./mobileForm.scss";
const MobileForm = (props) => {
  const { errors, touched } = props;
  return (
    <div className="mobile-form-wrapp">
      <Input
        name="name"
        className="text-field"
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
        className="text-field "
        error={!!errors.message}
        fullWidth
        label="Message"
        multiline
        rows={5}
      />
    </div>
  );
};

export default MobileForm;
