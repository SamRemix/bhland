<!-- <script context='module'>
    export async function load({ fetch }) {
        const usr = await fetch('http://localhost:8081/user')
        const user = await usr.json()
        if (usr.ok) {
            return {
                props: { user }
            }
        }
        return {
            status: 301,
            redirect: '/reviews'
        }
    }
</script> -->

<script>
    import { fly, fade } from 'svelte/transition'

    // export let user = []
    
    // let fields = {name: '', email: '', password: ''}
    // let errors = {name: '', email: '', password: ''}
    // let valid = false

    // const verify = () => {
    //     valid = true
    //     if (fields.name.trim().length < 3) {
    //         valid = false
    //         errors.name = 'Name must be at least 3 characters'
    //     } else errors.name = ''

    //     user.filter(data => {
    //         console.log(data.email)
    //         if (fields.email == data.email) {
    //             valid = false
    //             errors.email = 'Email already used'
    //         } else errors.email = ''
    //     })

    //     if (fields.password.trim().length < 8) {
    //         valid = false
    //         errors.password = 'Password must be at least 8 characters'
    //     } else errors.password = ''

    //     if (valid) {}
    // }
</script>

<section in:fly={{y: 100, delay: 600}} out:fade={{duration: 200}} class='signup'>
    <h1>Sign Up</h1>
    <!-- <form on:submit|preventDefault={verify}> -->
    <form action="http://localhost:8081/signup" method="POST">
        <div>
            <input type='text' name='name' placeholder='Name'>
            <input type='email' name='email' placeholder='Email'>
            <input type='password' name='password' placeholder='Password'>
        </div>
        <!-- <div class="error">
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
        </div> -->
        <div>
            <input type='submit' value='Submit'>
        </div>
    </form>
</section>

<style>
    .signup {
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
    /* .error {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .error div {
        margin: 10px;
    } */
</style>