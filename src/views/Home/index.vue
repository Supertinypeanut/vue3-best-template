<template>
	<h1>HOME</h1>
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" @defaultClick="onClick" />
	<button @click="onToSetup">
		to setup page
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import HelloWorld from '@/components/layout/HelloWorld.vue'

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld,
	},
	setup() {
		const router = useRouter()

		const onClick = () => {
			console.log('default-click')
		}
		const onToSetup = () => {
			router.push({ name: 'Setup-Page' })
		}

		return {
			onClick,
			onToSetup,
		}
	},
})
</script>
