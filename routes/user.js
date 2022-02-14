const router = reqiure("express").Router();

router.get("/usertest", (req, res)=> {
    res.send("user test is successfull");
})

module.exports = router