import { MutationTree } from 'vuex'

export enum EXAMPLE_MUTATION_TYPE {
	CHANGE_MONEY = 'CHANGE_MONEY',
}

const mutations: MutationTree<typingStore.ExampleStatus> = {
	[EXAMPLE_MUTATION_TYPE.CHANGE_MONEY]: (state, payload) => {
		state.money = payload
	},
}

export default mutations
