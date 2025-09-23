export const CONFIG = {
  APP_BASE_URL: import.meta.env.VITE_APP_BASE_URL,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  ENABLE_MOCKING: import.meta.env.VITE_ENABLE_MOCKING === "true",
}
