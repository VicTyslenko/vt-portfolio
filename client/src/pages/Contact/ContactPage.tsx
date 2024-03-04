import Button from "../../components/Button/Button";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import { globalAnimation } from "../../animations/animations";
import { Input, FormBoxElement } from "../../components";
import { usePathParameters } from "../../hooks";
import { formInfoSubmit } from "../../helpers";
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
  const { collectionName } = usePathParameters();

  const handleSubmit = (values: FormValues) => {
    formInfoSubmit(collectionName, values);
  };
  return (
    <div className="contact-page-container">
      <motion.h1
        className="title"
        {...globalAnimation({
          yInitial: -30,
        })}
      >
        Contact <span>Me</span>
      </motion.h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        // validationSchema={validationSchema}
      >
        {(props) => (
          <motion.div
            {...globalAnimation({
              yInitial: 30,
            })}
          >
            <Form className="form-wrapp" onSubmit={props.handleSubmit}>
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
          </motion.div>
        )}
      </Formik>
    </div>
  );
};

export default ContactPage;
