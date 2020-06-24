const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', { //配置按需加载
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#FF0000'
        }
    }),
);