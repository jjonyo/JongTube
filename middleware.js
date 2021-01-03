import routes from "./routes";

export const localsMiddleware=(req,res,next)=>{
    res.locals.siteName='JongTube';
    res.locals.routes=routes;
    next();
}