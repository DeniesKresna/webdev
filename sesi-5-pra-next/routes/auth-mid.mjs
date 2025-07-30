import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1] // Bearer <token>
  if (!token) return res.status(401).json({
        success: false,
        message: "tidak ada authentikasi"
  })

  try {
    const JWT_SECRET = process.env.JWT_SECRET || "salt"
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({
        success: false,
        message: "akunmu tidak diijinkan"
    })
  }
}