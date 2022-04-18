const passport = require("passport");
const passportJwT = require("passport-jwt").Strategy;
const passportExtractJwt = require("passport-jwt").ExtractJwt;

const newRole = (name , role , msg , testMod = false) => {
    passport.use(name , new passportJwT({
        jwtFromRequest: passportExtractJwt.fromAuthHeaderAsBearerToken(), 
        secretOrKey: process.env.KEY 
    }, (Jwt_payload, done) => {
        
        if (role.includes(Jwt_payload.rule) || testMod) {
            return done(null, Jwt_payload.user)
        } else {
            return done({"message" : msg }, false) 
        }
    
    }))
}


newRole("user" , ["user"] , "user permission denied" , true)
newRole("admin" , ["admin"] , "admin permission denied" , true)
newRole("userOradmin" , ["user" , "admin"] , "user Or admin permission denied" , true)

