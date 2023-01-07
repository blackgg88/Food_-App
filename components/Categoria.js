import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { id, nombre, icono } = categoria;
  const { categoriaActual, handleSetCategoriaActual } = useQuiosco();
  return (
    <div
      className={`
      ${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-5 border p-5 hover:bg-amber-400 hover:cursor-pointer`}
      onClick={() => handleSetCategoriaActual(id)}
    >
      <Image
        width={60}
        height={60}
        src={`/assets/img/icono_${icono}.svg`}
        alt="icono image"
      />
      <p className="text-xl font-bold ">{nombre}</p>
    </div>
  );
};

export default Categoria;
