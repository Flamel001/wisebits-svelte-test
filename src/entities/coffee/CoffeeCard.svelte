<script lang="ts">
    import { fade } from 'svelte/transition';

    import Tag from 'src/shared/ui/Tag.svelte';
    import type { Coffee } from './types';
    import CoffeeImage from './CoffeeImage.svelte';
    export let coffee: Coffee;
    const { blend_name, intensifier, notes, origin, variety } = coffee;
    const tags = notes.split(', ');
</script>

<article transition:fade class="coffeeCard">
    <p class="coffeeCard-intensifier">{intensifier}</p>
    <CoffeeImage />
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
        width: 300px;
        height: 380px;
        border-radius: 10px;
        overflow: hidden;
        display: grid;

        &-info {
            display: grid;
            gap: @gap-sm;
            padding: 0 0 @padding-sm @padding-sm;
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
            display: flex;
            gap: @gap-sm;
            overflow-x: scroll;

            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
            &::-webkit-scrollbar {
                display: none; /* Chrome, Safari, Opera */
            }
        }
    }
</style>
