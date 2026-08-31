import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    /* ================= EMPTY STATE ================= */
    if (posts.length === 0) {
        return (
            <main className="min-h-screen bg-gray-50">

                {/* Hero */}
                <section className="relative overflow-hidden border-b border-gray-200 bg-white">

                    <div className="absolute inset-0 -z-0">
                        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-gray-100 blur-3xl"></div>
                        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-gray-100 blur-3xl"></div>
                    </div>

                    <Container>
                        <div className="relative z-10 flex min-h-[520px] items-center justify-center px-4 py-20 text-center">

                            <div className="max-w-2xl">

                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-lg">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 20h9"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
                                        />
                                    </svg>

                                </div>

                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                                    Welcome to MegaBlog
                                </p>

                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                    Ideas worth
                                    <span className="block text-gray-500">
                                        sharing.
                                    </span>
                                </h1>

                                <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                                    Discover thoughtful articles, share your
                                    knowledge, and connect with ideas from the
                                    MegaBlog community.
                                </p>

                                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                                    <a
                                        href="/login"
                                        className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
                                    >
                                        Login to Read
                                    </a>

                                    <a
                                        href="/signup"
                                        className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md"
                                    >
                                        Create Account
                                    </a>

                                </div>

                            </div>

                        </div>
                    </Container>

                </section>

            </main>
        );
    }

    /* ================= MAIN HOME ================= */

    return (
        <main className="min-h-screen bg-gray-50">

            {/* ================= HERO ================= */}
            <section className="border-b border-gray-200 bg-white">

                <Container>

                    <div className="px-4 py-16 sm:py-20 lg:py-24">

                        <div className="max-w-3xl">

                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">

                                <span className="h-2 w-2 rounded-full bg-green-500"></span>

                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    Welcome to MegaBlog
                                </span>

                            </div>

                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                                Ideas that
                                <span className="block text-gray-500">
                                    inspire.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                                Read insightful stories, discover new
                                perspectives, and share your own ideas with
                                the MegaBlog community.
                            </p>

                        </div>

                    </div>

                </Container>

            </section>


            {/* ================= POSTS ================= */}
            <section className="py-12 sm:py-16">

                <Container>

                    {/* Section Header */}
                    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                Latest articles
                            </p>

                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Explore our stories
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Fresh ideas and perspectives from our writers.
                            </p>

                        </div>


                        {/* Post Count */}
                        <div className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">

                            <span className="text-sm font-semibold text-gray-900">
                                {posts.length}
                            </span>

                            <span className="ml-1.5 text-sm text-gray-500">
                                {posts.length === 1
                                    ? "Article"
                                    : "Articles"}
                            </span>

                        </div>

                    </div>


                    {/* Post Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {posts.map((post) => (
                            <div
                                key={post.$id}
                                className="min-w-0"
                            >
                                <PostCard {...post} />
                            </div>
                        ))}

                    </div>

                </Container>

            </section>

        </main>
    );
}

export default Home;