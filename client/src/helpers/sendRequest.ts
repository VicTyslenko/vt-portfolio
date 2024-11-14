interface FormValues {
  name: string;
  email: string;
  message: string;
}

const sendRequest = async (url: string, method: string = "GET", body: FormValues | null = null) => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  const result = await response.json();
  return result.data;
};

export default sendRequest;
