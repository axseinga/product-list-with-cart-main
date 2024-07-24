import React from "react";
import { CartItem } from "../components/cart-item";
import { Modal } from "../components/modal";
import ReactDOM from "react-dom";
import { Button } from "../components/button";
import { IconOrderConfirmed } from "../components/icons/icon-order-confirmed";

export const CartContainer = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const cartItems = [1];

  return (
    <div className="mx-auto mt-10 w-full rounded-xl bg-white p-4 sm:w-[30rem] lg:mt-3">
      <h2 className="mb-4 text-2xl font-bold text-customRed">Your Cart (0)</h2>
      {cartItems?.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <div className="flex flex-col gap-7">
            <ul className="flex flex-col gap-2 divide-y-2 divide-gray-100 border-b-2 border-gray-100">
              <CartItem />
              <CartItem />
              <CartItem />
            </ul>
            <div className="text-rose950 flex items-center justify-between">
              <p>Order Total</p>
              <p className="text-2xl font-bold text-black">$46.50</p>
            </div>
            <div className="mx-1 flex items-center justify-center gap-2 rounded-md bg-rose100 py-4 text-center text-sm">
              <img src="/src/assets/images/icon-carbon-neutral.svg" alt="" />
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
                <OrderConfirmationModal setIsOpen={setIsModalOpen} />
              </Modal>,
              document.body,
            )}
        </>
      )}
    </div>
  );
};

const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-6">
      <img src="/src/assets/images/illustration-empty-cart.svg" alt="" />
      <p>Your added items will appear here</p>
    </div>
  );
};

type OrderConfirmationModalProps = {
  setIsOpen: (param: boolean) => void;
};

const OrderConfirmationModal = ({ setIsOpen }: OrderConfirmationModalProps) => {
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
        <ul className="divide-y-2 divide-gray-100 border-b-2 border-gray-100 flex flex-col">
          <OrderConfirmationItem />
          <OrderConfirmationItem />
          <OrderConfirmationItem />
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

const OrderConfirmationItem = () => {
  return (
    <li className="grid grid-cols-4 items-center gap-4 px-2 py-2 sm:grid-cols-6">
      <img
        src="/src/assets/images/image-waffle-thumbnail.jpg"
        alt=""
        className="py-2 sm:w-14"
      />
      <div className="col-span-2 my-2 mb-2 flex flex-col gap-1 text-sm">
        <h3 className="font-semibold text-rose900">Classic Tiramisu</h3>
        <div className="flex space-x-2">
          <p className="mr-2 font-semibold text-customRed">1 x</p>
          <p className="flex items-center gap-1 text-rose400">
            <span>@ $5.50</span>
          </p>
        </div>
      </div>
      <p className="justify-self-end text-lg font-semibold text-rose900 sm:col-span-3">
        $5.50
      </p>
    </li>
  );
};
