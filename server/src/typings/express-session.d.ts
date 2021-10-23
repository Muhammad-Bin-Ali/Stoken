import session from "express-session";

interface SessionUser {
  id: string;
  username: string;
}

declare module "express-session" {
  export interface SessionData {
    user?: SessionUser;
  }
}
