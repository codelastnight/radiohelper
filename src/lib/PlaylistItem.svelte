<script lang="ts">
	import type { PlaylistSnippet } from './youtube';
	export let itemData: PlaylistSnippet;
</script>

{#if itemData}
	<div class="item" on:click on:keypress>
		<img src={itemData.thumbnails.default.url} alt={itemData.title} />
		<div class="title">
			<h3>{itemData.title}</h3>
			<p>{itemData.videoOwnerChannelTitle}</p>
		</div>
	</div>
{/if}

<style>
	.item {
		display: grid;
		grid-template-columns: auto 1fr;

		padding: 0.5rem 1rem;
		width: 100%;
		text-align: start;
		cursor: pointer;
		gap: 0.5rem;
	}
	.item:hover {
		background-color: rgb(219, 219, 219);
	}
	.title {
		font-size: var(--f1);
	}
	.title h3 {
		font-size: var(--f2);
		margin: 0;
	}
</style>
