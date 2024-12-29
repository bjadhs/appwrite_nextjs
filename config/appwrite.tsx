import { Client, Account, Databases } from 'appwrite';

export const appwriteConfig = {
  url: process.env.APPWRITE_URL,
  project: process.env.APPWRITE_PROJECT_ID,
  databaseId: process.env.APPWRITE_DATABASE_ID,
  todoCollectionId: process.env.APPWRITE_TODO_COLLECTION_ID,
};

const client = new Client();

client.setProject(appwriteConfig.project || '');

export const account = new Account(client);
export const databases = new Databases(client);
