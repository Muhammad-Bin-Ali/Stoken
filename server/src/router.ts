//router file containing all routes that requests can be sent to.

import { Router } from "express";
import isAuthenticated from "./middleware/isAuthenticated";

import signup from "./routes/users/signup";
import login from "./routes/users/login";
import logout from "./routes/users/logout";
import verifyEmail from "./routes/users/verifyEmail";
import notFound from "./routes/notFound";
import createToken from "./routes/tokenCreation/createToken";
import getTokens from "./routes/users/getTokens";

//creating router object
const router = Router();

//user auth paths
router.post("/users", signup);
router.post("/login", login);
router.post("/logout", logout);

//verification path
router.post("/verifyEmail", isAuthenticated, verifyEmail);

//token related paths
router.post("/createToken", isAuthenticated, createToken);
router.get("/getTokens", isAuthenticated, getTokens);

router.all("*", notFound);

export default router;
