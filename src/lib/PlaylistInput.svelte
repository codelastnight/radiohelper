<script lang="ts">
	export let playlistId = '';
	let searchInput = '';
	// validate youtube playlist url
	const regEx = /^.*(youtu.be\/|list=)([^#\&\?]*).*/;

	const messages = {
		null: '',
		invalid: 'invalid youtube link!',
		success: ''
	};
	let errorState: keyof typeof messages = 'null';

	function oninputChange(searchString: string) {
		if (!searchString) return 'null';

		const match = searchString.match(regEx);
		if (match && match[2]) {
			playlistId = match[2];
			return 'success';
		}
		// fail condition
		return 'invalid';
	}
	$: errorState = oninputChange(searchInput);
</script>

<input type="text" bind:value={searchInput} placeholder="insert playlist link" />

<p>{messages[errorState]}</p>
