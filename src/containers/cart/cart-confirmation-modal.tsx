import { Button } from "../../components/button";
import { IconOrderConfirmed } from "../../components/icons/icon-order-confirmed";
import useCartStateStore, { CartItemT } from "../../store/cart-store";

type CartConfirmationModalProps = {
  setIsOpen: (param: boolean) => void;
};

export const CartConfirmationModal = ({
  setIsOpen,
}: CartConfirmationModalProps) => {
  const { cart } = useCartStateStore();
  const handleStartNewOrder = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex h-full flex-col justify-between gap-2 p-6 sm:gap-6">
      <div className="flex flex-col gap-2">
        <IconOrderConfirmed />
        <h1 className="flex flex-col text-4xl font-bold sm:flex-row sm:gap-2 sm:text-3xl">
          <span>Order</span>
          <span>Confirmed</span>
        </h1>
        <p className="text-rose400">We hope you enjoy your food!</p>
      </div>
      <div className="rounded-md bg-rose50 p-4">
        <ul className="flex flex-col divide-y-2 divide-gray-100 border-b-2 border-gray-100">
          {cart.map((item, index) => (
            <CartConfirmationItem
              key={`ConItem_${index}_${item.id}`}
              item={item}
            />
          ))}
        </ul>
        <div className="text-rose950 flex items-center justify-between pb-4 pt-8 sm:pb-2 sm:pt-6">
          <p>Order Total</p>
          <p className="text-2xl font-bold text-black">$46.50</p>
        </div>
      </div>
      <Button handleClick={handleStartNewOrder}>Start New Order</Button>
    </div>
  );
};

type CartConfirmationItemProps = {
  item: CartItemT;
};

const CartConfirmationItem = ({ item }: CartConfirmationItemProps) => {
  return (
    <li className="grid grid-cols-4 items-center gap-4 px-2 py-2 sm:grid-cols-6">
      <img
        src="/src/assets/images/image-waffle-thumbnail.jpg"
        alt=""
        className="py-2 sm:w-14"
      />
      <div className="col-span-2 my-2 mb-2 flex flex-col gap-1 text-sm">
        <h3 className="font-semibold text-rose900">{item.name}</h3>
        <div className="flex space-x-2">
          <p className="mr-2 font-semibold text-customRed">1 x</p>
          <p className="flex items-center gap-1 text-rose400">
            <span>@ ${item.price}</span>
          </p>
        </div>
      </div>
      <p className="justify-self-end text-lg font-semibold text-rose900 sm:col-span-3">
        ${(item.count * item.price).toFixed(2)}
      </p>
    </li>
  );
};
