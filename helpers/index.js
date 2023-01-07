export const formatearPrecio = (precio) => {
  return precio.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
