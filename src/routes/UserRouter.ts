import express, { Request, Response } from "express";
import { UserController } from "../controller/UsersController";
import { LogInfo } from "../utils/logger";

// Router from express
let userRouter = express.Router();

// http://localhost:8000/api/users?id=624f0b3c3c869ba648e2eb48
userRouter.route('/')
    // GET:
    .get(async (req: Request, res: Response) =>{
        // Obtain a Query Param
        let id: any = req?.query?.id;
        LogInfo(`Query Param: ${id}`);
        // Controller Instance to execute method
        const controller: UserController = new UserController();
        // Obtain Response
        const response: any = await controller.getUsers(id);
        // Send to the client the response
        return res.send(response);
    })
    // DELETE:
    .delete(async (req:Request, res:Response) => {
        // Obtain a Query Param
        let id: any = req?.query?.id;
        LogInfo(`Query Param: ${id}`);
       // Controller Instance to execute method
       const controller: UserController = new UserController();
       // Obtain Response
       const response: any = await controller.deleteUsers(id);
       // Send to the client the response
       return res.send(response);
    })
    //POST
    .post(async (req: Request, res: Response) =>{

        let name: any = req?.query?.name;
        let age: any = req?.query?.age;
        let email: any = req?.query?.email;

        // Controller Instance to execute method
       const controller: UserController = new UserController();

       let user = {
           name: name || 'default',
           email: email || 'default email',
           age: age || 'default age'
       }

       // Obtain Response
       const response: any = await controller.createUsers(user);
       // Send to the client the response
       return res.send(response);
    })
    .put(async (req: Request, res: Response) =>{
        // Obtain a Query Param
        let id: any = req?.query?.id;
        let name: any = req?.query?.name;
        let age: any = req?.query?.age;
        let email: any = req?.query?.email;
        LogInfo(`Query ParamS: ${id}, ${name}, ${age}, ${email}`);

        // Controller Instance to execute method
        const controller: UserController = new UserController();

        let user = {
            name: name || 'default',
            email: email || 'default email',
            age: age || 'default age'
        }

        // Obtain Response
        const response: any = await controller.updateUsers(id, user);

    })

// Export Hello Router
export default userRouter;