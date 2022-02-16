const { verifyToken } = require("./verifyToken");

const router = reqiure("express").Router();

router.put("/:id",verifyToken, (req, res)=>{
  
})

module.exports = router;