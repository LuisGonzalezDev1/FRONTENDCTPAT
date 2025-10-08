
import api from "../components/config/axios";
import { isAxiosError } from "axios";
import type { LoginRequest } from "../schemas/typesAdmin";
import type{ LoginResponse } from "../schemas/typesAdmin";
import { loginRequestSchema,loginResponseSchema } from "../schemas/typesAdmin";

export async function loginApi(formData: LoginRequest): Promise<LoginResponse> {
  try {
    const parsedData = loginRequestSchema.parse(formData);
    const { data } = await api.post("/auth/login", parsedData);
    const parsedResponse = loginResponseSchema.parse(data);
    return parsedResponse;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Error en el login");
    }
    throw error;
  }
}

// export async function logout() {
//     try {
//         const url = '/api/logout';
//         const { data } = await clienteAxios.post<string>(url, null);
//         return data;
//     } catch (error) {
//         if (isAxiosError(error)) {
//             throw new Error(error.response?.data.msg);
//         }
//     }
// }

// export async function getUser() {
//     try {
//         const { data } = await clienteAxios('/api/user');
//         const result = authenticatedUser.safeParse(data);
//         if (result.success) {
//             return result.data;
//         }
//     } catch (error) {
//         if (isAxiosError(error)) {
//             throw new Error(error.response?.data.msg);
//         }
//     }
// }