import { CartContainer } from "./containers/cart-container";
import { ProductsList } from "./containers/products-list";

export const App = () => {
  return (
    <main
      id="main"
      className="relative flex w-full flex-col gap-6 bg-rose100 p-6 lg:flex-row lg:items-start xl:p-20"
    >
      <ProductsList title="Desserts" />
      <CartContainer />
    </main>
  );
};

export default App;
