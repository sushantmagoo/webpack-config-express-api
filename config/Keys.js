export default {
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT),
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS),
  JWT_SECRET: process.env.JWT_SECRET,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT),
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  LOCAL_DB_STRING: process.env.LOCAL_DB_STRING
};
