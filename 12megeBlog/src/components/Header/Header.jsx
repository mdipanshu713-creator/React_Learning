import React, { useState } from "react";
import { Container, LogoutBtn } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">

            <Container>

                {/* Main Header */}
                <nav className="flex h-[76px] items-center justify-between">

                    {/* ================= LOGO ================= */}
                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center gap-3"
                    >
                        {/* Online Blog Logo */}
                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gray-900 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                            <img
                                src="https://www.svgrepo.com/show/54410/blog.svg"
                                alt="MegaBlog"
                                className="h-7 w-7 invert"
                            />
                        </div>

                        {/* Brand Name */}
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
                                Mega<span className="text-gray-500">Blog</span>
                            </h1>

                            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                                Read • Write • Inspire
                            </p>
                        </div>
                    </Link>


                    {/* ================= DESKTOP NAV ================= */}
                    <div className="hidden items-center gap-1 md:flex">

                        {navItems.map((item) =>
                            item.active ? (
                                <NavLink
                                    key={item.name}
                                    to={item.slug}
                                    className={({ isActive }) =>
                                        `relative rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                                            isActive
                                                ? "bg-gray-900 text-white shadow-sm"
                                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ) : null
                        )}

                        {/* Logout */}
                        {authStatus && (
                            <div className="ml-3 border-l border-gray-200 pl-3">
                                <LogoutBtn />
                            </div>
                        )}
                    </div>


                    {/* ================= MOBILE MENU BUTTON ================= */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-100 md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>

                </nav>


                {/* ================= MOBILE NAVIGATION ================= */}
                {menuOpen && (
                    <div className="border-t border-gray-100 py-4 md:hidden">

                        <div className="flex flex-col gap-1">

                            {navItems.map((item) =>
                                item.active ? (
                                    <NavLink
                                        key={item.name}
                                        to={item.slug}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                                                isActive
                                                    ? "bg-gray-900 text-white shadow-sm"
                                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                ) : null
                            )}

                            {/* Mobile Logout */}
                            {authStatus && (
                                <div className="mt-3 border-t border-gray-100 pt-4">
                                    <LogoutBtn />
                                </div>
                            )}

                        </div>

                    </div>
                )}

            </Container>

        </header>
    );
}

export default Header;