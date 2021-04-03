<template>
	<div class="404">
		<h1>404...</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useEventBus } from '@/hooks'

export default defineComponent({
	name: '404',
	components: {},
	props: {},
	setup() {
		const eventBus = useEventBus()
		eventBus.emit('errorCode', '404')
		return {}
	},
})
</script>

<style lang="less"></style>
