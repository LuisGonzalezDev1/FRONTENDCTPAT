import {createDriverSchema } from "../schemas/driversTypes.ts";
import type {CreateDriverFormData } from "../schemas/driversTypes.ts";


import api from "../components/config/axios.ts";
import { isAxiosError } from "axios";

export async function createDriverAPI(formData: CreateDriverFormData) {
  try {
    const validatedData = createDriverSchema.parse(formData);
    const { data } = await api.post("/drivers", validatedData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Error al crear el conductor");
    }
    throw error;
  }
}
