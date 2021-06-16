const model = 'deb' // dev 为开发环境 prod 为生产环境
let host = model == 'build'?'http://39.106.171.35:8090':'http://localhost:9001';

module.exports = {
    // runtimeCompiler: true ,
    publicPath:"./",
    outputDir:'dist',
    assetsDir: 'static',
    devServer: {
        port: 9101,
        proxy: {
            '/api': {
                target: host, //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}