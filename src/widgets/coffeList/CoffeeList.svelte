<script lang="ts">
    import CoffeeCard from 'entities/coffee/CoffeeCard.svelte';
    import type { Coffee } from 'entities/coffee/types';
    import AddButton from 'shared/ui/AddButton.svelte';
    import { getRandomCoffee } from './api';
    import { onDestroy } from 'svelte';

    let coffeeList: Coffee[] = [];
    let isLoading = true;
    let error = '';

    let interval: ReturnType<typeof setInterval>;
    let retryTimeout: ReturnType<typeof setTimeout>;
    const AUTO_ADD_TIMER = 30000;
    const autoAddCoffee = () => {
        clearInterval(interval);
        interval = setInterval(addCoffee, AUTO_ADD_TIMER);
    };

    const addCoffee = (retryCount = 0) => {
        isLoading = true;
        error = '';
        getRandomCoffee()
            .then((newCoffee) => {
                coffeeList = [...coffeeList, newCoffee];
            })
            .catch(() => {
                // По ТЗ тестового "Первая карточка должна выводится", поэтому тут
                // минимальная имплементация ретраев для случая когда это не получилось с первого раза
                if (coffeeList.length === 0 && retryCount < 3) {
                    retryTimeout = setTimeout(
                        () => {
                            addCoffee(++retryCount);
                        },
                        retryCount * 2 * 1000
                    );
                } else {
                    error = "Sorry, we can't serve coffee now. Try again later";
                    isLoading = false;
                }
            });
        autoAddCoffee();
    };
    addCoffee();

    let coffeListContentElem: HTMLElement;

    onDestroy(() => (clearInterval(interval), clearTimeout(retryTimeout)));
</script>

<article data-testid="coffeeList" class="coffeeList">
    <h1 class="coffeeList-title">Coffee list</h1>
    <section bind:this={coffeListContentElem} class="coffeeList-content">
        {#each coffeeList as coffee}
            <CoffeeCard
                {coffee}
                on:load={() => {
                    isLoading = false;
                    coffeListContentElem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end'
                    });
                }}
            />
        {/each}
        <AddButton
            testId="addCoffee"
            disabled={isLoading}
            loading={isLoading}
            on:click={() => addCoffee()}
        />
        {#if error}
            <p>{error}</p>
        {/if}
    </section>
</article>

<style lang="less">
    @import '/src/shared/styles/variables.less';

    .coffeeList {
        padding: @padding-md;

        &-title {
            text-align: center;
        }

        &-content {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: @gap-md;

            flex-direction: column;

            @media @desktop {
                flex-direction: row;
            }
        }
    }
</style>
