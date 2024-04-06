const sendRequest = async (url, method = "GET", body = null) => {
  const options = {
    method: method,
    headers: {
      "Content-type": "application/json",
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
