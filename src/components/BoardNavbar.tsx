import React from "react";
import Logo from "./Logo";
import { navigations } from "../lib/consts";
import { Link, NavLink } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const BoardNavbar = ({onNewApplication} : any) => {
  return (
    <header className="border-b border-border">
      <div className="flex justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Logo />

          <nav className="flex gap-5">
            {navigations.map((nav) => (
              <NavLink  
                key={nav.id}
                to={nav.link}
                className={({ isActive }) =>
                  `pb-1 border-b-2 font-medium ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-transparent text-text-secondary"
                  }`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex gap-5">
          <button onClick={onNewApplication} className="flex items-center gap-1 bg-accent text-accent-tint p-2 rounded-lg font-medium">
            <FiPlus className="w-4 h-4" />
            New Application
          </button>
        </div>
      </div>
    </header>
  );
};1

export default BoardNavbar;
