"use client"

import { useState } from 'react'
import Logo from './Logo'
import { homeNav } from '../lib/consts'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const HomeNavbar = () => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleRoute = () => {
        navigate("/login")
        setMenuOpen(false)
    }

  return (
    <header className='border-b border-border bg-bg-surface'>
        <div className='flex justify-between items-center px-6 py-4'>
            <div className='flex items-center'>
                <Logo/>
            </div>

            <div className='hidden md:flex gap-5 items-center'>
                {homeNav.map((nav) => (
                    <a
                    key={nav.id}
                    href={nav.link}
                    className='relative text-text-secondary transition-colors hover:text-accent after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full'
                    >
                        {nav.name}
                    </a>
                ))}
                <button
                    onClick={handleRoute}
                    className='border-2 cursor-pointer border-border px-4 py-2 rounded-lg transition-colors duration-200 hover:border-accent hover:text-accent'
                >
                    Log in
                </button>

                <button
                    onClick={handleRoute}
                    className='text-white cursor-pointer bg-accent px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(79,70,229,0.35)]'
                >
                    Get Started
                </button>
            </div>

            <div className='flex items-center gap-3 md:hidden'>
                <button
                    onClick={handleRoute}
                    className='text-white cursor-pointer bg-accent px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent'
                >
                    Get Started
                </button>
                <button
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    className='flex items-center justify-center w-9 h-9 rounded-lg border border-border text-text-secondary cursor-pointer transition-colors duration-200 hover:text-accent hover:border-accent'
                >
                    {menuOpen ? <FiX className='w-5 h-5' /> : <FiMenu className='w-5 h-5' />}
                </button>
            </div>
        </div>

        {menuOpen && (
            <nav className='md:hidden flex flex-col gap-1 px-6 pb-4 border-t border-border pt-3'>
                {homeNav.map((nav) => (
                    <NavLink
                        key={nav.id}
                        to={nav.link}
                        onClick={() => setMenuOpen(false)}
                        className='px-3 py-2 rounded-lg font-medium text-text-secondary transition-colors duration-200 hover:bg-bg-muted hover:text-text-primary'
                    >
                        {nav.name}
                    </NavLink>
                ))}
                <button
                    onClick={handleRoute}
                    className='mt-1 border-2 cursor-pointer border-border px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200 hover:border-accent hover:text-accent'
                >
                    Log in
                </button>
            </nav>
        )}
    </header>
  )
}

export default HomeNavbar