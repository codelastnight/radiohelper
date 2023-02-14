<script lang="ts">
	import { getPlaylistItemData } from '$lib/youtube';
	import type { PlaylistSnippet } from '$lib/youtube';
	import PlaylistInput from '$lib/PlaylistInput.svelte';
	import PlaylistItemDetails from '$lib/PlaylistItemDetails.svelte';
	import PlaylistItem from '$lib/PlaylistItem.svelte';

	let playlistId = '';
	let promise: Promise<any>;
	let currentSnippet: PlaylistSnippet;

	$: promise = getPlaylist(playlistId);

	async function getPlaylist(Id: string) {
		if (!Id) throw new Error('');
		const response = await getPlaylistItemData(Id);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error('error');
		}
	}
</script>

<div class="flex main">
	<header class="flex gap">
		<p>https://www.youtube.com/playlist?list=PL-py_l3i0_hUDb1-nIlV-cC40ktnPP-HC</p>

		<PlaylistInput bind:playlistId />
		<button on:click={() => getPlaylist(playlistId)}>reload playlist</button>
	</header>
	<div class="grid gap">
		<div class="list">
			{#await promise}
				<p>loading...</p>
			{:then data}
				{#each data?.items as item (item.snippet.resourceId.videoId)}
					<PlaylistItem itemData={item.snippet} on:click={() => (currentSnippet = item.snippet)} />
				{/each}
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>
		<PlaylistItemDetails itemData={currentSnippet} />
	</div>
</div>

<style>
	header {
		flex: 0 1 auto;
	}
	.main {
		flex-flow: column;
		height: 100vh;
	}
	.flex {
		display: flex;
	}
	.grid {
		flex: 1 1 auto;
		display: grid;
		min-height: 0;
		grid-template-columns: 1fr 3fr;
	}
	.gap {
		gap: 0.5rem;
	}
	.list {
		overflow-y: auto;
		min-height: 0;
	}
</style>
