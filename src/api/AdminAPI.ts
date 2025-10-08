import api from "../components/config/axios";
import { isAxiosError } from "axios";
import { getRolesSchema } from "../schemas/typesAdmin";
import type { CreateRolFormData } from "../schemas/typesAdmin";
import type { createUserFormData } from "../schemas/typesAdmin";
import {createUserSchema} from "../schemas/typesAdmin"


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

export async function getRoleAPI() {
  try {
    const { data } = await api.get("/roles");
    console.log("Respuesta cruda del backend:", data);

    const parsed = getRolesSchema.safeParse(data);
    if (!parsed.success) {
      console.error("Error de validación:", parsed.error.format());
      throw new Error("Los datos recibidos del servidor no son válidos");
    }

    return parsed.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.error("Error del servidor:", error.response.data);
      throw new Error(error.response.data.error || "Error al obtener los roles");
    }
    throw error;
  }
}

//Create user.

export async function createUserAPI(formData: createUserFormData ) {
  try {
    const validatedData = createUserSchema.parse(formData);
    const {data} = await api.post("/register", validatedData)
    return data
  } catch (error) {
        if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Error al crear el rol");
    }
    throw error;
  }
}

export async function getUserAPI() {
  try {
    const { data } = await api.get("/register");
    const parsed = getRolesSchema.safeParse(data);
    if (!parsed.success) {
      console.error("Error de validación:", parsed.error.format());
      throw new Error("Los datos recibidos del servidor no son válidos");
    }

    return parsed.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.error("Error del servidor:", error.response.data);
      throw new Error(error.response.data.error || "Error al obtener los roles");
    }
    throw error;
  }
}