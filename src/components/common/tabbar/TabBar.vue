<template>
	<div class="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "TabBar"
}
</script>

<style scoped>
	.tab-bar {
		display: flex;
		justify-content: space-around;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #fff;
	}
</style>
