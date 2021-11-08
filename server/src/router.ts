import { Router } from "express";
import isAuthenticated from "./middleware/isAuthenticated";

import signup from "./routes/users/signup";
import login from "./routes/users/login";
import logout from "./routes/users/logout";
import verifyEmail from "./routes/users/verifyEmail";
import notFound from "./routes/notFound";
import createToken from "./routes/tokenCreation/createToken";
import getTokens from "./routes/users/getTokens";

const router = Router();

router.post("/users", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verifyEmail", isAuthenticated, verifyEmail);

router.post("/createToken", createToken);
router.get("/getTokens", isAuthenticated, getTokens);

router.all("*", notFound);

export default router;
