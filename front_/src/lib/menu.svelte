<!-- <script context='module'>
    export async function load({ fetch }) {
        const usr = await fetch('http://localhost:8081/user')
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
</script> -->

<script>
    export let active = 'false'

    // export let user = []
</script>

<div class='border' class:active={active}></div>
<div class='menu' class:active={active} on:click>
    <ul>
        <li><a sveltekit:prefetch href='/'>Home</a></li>
        <li><a sveltekit:prefetch href='/reviews'>Reviews</a></li>
        <li><a sveltekit:prefetch href='/login'>Login</a></li>
        <li><a sveltekit:prefetch href='/signup'>Sign Up</a></li>
        <li><a sveltekit:prefetch href='/logout'>Logout</a></li>
        <!-- {#each user as usr}
            <li><a sveltekit:prefetch href='/user/{usr.id}'>Account</a></li>
        {/each} -->
    </ul>
</div>

<style>
    .border,
    .menu {
        width: 100%;
        height: 100%;
        position: fixed;
        inset: 0 0 auto auto;
        z-index: 20;
        /* overflow-y: scroll; */
    }
    .border {
        background: #211e1e44;
        clip-path: circle(30px at calc(100% - 90px) 75px);
        transition: .9s;
    }
    .border.active {
        clip-path: circle(150% at calc(100% - 90px) 75px);
        transition: .7s;
    }
    .menu {
        background: #110908;
        clip-path: circle(22px at calc(100% - 90px) 75px);
        display: flex;
        transition: .7s;
    }
    .menu.active {
        clip-path: circle(150% at calc(100% - 90px) 75px);
        transition: .9s;
    }
    .menu ul {
        /* padding: 40px 60px; */
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        /* justify-content: center; */
        flex-direction: column;
    }
    .menu ul li {
        /* margin: 40px; */
        width: fit-content;
        position: relative;
        transition: .4s;
    }
    .menu ul li:hover {
        transform: skew(-20deg);
    }
    .menu ul li a {
        color: transparent;
        -webkit-text-stroke: 1px #fff;
        font-family: 'Cinzel';
        font-size: 80px;
        font-weight: 600;
        text-decoration: none;
        position: relative;
        transition: .4s, text-shadow .8s;
    }
    .menu ul li a:hover {
        text-shadow: 0 0 8px #fff, 0 0 16px #fff;
    }
    .menu ul li a::before,
    .menu ul li a::after {
        content: '';
        width: 0;
        height: 2px;
        background: #fff;
        box-shadow: 0 0 4px #fff, 0 0 8px #fff;
        border-radius: 3px;
        position: absolute;
        transition: .6s;
    }
    .menu ul li a::before {
        transform: translate(-20px) skew(0deg);
    }
    .menu ul li a::after {
        transform: translate(20px) skew(0deg);
    }
    .menu ul li a::before {
        inset: calc(50% - 6px) auto auto -5%;
    }
    .menu ul li a::after {
        inset: calc(50% + 4px) -5% auto auto;
    }
    .menu ul li a:hover::before,
    .menu ul li a:hover::after {
        width: 110%;
        transform: translate(0) skew(10deg);
    }
    .menu ul li a:hover::before {
        right: -5%;
        left: auto;
    }
    .menu ul li a:hover::after {
        right: auto;
        left: -5%;
    }
</style>