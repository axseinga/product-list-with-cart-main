import React from "react";
import { ProductItemT } from "../types";
import { IconAdd } from "./icons/icon-add";
import { IconDecrement } from "./icons/icon-decrement";
import { IconIncrement } from "./icons/icon-increment";

type ProductItemProps = {
  item: ProductItemT;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  const [isSelected, setISelected] = React.useState(false);
  const [count, setCount] = React.useState(1);

  const baseStyleButtonAddToCart =
    "absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 transform items-center rounded-full border p-3 px-4 font-semibold transition-all w-[10rem]";
  const styleButtonRound =
    "flex h-5 w-5 items-center justify-center rounded-full border-2 border-rose-100";

  return (
    <div className="flex flex-col gap-8">
      <div className="relative">
        <div
          className={`cursor-pointer overflow-hidden rounded-xl ${isSelected ? "border-4 border-customRed" : "border-4 border-transparent"}`}
          onClick={() => setISelected((prev) => !prev)}
        >
          <picture>
            <source media="(max-width: 640px)" srcSet={item.image.mobile} />
            <source media="(max-width: 768px)" srcSet={item.image.tablet} />
            <img
              className="pointer-events-none w-full object-cover"
              src={item.image.desktop}
              alt=""
            />
          </picture>
        </div>
        {isSelected ? (
          <div
            className={`${baseStyleButtonAddToCart} justify-between border-rose-950 bg-customRed text-rose-100`}
          >
            <button
              className={styleButtonRound}
              onClick={() => {
                if (count <= 1) return;
                setCount((prev) => prev - 1);
              }}
            >
              <IconDecrement />
            </button>{" "}
            <span>{count}</span>{" "}
            <button
              className={styleButtonRound}
              onClick={() => {
                if (count === 100) return;
                setCount((prev) => prev + 1);
              }}
            >
              <IconIncrement />
            </button>
          </div>
        ) : (
          <button
            className={`${baseStyleButtonAddToCart} justify-evenly border-rose-950 bg-white hover:border-customRed hover:text-customRed`}
            onClick={() => setISelected((prev) => !prev)}
          >
            <IconAdd />
            <span>Add to cart</span>
          </button>
        )}
      </div>
      <div>
        <p className="text-rose400">{item.category}</p>
        <p className="text-lg font-semibold text-rose900">{item.name}</p>
        <p className="text-lg font-semibold text-customRed">
          ${item.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
