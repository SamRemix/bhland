<script context='module'>
    export async function load({ fetch, params }) {
        const id = params.id

        const alb = await fetch(`http://localhost:8081/album/${id}`)
        const album = await alb.json()

        if (alb.ok) {
            return {
                props: {
                    album
                }
            }
        }
        return {
            status: 301,
            redirect: '/reviews'
        }
    }
</script>

<script>
    import Back from '$lib/back.svelte'
    import { fade, fly } from 'svelte/transition'

    export let album = []
</script>

<Back />
<section in:fade={{delay: 600}} out:fade={{duration: 200}} class="album">
    <h1>Update Album</h1>
    {#each album as alb}
        <form action="http://localhost:8081/updatealbum/{alb.id}" method="POST">
            {#if alb.pike}
                <input type="number" name="pike" value={alb.pike}>
            {/if}
            <input type="text" name="name" value={alb.name}>
            <input type="submit" value="Submit">
        </form>
    {/each}
</section>

<style>
    .album {
        margin: 60px auto;
        padding: 20px 0;
        width: 80%;
        border-radius: 16px;
    }
    form {
        margin: 10px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    input[type=submit] {
        margin-top: 20px;
    }
</style>