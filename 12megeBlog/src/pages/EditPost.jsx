import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null);

    const { slug } = useParams();
    const navigate = useNavigate();

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

    if (!post) {
        return (
            <main className="min-h-screen bg-gray-50">

                <div className="flex min-h-[70vh] items-center justify-center px-4">

                    <div className="text-center">

                        {/* Loading Icon */}
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
                            Loading your post
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Please wait while we prepare the editor.
                        </p>

                    </div>

                </div>

            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">

            {/* ================= PAGE BACKGROUND ================= */}
            <div className="relative overflow-hidden">

                {/* Decorative Background */}
                <div className="pointer-events-none absolute inset-0">

                    <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-gray-100 blur-3xl"></div>

                    <div className="absolute -right-32 top-96 h-72 w-72 rounded-full bg-gray-100 blur-3xl"></div>

                </div>


                {/* ================= CONTENT ================= */}
                <div className="relative z-10 py-8 sm:py-10 lg:py-12">

                    <Container>

                        <PostForm post={post} />

                    </Container>

                </div>

            </div>

        </main>
    );
}

export default EditPost;