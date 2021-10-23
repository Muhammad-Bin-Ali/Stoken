import app from "./index";

import signup from "./routes/users/signup";
import login from "./routes/users/login";
import notFound from "./routes/notFound";

app.post("/users", signup);
app.post("/login", login);

app.all("*", notFound);
