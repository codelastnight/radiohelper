<script lang="ts">
	import init, { convert_romaji } from 'rustsrc';
	export let textString: string;

	let isInit = false;

	$: text = translate(textString);

	async function translate(string: string) {
		await init();
		if (!string) return ' ';
		const result = convert_romaji(string);
		return result;
	}
</script>

{#await text}
	...translating
{:then data}
	{data}
{:catch e}
	{e.message}
{/await}
