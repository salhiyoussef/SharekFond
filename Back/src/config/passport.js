const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/usersModel')

module.exports = passport => {
    let config = {}
    config.secretOrKey = process.env.JWT_SECRET
    config.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()

    passport.use(new JwtStrategy(config , async(jwtPaylod , done)=>{
        try {
            const {_id} = jwtPaylod
            const user = await User.findById(_id)
            if(user){
                return done(null, user)
            }
            done(null, false)
        } catch (error) {
            done(error,false)
        }
    }))
}