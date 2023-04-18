const messageDao = require("../dao/messageDao");
const blogDao = require("../dao/blogDao");
const blogTypeDao = require("../dao/blogTypeDao");
const projectDao = require("../dao/projectDao");
const {
    formatResponse
} = require("../utils/tool");

module.exports.findTotalService = async function () {
    const messageTotal = await messageDao.findMessageTotal();
    const blogTotal = await blogDao.findBlogTotal();
    const {
        count: blogTypeTotal
    } = await blogTypeDao.findAllBlogTypeDao();
    const {
        count: projectTotal
    } = await projectDao.findAllProjectDao()
    const total = [
        {
            title: '总文章数',
            total: blogTotal
        },
        {
            title: '总分类数',
            total: blogTypeTotal
        },
        {
            title: '总项目数',
            total: projectTotal
        },
        {
            title: '总留言数',
            total: messageTotal
        }
    ]
    return formatResponse(undefined, undefined, total);
}