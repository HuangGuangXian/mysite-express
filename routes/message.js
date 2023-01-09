const express = require("express");
const router = express.Router();
const messageServ = require("../service/messageService");

// 获取留言或者评论
router.get("/", async (req, res) => {
    res.send(await messageServ.findMessageByPageService(req.query));
});

// 添加留言或者评论
router.post("/", async (req, res) => {
    res.send(await messageServ.addMessageService(req.body));
});

// 删除留言或者评论
router.delete("/:id", async (req, res) => {
    res.send(await messageServ.deleteMessageService(req.params.id));
});

module.exports = router;