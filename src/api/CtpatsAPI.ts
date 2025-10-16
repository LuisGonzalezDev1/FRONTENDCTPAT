import api from "@/components/config/axios";
import { isAxiosError } from "axios";
import type {CreateCtpatFormData} from "@/schemas/types"
import {CtpatSchema} from "@/schemas/types"


export async function createCtpatsAPI(formData:CreateCtpatFormData ) {
  try {
    const { data } = await api.post("/ctpat", formData);
      const parsedData = CtpatSchema.parse(data);
    return parsedData;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Error al crear el ctpats");
    }
    throw error;
  }
}