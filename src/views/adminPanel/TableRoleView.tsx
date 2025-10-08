
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoleAPI } from "../../api/AdminAPI";
import { Pencil, Trash2 } from "lucide-react";

export default function UserTableView() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["roles"],
    queryFn: getRoleAPI,
  });

  if (isLoading) return <p>Cargando roles...</p>;
  if (isError) return <p>Error al cargar los datos.</p>;

  const roles = data?.response || [];

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="max-w-6xl w-full">
        <div className="table-container">
          <div className="table-header flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h2 className="table-title">Lista de Roles</h2>
            <Link to="/rol/create" className="btn-primary whitespace-nowrap">
              Crear Rol
            </Link>
          </div>

          <div className="overflow-x-auto">
            {roles.length > 0 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th className="table-cell-center">ID</th>
                    <th>Nombre del Rol</th>
                    <th className="table-cell-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((rol) => (
                    <tr key={rol.id}>
                      <td className="table-cell-center">{rol.id}</td>
                      <td>{rol.name}</td>
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


