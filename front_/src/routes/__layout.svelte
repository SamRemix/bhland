<script>
    import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'

    import Toggle from '$lib/toggle.svelte'
    import Menu from '$lib/menu.svelte'
    import '../global.css'

    let active = false
    const toggle = () => active = !active
    
    let scrollY
    const top = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<svelte:window bind:scrollY />

{#if scrollY > 50}
    <div class='arrow' on:click={top} in:scale out:scale={{duration: 200, start: 1.2}}>
        <svg width='2.2em' height='2.2em' viewBox='0 0 512 512'>
            <path d='M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z'></path>
        </svg>
    </div>
{/if}
<Toggle on:click={toggle} {active} />
<Menu on:click={toggle} {active} />
<main>
    <slot></slot>
</main>

<style>
    .arrow {
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
        cursor: pointer;
        z-index: 10;
    }
    .arrow svg path {
        fill: #211e1e;
        transition: .2s;
    }
    .arrow:hover svg path {
        fill: #f05454;
    }
    main {
        height: calc(100vh - 80px);
    }
</style>