import { UserModel } from "../models/user.mjs";

export const addUserRepo = async (userData) => {
    const dateNow = new Date()
    userData.createdAt = dateNow
    userData.updatedAt = dateNow

    const newUser = new UserModel(userData)
    return await newUser.save()
}

export const getUserByIdRepo = async (id) => {
    return await UserModel.findById(id)
}

export const getUserByEmailRepo = async (email) => {
    return await UserModel.findOne({email: email})
}

export const getUsersRepo = async () => {
    return await UserModel.find()
}