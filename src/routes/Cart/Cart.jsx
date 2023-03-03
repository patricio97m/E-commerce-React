import ProductsTable from "../../Components/ProductsTable/ProductsTable";

const Cart = () => {
  return (
    <main className="bg-dark pt-3 pb-3 background">
      <div className="text-center">
        <h1 className="bg-light text-uppercase d-inline px-3">
          Carrito de compras
        </h1>
      </div>
      <div className="container mt-4">
        <ProductsTable />
      </div>
    </main>
  );
};

export default Cart;
