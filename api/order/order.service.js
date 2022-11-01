const pool = require('/Users/apple/code/restaurant-system/database.js');


module.exports = {
    create: (data,callback) => {
        console.log(data);
       
        pool.query(
            "insert into orders(quantity,userId,menuId,orderStatus) values(?,?,?,?)",
            [
                data.quantity,
                data.userId,
                data.menuId,
                data.orderStatus
                
            ],
            (error,results,fields) =>{
                if(error){
                    console.log(error);
                    return callback(error,null);
                }
                return callback(null,results);
            }
        );
    },
    GetOrder: (callback) =>{
        pool.query(
            "select * from orders",
            (error,results,fields) =>{
                if(error){
                    return callback(error,null);
                }
                return callback(null,results);
            }
        );
    },
    GetOrderById:  (data,callBack) => {
        console.log(data);
        pool.query(
            "select * from orders where  orderId =?",
            [data],
            (error,results,fields) => {
                if(error) {
                    console.log(error);
                    return callBack(error,null);
                }
                return callBack(null,results[0]);
            }
        );
    },
    UpdateOrder :(id,data,callBack) => {
        console.log("Hi");
        
        pool.query(
            "update orders set quantity=?,userId=?,menuId=?,orderStatus=? where orderId =?",
            [   
                data.quantity,
                data.userId,
                data.menuId,
                data.orderStatus,
                id
            ],
            (error,results,fields) => {
                if(error) {
                    return callBack(error,null);
                }
                return callBack(null,results);
            },
        );
    },
    deleteOrder: (id,callBack)=> {
        console.log(id)
        pool.query(
            "delete from user where userId=?",
            [id],
            (error,results,fields) => {
                if(error) {
                   return  callBack(error,null);
                }
                return callBack(null,results);
            }
        );
    },
    
}