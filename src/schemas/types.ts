import z from "zod";

//driver
export const createDriverSchema = z.object({
  name: z.string(),
  identification: z.number(),
  license: z.number(),
  carrier_id: z.number(),
});

export const createDriverResponseSchema = z.object({
  statusCode: z.number(),
  message: z.string(),
  response: z.object({
    id: z.number(),
    name: z.string(),
    identification: z.string(),
    license: z.string(),
  }).optional(), // opcional porque en error no habrá response
});

export const driverSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const getDriverSchema = z.object({
  statusCode: z.number(),
  response: z.array(driverSchema),
  page: z.number(),
  total: z.number(),
  lastPage: z.number(),
});

export type CreateDriverFormData = z.infer<typeof createDriverSchema>;
export type GetDriverResponse = z.infer<typeof getDriverSchema>;
export type CreateDriverResponse = z.infer<typeof createDriverResponseSchema>;


//carriers
export const carrierSchema = z.object({
  name: z.string(),
});

export const createCarrierResponseSchema = z.object({
  statusCode: z.number(),
  message: z.string(),
  response: z
    .object({
      id: z.number(),
      name: z.string(),
      createdAt: z.string(),
    })
    .optional(), //optional, may or may not be included
});

export const getCarrierSchema = z.object({
  response: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
  page: z.number(),
  total: z.number(),
  lastPage: z.number(),
});

export type createCarrierFormSchema = z.infer<typeof carrierSchema>;
export type CreateCarrierResponse = z.infer<typeof createCarrierResponseSchema>;
export type CarrierFormData = z.infer<typeof getCarrierSchema>;

//container
export const ContainerSchema = z.object({
  container: z.string(),
  seal: z.number(),
  sensor: z.number(),
  type: z.string(),
});

export const containerItemSchema = z.object({
  id: z.number(),
  container: z.string(),
  seal: z.number(),
  sensor: z.number(),
  type: z.string(),
});

export const getContainersResponseSchema = z.object({
  statusCode: z.number(),
  response: z.array(containerItemSchema),
  page: z.number(),
  total: z.number(),
  lastPage: z.number(),
});

export type GetContainersResponse = z.infer<typeof getContainersResponseSchema>;
export type CreateContainerFormData = z.infer<typeof ContainerSchema>;

//ctpats
const ImageSchema = z.object({
  image: z.string(),
  type: z.string(),
  description: z.string(),
});

export const ctpatResponseSchema = z.object({
  statusCode: z.literal(200),
  message: z.literal("Ctpat Creado Correctamente")
});

export const CtpatSchema = z.object({
  destination: z.string(),
  container_id: z.number(),
  departure_site: z.string(),
  images: z.array(ImageSchema),
});

export type CreateCtpatFormData = z.infer<typeof CtpatSchema>;
export type CtpatResponseData = z.infer<typeof ctpatResponseSchema>
