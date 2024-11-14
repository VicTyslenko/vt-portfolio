import { Formik, Form } from "formik";
import Input from "../../../input/Input";
import validationSchema from "./validation";
import Button from "../../../button/Button";
import FormBoxElement from "../../../FormBoxElement/FormBoxElement";

import { useContactSection } from "./hooks";
import "./contactSection.scss";

const ContactSection = () => {
  const { handleSubmit } = useContactSection();

  return (
    <section className="contact-section">
      <div className="contact-wrapp">
        <div className="left-side">
          <h1 className="title">Contact</h1>
          <p className="description">
            I would love to hear about your project and how I could help. Please, fill in the form, and I will get back to you as soon as possible.
          </p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, formikHelpers) => {
            handleSubmit(values, formikHelpers);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form
              style={{
                textAlign: "right",
              }}
            >
              <FormBoxElement className="form-wrapp">
                <Input
                  name="name"
                  className="text-field name-input"
                  label="Name"
                  error={!!errors.name && touched.name}
                  variant="standard"
                  fullWidth
                />

                <Input name="email" className="text-field" label="Email" error={!!errors.email && touched.email} variant="standard" fullWidth />

                <Input name="message" className="text-field message" label="Message" variant="standard" fullWidth />
              </FormBoxElement>

              <Button type="submit" className="submit-btn">
                Send message
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSection;
