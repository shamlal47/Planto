"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag, Search, PlusSquareIcon } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTypeMenuOpen, setIsTypeMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-green-950 text-white px-6 py-4 flex items-center justify-between relative">
      <div className="flex items-center text-xl font-semibold">
        <span className="text-2xl">🪴</span>
        <span>Planto</span>
      </div>

      {/* Links - hidden on small screens */}
      <ul className="hidden md:flex gap-6 text-md">
        <li className="cursor-pointer hover:text-green-300">Home</li>
        <li className="relative">
          <button
            className="cursor-pointer hover:text-green-300"
            onClick={() => setIsTypeMenuOpen((prev) => !prev)}
          >
            Plants Type ▾
          </button>
          {/* Desktop Plants Type Dropdown */}
          {isTypeMenuOpen && (
            <div className="absolute top-full left-0 w-48 bg-green-950 px-4 py-3 mt-1 rounded-md shadow-lg hidden md:flex flex-col gap-2 z-50">
              <span className="cursor-pointer hover:text-green-300 py-1">
                Indoor Plants
              </span>
              <span className="cursor-pointer hover:text-green-300 py-1">
                Outdoor Plants
              </span>
              <span className="cursor-pointer hover:text-green-300 py-1">
                Succulents
              </span>
              <span className="cursor-pointer hover:text-green-300 py-1">
                Ferns
              </span>
            </div>
          )}
        </li>
        <li className="cursor-pointer hover:text-green-300">More</li>
        <li className="cursor-pointer hover:text-green-300">Contact</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4 text-md font-semibold">
        <Search className="cursor-pointer" />
        <PlusSquareIcon className="cursor-pointer" />
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-950 px-6 py-4 flex flex-col gap-4 md:hidden z-50">
          <span className="cursor-pointer hover:text-green-300">Home</span>
          <span
            className="cursor-pointer hover:text-green-300"
            onClick={() => setIsTypeMenuOpen((prev) => !prev)}
          >
            Plants Type ▾
          </span>
          <span className="cursor-pointer hover:text-green-300">More</span>
          <span className="cursor-pointer hover:text-green-300">Contact</span>
        </div>
      )}

      {/* Mobile Plants Type Dropdown */}
      {isTypeMenuOpen && menuOpen && (
        <div className="absolute top-[calc(16rem-1px)] left-0 w-full bg-green-950 px-6 py-4 flex flex-col gap-4 md:hidden z-50">
          <span className="cursor-pointer hover:text-green-300">Indoor Plants</span>
          <span className="cursor-pointer hover:text-green-300">Outdoor Plants</span>
          <span className="cursor-pointer hover:text-green-300">Succulents</span>
          <span className="cursor-pointer hover:text-green-300">Ferns</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
