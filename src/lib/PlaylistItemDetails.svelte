<script lang="ts">
	import { getVideoData } from './youtube';
	import type { PlaylistSnippet, VideoSnippet } from './youtube';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	export let itemData: PlaylistSnippet;
	let videoPromise: any;

	$: if (itemData) videoPromise = getYoutubeData(itemData.resourceId.videoId);


	async function getYoutubeData(videoId: string) {
		if (!videoId) throw new Error('');
		const response = await getVideoData(videoId);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			return data;
		} else {
			throw new Error('error');
		}
	}

	onMount(async () => {
	
	});
</script>

{#if itemData}
	<div class="details">
		<div class="item">
			<img src={itemData.thumbnails.default.url} alt={itemData.title} />
			<p>{itemData.resourceId.videoId}</p>
			<div class="title">
				{#await videoPromise}
					<h3>{itemData.title}</h3>
					<p>{itemData.videoOwnerChannelTitle}</p>
				{:then data}
					<h3>{data.items[0].snippet.localized.title}<span>{itemData.title}</span></h3>
					<p>
						{data.items[0].snippet.localized.description}<span
							>{itemData.videoOwnerChannelTitle}</span
						>
					</p>
				{:catch error}
					<h3>{itemData.title}</h3>
					<p>{itemData.videoOwnerChannelTitle}</p>
					<p style="color: red">{error.message}</p>
				{/await}
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
	span {
		color: darkgray;
		font-size: var(--f2);
	}
</style>
