import { create } from 'zustand';
import { createSelectors } from './createSelectors';

const initialState = {
  products: [],
  productsLoading: false,
  productsLoadingError: false,
  productsCategories: [],
  productsCategoriesLoading: false,
  productsCategoriesLoadingError: false,
  productsByCategory: [],
  productsByCategoryLoading: false,
  productsByCategoryLoadingError: false,
};

export const useProductStore = create((set) => ({
  ...initialState,
  fetchProducts: async () => {
    try {
      set((state) => ({ ...state, productsLoading: true }));
      const response = await fetch(
        'https://api.escuelajs.co/api/v1/products?offset=0&limit=12'
      );
      if (response.ok) {
        const data = await response.json();
        set((state) => ({ ...state, products: data }));
        set((state) => ({ ...state, productsLoading: false }));
      } else {
        console.log(response.statusText);
        set((state) => ({ ...state, productsLoadingError: true }));
      }
    } catch (error) {
      console.log(error);
      set((state) => ({ ...state, productsLoadingError: true }));
    }
  },

  fetchProductsCategories: async () => {
    try {
      set((state) => ({ ...state, productsCategoriesLoading: true }));
      const response = await fetch(
        'https://api.escuelajs.co/api/v1/categories'
      );
      if (response.ok) {
        const data = await response.json();
        set((state) => ({ ...state, productsCategories: data }));
        set((state) => ({ ...state, productsCategoriesLoading: false }));
      } else {
        console.log(response.statusText);
        set((state) => ({ ...state, productsCategoriesLoadingError: true }));
      }
    } catch (error) {
      console.log(error);
      set((state) => ({ ...state, productsCategoriesLoadingError: true }));
    }
  },

  fetchProductsByCategory: async (id) => {
    try {
      set((state) => ({ ...state, productsByCategoryLoading: true }));
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${id}/products`
      );
      if (response.ok) {
        const data = await response.json();
        set((state) => ({ ...state, productsByCategory: data }));
        set((state) => ({ ...state, productsByCategoryLoading: false }));
      } else {
        console.log(response.statusText);
        set((state) => ({ ...state, productsByCategoryLoadingError: true }));
      }
    } catch (error) {}
  },
}));

export const useProductsSelectors = createSelectors(useProductStore);
