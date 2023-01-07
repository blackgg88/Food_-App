import Layout from "../layout/Layout";
import Producto from "../components/Producto";

import useQuiosco from "../hooks/useQuiosco";

export default function Home() {
  const { categoriaActual } = useQuiosco();

  return (
    <>
      <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
        <h1 className="text-3xl font-black">{categoriaActual?.nombre}</h1>
        <p className="text-xl my-5">
          Elige y personaliza tu pedido a continuacion
        </p>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {categoriaActual?.productos?.map((producto: any) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      </Layout>
    </>
  );
}
