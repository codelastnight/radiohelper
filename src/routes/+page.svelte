<script lang="ts">
	import { getPlaylistDataById, getPlaylistItemData } from '$lib/youtube';
	import PlaylistInput from '$lib/PlaylistInput.svelte';

	let playlistId = '';

	$: getPlaylist(playlistId);
	async function getPlaylist(Id: string) {
		if (!Id) return;
		const response = await getPlaylistItemData(Id);
		if (!response.ok) return;
		console.log(await response.json());
	}
</script>

<PlaylistInput bind:playlistId />
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
