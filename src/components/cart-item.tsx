import useCartStateStore, { CartItemT } from "../store/cart-store";
import { IconRemove } from "./icons/icon-remove";

type CartItemProps = {
  item: CartItemT;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { removeItemFromCart } = useCartStateStore();

  return (
    <li className="flex items-center justify-between pb-2">
      <div className="my-2 mb-2 flex flex-col gap-1">
        <h3 className="font-semibold text-rose900">{item.name}</h3>
        <div className="flex space-x-2">
          <p className="mr-2 font-semibold text-customRed">{item.count} x</p>
          <p className="flex items-center gap-1 text-rose400">
            <span>@ ${item.price.toFixed(2)}</span>
            <span className="font-semibold">${(item.price * item.count).toFixed(2)}</span>
          </p>
        </div>
      </div>
      <button
        className="group rounded-full border border-rose400 p-1 transition-all duration-300 hover:border-black"
        onClick={() => removeItemFromCart(item.id)}
      >
        <IconRemove />
      </button>
    </li>
  );
};
