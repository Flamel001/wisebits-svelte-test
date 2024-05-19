<script lang="ts">
    export let name: string, index: number;
</script>

<div
    class="tag"
    class:tag-yellow={index === 0}
    class:tag-green={index === 1}
    class:tag-rebeccapurple={index === 2}
    class:tag-blueviolet={index === 3}
    class:tag-default={index > 3}
>
    {name}
</div>

<style lang="less">
    .tag {
        border-radius: 5px;
        padding: 5px 8px;
        margin: auto;
        color: white;
        white-space: nowrap;

        &-yellow {
            color: black;
            background-color: yellow;
        }
        &-green {
            background-color: green;
        }
        &-rebeccapurple {
            background-color: rebeccapurple;
        }
        &-blueviolet {
            background-color: blueviolet;
        }
        &-default {
            background-color: lightgray;
        }
    }
</style>
