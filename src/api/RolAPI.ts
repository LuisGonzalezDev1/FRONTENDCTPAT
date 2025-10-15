import api from "../components/config/axios";
import { isAxiosError } from "axios";
import type { CreateRolFormData } from "../schemas/typesAdmin";
import type { GetRolesResponse } from "../schemas/typesAdmin";
import { getRoleSchema } from "../schemas/typesAdmin";

export async function createRoleAPI(formData: CreateRolFormData) {
  try {
    const { data } = await api.post("/roles", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Error al crear el rol");
    }
    throw error;
  }
}

export async function getRoleAPI(page: number = 1): Promise<GetRolesResponse> {
  try {
    const limit = 10;
    const offset = page;

    const { data } = await api.get("/roles", {
      params: { limit, offset },
    });
    const parsedData = getRoleSchema.parse(data);
    return parsedData;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.error("Error en getRoleAPI:", error.response.data);
    } else {
      console.error("Error desconocido en getRoleAPI:", error);
    }
    throw error;
  }
}
