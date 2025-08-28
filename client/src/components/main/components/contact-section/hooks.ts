import { FormikHelpers } from "formik";
import { API_URL } from "config/API";
import toast from "react-hot-toast";
import { sendRequest } from "helpers";
import { FormValues, FormSubmitResult } from "./models";

import { useState } from "react";

export const useContactSection = () => {
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    setLoader(true);
    try {
      const data = await sendRequest(`https://mail-serverless-function.vercel.app/api/contacts`, "POST", values);

      if (data.success) {
        setLoader(false);
        resetForm();
        toast.success("The message was sent successfully!");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      setLoader(false);
      toast.error("Network error");
    }
  };

  return { handleSubmit, loader };
};
