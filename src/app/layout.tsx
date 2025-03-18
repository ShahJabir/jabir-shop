import type { Metadata } from 'next';
import { DM_Mono } from 'next/font/google';
import React from 'react';
import './globals.css';

const dmmono = DM_Mono({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jabir Store',
  description: 'Jabir Shop is a modern, high-performance e-commerce platform built with Next.js 15, Rapyd Cloud, WordPress Headless, and WooCommerce. It leverages a headless CMS architecture for seamless content management and a powerful payment system for secure transactions. 🚀',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmmono.className}`}>
        {children}
      </body>
    </html>
  );
}
