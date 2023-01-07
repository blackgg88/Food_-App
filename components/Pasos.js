import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

const Pasos = () => {
  const router = useRouter();

  const progreso = () => {
    switch (router.pathname) {
      case "/":
        return "w-4";
      case "/resumen":
        return "w-1/2";
      case "/total":
        return "w-full";
    }
  };
  return (
    <>
      <div className="flex justify-between mb-6">
        {pasos.map((paso) => (
          <button
            className="text-xl font-bold"
            key={paso.paso}
            onClick={() => router.push(paso.url)}
          >
            {paso.nombre}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className={`rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white ${progreso()}`}
        ></div>
      </div>
    </>
  );
};

export default Pasos;
