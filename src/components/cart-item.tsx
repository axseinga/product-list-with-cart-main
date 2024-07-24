import { IconRemove } from "./icons/icon-remove";

export const CartItem = () => {
  return (
    <li className="flex items-center justify-between pb-2">
      <div className="my-2 mb-2 flex flex-col gap-1">
        <h3 className="font-semibold text-rose900">Classic Tiramisu</h3>
        <div className="flex space-x-2">
          <p className="mr-2 font-semibold text-customRed">1 x</p>
          <p className="flex items-center gap-1 text-rose400">
            <span>@ $5.50</span>
            <span className="font-semibold">$5.50</span>
          </p>
        </div>
      </div>
      <button className="group rounded-full border border-rose400 p-1 hover:border-black transition-all duration-300">
        <IconRemove/>
      </button>
    </li>
  );
};
