require("dotenv").config(); // load environment variables

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
export default app;

app.disable("x-powered-by"); // remove the "X-Powered-By: Express" header (useless)

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({ origin: "http://localhost:3000", credentials: true, optionsSuccessStatus: 200 }));

// connect to mongoose database before serving app
// export a promise to be reused by mongo session store so we don't need two mongo conn.s
export const mongooseClientPromise = mongoose.connect(`${process.env.MONGO_URL!}/${process.env.MONGO_DB_NAME!}`).then((m) => {
  const conn = mongoose.connections[0];
  console.log(`connected to database ${conn?.name}`);

  return m.connection.getClient();
});

// Important to import session before router so middleware is registered in the correct order
import "./session";
import "./router";

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
