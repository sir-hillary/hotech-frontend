import axios from "axios";
import type {
  ContactFormData,
  ContactResponse,
} from "../types/contact";
import { apiClient } from "../api/client";

export const contactAPI = {
  sendMessage: async (
    formData: ContactFormData
  ): Promise<ContactResponse> => {
    try {
      const response = await apiClient.post<ContactResponse>(
        "/api/contact",
        formData
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const message =
            error.response.data?.error ||
            error.response.data?.message ||
            `Server error: ${error.response.status}`;

          throw new Error(message);
        }

        if (error.request) {
          throw new Error(
            "No response from the server. Please check your connection and try again."
          );
        }

        throw new Error(
          error.message || "Failed to send your message."
        );
      }

      throw new Error("Something went wrong while sending your message.");
    }
  },
};