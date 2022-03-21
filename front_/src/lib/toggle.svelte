<script>
    export let active = 'false'
</script>

<div class='toggle' class:active={active} on:click>
    <span></span>
    <span></span>
    <span></span>
</div>

<style>
    .toggle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        inset: 45px 60px auto auto;
        cursor: pointer;
        z-index: 30;
    }
    .toggle span {
        height: 2px;
        border-radius: 2px;
        background: #777;
        position: absolute;
        left: 15px;
        transition: .4s, background .2s;
    }
    .toggle:hover span {
        background: #f05454;
    }
    .toggle span:nth-child(1) {
        width: 16px;
        transform: translate(6px, -10px);
    }
    .toggle.active span:nth-child(1) {
        width: 30px;
        transform: translateY(0) rotate(45deg);
    }
    .toggle span:nth-child(2) {
        width: 16px;
        transform: translate(6px, 10px);
    }
    .toggle.active span:nth-child(2) {
        width: 30px;
        transform: translateY(0) rotate(-45deg);
    }
    .toggle span:nth-child(3) {
        width: 30px;
        transform: translateX(0);
    }
    .toggle.active span:nth-child(3) {
        width: 0;
        transform: translateX(15px);
        transition: .2s;
    }
</style>