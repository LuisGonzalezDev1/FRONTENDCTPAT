import { z } from "zod";

//login
export const loginRequestSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const loginResponseSchema = z.object({
  statusCode: z.number(),
  id: z.number(),
  name: z.string(),
  username: z.string(),
  role: z.string(),
  token: z.string(),
});
export type LoginRequest = z.infer<typeof loginRequestSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;

//rol
export const createRolSchema = z.object({
  name: z.string().min(1, "El nombre del rol es obligatorio"),
});
export const rolSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const getRolesSchema = z.object({
  statusCode: z.number(),
  response: z.array(rolSchema),
});

export type CreateRolFormData = z.infer<typeof createRolSchema>;
export type Rol = z.infer<typeof rolSchema>;
export type GetRolesResponse = z.infer<typeof getRolesSchema>;

// crete user

export const createUserSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
  rol_id: z.number()
});

export type createUserFormData = z.infer<typeof createUserSchema>