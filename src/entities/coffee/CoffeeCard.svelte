<script lang="ts">
    import { fade } from 'svelte/transition';
    import Tag from 'shared/ui/Tag.svelte';
    import CoffeeImage from './CoffeeImage.svelte';
    import type { Coffee } from './types';
    export let coffee: Coffee;
    const { blend_name, intensifier, notes, origin, variety } = coffee;
    const tags = notes.split(', ');
</script>

<article transition:fade class="coffeeCard">
    <p class="coffeeCard-intensifier">{intensifier}</p>
    <CoffeeImage on:load />
    <section class="coffeeCard-info">
        <p class="coffeeCard-origin">{origin}</p>
        <h1 class="coffeeCard-name">{blend_name}</h1>
        <i class="coffeeCard-variaty">{variety}</i>
        <div class="coffeeCard-tags">
            {#each tags as name, index}
                <Tag {name} {index} />
            {/each}
        </div>
    </section>
</article>

<style lang="less">
    @import 'src/shared/styles/variables';
    .coffeeCard {
        background-color: white;
        position: relative;
        width: 280px;
        height: 380px;
        border-radius: 10px;
        overflow: hidden;
        display: grid;

        &-info {
            display: grid;
            gap: @gap-sm;
            padding: 0 0 @padding-sm @padding-sm;
        }

        &-name {
            font-size: 20px;
        }

        &-intensifier {
            color: white;
            font-size: 24px;
            text-shadow: 0 0 2px black;
            position: absolute;
            right: 5px;
            top: 5px;
        }

        &-origin {
            opacity: 0.6;
        }

        &-tags {
            margin: 0 -10px;
            padding: 0 20px 0 10px;
            display: flex;
            gap: @gap-sm;
            overflow-x: scroll;

            &::-webkit-scrollbar {
                display: none; /* Chrome, Safari, Opera */
            }
        }
    }
</style>
