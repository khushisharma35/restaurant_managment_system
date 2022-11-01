const {create,GetOrder,GetOrderById,UpdateOrder,deleteOrder}=require("./order.service");
 const {sign} =require('jsonwebtoken')


module.exports ={
    CreateOrder: (req,res) =>{
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
                body['orderId']= results.insertId
                return res.status(201).json({
                    success:1,
                    data: body,
                });
        });
    },
    GetOrder:(req,res)=>{
        GetOrder((err,results)=>{
            if(err){
                return;
            }
            return res.json({
                success:1,
                data: results
            });
        });
    },
    GetOrderById:(req,res)=>{
        const id =req.params.id;
        console.log("hello");
        GetOrderById(id,(err,results) => {
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
    UpdateOrder:(req,res) => {
        const body= req.body;
        const id = req.params.id;
        UpdateOrder(id,body,(err , results) =>{
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
    deleteOrder:(req,res) => {
        const data = req.params.id;
        console.log(data);
        deleteOrder(data,(err,results) =>{
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