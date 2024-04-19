import { create } from 'zustand';
import { createSelectors } from './createSelectors';

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  addToCart: (product) => {
    set((state) => {
      const existingInCart = state.cart.find((item) => item.id === product.id);
      if (!existingInCart) {
        return {
          cart: [...state.cart, product],
        };
      } else {
        alert('already in cart');
        return {
          cart: [...state.cart],
        };
      }
    });
  },
  removeFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => {
    set(() => ({
      cart: [],
    }));
  },
  increaseQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      }),
    }));
  },
  decreaseQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((product) => {
        if (product.id === id) {
          if (product.quantity > 1) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        } else {
          return product;
        }
      }),
    }));
  },
}));

export const useCartSelectors = createSelectors(useCartStore);
