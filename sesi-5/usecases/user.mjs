import { addUserRepo, deleteUserRepoById, getUserByEmailRepo, getUserByIdRepo, getUsersRepo } from "../repositories/user.mjs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUserByEmail = async (email) => {
    return await getUserByEmailRepo(email)
}

export const addUser = async (userData) => {
    const existUser = await getUserByEmail(userData.email)
    if(existUser){
        return [null, "user sudah exist"]
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds)
    userData.password = hashedPassword

    return await [addUserRepo(userData), null]
}

export const getAllUser = async () => {
    return await getUsersRepo()
}

export const getUserById = async (id) => {
    return await getUserByIdRepo(id)
}

export const deleteUserById = async (id) => {
    const existUser = await getUserById(id)
    if(!existUser){
        return [null, "user tidak exist"]
    }

    return await [deleteUserRepoById(id), ""]
}

// {email:, password,}
export const loginUser = async(loginData) =>{
    const existUser = await getUserByEmail(loginData.email)
    if(!existUser){
        return [null, "user tidak exist"]
    }

    // @ts-ignore
    const isMatch = await bcrypt.compare(loginData.password, existUser.password)
    if(!isMatch){
        return [null, "pasword salah"]
    }

    const JWT_SECRET = process.env.JWT_SECRET || "salt" //salt
    const token = jwt.sign(
        {id:existUser._id, email:existUser.email, role: existUser.role},
        JWT_SECRET,
        {expiresIn: '1d'}
    )

    return [token, null]
}