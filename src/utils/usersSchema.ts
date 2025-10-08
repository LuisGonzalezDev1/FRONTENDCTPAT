import { z } from "zod";

export const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    username: z.string(),
    status: z.boolean(),
    role: z.string(),
    password: z.string().optional(),
    permissions: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
        })
    ),
});

export const usersSchema = z.object({
    data: z.array(userSchema.pick({ id: true, name: true, username: true, status: true, role: true })),
});

export const draftUserSchema = userSchema.pick({ id: true, name: true, username: true, status: true, role: true, password: true }).extend({
    permissions: z.array(z.string())
});
