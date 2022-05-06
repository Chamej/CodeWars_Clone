import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IUserController {
    // Read all users from database || get User By ID
    getUsers(id?: string): Promise<any>
    // Delete User By ID
    deleteUsers(id?: string): Promise<any>
    // Create User
    createUsers(user: any): Promise<any>
    // Uodate User
    updateUsers(id:string, user: any): Promise<any>
}