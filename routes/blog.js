const express = require("express");
const router = express.Router();
const blogServ = require("../service/blogService");

// 添加博客
router.post("/", async (req, res, next) => {
    res.send(await blogServ.addBlogService(req.body));
});

// 分页获取博客
router.get("/", async (req, res) => {
    res.send(await blogServ.findBlogByPageService(req.query));
});

// 获取其中一个博客
router.get("/:id", async (req, res) => {
    const reqHeaders = req.headers;
    res.send(await blogServ.findBlogByIdService(req.params.id, reqHeaders.authorization));
});

// 修改其中一个博客
router.put("/:id", async (req, res) => {
    res.send(await blogServ.updateBlogService(req.params.id, req.body));
});

// 删除其中一个博客
router.delete("/:id", async (req, res) => {
    res.send(await blogServ.deleteBlogService(req.params.id));
});

module.exports = router;