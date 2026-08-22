import axios from "axios";

export const getApiErrorMessage = (
  error: unknown,
  fallback = "Something went wrong. Please try again."
): string => {
  if (!axios.isAxiosError(error)) {
    return fallback;
  }

  if (error.response) {
    return (
      error.response.data?.error ||
      error.response.data?.message ||
      `Server error: ${error.response.status}`
    );
  }

  if (error.request) {
    return "No response from the server. Please check your connection and try again.";
  }

  return error.message || fallback;
};