
// 通过一个middleware给ctx添加一个rest()方法，直接输出JSON数据。
// 我们给所有REST API一个固定的URL前缀/api/，所以，这个middleware还需要根据path来判断当前请求是否是一个REST请求，如果是，我们才给ctx绑定rest()方法
// 这样，任何支持REST的异步函数只需要简单地调用：ctx.rest({data: 123});

module.exports = {
    APIError: function (code, message) {
        this.code = code || 'internal:unknown_error';
        this.message = message || '';
    },
    restify: (pathPrefix) => {
        pathPrefix = pathPrefix || '/api/';
        return async (ctx, next) => {
            if (ctx.request.path.startsWith(pathPrefix)) {
                // 绑定rest()方法:
                ctx.rest = (data) => {
                    ctx.response.type = 'application/json';
                    ctx.response.body = data;
                }
                try {
                    await next();
                } catch (e) {
                    // 返回错误:
                    ctx.response.status = 400;
                    ctx.response.type = 'application/json';
                    ctx.response.body = {
                        code: e.code || 'internal:unknown_error',
                        message: e.message || ''
                    };
                }
            } else {
                await next();
            }
        };
    }
};