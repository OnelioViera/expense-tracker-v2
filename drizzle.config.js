import { config } from 'dotenv';

config({path: './.env'});

export default {
  schema: "./utils/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};



