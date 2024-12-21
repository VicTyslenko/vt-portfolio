import { formInfoSubmit } from "helpers";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "store";
import { FormikHelpers } from "formik";
import { openModal } from "reducers/modalReducer";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  message: string;
}

export const useContact = () => {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const modal = useSelector((state: RootState) => state.modal.isModalOpen);

  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    setLoading(true);

    const result = await formInfoSubmit("/contacts", values);

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

  return { handleSubmit, errorMessage, modal, loading };
};
