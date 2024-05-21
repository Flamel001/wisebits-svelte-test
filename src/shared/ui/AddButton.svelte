<script lang="ts">
    import Loader from './Loader.svelte';

    export let disabled: boolean,
        testId: string = '',
        loading: boolean;
</script>

<button on:click {disabled} data-testid={testId} class="addButton">
    {#if loading}
        <Loader />
    {:else}
        +
    {/if}
</button>

<style lang="less">
    .addButton {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        font-size: large;
        display: grid;
        place-items: center;
        background-color: #6f4e37;
        color: white;
        transition-duration: 0.25s;

        &:hover:enabled {
            cursor: pointer;
            box-shadow: 0 0 2px 2px #6f4e37;
        }
    }
</style>
