import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const [error, setError] = useState("");

    const login = async (data) => {
        setError("");

        try {
            const session = await authService.login(data);

            if (session) {
                const userData = await authService.getCurrentUser();

                if (userData) {
                    dispatch(authLogin(userData));
                }

                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-gray-50">

            {/* ================= BACKGROUND ================= */}
            <div className="pointer-events-none absolute inset-0">

                <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-gray-100 blur-3xl"></div>

                <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-gray-100 blur-3xl"></div>

            </div>


            {/* ================= LOGIN SECTION ================= */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">

                <div className="w-full max-w-md">

                    {/* Card */}
                    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

                        {/* Top Brand Section */}
                        <div className="px-6 pt-8 text-center sm:px-10 sm:pt-10">

                            {/* Logo */}
                            <Link
                                to="/"
                                className="mx-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gray-900 shadow-md transition-transform duration-200 hover:scale-105"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/54410/blog.svg"
                                    alt="MegaBlog"
                                    className="h-8 w-8 invert"
                                />
                            </Link>

                            {/* Heading */}
                            <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                Welcome back
                            </h1>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Sign in to continue to your MegaBlog account.
                            </p>

                        </div>


                        {/* Form */}
                        <div className="px-6 pb-8 pt-8 sm:px-10 sm:pb-10">

                            {/* Error */}
                            {error && (
                                <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">

                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3.5m0 3h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                                            />
                                        </svg>

                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-red-800">
                                            Sign in failed
                                        </p>

                                        <p className="mt-1 text-sm leading-5 text-red-600">
                                            {error}
                                        </p>
                                    </div>

                                </div>
                            )}


                            <form
                                onSubmit={handleSubmit(login)}
                                className="space-y-5"
                            >

                                {/* Email */}
                                <div>

                                    <Input
                                        label="Email"
                                        placeholder="Enter your email"
                                        type="email"
                                        {...register("email", {
                                            required: true,
                                            validate: {
                                                matchPatern: (value) =>
                                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                                        value
                                                    ) ||
                                                    "Email address must be a valid address",
                                            },
                                        })}
                                    />

                                </div>


                                {/* Password */}
                                <div>

                                    <Input
                                        label="Password"
                                        type="password"
                                        placeholder="Enter your password"
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />

                                </div>


                                {/* Submit */}
                                <div className="pt-2">

                                    <Button
                                        type="submit"
                                        className="w-full rounded-xl py-3 text-base font-semibold"
                                    >
                                        Sign in
                                    </Button>

                                </div>

                            </form>


                            {/* Divider */}
                            <div className="my-7 flex items-center gap-4">

                                <div className="h-px flex-1 bg-gray-200"></div>

                                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                    New to MegaBlog?
                                </span>

                                <div className="h-px flex-1 bg-gray-200"></div>

                            </div>


                            {/* Signup */}
                            <Link
                                to="/signup"
                                className="flex w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:border-gray-300 hover:bg-gray-100"
                            >
                                Create an account
                            </Link>

                        </div>

                    </div>


                    {/* Footer Text */}
                    <p className="mt-6 text-center text-xs text-gray-400">
                        By continuing, you agree to the MegaBlog terms and
                        privacy policy.
                    </p>

                </div>

            </div>

        </main>
    );
}

export default Login;