import express from "express";
import Api from "../models/Api.js"
import {getAllUsers, addSign} from "../controller/controller.js"
const router = express.Router();


router.get("/login", getAllUsers)
router.post("/signup", addSign)


//create
router.post("/", async (req, res)=>{

    const newApi = new Api(req.body);
    try{
        const saveApi = await newApi.save()
        res.status(200).json(saveApi)

    }catch(err){
        res.status(500).json(err);

    }
    

})

//update
router.put("/:id", async (req, res)=>{
    try{
        const updateApi = await Api.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});

        res.status(200).json(updateApi)

    }catch(err){
        res.status(500).json(err);

    }
    

})

//delete
router.delete("/:id", async (req, res)=>{
    try{
         await Api.findByIdAndDelete(req.params.id);

        res.status(200).json("data has been deleted")

    }catch(err){
        res.status(500).json(err);

    }
    

})
//get

router.get("/:id", async (req, res)=>{
    try{
        const getIDApi = await Api.findById(req.params.id);

        res.status(200).json(getIDApi)

    }catch(err){
        res.status(500).json(err);

    }
    

})
//get all

router.get("/", async (req, res)=>{
    try{
        const getAllApi = await Api.find();

        res.status(200).json(getAllApi)

    }catch(err){
        res.status(500).json(err);

    }
    

})
export default router;