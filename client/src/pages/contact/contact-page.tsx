import Button from "../../components/button/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, FormikHelpers } from "formik";
import { motion } from "framer-motion";
import { globalAnimation } from "../../animations/animations";
import { openModal } from "../../reducers/modalReducer";
import { RootState } from "../../store";
import { SuccessModal } from "./extensions/SuccessModal/success-modal";
import { Input, FormBoxElement } from "../../components";

import { formInfoSubmit } from "helpers";
import { useLocation } from "react-router-dom";
import validationSchema from "./contactsValidation";

import "./contactPage.scss";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}
export const ContactPage = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const modal = useSelector((state: RootState) => state.modal.isModalOpen);

  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    setLoading(true);

    const result = await formInfoSubmit(location.pathname, values);

    if (result.error) {
      const error = (result.error as any).message;
      setErrorMessage(error);
    } else {
      setLoading(false);
      setErrorMessage("");
      dispatch(openModal());
      resetForm();
    }
  };

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
      {loading && <p className="loading-message">Message is sending...</p>}
    </>
  );
};
