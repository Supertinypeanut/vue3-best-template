<template>
	<img alt="Vue logo" src="./assets/images/logo.png" />
	<router-view>
		<template #slot="{ Component }">
			<transition name="fade-transform" mode="out-in">
				<component :is="Component" :key="routeComponentKey" />
			</transition>
		</template>
	</router-view>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useEventBus, useProjectServiceProvide } from '@/hooks'

export default defineComponent({
	setup() {
		// 提供API接口
		useProjectServiceProvide()

		const eventBus = useEventBus()
		const routeComponentKey = computed(() => useRoute().name)

		eventBus.on('errorCode', (errorCode: string) => {
			console.log(errorCode)
		})

		return {
			routeComponentKey,
		}
	},
})
</script>
