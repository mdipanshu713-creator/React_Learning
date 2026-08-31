import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <main className="min-h-screen bg-gray-50">

            {/* ================= HERO ================= */}
            <section className="border-b border-gray-200 bg-white">

                <Container>

                    <div className="px-4 py-14 sm:py-16 lg:py-20">

                        <div className="max-w-3xl">

                            {/* Badge */}
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">

                                <span className="h-2 w-2 rounded-full bg-green-500"></span>

                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                                    MegaBlog Collection
                                </span>

                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                                Explore all
                                <span className="block text-gray-500">
                                    articles.
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                                Discover stories, ideas, tutorials, and
                                perspectives from the MegaBlog community.
                            </p>

                        </div>

                    </div>

                </Container>

            </section>


            {/* ================= POSTS SECTION ================= */}
            <section className="py-12 sm:py-16">

                <Container>

                    {/* Section Header */}
                    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                Browse
                            </p>

                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                All Articles
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Find something interesting to read.
                            </p>

                        </div>


                        {/* Article Count */}
                        <div className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">

                            <span className="text-sm font-bold text-gray-900">
                                {posts.length}
                            </span>

                            <span className="ml-1.5 text-sm text-gray-500">
                                {posts.length === 1
                                    ? "Article"
                                    : "Articles"}
                            </span>

                        </div>

                    </div>


                    {/* ================= POST GRID ================= */}
                    {posts.length > 0 ? (

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

                    ) : (

                        /* ================= EMPTY STATE ================= */
                        <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6">

                            <div className="max-w-md text-center">

                                {/* Icon */}
                                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">

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
                                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2z"
                                        />
                                    </svg>

                                </div>

                                <h3 className="text-xl font-bold text-gray-900">
                                    No articles yet
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    There are currently no published articles
                                    available. Check back soon for new
                                    content.
                                </p>

                            </div>

                        </div>

                    )}

                </Container>

            </section>

        </main>
    );
}

export default AllPosts;