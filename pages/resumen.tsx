import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";
import ResumenProducto from "../components/ResumenProducto";

export default function Resumen() {
  const { pedido } = useQuiosco();

  return (
    <Layout pagina="Resumen">
      <h1 className="text-3xl font-black">Resumen</h1>
      <p className="text-xl my-5">Resumen del Pedido</p>

      {!pedido.length ? (
        <p className="text-2xl text-center">No hay productos en el carrito</p>
      ) : (
        pedido.map((producto: any) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
