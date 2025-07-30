import { getUserByIdRepo, addUserRepo, getUserByEmailRepo, getUsersRepo} from "../repositories/user.mjs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUsers = async () => {
    return await getUsersRepo()
}

export const getUserById = async (id) => {
    return await getUserByIdRepo(id)
}

export const getUserByEmail = async (email) => {
    return await getUserByEmailRepo(email)
}

export const addUser = async (userData) => {
    const existUser = await getUserByEmail(userData.email)
    if(existUser){
        return await [null, "user sudah exist"]
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds)
    userData.password = hashedPassword

    return await [addUserRepo(userData), null]
}

export const loginUser = async (loginData) => {
    const existUser = await getUserByEmail(loginData.email)
    if(!existUser){
        return await [null, "user tidak exist"]
    }

    // @ts-ignore
    const isMatch = await bcrypt.compare(loginData.password, existUser.password)
    if (!isMatch) {
      return await [null, "password salah"]
    }

    const JWT_SECRET = process.env.JWT_SECRET || "salt"
    const token = jwt.sign(
      // @ts-ignore
      { id: existUser._id, email: existUser.email, role: existUser.role },
      JWT_SECRET,
      { expiresIn: '1d' } // token berlaku 1 hari
    )

    return await [token, null]
}