const express = require("express");
const router = express.Router();
const totalServ = require("../service/totalService");

router.get('/', async (req, res) => {
    res.send(await totalServ.findTotalService());
});

module.exports = router;