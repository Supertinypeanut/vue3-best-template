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

<script setup lang="ts">
import { ref, defineProps, defineEmit, useContext } from 'vue'

// 获取props
const props = defineProps({
	msg: {
		type: String,
		required: true,
	},
})

// 获取上下文
const ctx = useContext()

// 定义事件
const emits = defineEmit(['setup-click'])

// 定义变量
const count = ref(0)
const onClick = () => {
	count.value++

	// 发布事件
	// emits('setup-click')
	ctx.emit('setup-click')
}
</script>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
