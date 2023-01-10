import 'dotenv/config';

export const NODE_ENV = process.env.NODE_ENV;

export const TOKENS = {
  JWT_SECRET: process.env.JWT_SECRET,
};
export const DB = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export const SMTP = {
  host: process.env.SMTP_HOST,
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
  port: process.env.SMTP_PORT,
};
