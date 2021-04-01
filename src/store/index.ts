import { createStore, createLogger } from 'vuex'
import example from './example'

const isProd: boolean = process.env.NODE_ENV === 'production'

export const store = createStore<typingStore.RootState>({
	state: {
		count: 0,
	},
	modules: {
		example,
	},
	strict: !isProd,
	plugins: isProd ? [] : [createLogger()],
})
