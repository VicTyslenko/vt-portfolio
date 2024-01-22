import { Formik, Form } from "formik";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import FormBoxElement from "../../../FormBoxElement/FormBoxElement";
import "./contactSection.scss";

interface FormValues {
  name: string;
  email: string;
  message?: string;
}
const ContactSection = () => {
  const formSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <section className="contact-section">
      <div className="contact-wrapp">
        <div className="left-side">
          <h1 className="title">Contact</h1>
          <p className="description">
            I would love to hear about your project and how I could help.
            Please, fill in the form, and I will get back to you as soon as
            possible.
          </p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values) => {
            formSubmit(values);
          }}
        >
          <Form
            style={{
              textAlign: "right",
            }}
          >
            <FormBoxElement className="form-wrapp">
              <Input
                className="text-field name-input"
                label="Name"
                variant="standard"
              />
              <Input className="text-field" label="Email" variant="standard" />
              <Input
                className="text-field message"
                label="Message"
                variant="standard"
              />
            </FormBoxElement>
            <Button type="submit" className="submit-btn">
              Send message
            </Button>
          </Form>
        </Formik>
      </div>

      <div className="divider">
        <hr />
      </div>
    </section>
  );
};

export default ContactSection;
