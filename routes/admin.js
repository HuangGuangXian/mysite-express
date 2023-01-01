var express = require('express');
var router = express.Router();
const adminServ = require("../service/adminService");
const { formatResponse, analysisToken } = require("../utils/tool");

// 登录
router.post('/login', async function(req, res, next) {
    // 首先应该有一个验证码的验证

    // 假设上面的验证码已经通过了
    const result = await adminServ.loginService(req.body);
    if(result.token) {
        res.setHeader("authorization", result.token);
    }
    res.send(formatResponse(undefined, undefined, result.data));
});

// 恢复登录状态
router.get("/whoami", async function (req, res) {
    // 1. 从客户端的请求拿到token，解析 token，还原成有用的信息
    const token = analysisToken(req.get("authorization"));
    // 2. 返回给客户端
    res.send(formatResponse(undefined, undefined, {
        "loginId": token.loginId,
        "name": token.name,
        "id": token.id
    }));
});

module.exports = router;
