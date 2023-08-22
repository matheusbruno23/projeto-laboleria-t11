import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
const configDB = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.MODE === "production") {
  configDB.ssl = true;
}
export const db = new Pool(configDB);
