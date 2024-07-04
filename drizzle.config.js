import { config } from 'dotenv';

config({path: './.env'});

export default {
  schema: "./utils/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:UuwWN81nmaTF@ep-solitary-heart-a6dgb4po.us-west-2.aws.neon.tech/neondb?sslmode=require",
  },
};



