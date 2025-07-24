import React from 'react';

export default function HobiDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="font-bold mb-4">Sidebar</h2>
        <div className="flex-row">
          <ul className="space-y-2">
            <li><a href="/">HomePage</a></li>
            <li><a href="#">Profil</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
          <div className="flex-auto">

          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}