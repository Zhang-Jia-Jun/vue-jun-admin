const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack:config => {
        // 修改内部svg规则
        const svg = config.module.rule('svg');
        svg.exclude.add(resolve('src/icons')).end();

        // 新增规则，use为规则命名，loader表示使用的加载器，tap表示配置选项
        const svgSpriteLoader = config.module.rule('svg-sprite')
        svgSpriteLoader
        .test(/\.svg$/)
        .include.add(resolve('src/icons/svg')).end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
    }
}