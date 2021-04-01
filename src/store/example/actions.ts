import { ActionTree } from 'vuex'
import { EXAMPLE_MUTATION_TYPE } from './mutations'

const actions: ActionTree<
	typingStore.ExampleStatus,
	typingStore.RootState
> = {
	[EXAMPLE_MUTATION_TYPE.CHANGE_MONEY]: ({ commit }, payload) => {
		commit(EXAMPLE_MUTATION_TYPE.CHANGE_MONEY, payload)
	},
}

export default actions
