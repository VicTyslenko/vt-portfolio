import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Name is too short")
    .max(30, "Name is too long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Last name is too Short")
    .max(50, "Last name is too Long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  mobile: Yup.number().min(2, "Number is too short!").required("Required"),
  message: Yup.string(),
});

export default validationSchema;
