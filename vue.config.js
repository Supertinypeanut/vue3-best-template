// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const scssVariable2js = require('./scssVariabel2js')

const variable = scssVariable2js('./src/assets/variable.scss')

module.exports = {
	publicPath: process.env.VUE_APP_PROJECT_PATH,
	css: {
		loaderOptions: {
			sass: {
				sassOptions: {
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
			preProcessor: 'scss',
			patterns: [path.resolve(__dirname, 'src/styles/variable.scss')], // 引入全局样式变量
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
