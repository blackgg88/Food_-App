import Image from "next/image";
import { formatearPrecio } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { handleSetProducto, handleSetModal } = useQuiosco();
  const { id, nombre, imagen, precio } = producto;
  return (
    <div className="border p-4">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${imagen}.jpg`}
        alt={nombre}
      />
      <div className="flex flex-col justify-between p-5 h-40 md:h-64">
        <h3 className="font-bold text-lg">{nombre}</h3>
        <div>
          <p className="text-2xl font-black text-amber-500">
            {formatearPrecio(precio)}
          </p>

          <button
            type="button"
            className="w-full mt-5 p-3 uppercase font-bold text-white bg-indigo-600 hover:bg-indigo-800"
            onClick={() => {
              handleSetProducto(producto);
              handleSetModal();
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Producto;
