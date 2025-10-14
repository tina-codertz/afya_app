import express from "express";
import profile from "../models/profile"

const router = express.Router();


router.post("/profile", async(req, res)=>{
    try{
        const{fullName, email, phoneNumber,address,bio}= req.body;


        const existingUser = await profile.findOne({email});
        if (existingUser){
            existingUser.fullName= fullName;
            existingUser.email= email;
            existingUser.phoneNumber= phoneNumber;
            existingUser.address= address;
            existingUser.bio= bio;
            await existingUser.save();
            return res.json({message:"Profile updated successfully"})

        }

        const user = new profile ({fullName, email, phoneNumber,address,bio});
        await profile.save();
        res.status(201).json({message:"profile saved"})
    }catch(err){
        res.status(500).json({error:err.message})
    }
});

export default router