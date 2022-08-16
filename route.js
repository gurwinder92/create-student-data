const express = require('express')
const data = require('../services/data')
const router = express.Router()

router.post("/postdata",data.postdata)
router.get("/getData", data.getData)
router.delete("/deletedata",data.deletedata)
 router.put("/updatedata",data.updatedata)

module.exports = router