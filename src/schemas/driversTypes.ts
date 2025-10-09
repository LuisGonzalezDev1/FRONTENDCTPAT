import z from "zod";

export const createDriverSchema = z.object({
  name: z.string(),
  identification: z.number(),
  license: z.number(),
  carrier_id: z.number(),
});

export type CreateDriverFormData = z.infer<typeof createDriverSchema>;

const getDriverSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const ResponseDriverSchema = z.object({
  statusCode: z.number(),
  response: z.array(getDriverSchema),
  page: z.number(),
  total: z.number(),
  lastPage: z.number(),
});

export type DriverFormData = z.infer<typeof ResponseDriverSchema>

//carriers
export const createCarrierSchema = z.object({
  name: z.string()
})

export const getCarrierSchema = z.object({
  statusCode: z.number(),
  response: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
  page: z.number().optional(),
  total: z.number().optional(),
  lastPage: z.number().optional(),
});

export type CarrierFormData = z.infer<typeof createCarrierSchema>