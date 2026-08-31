import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

                {/* Top Section */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">

                    {/* Brand */}
                    <div className="lg:col-span-5">
                        <Link
                            to="/"
                            className="inline-flex items-center rounded-lg bg-white px-3 py-2"
                        >
                            <Logo width="110px" />
                        </Link>

                        <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
                            A place to read, write, learn, and share ideas.
                            Discover meaningful stories, practical knowledge,
                            and thoughts from a growing community of writers.
                        </p>

                        {/* Social Links */}
                        <div className="mt-7 flex items-center gap-3">

                            <a
                                href="#"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white"
                            >
                                GH
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white"
                            >
                                in
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white"
                            >
                                𝕏
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:border-gray-500 hover:bg-gray-800 hover:text-white"
                            >
                                ◎
                            </a>

                        </div>
                    </div>

                    {/* Explore */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Explore
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/all-posts"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    All Posts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/add-post"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Write a Post
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Categories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Resources
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Help Center
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Legal
                        </h3>

                        <ul className="space-y-4">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Cookie Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-white"
                                >
                                    Licensing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-14 rounded-2xl border border-gray-800 bg-gray-800/60 p-6 md:flex md:items-center md:justify-between md:p-8">

                    <div className="max-w-xl">
                        <h3 className="text-lg font-semibold text-white">
                            Stay connected with MegaBlog
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            Get new articles, ideas, and useful knowledge
                            delivered straight to you.
                        </p>
                    </div>

                    <div className="mt-5 flex w-full max-w-md gap-3 md:mt-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-gray-500"
                        />

                        <button
                            type="button"
                            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col gap-4 border-t border-gray-800 pt-8 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-sm text-gray-500">
                        © {currentYear} MegaBlog. All rights reserved.
                    </p>

                    <p className="text-sm text-gray-500">
                        Built with{" "}
                        <span className="font-medium text-gray-300">
                            React
                        </span>{" "}
                        &{" "}
                        <span className="font-medium text-gray-300">
                            Appwrite
                        </span>
                    </p>

                </div>

            </div>
        </footer>
    );
}

export default Footer;