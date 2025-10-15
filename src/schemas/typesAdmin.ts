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

export const getRoleSchema = z.object({
  statusCode: z.number(),
  response: z.array(rolSchema),
  page: z.number(),
  total: z.number(),
  lastPage: z.number(),
});


export type GetRolesResponse = z.infer<typeof getRoleSchema>;
export type Rol = z.infer<typeof rolSchema>;
export type CreateRolFormData = z.infer<typeof createRolSchema>;

// crete user
export const createUserSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .regex(/[A-Za-z]/, "Debe contener al menos una letra")
    .regex(/\d/, "Debe contener al menos un número")
    .refine(
      (val) =>
        !["123", "1234", "12345", "password", "admin", "luis"].includes(
          val.toLowerCase()
        ),
      {
        message: "La contraseña es demasiado común o insegura",
      }
    ),
  role_id: z.number()
});

export type createUserFormData = z.infer<typeof createUserSchema>