import { userEntity } from "../entities/User.entity";

import { LogSuccess, LogError } from "../../utils/logger";

// PETICIONES CRUD

/**
 * Method to obtain all Users from Collections "Users" in Mongo Server
 */
export const getAllUsers =async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity();

        // Search all users
        return await userModel.find({isDelete: false})

    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Users: ${error}`);
    }
}

// - Get User by ID
export const getUserByID = async (id: string) : Promise<any | undefined> => {

    try {
        let userModel = userEntity();

        //Search User By ID
        return await userModel.findById(id);

    } catch (error) {
        LogError(`[ORM ERROR]: Getting User By ID: ${error}`);
    }

}

// - Delete User By ID
export const deleteUserByID = async (id: string): Promise<any | undefined> => {

    try {
        let userModel = userEntity();

        // Delete user By UD
        return await userModel.deleteOne({ _id: id })
        
    } catch (error) {
        LogError(`[ORM ERROR]: Deleting User By ID: ${error}`);
    }
    
}

// - Create New User
export const createUser = async (user: any): Promise<any | undefined> => {

    try {

        let userModel = userEntity();

        // Create / Insert new user
        return await userModel.create(user);
        
    } catch (error) {
        LogError(`[ORM ERROR]: Creating User: ${error}`);
    }

}

// - Update User By ID
export const updateUserByID = async (id: string, user: any): Promise<any | undefined> => {

    try {

        let userModel = userEntity();

        // Update User
        return await userModel.findByIdAndUpdate(id, user);
        
    } catch (error) {
        LogError(`[ORM ERROR]: Updating User ${id}: ${error}`);
    }





}


// TODO:
// - Get User by Email