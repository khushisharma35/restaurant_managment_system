const request = require("supertest");
const app = require("../server");

const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsidXNlcklkIjoxMSwidXNlck5hbWUiOiJ0aW5hIiwidXNlckVtYWlsIjoidGluYUBnbWFpbC5jb20iLCJ1c2VyTnVtYmVyIjoiNzk4OTU1OTc4NTYiLCJ1c2VyUGFzc3dvcmQiOiIkMmIkMTAkVFpkMGJPdnNZSGQ3L1h0b1phU05JLjkvamVCc1pqSml5YVRLUy9EM1VYQ1RPcUw1L0tKMnEiLCJiYW5rRGV0YWlsSWQiOjEsInVzZXJSb2xlIjpudWxsfSwiaWF0IjoxNjY3Mjg0MTgzfQ.SVVYuJMe8avyxaq6bxGIVtYe-BOF99IXS6G3dlsV5Yk";

// signup test case

describe("user signup",()=>{
    it("it should return status code 201 with signup successfully",async ()=>{
        const response= await request(app)
        .post("/api/user")
       .send({
        userName :"tina",
        userEmail :"tina@gmail.com",
        userNumber : "79895597856",
        userPassword : "1234",
        bankDetailId :1,
        userRole : "staff"
      })
    //   expect(response.body).toBe({
        //   success : 1,})
     expect(typeof  response.body.data).toBe('object'),
        
      
      expect(response.statusCode).toBe(201)
  })
  it("return status code 400 when bad request", async () => {
    const response = await request(app)
    .post("/api/user")
    .send({
        userName :"",
        userEmail :"tina@gmail.com",
        userNumber : "79895597856",
        userPassword : "1234",
        bankDetailId :1,
        userRole : 12
    })
    
    expect(response.statusCode).toBe(400)
});
describe("user login",()=> {
    it('it must return status 200 when login successfully',async()=>{
        const response =await request(app)
        .post("/api/user/login")
        .send({
            userEmail :"tina@gmail.com",
            userPassword : "1234"
        })
        expect(response.statusCode).toBe(200)
    });
    it('it must return status 401 when login unsuccessfully',async()=>{
        const response =await request(app)
        .post("/api/user/login")
        .send({
            userEmail :"tina@gmail.com",
            userPassword : "00"
        })
        expect(response.statusCode).toBe(401)
    });
});
});
describe("user update",()=>{
    it('it must return statuscode 200 when update is done',async()=>{
        const response = await request(app)
        .patch("/api/user/8")
        .auth(userToken, {type: 'bearer'})
        .send({
            userName :"prachi",
            userEmail :"prachi@gmail.com",
            userNumber : "796559234786",
            userPassword : "333",
             bankDetailId :1,
            userRole : "customer"
        })
        expect(response.statusCode).toBe(200)
    });
});
describe("user delete",()=>{
    it('it must return status code 200when user is deleted',async()=>{
        const response = await request(app)
        .delete("/api/user/7")
        .auth(userToken, {type: 'bearer'})
        expect(response.statusCode).toBe(200)

    });
})

    