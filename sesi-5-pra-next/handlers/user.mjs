import { addUser, getUserByEmail, getUserById, getUsers, loginUser } from "../usecases/user.mjs"

export const getUsersHandler = async (req, res) => {
    const user = await getUsers()
    res.status(200).json({
        success: true,
        data: user
    })
}

export const getUserByIdHandler = async (req, res) => {
    const id = req.params.id
    const user = await getUserById(id)
    res.status(200).json({
        success: true,
        data: user,
        message: "sukses tambah data"
    })
}

export const getUserByEmailHandler = async (req, res) => {
    const email = req.params.email
    const user = await getUserByEmail(email)
    res.status(200).json({
        success: true,
        data: user,
        message: "sukses tambah data"
    })
}

export const addUserHandler = async (req, res) => {
    if(req.user?.role != "admin") {
        res.status(403).json({
            success: false,
            message: "role tidak diijinkan"
        })
        return
    }
    const userData = req.body
    const [user, messageError] = await addUser(userData)
    if(messageError){
        res.status(409).json({
            success: false,
            message: messageError
        })
        return
    }
    res.status(200).json({
        success: true,
        data: user,
        message: "sukses tambah data"
    })
}

export const loginUserHandler = async (req, res) => {
    const loginData = req.body
    const [token, messageError] = await loginUser(loginData)
    if(messageError){
        res.status(401).json({
            success: false,
            message: messageError
        })
        return
    }
    res.status(200).json({
        success: true,
        data: token,
        message: "berhasil login"
    })
}