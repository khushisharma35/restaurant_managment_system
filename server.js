require("dotenv").config();
const express = require('express');
const app= express();


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



const userRoutes =require("./api/user/user.routes");
const menuRoutes = require("./api/menu/menu.routes")
app.use('/api/user',userRoutes);
app.use('/api/menu',menuRoutes);




app.listen(process.env.APP_PORT ,() => {
    console.log(`app is running :`,process.env.APP_PORT);
})