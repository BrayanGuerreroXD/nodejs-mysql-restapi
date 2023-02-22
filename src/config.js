import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.DB_HOST || "us-east.connect.psdb.cloud";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || "q76nehyan2s3ah0mq1df";
export const DB_PASSWORD =
  process.env.DB_PASSWORD ||
  "pscale_pw_NvCBRRbD3ZRyk4niX7OBemO2LwaF0fwcBkfiwyiNxgY";
export const DB_DATABASE = process.env.DB_DATABASE || "expressdb";