import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET

export async function authMiddleware(req, res, next) {
    try {
// check if there's a token
        let token = req.headers.authorization
        if (!token) {
            return res.status(403).json({ message: 'No token provided'})
        }
// remove the 'Bearer' part of the token
        token = token.split(' ').pop().trim()
// verify the token
        const { data } = jwt.verify(token, secret)
// pass the payload from the token to the request object
        req.user = data
// move on to the next route (or next middleware)
        next()
    }
    catch(err) {
        console.error(err.message)
        res.status(400).json({ message: err.message })
    }
}







