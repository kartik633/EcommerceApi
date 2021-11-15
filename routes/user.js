const router = require('express').Router();

router.get("/usertest", (req,res)=>{
    res.send("user test is successfull");
});

router.post("/userposttest",(req,res)=>{
    const username = req.body.username;
    // console.log(username);
    res.send("your username is " + username);
})

// lh:3000/api/user/usertest

module.exports = router