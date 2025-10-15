import {createDriverSchema } from "../schemas/driversTypes.ts";
import type {CreateDriverFormData } from "../schemas/driversTypes.ts";
import api from "../components/config/axios.ts";
import { isAxiosError } from "axios";
import type {GetDriverResponse} from "../schemas/driversTypes.ts"

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

export async function getDriverAPI(page:number =1 ):Promise<GetDriverResponse>{
  try {
    const limit = 10;
    const offset = page;
    const {data} = await api.get("/drivers",{
      params: {limit, offset},
    });
    return  data;
  } catch (error) {
    if(isAxiosError(error)&& error.response){
      console.error("Error en getDriverAPI", error.response.data);
    } else{
            console.error("Error desconocido en getRoleAPI:", error);
    }
      throw error;
  }
}