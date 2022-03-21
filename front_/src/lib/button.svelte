<script>
    export let def = false
    export let del = false
    export let upda = false
</script>

<div class="button" class:delete={del} class:update={upda} class:default={def}>
    <slot></slot>
</div>

<style>
    .button {
        padding: 6px 8px;
        width: fit-content;
        border-radius: 6px;
        cursor: pointer;
        transition: .2s;
    }
    .default {
        border: 2px solid #699DFF;
    }
    .default:hover {
        background: #699DFF;
    }
    .delete {
        border: 2px solid #f05454;
    }
    .delete:hover {
        background: #f05454;
    }
    .update {
        border: 2px solid #48C479;
    }
    .update:hover {
        background: #48C479;
    }
</style>