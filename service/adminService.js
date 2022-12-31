// admin 模块的业务逻辑层
const md5 = require("md5");
const adminDao = require("../dao/adminDao");

module.exports.loginService = async function (loginInfo) {
    loginInfo.loginPwd = md5(loginInfo.loginPwd);
    // 接下来进行数据的验证，也就是查询该条数据在数据库立马有没有
    let data = await adminDao.loginDao(loginInfo);
    if(data && data.dataValues) {
        // 添加 token
    }
    return { data };
    // {
    //     data: null
    // }
}
