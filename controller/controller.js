import User from "../models/userSchema.js";


export const getAllUsers = async (req, res) =>{


    try{
        const users = await User.find({});
        if(users.length>0){
            return res.status(200).json({users});
        }else{
            return res.status(404).json({message:"No Users Found"});
        }


    }catch(error){
        console.log("getting the error while GET method")
    }

};
export const addSign = async (req, res) =>{

    const user = req.body;


    try{
        const addSignup = await  User.findOne({email:user.email});

       
      if(!addSignup){
        const addSign=new User(user);
        await addSign.save();
        return res.status(201).json({message:"User Signup Successfully"});

      }
      return res.status(409).json({message:"PLEASE SIGNUP"})

    }catch(error){
        console.log("getting the error while POST method",error)
    }

};