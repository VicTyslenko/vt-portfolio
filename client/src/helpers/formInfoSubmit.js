import sendRequest from "./sendRequest";
import { API_URL } from "../config/API";
const formInfoSubmit = async (collectionName, values) => {
  try {
    const data = await sendRequest(
      `${API_URL}/${collectionName}`,
      "POST",
      values
    );
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.log("Error", error);
    return {
      succes: false,
      error,
    };
  }
};

export default formInfoSubmit;
