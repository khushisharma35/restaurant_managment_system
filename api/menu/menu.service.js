const pool = require('/Users/apple/code/restaurant-system/database.js');


module.exports = {
    create: (data,callback) => {
        console.log(data);
       
        pool.query(
            "insert into menu(ItemName,price) values(?,?)",
            [
                data.ItemName,
                data.price
                
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
    GetMenu: (callback) =>{
        pool.query(
            "select * from menu",
            (error,results,fields) =>{
                if(error){
                    return callback(error,null);
                }
                return callback(null,results);
            }
        );
    },
    GetMenuById:  (data,callBack) => {
        console.log(data);
        pool.query(
            "select * from menu where  menuId =?",
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
    UpdateMenu: (id,data,callBack) => {
        console.log("Hi");
        // data.passcode = hashSync(data.passcode, 10)
        pool.query(
            "update menu set ItemName=?,price=? where menuId =?",
            [   
                data.ItemName,
                data.price,
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
    deleteMenu: (id,callBack)=> {
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
    }
    
}