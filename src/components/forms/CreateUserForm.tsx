import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@/components/utilities-components/ErrorMessage";
import type { createUserFormData } from "@/schemas/typesAdmin";
import { useState } from "react";
import { getRoleAPI } from "@/api/RolAPI";
import type { Rol } from "@/schemas/typesAdmin";
import { useEffect } from "react";

type CreateUserFormProps = {
  register: UseFormRegister<createUserFormData>;
  errors: FieldErrors<createUserFormData>;
};

export default function CreateUserForm({
  register,
  errors,
}: CreateUserFormProps) {
  
  const [roles, setRoles] = useState<Rol[]>([]);
  const [loadingRoles, setLoadingRoles] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const { response } = await getRoleAPI(); 
        setRoles(response); 
      } catch (error) {
        console.error("Error cargando roles:", error);
      } finally {
        setLoadingRoles(false);
      }
    };

    fetchRoles();
  }, []);

  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nombre y apellido
          <span className="required">*</span>
        </label>

        <div className="input-icon-wrapper">
          <input
            id="name"
            type="text"
            placeholder="Pedro"
            className={`form-input ${
              errors.name ? "form-input-error" : "form-input-normal"
            }`}
            {...register("name", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
          />
        </div>
        {errors.name && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Usuario
          <span className="required">*</span>
        </label>

        <div className="input-icon-wrapper">
          <input
            id="username"
            type="text"
            placeholder="admin"
            className={`form-input ${
              errors.username ? "form-input-error" : "form-input-normal"
            }`}
            {...register("username", {
              required: "El username es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
          />
        </div>
        {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password <span className="required">*</span>
        </label>
        <div className="input-icon-wrapper">
          <input
            id="password"
            type="password"
            className={`form-input ${
              errors.password ? "form-input-error" : "form-input-normal"
            }`}
            {...register("password")}
          />
        </div>
        {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </div>

      {/* Rol */}
      <div className="form-group">
        <label htmlFor="role_id" className="form-label">
          Rol <span className="required">*</span>
        </label>

        <select
          id="role_id"
          className={`form-input ${
            errors.role_id ? "form-input-error" : "form-input-normal"
          }`}
          {...register("role_id", { required: "El rol es obligatorio" })}
          disabled={loadingRoles}
        >
          <option value="">Selecciona un rol</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        {errors.role_id && (
          <ErrorMessage>{errors.role_id.message}</ErrorMessage>
        )}
      </div>
    </div>
  );
}
