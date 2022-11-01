const {create,GetMenu,GetMenuById,UpdateMenu,deleteMenu}=require("./menu.service");
 const {sign} =require('jsonwebtoken')


module.exports ={
    CreateMenu: (req,res) =>{
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
    GetMenu:(req,res)=>{
        GetMenu((err,results)=>{
            if(err){
                return;
            }
            return res.json({
                success:1,
                data: results
            });
        });
    },
    GetMenuById:(req,res)=>{
        const id =req.params.id;
        console.log("hello");
        GetMenuById(id,(err,results) => {
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
    UpdateMenu:(req,res) => {
        const body= req.body;
        const id = req.params.id;
        UpdateMenu(id,body,(err , results) =>{
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
    deleteMenu:(req,res) => {
        const data = req.params.id;
        console.log(data);
        deleteMenu(data,(err,results) =>{
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
}    