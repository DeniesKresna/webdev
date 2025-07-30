export const logReqMiddleware = (req, res, next) => {
  console.log(JSON.stringify(req.body, null, 2));
  next()
}