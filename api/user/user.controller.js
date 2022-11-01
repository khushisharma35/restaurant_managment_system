const {create,GetUser,GetUserByEmail,deleteUser,UpdateUser}=require("./user.service");
// const {genSaltSync,hashSync,compareSync} = require("bcrypt");
const { hashSync, compareSync}=require('bcrypt');
const {sign} =require('jsonwebtoken')


module.exports ={
    CreateUser: (req,res) =>{
        const body =req.body;

        create(body
            ,(err, results) => {
                if(err){

                    console.log(err);
                    return res.status(500).json({
                        success:0,
                        message: "Database connection error"
                    });
                }
                return res.status(201).json({
                    success:1,
                    data: results,
                });
        });
    },
    getuser:(req,res)=>{
        GetUser((err,results)=>{
            if(err){
                return;
            }
            return res.json({
                success:1,
                data: results
            });
        });
    },
    getuserbyemail:(req,res)=>{
        const id =req.params.id;
        console.log("hello");
        GetUserByEmail(id,(err,results) => {
            if(err){
                console.log(err,'some error occured');
                return;
            }
            if(!results) {
                return res.status(404).json({
                    success:0,
                    message: "Record is not found"
                });
            }
            return res.status(200).json({
                success:1,
                data:results
                
            });
            console.log(data);
        });
    },
    UpdateUser:(req,res) => {
        const body= req.body;
        const id = req.params.id;
        UpdateUser(id,body,(err , results) =>{
            if(err){
                console.log(err);
                return false;
            }
            console.log(results)
            if(!results){
                return res.status(400).json({
                    success:0,
                    message: "failed to update user"
                });
            }
            return res.status(200).json({
                success:1,
                message:"updated successfully"
            });
        });
    },
    deleteUser:(req,res) => {
        const data = req.params.id;
        console.log(data);
        deleteUser(data,(err,results) =>{
            if(err) {
                console.log(err);
                return;
            }
            console.log(results);   
            if(!results) {
                return res.json({
                    success:0,
                    message: "record not found"
                });
            }
            return res.json({
                success:1,
                message:"user deleted successfully"
            });
        });
    },
    login:(req, res) => {
        const body =req.body;
        console.log(body);
        GetUserByEmail(body.userEmail,(err,results) => {
            if (err) {
                console.log(err);
            }
            console.log(results);
            if(!results) {
                return res.json({
                    success:0,
                    message:"invalidemail or passcode"
                });
            }
            const result = compareSync(body.userPassword,results.userPassword);
            console.log(body.passcode);
            console.log(results.passcode)
            console.log(result);
            if(result){
                results.passcode = undefined;
                const jsontoken = sign({ result:results}, "qwe1234" );
                return res.status(200).json({
                    success:1,
                    message:"login successfully done",
                    token: jsontoken
                });
            } else{
            return res.status(401).json({
                success:0,
                data: "invalid email or passcode}}}"

            }); 
        }

        });
    },

}    