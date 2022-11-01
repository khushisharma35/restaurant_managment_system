const pool = require('/Users/apple/code/restaurant-system/database.js');
const { hashSync, hash } = require("bcrypt");

module.exports = {
    create: (data,callback) => {
        console.log(data);
        data.userPassword=hashSync(data.userPassword,10)
        pool.query(
            "insert into user(userName,userEmail,userNumber,userPassword,bankDetailId) values(?,?,?,?,?)",
            [
                data.userName,
                data.userEmail,
                data.userNumber,
                data.userPassword,
                data.userRole,
                data.bankDetailId
            
                // data.bankDetailId
            
            ],
            (error,results,fields) =>{
                if(error){
                    console.log(error);

                }
                
            }
           
        );
        if(data.userRole==="staff"){
            pool.query(
           "insert into staffDocument(document,staffId) values(?,?)",
           [
               data.document,
               data.userId

           ],
           (error,results,fields) =>{
            if(error){
                console.log(error);
                return callback(error,null);
            }
            return callback(null,results);
        }
            );
        }
       
       
       
            
    },
    GetUser: (callback) =>{
        pool.query(
            "select * from user",
            (error,results,fields) =>{
                if(error){
                    return callback(error,null);
                }
                return callback(null,results);
            }
        );
    },
    GetUserByEmail:  (data,callBack) => {
        pool.query(
            "select * from user where  userEmail =?",
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
    UpdateUser: (id,data,callBack) => {
        console.log("Hi");
        // data.passcode = hashSync(data.passcode, 10)
        pool.query(
            "update user set userName=?,userEmail=?,userNumber=?,userPassword=?,bankDetailId=?,userRole=? where userId =?",
            [   
                data.userName,
                data.userEmail,
                data.userNumber,
                data.userPassword,
                data.bankDetailId,
                data.userRole,
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
    deleteUser: (id,callBack)=> {
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
