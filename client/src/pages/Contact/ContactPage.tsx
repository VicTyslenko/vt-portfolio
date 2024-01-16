import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "../../components/Button/Button";
import { Formik, Form } from "formik";
import validationSchema from "./validation";
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
            <Box
              component="div"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",

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
                name="firstName"
                className="text-field"
                id="standard-basic"
                label="First name"
                variant="standard"
                value={props.values.firstName}
                onChange={props.handleChange}
              />
              <TextField
                name="lastName"
                className="text-field"
                id="standard-basic"
                label="Last name"
                variant="standard"
                value={props.values.lastName}
                onChange={props.handleChange}
              />
              <TextField
                name="email"
                className="text-field"
                sx={{
                  input: { color: "white" },
                }}
                id="standard-basic"
                label="Email"
                variant="standard"
                value={props.values.email}
                onChange={props.handleChange}
              />
              <TextField
                name="mobile"
                className="text-field"
                id="standard-basic"
                label="Mobile"
                variant="standard"
                value={props.values.mobile}
                onChange={props.handleChange}
              />
            </Box>
            <Box
              sx={{
                "& > :not(style)": { mt: 8 },
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
                name="message"
                value={props.values.message}
                onChange={props.handleChange}
                className="text-field"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
                fullWidth
                label="Message"
                id="message"
                multiline
                rows={6}
              />
            </Box>
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
