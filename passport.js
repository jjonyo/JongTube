import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userController";

passport.use(User.createStrategy());

passport.use(
    new GithubStrategy({
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: "http://localhost:4000/auth/github/callback"
    }),
    githubLoginCallback
  );

  
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());