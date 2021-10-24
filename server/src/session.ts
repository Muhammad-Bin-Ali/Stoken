import app, { mongooseClientPromise } from "./index";
import session from "express-session";
import MongoStore from "connect-mongo";

const ONE_WEEK_SECONDS = 7 * 24 * 60 * 60;

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: ONE_WEEK_SECONDS * 1000,
    },
    store: MongoStore.create({
      clientPromise: mongooseClientPromise,
      dbName: process.env.MONGO_DB_NAME!,
      ttl: ONE_WEEK_SECONDS,
    }),
  })
);
