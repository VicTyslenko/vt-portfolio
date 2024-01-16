import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too short!")
    .max(30, "Too long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email"),
  mobile: Yup.number().min(2, "Too short!"),
  // message: Yup.string(),
});

export default validationSchema;
