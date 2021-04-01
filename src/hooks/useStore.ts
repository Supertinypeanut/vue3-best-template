import { InjectionKey } from 'vue'
import { Store, useStore as baseUseStore } from 'vuex'

const key: InjectionKey<Store<typingStore.RootState>> = Symbol()

function useStore() {
	return baseUseStore(key)
}

export { useStore }
