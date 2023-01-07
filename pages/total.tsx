import { useEffect } from "react";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import { formatearPrecio } from "../helpers";

export default function Total() {
  const { pedido, nombre, setNombre, enviarOrder, total } = useQuiosco();
  return (
    <Layout pagina="Confirmar Pedido">
      <h1 className="text-3xl font-black">Confirmar Pedido</h1>
      <p className="text-xl my-5">Datos del Pedido</p>

      <div className="mt-10">
        <form onSubmit={enviarOrder}>
          <div className="flex flex-col">
            <label
              htmlFor="nombre"
              className="font-bold text-slate-600 uppercase"
            >
              nombre
            </label>
            <input
              id="nombre"
              type="text"
              className="lg:w-1/3 bg-slate-200 rounded mt-2 py-1 px-2"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>

          <p className="text-lg font-semibold mt-10">
            Total a pagar: {formatearPrecio(total)}
          </p>
          <div className="mt-5">
            <button
              type="submit"
              className={`${
                pedido.length === 0 || nombre === ""
                  ? "bg-indigo-100"
                  : "bg-indigo-600 hover:bg-indigo-600"
              } py-2 px-5 text-center font-bold uppercase text-white rounded sm:w-full md:w-auto`}
              disabled={pedido.length === 0 || nombre === ""}
            >
              Confirmar Pedido
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
