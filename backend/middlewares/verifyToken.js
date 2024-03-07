const jwt=require('jsonwebtoken')
require('dotenv').config()

function verifyToken(req,res,next){
    //token verification logic
    //get bearer token from headers of req object
    console.log("pahuch gaye")
        const bearerToken=req.headers.authorization;
        //get token
        if(bearerToken){
            const token = bearerToken.split(' ')[1]
            try {
                let decodedToken = jwt.verify(token, process.env.SECRET_KEY)
                console.log(decodedToken)
                next()
            }
            catch {
                return res.status(200).send({ message: "jwt expired", payload: {} })
            }

        }else{
            res.status(403).send({message:"Unauthorised access"})
        }
}


module.exports=verifyToken;