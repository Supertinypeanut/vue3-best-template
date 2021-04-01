<template>
	<h1>SETUP</h1>
	<!-- <HelloWorldSetup
    msg="Hello Vue 3 + TypeScript + Vite"
    @setupClick="onSetupClick"
  /> -->
	<button @click="onToHome">
		to Home page
	</button>
</template>

<script lang="ts">
// import HelloWorldSetup from "@/components/HelloWorld-setup.vue";
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
	name: 'SetupLayout',
	setup() {
		// const onSetupClick = () => {
		//   console.log("setup-click");
		// };
		const router = useRouter()
		const onToHome = () => {
			router.push('/')
		}

		return {
			onToHome,
		}
	},
})
</script>
