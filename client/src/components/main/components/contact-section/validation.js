import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(30, "Name is too long")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),

  message: Yup.string(),
});

export default validationSchema;
