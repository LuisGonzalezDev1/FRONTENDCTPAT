import { ErrorMessage } from "../utilities-components/ErrorMessage";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CreateDriverFormData } from "../../schemas/driversTypes";

type DriverFormProps = {
  register: UseFormRegister<CreateDriverFormData>;
  errors: FieldErrors<CreateDriverFormData>;
};

export default function DriverForm({ register, errors }: DriverFormProps) {
  return (
    <>
      <div>
        <label htmlFor="name">Nombre Piloto</label>
        <input
          id="name"
          type="text"
          placeholder="Pedro"
          {...register("name")}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div>
        <label htmlFor="identification">No. DPI</label>
        <input
          id="identification"
          type="number"
          placeholder="2956452541245"
          {...register("identification")}
        />
        {errors.identification && (
          <ErrorMessage>{errors.identification.message}</ErrorMessage>
        )}
      </div>

      <div>
        <label htmlFor="license">Licencia</label>
        <input
          id="license"
          type="text"
          placeholder="2956452541245"
          {...register("license")}
        />
        {errors.license && (
          <ErrorMessage>{errors.license.message}</ErrorMessage>
        )}
      </div>

      <div>
        <label htmlFor="carrier_id">Transportista</label>
        <input
          id="carrier_id"
          type="text"
          placeholder="2956452541245"
          {...register("carrier_id")}
        />
        {errors.carrier_id && (
          <ErrorMessage>{errors.carrier_id.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
