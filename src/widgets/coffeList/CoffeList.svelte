<script lang="ts">
    import CoffeeCard from 'entities/coffee/CoffeeCard.svelte';
    import type { Coffee } from 'entities/coffee/types';
    import Loader from 'shared/ui/Loader.svelte';
    import AddButton from 'shared/ui/AddButton.svelte';
    import { getRandomCoffee } from './api';

    let coffeeList: Coffee[] = [];
    let isLoading;

    let interval: ReturnType<typeof setInterval>;
    const AUTO_ADD_TIMER = 30000;
    const autoAddCoffee = () => {
        clearInterval(interval);
        interval = setInterval(addCoffee, AUTO_ADD_TIMER);
    };

    const addCoffee = () => {
        isLoading = getRandomCoffee()
            .then((newCoffee) => (coffeeList = [...coffeeList, newCoffee]))
            .catch(() => {
                if (coffeeList.length === 0) {
                    addCoffee();
                }
            });
        autoAddCoffee();
    };
    addCoffee();
</script>

<article class="coffeeList">
    <section class="coffeeList-header">
        <h1>Coffee list</h1>
        {#await isLoading}
            <Loader />
        {:then}
            <AddButton on:click={addCoffee} />
        {:catch}
            <AddButton on:click={addCoffee} />
            Try again, please
        {/await}
    </section>
    <section class="coffeeList-content">
        {#each coffeeList as coffee}
            <CoffeeCard {coffee} />
        {/each}
    </section>
</article>

<style lang="less">
    @import '/src/shared/styles/variables.less';

    .coffeeList {
        padding: @padding-md;

        &-header {
            height: 75px;
            display: flex;
            align-items: center;
            gap: @gap-lg;
            padding-bottom: @padding-md;
        }

        &-content {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: @gap-md;
        }
    }
</style>
