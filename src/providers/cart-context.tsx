/* eslint-disable no-unused-vars */
'use client';
import React, { createContext, useCallback } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    images: {
        src: string;
    }
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    cartTotal: number;
    addItem: (product: any) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = (children: React.ReactNode) => {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const addItem = useCallback((product: any)=>{
    setItems((prevItems) => {
      const existingItemIndex = prevItems.find((item) => item.id === product.id);
      if (existingItemIndex) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  },[]);
  const removeItem = useCallback((productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== Number(productId)));
  },[]);
  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity < 1) {
      return removeItem(productId);
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    );
  },[removeItem]);
  const clearCart = useCallback(() => {
    setItems([]);
  },[]);
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <CartContext.Provider value={{items, addItem, removeItem, updateQuantity, clearCart, isOpen, setIsOpen, cartTotal}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
