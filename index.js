import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userData from './table.js';
import hashPassword from './hash.js';
const app=express();
const PORT=process.env.PORT || 4000;
app.use(express.json());


app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,

}))

app.get('/',(req,res)=>{
    return res.json({
        message:"backend is running ",
    })
})
app.post('/api/signup',async(req,res)=>{
    const {fullname,phoneNumber,userName,password}=req.body;
    const hash=await hashPassword(password);
    try{

        const user=await userData.findOne({
            where:{userName:userName}
        })
        if(user){
            return res.status(400).json({message:"user already exists"});

        }
        
        const newUser=await userData.create({
        fullname:fullname,
        phoneNumber:phoneNumber,
        userName:userName,
        password:hash,
        });
        console.log("user created successfully");
        return res.status(201).json({
            message:"user created"
        })
    }
    catch(err){
       if (err.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ 
                error: "Username already exists. Please choose another one." 
            });
        }
        
        console.error("Signup Error:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
   
})



app.listen(PORT,()=>console.log(`Server started at http://localhost:${PORT}`));
