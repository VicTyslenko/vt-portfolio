import Button from "../../components/button/Button";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import { globalAnimation } from "../../animations/animations";

import { SuccessModal } from "./extensions/SuccessModal/success-modal";

import { useContact } from "./hooks";

import { Input, FormBoxElement } from "../../components";
import ClockLoader from "react-spinners/ClockLoader";

import validationSchema from "./contactsValidation";

import "./contactPage.scss";

export const ContactPage = () => {
  const { handleSubmit, errorMessage, loading, modal } = useContact();

  const containerStyles = loading ? "contact-page-container loading-opacity" : "contact-page-container ";

  return (
    <>
      <div className={containerStyles}>
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
          onSubmit={(values, formikHelpers) => {
            handleSubmit(values, formikHelpers);
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <motion.div
              {...globalAnimation({
                yInitial: 30,
              })}
            >
              <Form className="form-wrapp">
                <FormBoxElement className="form-box-element">
                  <Input
                    name="firstName"
                    className="text-field"
                    label="First name"
                    variant="standard"
                    error={!!errors.firstName && touched.firstName}
                  />
                  <Input name="lastName" className="text-field" label="Last name" variant="standard" error={!!errors.lastName && touched.lastName} />
                  <Input name="email" className="text-field" label="Email" variant="standard" error={!!errors.email && touched.email} />
                  <Input name="mobile" className="text-field" label="Mobile" variant="standard" error={!!errors.mobile && touched.mobile} />
                </FormBoxElement>
                <FormBoxElement className="message-box-element">
                  <Input
                    name="message"
                    className="message-input"
                    error={!!errors.message && touched.message}
                    fullWidth
                    label="Message"
                    multiline
                    rows={6}
                  />
                </FormBoxElement>
                <p className="error-message">{errorMessage}</p>
                <Button type="submit" className="contact-button">
                  Send message
                </Button>
              </Form>
            </motion.div>
          )}
        </Formik>

        {modal && <SuccessModal />}
      </div>
      {loading && (
        <div className="loading-message">
          <ClockLoader color="white" size="100px" />
        </div>
      )}
    </>
  );
};
