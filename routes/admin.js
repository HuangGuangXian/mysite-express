var express = require('express');
var router = express.Router();
const adminServ = require("../service/adminService");

router.post('/login', async function(req, res, next) {
    // 首先应该有一个验证码的验证

    // 假设上面的验证码已经通过了
    const result = await adminServ.loginService(req.body);
    console.log(result);
});

module.exports = router;
