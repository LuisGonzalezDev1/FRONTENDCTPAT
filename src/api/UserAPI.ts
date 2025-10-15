import api from "@/components/config/axios"
import { isAxiosError } from "axios";
import type { createUserFormData } from "@/schemas/typesAdmin";


export async function createUserAPI(formData: createUserFormData) {
  try {
    const { data } = await api.post("/auth/register", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Error al crear el usuario");
    }
    throw error;
  }
}