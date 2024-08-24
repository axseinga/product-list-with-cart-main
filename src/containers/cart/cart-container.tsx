import React from "react";
import { CartItem } from "../../components/cart-item";
import { Modal } from "../../components/modal";
import ReactDOM from "react-dom";
import { Button } from "../../components/button";
import { CartEmpty } from "./cart-empty";
import { CartConfirmationModal } from "./cart-confirmation-modal";
import useCartStateStore from "../../store/cart-store";
import IconCarbonNeutral from "../../assets/images/icon-carbon-neutral.svg";

export const CartContainer = () => {
  const { cart } = useCartStateStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const calcSubtotalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      const totalItemsPrice = product.count * product.price;
      total += totalItemsPrice;
    });
    return total;
  };

  return (
    <div className="mx-auto mt-10 w-full rounded-xl bg-white p-4 sm:w-[30rem] lg:mt-3">
      <h2 className="mb-4 text-2xl font-bold text-customRed">
        Your Cart ({cart.length})
      </h2>
      {cart?.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <div className="flex flex-col gap-7">
            <ul className="flex flex-col gap-2 divide-y-2 divide-gray-100 border-b-2 border-gray-100">
              {cart.map((item, index) => (
                <CartItem key={`${index}_${item.id}`} item={item} />
              ))}
            </ul>
            <div className="text-rose950 flex items-center justify-between">
              <p>Order Total</p>
              <p className="text-2xl font-bold text-black">
                ${calcSubtotalPrice().toFixed(2)}
              </p>
            </div>
            <div className="mx-1 flex items-center justify-center gap-2 rounded-md bg-rose100 py-4 text-center text-sm">
              <img src={IconCarbonNeutral} alt="" />
              <p>
                This is <span className="font-semibold">carbon neutral</span>
                delivery
              </p>
            </div>
            <Button handleClick={() => setIsModalOpen(true)}>
              Confirm Order
            </Button>
          </div>
          {isModalOpen &&
            ReactDOM.createPortal(
              <Modal isModalOpen={isModalOpen}>
                <CartConfirmationModal setIsOpen={setIsModalOpen} />
              </Modal>,
              document.body,
            )}
        </>
      )}
    </div>
  );
};
