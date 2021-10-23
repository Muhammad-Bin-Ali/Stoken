import app from "./index";

import signup from "./routes/users/signup";
import login from "./routes/users/login";
import logout from "./routes/users/logout";
import verifyEmail from "./routes/users/verifyEmail";
import notFound from "./routes/notFound";

import isAuthenticated from "./middleware/isAuthenticated";

app.post("/users", signup);
app.post("/login", login);
app.post("/logout", logout);

app.post("/verifyEmail", isAuthenticated, verifyEmail);

app.all("*", notFound);
