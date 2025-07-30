import { UserModel } from "../models/user.mjs";

export const getUserByIdRepo = async (id) => {
    return await UserModel.findById(id)
}

export const getUserByEmailRepo = async (emailData) => {
    return await UserModel.findOne({email: emailData})
}

export const addUserRepo = async (userData) => {
    const dateNow = new Date()
    userData.createdAt = dateNow
    userData.updatedAt = dateNow

    const newUser = new UserModel(userData)
    return await newUser.save()
}

export const getUsersRepo = async () => {
    return await UserModel.find()
}

export const deleteUserRepoById = async (id) => {
    return await UserModel.deleteOne({_id: id})
}
