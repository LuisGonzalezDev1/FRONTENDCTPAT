import { useEffect, useState } from "react";
import { ErrorMessage } from "../utilities-components/ErrorMessage";
import { getContainerAPI } from "@/api/ContainerAPI";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CreateCtpatFormData } from "@/schemas/types";

type CtpatFormProps = {
  register: UseFormRegister<CreateCtpatFormData>;
  errors?: FieldErrors<CreateCtpatFormData>;
};

export default function CtpatForm({ register, errors }: CtpatFormProps) {
  const [containers, setContainers] = useState<{ id: number; container: string }[]>([]);
  const [loadingContainers, setLoadingContainers] = useState<boolean>(true);

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const { response } = await getContainerAPI();
        setContainers(response);
      } catch (error) {
        console.error("Error al cargar los contenedores:", error);
      } finally {
        setLoadingContainers(false);
      }
    };
    fetchContainers();
  }, []);

  return (
    <div className="form-container space-y-6">
      {/* Destino */}
      <div className="form-group">
        <label htmlFor="destination" className="form-label">
          Destino <span className="required">*</span>
        </label>
        <input
          id="destination"
          type="text"
          placeholder="DESTINO"
          className={`form-input ${errors?.destination ? "form-input-error" : "form-input-normal"}`}
          {...register("destination", { required: "El destino es obligatorio" })}
        />
        {errors?.destination && <ErrorMessage>{errors.destination.message}</ErrorMessage>}
      </div>

      {/* Contenedor */}
      <div className="form-group">
        <label htmlFor="container_id" className="form-label">
          Contenedor <span className="required">*</span>
        </label>
        <select
          id="container_id"
          className={`form-input ${errors?.container_id ? "form-input-error" : "form-input-normal"}`}
          {...register("container_id", { required: "El contenedor es obligatorio" })}
          disabled={loadingContainers}
        >
          <option value="">Selecciona un contenedor</option>
          {containers.map((container) => (
            <option key={container.id} value={container.id}>
              {container.container}
            </option>
          ))}
        </select>
        {errors?.container_id && <ErrorMessage>{errors.container_id.message}</ErrorMessage>}
      </div>

      {/* Sitio de salida */}
      <div className="form-group">
        <label htmlFor="departure_site" className="form-label">
          Sitio de salida <span className="required">*</span>
        </label>
        <input
          id="departure_site"
          type="text"
          placeholder="AGROINDUSTRIA LEGUMEX, EL TEJAR, CHIMALTENANGO, GUATEMALA"
          className={`form-input ${errors?.departure_site ? "form-input-error" : "form-input-normal"}`}
          {...register("departure_site", { required: "El sitio de salida es obligatorio" })}
        />
        {errors?.departure_site && <ErrorMessage>{errors.departure_site.message}</ErrorMessage>}
      </div>

      {/* Imagen */}
      <div className="form-group">
        <label htmlFor="image" className="form-label">
          Imagen <span className="required">*</span>
        </label>
        <input
          id="image"
          type="text"
          placeholder="data:image/jpeg;base64,..."
          className={`form-input ${errors?.images?.[0]?.image ? "form-input-error" : "form-input-normal"}`}
          {...register("images.0.image", { required: "La imagen es obligatoria" })}
        />
        {errors?.images?.[0]?.image && <ErrorMessage>{errors.images[0].image?.message}</ErrorMessage>}
      </div>

      {/* Tipo */}
      <div className="form-group">
        <label htmlFor="type" className="form-label">
          Tipo <span className="required">*</span>
        </label>
        <input
          id="type"
          type="text"
          placeholder="CONTAINER PICTURES"
          className={`form-input ${errors?.images?.[0]?.type ? "form-input-error" : "form-input-normal"}`}
          {...register("images.0.type", { required: "El tipo es obligatorio" })}
        />
        {errors?.images?.[0]?.type && <ErrorMessage>{errors.images[0].type?.message}</ErrorMessage>}
      </div>

      {/* Descripción */}
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Descripción <span className="required">*</span>
        </label>
        <input
          id="description"
          type="text"
          placeholder="Back of the container"
          className={`form-input ${errors?.images?.[0]?.description ? "form-input-error" : "form-input-normal"}`}
          {...register("images.0.description", { required: "La descripción es obligatoria" })}
        />
        {errors?.images?.[0]?.description && <ErrorMessage>{errors.images[0].description?.message}</ErrorMessage>}
      </div>
    </div>
  );
}
