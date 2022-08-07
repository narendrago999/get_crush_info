const express= require("express");
const app=express();
const path=require("path");


const port= process.env.PORT;
require("./conn");
const users = require("./models/user")
const static_path = path.join(__dirname);
app.use(express.static(static_path));
console.log(path.join(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");

app.get("/", (req, res)=>{
        res.render("index");

});
app.get("/index.hbs", (req, res) => {
    res.render("index");
});
app.post("/index.hbs", async(req, res) => {
    try {
        const registerEmployee = new users({
                FirstName: req.body.firstname,
                LastName: req.body.lastname,
                email: req.body.email,
                number: req.body.number
               
            } )
            const registered = await registerEmployee.save();
            res.status(201).send("Success");

    } catch (error) {
        res.status(400).send(error);
    }
});



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})