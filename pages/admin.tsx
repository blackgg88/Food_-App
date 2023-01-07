import useSwR from "swr";
import axios from "axios";

import AdminLayout from "../layout/AdminLayout";
import Orden from "../components/Orden";

export default function Admin() {
  const fetcher = () => axios("/api/ordenes").then((datos) => datos.data);
  const { data, error, isLoading } = useSwR("/api/ordenes", fetcher, {
    refreshInterval: 100,
  });

  return (
    <>
      <AdminLayout pagina={"Admin"}>
        <h1 className="text-3xl font-black">Panel de Administracion</h1>
        <p className="text-xl my-5">Administrar ordenes</p>

        {data?.length ? (
          data?.map((orden: any) => <Orden key={orden.id} orden={orden} />)
        ) : (
          <p>No hay ordenes pendientes</p>
        )}
      </AdminLayout>
    </>
  );
}
