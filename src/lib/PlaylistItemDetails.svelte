<script lang="ts">
	import type { PlaylistSnippet } from './youtube';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	//import Kuroshiro from 'kuroshiro';

	//import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';
	//import Translate from './Translate.svelte';
	export let itemData: PlaylistSnippet;
	let translateConstructor: any;
	//const kuroshiro = new Kuroshiro();

	async function initTranslator() {
		//	await kuroshiro.init(new KuromojiAnalyzer());
	}
	onMount(async () => {
		// await kuroshiro.init(
		// 	new KuromojiAnalyzer({
		// 		dictPath: `${base}/dict`
		// 	})
		// );
		// translateConstructor = kuroshiro;
	});
</script>

{#if itemData}
	<div class="details">
		<div class="item">
			<img src={itemData.thumbnails.default.url} alt={itemData.title} />
			<div class="title">
				<h3>{itemData.title}</h3>
				<!-- <Translate bind:translateConstructor textString={itemData.title} /> -->
				<p>{itemData.videoOwnerChannelTitle}</p>
				<!-- <Translate bind:translateConstructor textString={itemData.title} /> -->
			</div>
		</div>
		<div class="linebreaks">
			{itemData.description}
		</div>
	</div>
{/if}

<style>
	.details {
		height: 100%;
		overflow-y: auto;
		min-height: 0;
	}
	.linebreaks {
		white-space: pre-wrap;
		word-wrap: normal;
	}
</style>
