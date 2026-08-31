import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Account, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        this.account = new Account(this.client);
    }

    // Create Post
    async createPost({
        title,
        slug,
        content,
        featuredImage,
        status,
        userId
    }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log(
                "Appwrite service :: createPost :: error",
                error
            );
            throw error;
        }
    }

    // Update Post
    async updatePost(
        documentId,
        {
            title,
            slug,
            content,
            featuredImage,
            status,
            userId
        }
    ) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log(
                "Appwrite service :: updatePost :: error",
                error
            );
            throw error;
        }
    }

    // Delete Post
    async deletePost(documentId) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId
            );

            return true;
        } catch (error) {
            console.log(
                "Appwrite service :: deletePost :: error",
                error
            );

            return false;
        }
    }

    // Get Single Post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log(
                "Appwrite service :: getPost :: error",
                error
            );

            return false;
        }
    }

    // Get All Posts
    async getPosts(
        queries = [Query.equal("status", "active")]
    ) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log(
                "Appwrite service :: getPosts :: error",
                error
            );

            return false;
        }
    }

    // Upload File
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log(
                "Appwrite service :: uploadFile :: error",
                error
            );

            return false;
        }
    }

    // Delete File
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log(
                "Appwrite service :: deleteFile :: error",
                error
            );

            return false;
        }
    }

    // Get File Preview
    // Keep this method name because your React components
    // are already calling getFilePreview().
    // Internally use getFileView() instead of /preview.
  getFilePreview(fileId) {
    return this.bucket.getFileView({
        bucketId: conf.appwriteBucketId,
        fileId: fileId
    });
}
}


const service = new Service();

export default service;