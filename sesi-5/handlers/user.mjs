import { addUser, deleteUserById, getAllUser, getUserByEmail, loginUser } from "../usecases/user.mjs"

// users/email/{email}
export const getUserByEmailHandler = async (req, res) => {
    const id = req.params.email
    const user = await getUserByEmail()
    res.status(200).json({
        success: true,
        data: user
    })
}

export const getUserslHandler = async (req, res) => {
    const users= await getAllUser()
    res.status(200).json({
        success: true,
        data: users
    })
}

export const addUserHandler = async (req, res) => {
    const session = req.user
    if(session.role != "admin"){
        res.status(400).json({
            success: false,
            message: "usermu bukan admin"
        })
        return
    }

    const userData = req.body
    const [user, errMessage] = await addUser(userData)
    if(errMessage){
        res.status(409).json({
            success: false,
            message: errMessage
        })
        return
    }

    res.status(200).json({
        success: true,
        message: "sukses tambah data"
    })
}

export const loginUserHandler = async (req, res) => {
    const loginData = req.body

    const [token, errMessage] = await loginUser(loginData)
    if(errMessage){
        res.status(400).json({
            success: false,
            message: errMessage
        })
        return
    }

    res.status(200).json({
        success: true,
        data: token,
        message: "sukses login"
    })
}

export const deteleUserByIdHandler = async (req, res) => {
    const id = req.params.id

    const [result, errMessage] = await deleteUserById(id)
    if(errMessage){
        res.status(400).json({
            success: false,
            message: errMessage
        })
        return
    }

    res.status(200).json({
        success: true,
        message: "sukses delete user"
    })
}