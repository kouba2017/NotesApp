const User=require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const  SECRET  = process.env.SECRET_KEY

module.exports={
    register : async (req,res)=>{
        try{
            const user=new User(req.body)
            const newUser= await user.save()
            const userToken =jwt.sign({id:newUser._id}, SECRET)
            res.status(201).cookie("userToken",
            userToken, {httpOnly:true}
            ).json({message:"Registration successful"})
        }
        catch(err){
            res.status(400).json({error:err})
        }
    },
    login: async(req, res) => {
            const user = await User.findOne({ email: req.body.email });
        
            if(user === null) {
                // email not found in users collection
                return res.status(400).json({error:"wrong email@"});
        }
        
        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
        
            if(!correctPassword) {
                // password wasn't a match!
                return res.status(400).json({error:"wrong password"});
            }
        
            // if we made it this far, the password was correct
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
        
            // note that the response object allows chained calls to cookie and json
            res
                .cookie("userToken", userToken, {
                httpOnly: true
                })
                .json({ msg: "success!" });
        },
        logout: (req, res) => {
            res.clearCookie('userToken');
            res.status(200).json({message:"successfully logged out"});
        }
        
        
}