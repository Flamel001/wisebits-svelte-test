<!-- inspired by https://codepen.io/lucascyber/pen/EQLxbV and adapted-->
<div class="coffee_cup"></div>

<style lang="less">
    .coffee_cup {
        width: 20px;
        height: 18px;
        border: 1px white solid;
        border-radius: 0px 0px 5px 5px;
        position: relative;
        &:after,
        &:before {
            position: absolute;
            content: '';
        }

        /* handle */
        &:after {
            width: 6px;
            height: 6px;
            border: 1px white solid;
            border-left: none;
            border-radius: 0px 30px 30px 0px;
            left: 18px;
        }

        /* steam */
        &:before {
            width: 1px;
            height: 4px;
            background-color: white;
            top: -8px;
            left: 4px;
            box-shadow:
                5px 0px 0px 0px white,
                5px -5px 0px 0px white,
                10px 0px 0px 0px white;
            -webkit-animation: steam 1s linear infinite alternate;
            -moz-animation: steam 1s linear infinite alternate;
            animation: steam 1s linear infinite alternate;
        }
    }

    @keyframes steam {
        0% {
            height: 0px;
        }
        100% {
            height: 4px;
        }
    }
</style>
