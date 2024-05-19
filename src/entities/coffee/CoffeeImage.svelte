<script>
    // general component + link as props?
    const COFFEE_IMAGE_ENDPOINT = 'https://loremflickr.com/500/500/coffee_bean';
    let src,
        isLoading = true;
    const getCoffee = async () => {
        src = await fetch(COFFEE_IMAGE_ENDPOINT).then(({ url }) => url);
    };
    getCoffee();
</script>

<article class="image" class:skeleton={isLoading}>
    <img
        class="image"
        class:hidden={isLoading}
        class:visible={!isLoading}
        on:load={() => (isLoading = false)}
        {src}
        alt="coffee"
    />
</article>

<style>
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
