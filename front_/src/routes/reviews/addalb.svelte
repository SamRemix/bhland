<script>
    import Back from '$lib/back.svelte'
    import { fade } from 'svelte/transition'
</script>

<Back />
<section in:fade={{delay: 600}} out:fade={{duration: 200}} class="album">
    <h1>Add Album</h1>
    <form action="http://localhost:8081/addalbum" method="POST">
        <div>
            <!-- <input type='text' name="cover" placeholder='Cover'> -->
            <input type='number' name="pike" placeholder='Pike'>
            <input type='text' name="name" placeholder='Name'>
        </div>
        <input type='submit' value='Submit'>
    </form>
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