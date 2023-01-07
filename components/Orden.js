import Image from "next/image";
import { formatearPrecio } from "../helpers";
import { toast } from "react-toastify";
import axios from "axios";

const Orden = ({ orden }) => {
  const { id, nombre, total, pedido } = orden;

  const completarOrden = async () => {
    try {
      await axios.put(`/api/ordenes/${id}`);

      toast.success("Pedido Completado!", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("Ocurrio un Error!", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="border p-10 space-y-5 my-10 shadow-lg">
      <h1 className="text-xl font-bold">Orden: {id}</h1>
      <p className="text-base my-5 font-semibold">Cliente: {nombre}</p>

      <div>
        {pedido.map((producto) => (
          <div
            key={producto.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${producto.imagen}.jpg`}
                alt={producto.nombre}
              />
            </div>
            <div className="p-5 space-y-3">
              <h4 className="text-lg font-semibold text-amber-500">
                {producto.nombre}
              </h4>
              <p className="font-semibold">Cantidad: {producto.cantidad}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-xl text-amber-500">
          Total a pagar: {formatearPrecio(total)}
        </p>

        <button
          className="bg-indigo-600 hover:bg-indigo-800 mt-5 md:mt-0 py-3 px-10 uppercase font-bold text-white rounded-lg"
          type="button"
          onClick={completarOrden}
        >
          Completar Orden
        </button>
      </div>
    </div>
  );
};

export default Orden;
