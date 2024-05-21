<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const COFFEE_IMAGE_ENDPOINT = 'https://loremflickr.com/500/500/coffee_bean';
    let src,
        isLoading = true,
        error = '';
    const getCoffee = () => {
        isLoading = true;
        error = '';
        fetch(COFFEE_IMAGE_ENDPOINT)
            .then(({ url }) => (src = url))
            .catch(() => {
                error = "Sorry, we can't show coffee now";
                dispatch('load');
            });
    };
    getCoffee();
</script>

<article class="image" class:skeleton={isLoading && !error}>
    {#if error}
        <div class="error">
            {error}
            <div class="error-retry" on:click={getCoffee}>Click here to retry</div>
        </div>
    {:else}
        <img
            class="image"
            class:hidden={isLoading}
            class:visible={!isLoading}
            on:load={() => {
                isLoading = false;
                dispatch('load');
            }}
            {src}
            alt="coffee"
        />
    {/if}
</article>

<style lang="less">
    .image {
        width: 300px;
        height: 250px;
        transition: opacity 1s;
    }
    .hidden {
        opacity: 0;
    }
    .visible {
        opacity: 1;
    }

    .error {
        background-color: lightgray;
        height: 250px;
        display: grid;
        place-items: center;
        align-content: center;
        &-retry {
            cursor: pointer;
            border-bottom: 1px solid blue;
        }
    }
    .skeleton {
        background:
            repeat-y
                linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0),
                    rgba(255, 255, 255, 0.5) 60%,
                    rgba(255, 255, 255, 0) 80%
                ),
            lightgray;
        background-size: 50px;
        animation: shine 2s infinite;
    }

    @keyframes shine {
        to {
            background-position:
                100% 0,
                /* move highlight to right */ 0 0;
        }
    }
</style>
