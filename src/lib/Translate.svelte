<script lang="ts">
	export let translateConstructor: any;
	export let textString: string;
	let promise: any;

	$: promise = translate(textString, translateConstructor);

	async function translate(string: string, translateService: any) {
		console.log(translateService);
		if (!translateService) throw Error('poop');
		if (!string) throw Error('empty string!');
		const result = await translateService.convert(string, { to: 'romaji' });
		return result;
	}
</script>

{#await promise}
	<p>translating...</p>
{:then data}
	<p>{data}</p>
{:catch e}
	<p style="color:red">{e.message}</p>
{/await}
