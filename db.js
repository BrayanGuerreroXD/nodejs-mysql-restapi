import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "us-east.connect.psdb.cloud",
  user: "q76nehyan2s3ah0mq1df",
  password: "pscale_pw_NvCBRRbD3ZRyk4niX7OBemO2LwaF0fwcBkfiwyiNxgY",
  database: "expressdb",
  ssl: {
    rejectUnauthorized: false,
  },
});
