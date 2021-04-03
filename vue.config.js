// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const lessVariable2js = require('./lessVariabel2js')

const variable = lessVariable2js('./src/assets/styles/variables.less')

module.exports = {
	publicPath: process.env.VUE_APP_PROJECT_PATH,
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					javascriptEnabled: true,
					modifyVars: variable,
				},
			},
		},
	},
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'Project Name'
			return args
		})
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				path.resolve(__dirname, 'src/assets/styles/variables.less'),
				path.resolve(__dirname, 'src/assets/styles/mixin.less'),
			], // 引入全局样式变量
		},
	},
	devServer: {
		proxy: {
			[process.env.VUE_APP_BASE_API]: {
				target: process.env.VUE_APP_RUNTIME_HOST,
				changeOrigin: true,
				ws: true,
				secure: false,
			},
		},
	},
}
