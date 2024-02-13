const express = require(`express`);
const mongoose = require(`mongoose`);
const cors = require(`cors`);

const userModel = require("./modals/user");

 
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");
app.post("/register", (req, res) => {
  userModel.create(req.body)
  .then((users) => res.json(users)
//   .catch((err) => res.json(err))
  );
});


app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    userModel.findOne({email:email}).then(user=>{
        if(user){
            if(user.password=== password){
                res.json("Success")
            }else{
                res.json("Password in incorrect")

            }
        }else{
            res.json("no record")
        }
    })
})
app.listen(9000, () => {
  console.log("Server is running");
});
