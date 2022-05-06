/**
 * Root Router 
 * Redirections to Routers
 */

import express, { Request, Response } from "express";
import HelloRouter from "./HelloRouters";
import { LogInfo } from "../utils/logger";
import usersRouter from "./UserRouter"

// Server instance 
let server = express();

// Router instance
let rootRouter = express.Router();


// Activate for requests to http://localhost:8000/api

//GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/')
    // Send Hello World
    res.send('Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose')
});


// Redirections to Routers & Controllers
server.use('/', rootRouter); // http://localhost:8000/api/
server.use('/hello', HelloRouter); // http://localhost:8000/api/hello --> HelloRouter
// Add more routes to the app
server.use('/users', usersRouter); // http://localhost:8000/api/users --> UserRouter

export default server;