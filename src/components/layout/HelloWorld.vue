<template>
	<h1>{{ msg }}</h1>

	<p>
		Recommended IDE setup:
		<a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
		+
		<a
			href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
			target="_blank"
			>Vetur</a
		>
		or
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
		(if using
		<code>&lt;script setup&gt;</code>)
	</p>

	<p>See <code>README.md</code> for more information.</p>

	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank"
			>Vite Docs</a
		>
		|
		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
	</p>

	<button @click="onClick">count is: {{ count }}</button>
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext } from 'vue'
import { useProjectServiceInject } from '@/hooks'

export default defineComponent({
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			required: true,
		},
	},
	emits: ['default-click'],
	setup: (_, context: SetupContext) => {
		const count = ref(0)
		const projectService = useProjectServiceInject()

		// 接口请求
		projectService
			.GetMonthlyDataQuickpayApiGET({ cycle: 'GetMonthlyDataQuickpayApiGET' })
			.then(res => {
				console.log('projectService:', res)
			})

		const onClick = () => {
			count.value++

			// 发布事件
			context.emit('default-click')
		}

		return { count, onClick }
	},
})
</script>

<style lang="less">
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: @white-color;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
