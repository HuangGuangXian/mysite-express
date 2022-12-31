// 自定义错误
// 当错误发生的时候，我们捕获到发生的错误，然后抛出我们自定义的错误


/**
 * 业务处理错误基类
 * @class ServiceError
 * @extends {Error}
 */
class ServiceError extends Error {
    /**
     * @param {*} message 错误消息
     * @param {*} code  错误的消息码
     * @memberof ServiceError
     */
    constructor(message, code) {
        super(message);
        this.code = code;
    }

    // 方法
    toResponseJSON() {
        
    }
}

// 文件上传错误
exports.UploadError = class extends ServiceError {
    constructor(message) {
        super(message, 431);
    }
}
// 禁止访问错误
exports.ForbiddenError = class extends ServiceError {
    constructor(message) {
        super(message, 401);
    }
}
// 验证错误
exports.ValidationError = class extends ServiceError {
    constructor(message) {
        super(message, 406);
    }
}
// 无资源错误
exports.NotFoundError = class extends ServiceError {
    constructor() {
        super("not found", 406);
    }
}
// 未知错误
exports.UnknowError = class extends ServiceError {
    constructor() {
        super("server internal error", 500);
    }
}

module.exports.ServiceError = ServiceError;