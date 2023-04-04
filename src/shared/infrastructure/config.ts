export const appConfig = {
  server: {
    port: process.env.PORT || 8080,
  },
  coredb: {
    db_user: process.env.DB_USER || "",
    db_host: process.env.HOST,
    db_password: process.env.PASSWORD,
    db_database: process.env.DATABASE,
    db_port: process.env.DB_PORT || "",
  },
};
