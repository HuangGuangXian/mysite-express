const blogModel = require("./model/blogModel");
const blogTypeModel = require("./model/blogTypeModel");

// 添加博客
module.exports.addBlogDao = async function (blogInfo) {
    const { dataValues } = await blogModel.create(blogInfo);
    return dataValues;
}

// 根据分页获取文章
module.exports.findBlogByPageDao = async function (pageInfo) {
    if(pageInfo.categoryid && pageInfo.categoryid !== "-1") {
        // 根据分类信息来进行分页查询
        return await blogModel.findAndCountAll({
            include: [
                {
                    model: blogTypeModel,
                    as: "category",
                    where: {
                        id: pageInfo.categoryid
                    }
                }
            ],
            offset: (pageInfo.page * 1 - 1) * pageInfo.limit,
            limit: pageInfo.limit * 1
        })
    } else {
        // 根据所有博客文章进行分页查询
        return await blogModel.findAndCountAll({
            include: [
                {
                    model: blogTypeModel,
                    as: "category"
                }
            ],
            offset: (pageInfo.page * 1 - 1) * pageInfo.limit,
            limit: pageInfo.limit * 1
        })
    }
}