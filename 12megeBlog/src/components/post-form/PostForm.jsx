import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        getValues,
    } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0]
                ? await appwriteService.uploadFile(data.image[0])
                : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;

                data.featuredImage = fileId;

                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue(
                    "slug",
                    slugTransform(value.title),
                    { shouldValidate: true }
                );
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <div className="relative min-h-screen bg-gray-50 py-8 sm:py-10 lg:py-12">

            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-gray-100 blur-3xl" />
                <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-gray-100 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ================= PAGE HEADER ================= */}
                <div className="mb-8">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <div className="mb-3 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-green-500" />

                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                                    MegaBlog Studio
                                </span>
                            </div>

                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                {post
                                    ? "Edit your post"
                                    : "Create a new post"}
                            </h1>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                                {post
                                    ? "Update your article, featured image, and publishing settings."
                                    : "Turn your ideas into an article and share them with the MegaBlog community."}
                            </p>

                        </div>

                        {/* Page status */}
                        <div className="flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-sm">

                            <span
                                className={`h-2.5 w-2.5 rounded-full ${
                                    post
                                        ? "bg-green-500"
                                        : "bg-blue-500"
                                }`}
                            />

                            <span className="text-sm font-semibold text-gray-700">
                                {post ? "Editing Post" : "New Post"}
                            </span>

                        </div>

                    </div>

                </div>


                {/* ================= FORM ================= */}
                <form
                    onSubmit={handleSubmit(submit)}
                    className="grid grid-cols-1 gap-6 lg:grid-cols-3"
                >

                    {/* ================= MAIN EDITOR ================= */}
                    <div className="lg:col-span-2">

                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                            {/* Card Header */}
                            <div className="border-b border-gray-100 px-5 py-5 sm:px-7">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
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
                                                d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1-1 4 4-1L19.5 6.5a2.121 2.121 0 00-3-3z"
                                            />
                                        </svg>

                                    </div>

                                    <div>

                                        <h2 className="text-lg font-bold text-gray-900">
                                            Article Details
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            Write and structure your article.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Editor Content */}
                            <div className="p-5 sm:p-7">

                                {/* Title */}
                                <div className="mb-6">

                                    <Input
                                        label="Title"
                                        placeholder="Enter an engaging title..."
                                        className="mb-0"
                                        {...register("title", {
                                            required: true,
                                        })}
                                    />

                                </div>


                                {/* Slug */}
                                <div className="mb-7">

                                    <Input
                                        label="Slug"
                                        placeholder="your-post-slug"
                                        className="mb-0"
                                        {...register("slug", {
                                            required: true,
                                        })}
                                        onInput={(e) => {
                                            setValue(
                                                "slug",
                                                slugTransform(
                                                    e.currentTarget.value
                                                ),
                                                {
                                                    shouldValidate: true,
                                                }
                                            );
                                        }}
                                    />

                                    <div className="mt-2 flex items-center gap-2">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                                            />
                                        </svg>

                                        <p className="text-xs text-gray-400">
                                            Automatically generated from your
                                            title.
                                        </p>

                                    </div>

                                </div>


                                {/* Content */}
                                <div>

                                    <RTE
                                        label="Content"
                                        name="content"
                                        control={control}
                                        defaultValue={getValues("content")}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================= SIDEBAR ================= */}
                    <div className="space-y-6">

                        {/* Publishing Settings */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

                            <div className="mb-6 border-b border-gray-100 pb-5">

                                <h2 className="text-lg font-bold text-gray-900">
                                    Publishing
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    Configure your article visibility.
                                </p>

                            </div>


                            {/* Status */}
                            <div className="mb-6">

                                <Select
                                    options={["active", "inactive"]}
                                    label="Status"
                                    className="mb-0"
                                    {...register("status", {
                                        required: true,
                                    })}
                                />

                            </div>


                            {/* Featured Image */}
                            <div>

                                <Input
                                    label="Featured Image"
                                    type="file"
                                    className="mb-0"
                                    accept="image/png, image/jpg, image/jpeg, image/gif"
                                    {...register("image", {
                                        required: !post,
                                    })}
                                />

                                <div className="mt-3 rounded-xl bg-gray-50 p-3">

                                    <p className="text-xs leading-5 text-gray-500">
                                        Recommended: use a high-quality
                                        landscape image. PNG, JPG and GIF
                                        supported.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Current Image */}
                        {post && (
                            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">

                                    <div>

                                        <h2 className="text-sm font-bold text-gray-900">
                                            Current Image
                                        </h2>

                                        <p className="mt-0.5 text-xs text-gray-400">
                                            Existing featured image
                                        </p>

                                    </div>

                                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-600">
                                        Current
                                    </span>

                                </div>


                                <div className="p-4">

                                    <div className="group relative overflow-hidden rounded-xl bg-gray-100">

                                        <img
                                            src={appwriteService.getFilePreview(
                                                post.featuredImage
                                            )}
                                            alt={post.title}
                                            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    </div>

                                </div>

                            </div>
                        )}


                        {/* ================= ACTION CARD ================= */}
                        <div className="overflow-hidden rounded-2xl bg-gray-900 shadow-lg">

                            <div className="p-5 sm:p-6">

                                <div className="mb-5">

                                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 12h14m-7-7l7 7-7 7"
                                            />
                                        </svg>

                                    </div>

                                    <h2 className="text-lg font-bold text-white">
                                        {post
                                            ? "Ready to update?"
                                            : "Ready to publish?"}
                                    </h2>

                                    <p className="mt-1 text-sm leading-5 text-gray-400">
                                        {post
                                            ? "Save your latest changes to this article."
                                            : "Make sure everything looks good before publishing."}
                                    </p>

                                </div>


                                <Button
                                    type="submit"
                                    bgColor={
                                        post
                                            ? "bg-green-500"
                                            : "bg-white"
                                    }
                                    textColor={
                                        post
                                            ? "text-white"
                                            : "text-black"
                                    }
                                    className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all duration-200 ${
                                        post
                                            ? "hover:bg-green-600"
                                            : "hover:bg-gray-200"
                                    }`}
                                >
                                    {post
                                        ? "Update Post"
                                        : "Publish Post"}
                                </Button>

                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </div>
    );
}