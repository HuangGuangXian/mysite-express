const express = require("express");
const router = express.Router();
const captchaServ = require("../service/captchaService");

router.get("/", async (req, res) => {
    // 生成验证码
    const captcha = await captchaServ.getCaptchaService();
    req.session.captcha = captcha.text;
    // 设置响应头
    res.setHeader("Content-type", "image/svg+xml");
    res.send(captcha.data);
});

module.exports = router;