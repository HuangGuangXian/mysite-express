const express = require("express");
const router = express.Router();
const projectServ = require("../service/projectService");

// 获取项目
router.get("/", async (req, res) => {
    res.send(await projectServ.findAllProjectService());
});

// 新增项目
router.post("/", async (req, res) => {
    res.send(await projectServ.addProjectService(req.body));
});

// 修改项目
router.put("/:id", async (req, res) => {
    res.send(await projectServ.updateProjectService(req.params.id, req.body));
});

// 删除项目
router.delete("/:id", async (req, res) => {
    res.send(await projectServ.deleteProjectService(req.params.id));
});

module.exports = router;