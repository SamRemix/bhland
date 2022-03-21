<script context='module'>
    export async function load({ fetch, params }) {
        const id = params.id

        const m = await fetch(`http://localhost:8081/music/${id}`)
        const music = await m.json()

        if (m.ok) {
            return {
                props: {
                    music
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

    export let music = []
</script>

<Back />
<section in:fade={{delay: 600}} out:fade={{duration: 200}} class="music">
    <h1>Update Music</h1>
    {#each music as m}
        <form action="http://localhost:8081/updatemusic/{m.id}" method="POST">
            <div>
                <input type="number" name="track" min="1" value={m.track}>
                <input type="text" name="title" value={m.title}>
            </div>
            <input type="submit" value="Submit">
        </form>
    {/each}
</section>

<style>
    .music {
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