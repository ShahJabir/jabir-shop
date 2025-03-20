/* eslint-disable no-unused-vars */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { MoreVertical, ShoppingCart, X } from 'lucide-react';

import { useCart } from '@/hooks/use-cart';
import { navbarData } from '@/lib/data';

import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

/* eslint-disable no-unused-vars */

type ProductGridProps = {
  products: any[];
};

export const ProductGrid = ({ products }: ProductGridProps) => {
  const [toggle, setToggle] = useState(false);
  const { isOpen, setIsOpen, items: cartItems } = useCart();
  return (
    <>
      <div className="min-h-screen bg-white">
        <header className="stickey top-0 z-10 bg-white">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <Button className="p-2" onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <X className="h-6 w-6 font-bold" />
              ) : (
                <MoreVertical className="h-6 w-6" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
            {toggle && (
              <div className="flex w-full items-center justify-center gap-x-10">
                {navbarData.map((item) => (
                  <Link
                    key={item.idx}
                    href={item.url}
                    className="text-primary text-lg font-medium"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button className="flex items-center gap-2 text-lg font-medium">
                  <span>Cart</span>
                  {cartItems.length > 0 && (
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                      {cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                      )}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                {cartItems.length === 0 ? (
                  <div className="flex h-[50vh] flex-col items-center justify-center">
                    <ShoppingCart className="mb-4 h-12 w-12 text-gray-300">
                      <p className="text-gray-500">Your cart is empty</p>
                    </ShoppingCart>
                  </div>
                ) : (
                  <div className="flex h-full flex-col">
                    <div className="flex-1 overflow-auto py-6">
                      <ul className="space-y-6">
                        {cartItems.map((item) => (
                          <li key={item.id} className="flex gap-4">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                              <Image
                                src={Array.isArray(item.images) ? item.images[0]?.src || '/placeholder.svg' : item.images.src || '/placeholder.svg'}
                                alt={item.name}
                                height={96}
                                width={96}
                                className="h-full w-full object-contain p-2"
                              />
                            </div>
                            <div className="flex flex-1 flex-col">
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.name}</h3>
                                <p className="ml-4">${item.price}</p>
                              </div>
                              <div className="mt-2 flex items-center">
                                <Button className="rounded-md border p-1"></Button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </header>
      </div>
    </>
  );
};
