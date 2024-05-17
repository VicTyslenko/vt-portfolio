export const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_APP_API_URL
    : import.meta.env.VITE_APP_API_URL_PROD;