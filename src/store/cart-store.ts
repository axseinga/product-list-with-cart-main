import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItemT {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  count: number;
}

export enum CartOperationT {
  increase = "increase",
  descrease = "decrease",
}

type CartStateStoreT = {
  cart: CartItemT[];
  addItemToCart: (item: CartItemT) => void;
  updateItemCount: (item: CartItemT, operation: CartOperationT) => void;
  removeItemFromCart: (id: CartItemT["id"]) => void;
  clearCart: () => void;
};

const useCartStateStore = create<CartStateStoreT>()(
  persist(
    (set) => {
      return {
        cart: [],
        addItemToCart(item) {
          set((state) => {
            const existingItem = state.cart.find(
              (existingItem) => existingItem.id === item.id,
            );
            if (!existingItem) {
              return {
                cart: [...state.cart, item],
              };
            }
            return {
              cart: state.cart.map((existingItem) => {
                if (existingItem.id === item.id) {
                  return {
                    ...existingItem,
                    count: existingItem.count + item.count,
                  };
                }
                return existingItem;
              }),
            };
          });
        },
        updateItemCount(item, operation) {
          set((state) => {
            const existingItem = state.cart.find(
              (existingItem) => existingItem.id === item.id,
            );
            if (!existingItem) {
              return {
                cart: [...state.cart, item],
              };
            }
            return {
              cart: state.cart.map((existingItem) => {
                if (existingItem.id === item.id) {
                  if (operation === CartOperationT.increase) {
                    return { ...existingItem, count: existingItem.count + 1 };
                  } else {
                    return { ...existingItem, count: existingItem.count - 1 };
                  }
                }
                return existingItem;
              }),
            };
          });
        },
        removeItemFromCart(id) {
          set((state) => {
            const existingItem = state.cart.find(
              (existingItem) => existingItem.id === id,
            );
            if (existingItem) {
              return {
                cart: state.cart.filter(
                  (existingItem) => existingItem.id !== id,
                ),
              };
            } else
              return {
                cart: state.cart,
              };
          });
        },
        clearCart() {
          set(() => {
            return {
              cart: [],
            };
          });
        },
      };
    },
    {
      name: "DESSERTS_SHOPPING_CART",
    },
  ),
);

export default useCartStateStore;
