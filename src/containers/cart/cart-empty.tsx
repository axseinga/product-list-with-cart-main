import EmptyCartImage from "../../assets/images/illustration-empty-cart.svg";

export const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-6">
      <img src={EmptyCartImage} alt="" />
      <p>Your added items will appear here</p>
    </div>
  );
};
