declare namespace NodeJS {
  interface ProcessEnv {
    ACCESS_TOKEN_SECRET: string;
    NODE_ENV: "development" | "production" | "test";
  }
}
