<script>
    import { fly, fade } from 'svelte/transition'
</script>

<section in:fly={{y: 100, delay: 600}} out:fade={{duration: 200}} class='login'>
    <h1>Login</h1>
    <form action="http://localhost:8081/login " method="POST">
        <div>
            <input type='email' placeholder='Email' required>
            <input type='password' min='8' placeholder='Password' required>
        </div>
        <div>
            <input type='submit' value='Submit'>
        </div>
    </form>
</section>

<style>
    .login {
        display: flex;
        justify-content: center;
        flex-direction: column;
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