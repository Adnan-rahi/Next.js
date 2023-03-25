export const routes = {
  app: {
    home: "/",
  },
  product: {
    home: "/product",
    productDetails: (id) => `/product/${id}`,
  },
};
