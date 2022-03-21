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
    import { fade } from 'svelte/transition'

    export let album = []

    function sortAlbum() {
        album.sort((a, b) => {
            return a.pike - b.pike
        })
    }
    sortAlbum()
</script>

<Back />
<section in:fade={{delay: 600}} out:fade={{duration: 200}} class='music'>
    <h1>Add Music</h1>
    <form action="http://localhost:8081/addmusic" method="POST">
        {#each album as alb}
            <input type="hidden" name="id_Album" value={alb.id}>
            <p>Pike {alb.pike} <i>"{alb.name}"</i></p>
        {/each}
        <div>
            <input type='number' name="track" min="1" placeholder='Track Number'>
            <input type='text' name="title" placeholder='Title'>
        </div>
        <input type='submit' value='Submit'>
    </form>
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