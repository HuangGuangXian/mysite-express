const jwt = require("jsonwebtoken");
const md5 = require("md5");
// 格式化要响应的数据
// {
//     "code": code,
//     "msg": "登录成功",
//     "data": data
// }
module.exports.formatResponse = function (code = 0, message = "", data = null) {
    return {
        "code": code,
        "msg": message,
        "data": data
    }
};

module.exports.analysisToken = function (token) {
    return jwt.verify(token.split(" ")[1], md5(process.env.JWT_SECRET));
}