// export const API_URL = process.env.REACT_APP_API_URL;
export const API_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL // URL для локальной разработки
    : process.env.REACT_APP_API_URL_PROD; // URL для продакшена
