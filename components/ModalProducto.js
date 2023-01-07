import { useState, useEffect } from "react";
import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { formatearPrecio } from "../helpers";

const ModalProducto = () => {
  const [cantidad, setCantidad] = useState(1);
  const [editarPedido, setEditarPedido] = useState(false);

  const { producto, pedido, handleSetModal, handleAñadirPedido } = useQuiosco();

  useEffect(() => {
    pedido.map((productoStage) => {
      if (productoStage.id === producto.id) {
        setCantidad(productoStage.cantidad);
        setEditarPedido(true);
      }
    });
  }, [producto]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={producto.nombre}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleSetModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <h1 className="text-xl font-bold">{producto.nombre}</h1>
        <p className="mt-5 text-2xl font-black text-amber-500">
          {formatearPrecio(producto.precio)}
        </p>

        <div className="flex mt-4">
          <button
            type="button"
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <p className="text-xl font-bold p-5">{cantidad}</p>

          <button
            type="button"
            onClick={() => {
              if (cantidad >= 5) return;
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="mt-5 px-5 py-2 uppercase font-bold text-white bg-indigo-600 hover:bg-indigo-800"
          onClick={() => {
            handleAñadirPedido({ ...producto, cantidad });
          }}
        >
          {editarPedido ? "Guardar Cambios" : "Añadir al Pedido"}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
