<script>
    import { fade } from 'svelte/transition'
</script>

<a class='back' href='/reviews' transition:fade>
    <svg width='2.2em' height='2.2em' viewBox='0 0 512 512'>
        <path d='M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z'></path>
    </svg>
</a>

<style>
    .back {
        width: 60px;
        height: 60px;
        background: #e8e4d2;
        border: 1px solid #211e1e;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        inset: 45px auto auto 60px;
        transform: rotate(270deg);
        cursor: pointer;
        z-index: 10;
    }
    .back svg path {
        fill: #211e1e;
        transition: .2s;
    }
    .back:hover svg path {
        fill: #f05454;
    }
</style>