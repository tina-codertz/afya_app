import * as AuthServices from "../services/authServices.js";


   export const  register = async(req, res)=>{
        try{
            const{fullName,email,password}= req.body;
            const result = await AuthServices.register(fullName, email, password);
            res.json(result);

        }catch(err){
            console.error("register error:", err);
            res.status(400).json({message:err.message});
        }


    }
    
   export const login= async (req, res)=>{
        try{
            const{email, password} = req.body;
            const result = await AuthServices.login(email,password);
            res.json(result);
        }catch (err){
            console.error("login error:", err)
            res.status(401).json({message:err.message});
        }
}


  export const getUser= async (req, res) => {
    try {
      const user = await AuthServices.getUser(req.user.user_id);
      res.json(user);
    } catch (err) {
        console.error("getUser error:",err)
      res.status(500).json({ message: err.message });
    }
  }


