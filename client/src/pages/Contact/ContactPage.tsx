import Button from "../../components/Button/Button";
import { Formik, Form } from "formik";

import { Input, FormBoxElement } from "../../components";
// import validationSchema from "./validation";
import "./contactPage.scss";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number | string;
  message?: string;
}
const ContactPage = () => {
  const formInfoSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className="contact-page-container">
      <h1 className="title">Contact me</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        }}
        onSubmit={(values) => {
          formInfoSubmit(values);
        }}
        // validationSchema={validationSchema}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <FormBoxElement className="form-box-element">
              <Input
                name="firstName"
                className="text-field"
                label="First name"
                variant="standard"
                value={props.values.firstName}
                onChange={props.handleChange}
              />
              <Input
                name="lastName"
                className="text-field"
                label="Last name"
                variant="standard"
                value={props.values.lastName}
                onChange={props.handleChange}
              />
              <Input
                name="email"
                className="text-field"
                label="Email"
                variant="standard"
                value={props.values.email}
                onChange={props.handleChange}
              />
              <Input
                name="mobile"
                className="text-field"
                label="Mobile"
                variant="standard"
                value={props.values.mobile}
                onChange={props.handleChange}
              />
            </FormBoxElement>
            <FormBoxElement className="message-box-element">
              <Input
                name="message"
                value={props.values.message}
                onChange={props.handleChange}
                className="message-input"
                fullWidth
                label="Message"
                multiline
                rows={6}
              />
            </FormBoxElement>

            <Button type="submit" className="contact-button">
              Send message
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactPage;
