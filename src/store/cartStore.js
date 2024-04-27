import { create } from 'zustand';
import { createSelectors } from './createSelectors';
import { toast } from 'react-toastify';

export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  addToCart: (product) => {
    set((state) => {
      const existingInCart = state.cart.find((item) => item.id === product.id);
      if (!existingInCart) {
        toast.success(`${product.title} has been added to your cart`);
        return {
          cart: [...state.cart, product],
        };
      } else {
        toast.warning(`${product.title} is already in your cart`);
        return {
          cart: [...state.cart],
        };
      }
    });
  },
  removeFromCart: (id, productTitle) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
    toast.success(`${productTitle} has been removed from your cart`)
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
