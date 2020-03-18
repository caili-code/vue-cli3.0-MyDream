'use strict'
const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}


module.exports = (options = {}) => ({
	chainWebpack: config => {
		config.plugins.delete('preload') // TODO: need test
		config.plugins.delete('prefetch') // TODO: need test

		// set svg-sprite-loader
		config.module
			.rule('svg')
			.exclude.add(resolve('src/assets/icons'))
			.end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('src/assets/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]'
			})
			.end()
	},
	devServer: {
		open: true,
		host: "localhost",
		port: '8080',
		https: false,
		hotOnly: false,
		proxy: {
			'/api': {
				target: 'http://localhost:8088/crud2', //API服务器的地址
				ws: true, //代理websockets
				changeOrigin: true, // 虚拟的站点需要更管origin
				pathRewrite: { //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
					'^/api': ''
				}
			}
		},
	}
})
