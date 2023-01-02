const express = require("express");
const router = express.Router();
const bannerServ = require("../service/bannerService");

// 获取首页标语
router.get("/", async (req, res) => {
    res.send(await bannerServ.findBannerService());
});

// 设置首页标语
router.post("/", async (req, res) => {
    res.send(await bannerServ.updateBannerService(req.body));
});

module.exports = router;