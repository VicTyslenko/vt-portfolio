import { Formik, Form } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./contactSection.scss";

interface FormValues {
  name: string;
  email: string;
  message?: string;
}
const ContactSection = () => {
  const formSubmit = (values: FormValues) => {};
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
          <Form>
            <Box
              className="form-wrapp"
              component="div"
              sx={{
                gap: "50px",
                "& > :not(style)": { m: 1 },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white !important",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "white !important",
                },
              }}
            >
              <TextField
                className="text-field"
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
              <TextField
                className="text-field"
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
              <TextField
                className="text-field"
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Box>
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
