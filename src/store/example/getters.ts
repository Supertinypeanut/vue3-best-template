import { GetterTree } from 'vuex'

const getters: GetterTree<
	typingStore.ExampleStatus,
	typingStore.RootState
> = {
	moneyDouble: state => state.money * 2,
}

export default getters
