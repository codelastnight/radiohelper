<script>
	import 'modern-normalize';
</script>

<slot />

<style global>
	body {
		margin: 0;
		height: 100%;
	}
	:root {
		--f0: calc(var(--f1) * 0.8);
		--f1: calc(var(--f2) * 0.8);
		--f2: calc(var(--f3) * 0.8);
		--f3: 16px;
		--f4: calc(var(--f3) * 1.2);
		--f5: calc(var(--f4) * 1.2);
		--f6: calc(var(--f5) * 1.2);
		--f7: calc(var(--f6) * 1.2);
		font-size: var(--f3);
	}
	p {
		font-size: var(--f3);
	}
	.container {
		height: 100vh;
		width: 100vw;
		overflow-y: hidden;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
</style>
