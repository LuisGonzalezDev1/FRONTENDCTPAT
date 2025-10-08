import type { CreateDriverFormData } from "../schemas/driversTypes";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import DriverForm from "../components/forms/DriverForm";
import {createDriverAPI} from "../api/DriversAPI.ts"

export default function CreateRol() {
  const navigate = useNavigate();
  const initialValues: CreateDriverFormData = { name: "", identification:0, license:0, carrier_id:0};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDriverFormData>({
    defaultValues: initialValues,
    mode: "onChange",
  });
  
  const { mutate } = useMutation({
    mutationFn: createDriverAPI,
    onError: (error) => toast.error(error.message),
    onSuccess: (response) => {
      toast.success(response);
      navigate("/driver");
    },
  });
  
  const handleForm = async (data: CreateDriverFormData) => mutate(data);
  
  return (
    <div>
      <div>
        <div>
          <h1>
            Crear Nuevo Conductor
          </h1>
        </div> 

        <div>
          <Link
            to="/driver"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Regresar
          </Link>
        </div>

        <div>
          <form
            className="p-8 space-y-6"
            onSubmit={handleSubmit(handleForm)}
            noValidate
          >
            <DriverForm register={register} errors={errors} />
            <button
              type="submit"
            >
              Crear 
            </button>
          </form>
        </div>

        {/* Footer */}
        <div>
          <p>Los cambios se aplicarán inmediatamente después de crear el rol</p>
        </div>
      </div>
    </div>
  );
}
