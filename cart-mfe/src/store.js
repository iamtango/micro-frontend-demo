import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  count: 0,
  addToCart: (item) => set((state) => ({
    cartItems: [...state.cartItems, item],
    count: state.count + 1
  })),
  clearCart: () => set({ cartItems: [], count: 0 }),
}));

export default useCartStore;
