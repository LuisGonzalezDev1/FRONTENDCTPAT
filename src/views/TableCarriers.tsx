import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getCarrierAPI } from "../api/CarriersAPI";

export default function TableCarriers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["carrier"],
    queryFn: getCarrierAPI,
  });

  const carriers = data?.response || [];
  if (isLoading) return <p>Cargando roles...</p>;
  if (isError) return <p>Error al cargar los datos.</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="max-w-6xl w-full">
        <div className="table-container">
          <div className="table-header flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h2 className="table-title">Lista de conductores</h2>
            <Link
              to="/carriers/create"
              className="btn-primary whitespace-nowrap"
            >
              Crear Transportista
            </Link>
          </div>

          <div className="overflow-x-auto">
            {carriers.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th className="table-cell-center">ID</th>
                    <th className="table-cell-center">Nombre</th>
                    <th className="table-cell-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {carriers.map((carrier) => (
                    <tr key={carrier.id}>
                      <td className="table-cell-center">{carrier.id}</td>
                      <td className="table-cell-center">{carrier.name}</td>

                      <td className="table-cell-center">
                        <div className="table-actions justify-center">
                          <button
                            className="btn-icon btn-icon-primary"
                            title="Editar"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            className="btn-icon"
                            style={{
                              borderColor: "#dc2626",
                              color: "#dc2626",
                            }}
                            title="Eliminar"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center py-10 text-gray-500">
                No hay roles registrados.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
