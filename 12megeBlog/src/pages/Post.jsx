import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor =
        post && userData
            ? post.userId === userData.$id
            : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    if (!post) {
        return (
            <main className="min-h-screen bg-gray-50">

                <div className="flex min-h-[70vh] items-center justify-center px-4">

                    <div className="text-center">

                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">

                            <svg
                                className="h-7 w-7 animate-spin text-gray-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                />

                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
                                />
                            </svg>

                        </div>

                        <h2 className="text-xl font-bold text-gray-900">
                            Loading article
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Please wait while we load the article.
                        </p>

                    </div>

                </div>

            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">

            {/* ================= HERO / IMAGE ================= */}
            <section className="border-b border-gray-200 bg-white">

                <Container>

                    <div className="py-6 sm:py-8">

                        {/* Image Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">

                            <img
                                src={appwriteService.getFilePreview(
                                    post.featuredImage
                                )}
                                alt={post.title}
                                className="max-h-[650px] min-h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.01] sm:min-h-[400px]"
                            />

                            {/* Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            {/* Status */}
                            <div className="absolute left-5 top-5">

                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">

                                    <span className="h-2 w-2 rounded-full bg-green-400" />

                                    Published

                                </div>

                            </div>

                        </div>

                    </div>

                </Container>

            </section>


            {/* ================= ARTICLE ================= */}
            <section className="py-10 sm:py-14 lg:py-16">

                <Container>

                    <div className="mx-auto max-w-4xl">

                        {/* Article Header */}
                        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                            <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-12">

                                {/* Meta */}
                                <div className="mb-5 flex flex-wrap items-center gap-3">

                                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-600">
                                        Article
                                    </span>

                                    <span className="h-1 w-1 rounded-full bg-gray-300" />

                                    <span className="text-sm text-gray-400">
                                        MegaBlog
                                    </span>

                                </div>


                                {/* Title */}
                                <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                    {post.title}
                                </h1>


                                {/* Author / Information */}
                                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5">

                                    <div className="flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                                            M
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">
                                                MegaBlog Author
                                            </p>

                                            <p className="text-xs text-gray-400">
                                                Published article
                                            </p>
                                        </div>

                                    </div>


                                    {/* Author Controls */}
                                    {isAuthor && (
                                        <div className="flex flex-wrap items-center gap-2">

                                            {/* Edit */}
                                            <Link
                                                to={`/edit-post/${post.$id}`}
                                            >
                                                <Button
                                                    bgColor="bg-gray-100"
                                                    textColor="text-gray-900"
                                                    className="rounded-xl px-4 py-2 hover:bg-gray-200"
                                                >
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
                                                            d="M12 20h9"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1-1 4 4-1 12.5-12.5a2.121 2.121 0 00-3-3z"
                                                        />
                                                    </svg>

                                                    Edit
                                                </Button>
                                            </Link>


                                            {/* Delete */}
                                            <Button
                                                bgColor="bg-red-500"
                                                textColor="text-white"
                                                onClick={deletePost}
                                                className="rounded-xl px-4 py-2 hover:bg-red-600"
                                            >
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
                                                        d="M6 7h12M9 7V4h6v3m-8 0l1 13h8l1-13M10 11v5m4-5v5"
                                                    />
                                                </svg>

                                                Delete
                                            </Button>

                                        </div>
                                    )}

                                </div>

                            </div>


                            {/* ================= CONTENT ================= */}
                            <div className="border-t border-gray-100 px-5 py-7 sm:px-8 sm:py-9 lg:px-12 lg:py-12">

                                <div
                                    className="
                                        browser-css
                                        prose
                                        prose-gray
                                        max-w-none

                                        prose-headings:font-bold
                                        prose-headings:tracking-tight
                                        prose-p:text-gray-600
                                        prose-p:leading-8

                                        prose-a:font-semibold
                                        prose-a:text-gray-900

                                        prose-strong:text-gray-900

                                        prose-img:rounded-2xl
                                        prose-img:shadow-md

                                        prose-blockquote:border-gray-900
                                        prose-blockquote:text-gray-600

                                        prose-code:rounded
                                        prose-code:bg-gray-100
                                        prose-code:px-1.5
                                        prose-code:py-0.5
                                    "
                                >
                                    {parse(post.content)}
                                </div>

                            </div>

                        </article>


                        {/* ================= BACK BUTTON ================= */}
                        <div className="mt-8">

                            <Link
                                to="/all-posts"
                                className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md"
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 12H5m6 6l-6-6 6-6"
                                    />
                                </svg>

                                Back to all articles

                            </Link>

                        </div>

                    </div>

                </Container>

            </section>

        </main>
    );
}