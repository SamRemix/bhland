<script context='module'>
    export async function load({ fetch, params }) {
        const id = params.id

        const usr = await fetch(`http://localhost:8081/user/${id}`)
        const user = await usr.json()

        if (usr.ok) {
            return {
                props: {
                    user
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
    import { fade } from 'svelte/transition'

    export let user = []
</script>

<section in:fade={{delay: 600}} out:fade={{duration: 200}} class='user'>
    {#each user as usr}
        <h1>{usr.name}</h1>
        <h1>{usr.email}</h1>
    {/each}
</section>