<script context='module'>
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
    import { fade } from 'svelte/transition'

	export let status;
    export let error
</script>

<section in:fade={{delay: 600}} out:fade={{duration: 200}} class='error'>
    <h2>{status}</h2>
    <p>{error.message}</p>
    <a href='/'>Home</a>
</section>

<style>
    .error {
        height: calc(100vh - 160px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    h2 {
        font-family: 'Cinzel';
        font-size: 9em;
    }
    a {
        margin: 20px;
        font-size: 2em;
        text-decoration: underline;
    }
</style>