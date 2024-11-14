import { FormikHelpers } from "formik";
import { API_URL } from "config/API";
import toast from "react-hot-toast";
import { sendRequest } from "helpers";
import { FormValues, FormSubmitResult } from "./models";

export const useContactSection = () => {
  const formInfoSubmit = async (collectionName: string, values: FormValues): Promise<FormSubmitResult> => {
    try {
      const data = await sendRequest(`${API_URL}/${collectionName}`, "POST", values);
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error : new Error("Unknown error"),
      };
    }
  };

  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    const saveResult = await formInfoSubmit("contacts", values);
    if (!saveResult.success) {
      return;
    }

    resetForm();
    toast.success("The message was sent successfully!");
  };

  return {
    handleSubmit,
  };
};
