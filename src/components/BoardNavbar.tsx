import React, { useState } from "react";
import Logo from "./Logo";
import { navigations } from "../lib/consts";
import { NavLink } from "react-router-dom";
import { FiPlus, FiMenu, FiX } from "react-icons/fi";

type BoardNavbarProps = {
  onNewApplication: () => void;
};

const BoardNavbar = ({ onNewApplication }: BoardNavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-bg-surface">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-7">
          <Logo />

          <nav className="hidden md:flex gap-5">
            {navigations.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.link}
                className={({ isActive }) =>
                  `pb-1 border-b-2 font-medium transition-colors duration-200 ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-transparent text-text-secondary hover:text-text-primary hover:border-border-strong"
                  }`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onNewApplication}
            className="flex items-center gap-1.5 bg-accent text-white px-3.5 sm:px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-200 hover:bg-[#4338CA] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)]"
          >
            <FiPlus className="w-4 h-4" />
            <span className="hidden sm:inline">New Application</span>
          </button>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border text-text-secondary cursor-pointer transition-colors duration-200 hover:text-accent hover:border-accent"
          >
            {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-4 border-t border-border pt-3">
          {navigations.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.link}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-text-secondary hover:bg-bg-muted hover:text-text-primary"
                }`
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default BoardNavbar;