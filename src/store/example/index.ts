import { Module } from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const example: Module<typingStore.ExampleStatus, typingStore.RootState> = {
	namespaced: true,
	state: {
		money: 1,
	},
	mutations,
	getters,
	actions,
}

export default example
