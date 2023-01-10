const express = require("express");
const router = express.Router();
const aboutServ = require("../service/aboutService");

// 获取关于页面的url
router.get("/", async (req, res) => {
    res.send(await aboutServ.findAboutService());
});

// 设置关于页面的url
router.put("/", async (req, res) => {
    res.send(await aboutServ.updateAboutService(req.body.url));
});

module.exports = router;