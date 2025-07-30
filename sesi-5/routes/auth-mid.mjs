import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({
            success: false,
            message: "tidak ada authentikasi"
        })
    }

    const token = req.headers.authorization.split(" ")[1]
    if(!token) return res.status(401).json({
        success: false,
        message: "tidak ada authentikasi"
    })

    try {
        const JWT_SECRET = process.env.JWT_SECRET || "salt"
        const decoded = jwt.verify(token, JWT_SECRET)

        req.user = decoded
        next()
        /*
        jika decoded.exp tinggal 5 menit lagi,
        generatelagi token yang baru dengan expired 1 hari lagi
        res.tokenBaru = token yang baru
        */

    }catch{
        return res.status(401).json({
            success: false,
            message: "tokenmu tidak diijinkan"
        })
    }
}