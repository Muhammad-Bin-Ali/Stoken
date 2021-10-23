import app from "./index";

import signup from "./routes/users/signup";
import login from "./routes/users/login";
import logout from "./routes/users/logout";

import notFound from "./routes/notFound";

app.post("/users", signup);
app.post("/login", login);
app.post("/logout", logout);

app.all("*", notFound);
