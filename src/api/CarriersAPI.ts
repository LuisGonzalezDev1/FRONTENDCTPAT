import api from "../components/config/axios";
import type { CarrierFormData } from "../schemas/driversTypes";
import { isAxiosError } from "axios";
import {createCarrierSchema} from "../schemas/driversTypes"
import {getCarrierSchema} from "../schemas/driversTypes"

export async function createCarriersAPI(formData: CarrierFormData) {
  try {
    const validatedData = createCarrierSchema.parse(formData);
    const { data } = await api.post("/carriers", validatedData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Error al crear transportista" );
    }
    throw error;
  }
}

export async function getCarrierAPI() {
  try {
    const { data } = await api.get("/carriers");
    console.log("Respuesta cruda del backend:", data);

    const parsed = getCarrierSchema.safeParse(data);
    if (!parsed.success) {
      console.error("Error de validación:", parsed.error.format());
      throw new Error("Los datos recibidos del servidor no son válidos");
    }
    return parsed.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.error("Error del servidor:", error.response.data);
      throw new Error(error.response.data.error || "Error al obtener los los transportistas");
    }
    throw error;
  }
}