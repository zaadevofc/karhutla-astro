import { sign, verify } from 'jsonwebtoken'
let secret = process.env.NEXTAUTH_JWT_SECRET

export const signJWT = (obj) => {
    try {
        return sign(obj, secret, {
            expiresIn: 8,
        })
    } catch (e) {
        return false
    }
}

export const verifyJWT = (token) => {
    try {
        let v = verify(token, secret)
        delete v.iat;
        delete v.exp;
        return v
    } catch (e) {
        return false
    }
}

export const decode = (obj) => JSON.parse(decodeURIComponent(JSON.stringify(obj).replace(/[+]/g, ' ')));
export const parser = str => str.split('&').reduce((obj, pair) => { const [key, value] = pair.split('='); return { ...obj, [key]: value }; }, {});