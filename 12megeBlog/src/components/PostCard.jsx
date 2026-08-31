import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link
            to={`/post/${$id}`}
            className="group block h-full"
        >
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* ================= IMAGE ================= */}
                <div className="relative overflow-hidden bg-gray-100">

                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                    {/* Read Badge */}
                    <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur-sm">
                            Read Article
                        </span>
                    </div>

                </div>


                {/* ================= CONTENT ================= */}
                <div className="flex flex-1 flex-col p-5">

                    {/* Category / Meta */}
                    <div className="mb-3 flex items-center gap-2">

                        <span className="h-2 w-2 rounded-full bg-green-500"></span>

                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Featured
                        </span>

                    </div>


                    {/* Title */}
                    <h2 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-gray-600">
                        {title}
                    </h2>


                    {/* Bottom */}
                    <div className="mt-auto pt-6">

                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">

                            <span className="text-sm font-medium text-gray-500">
                                Read more
                            </span>

                            {/* Arrow */}
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>

                            </span>

                        </div>

                    </div>

                </div>

            </article>
        </Link>
    );
}

export default PostCard;