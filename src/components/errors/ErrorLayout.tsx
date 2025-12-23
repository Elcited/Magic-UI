import React from 'react';
import ThemeToggle from '../ThemeToggle';

export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <main className="flex flex-col h-screen items-center justify-center">
        {children}
      </main>
      <ThemeToggle />
    </div>
  );
}
