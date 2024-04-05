const sendRequest = async (url, method = "GET", body = null) => {
  const options = {
    method: method,
    headers: {
      "Content-type": "application/json",

      "Access-Control-Allow-Origin": "https://vt-portfolio-server.vercel.app",
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
