import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
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

                        <PostForm />

                    </Container>

                </div>

            </div>

        </main>
    );
}

export default AddPost;