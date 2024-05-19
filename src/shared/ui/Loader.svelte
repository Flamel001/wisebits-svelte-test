<!-- actually taken from here https://codepen.io/lucascyber/pen/EQLxbV -->
<div class="coffee_cup"></div>

<style>
    .coffee_cup {
        width: 40px;
        height: 44px;
        border: 1px #fff solid;
        border-radius: 0px 0px 5px 5px;
        position: relative;
        margin-top: 14px;
    }
    .coffee_cup:after,
    .coffee_cup:before {
        position: absolute;
        content: '';
    }
    .coffee_cup:after {
        width: 15px;
        height: 24px;
        border: 1px #fff solid;
        border-left: none;
        border-radius: 0px 30px 30px 0px;
        left: 38px;
    }
    .coffee_cup:before {
        width: 1px;
        height: 6px;
        background-color: #fff;
        top: -10px;
        left: 14px;
        box-shadow:
            5px 0px 0px 0px #fff,
            5px -5px 0px 0px #fff,
            10px 0px 0px 0px #fff;
        -webkit-animation: steam 1s linear infinite alternate;
        -moz-animation: steam 1s linear infinite alternate;
        animation: steam 1s linear infinite alternate;
    }
    @-webkit-keyframes steam {
        0% {
            height: 0px;
        }
        100% {
            height: 6px;
        }
    }
    @-moz-keyframes steam {
        0% {
            height: 0px;
        }
        100% {
            height: 6px;
        }
    }
    @-moz-keyframes steam {
        0% {
            height: 0px;
        }
        100% {
            height: 6px;
        }
    }
    @-webkit-keyframes steam {
        0% {
            height: 0px;
        }
        100% {
            height: 6px;
        }
    }
    @-o-keyframes steam {
        0% {
            height: 0px;
        }
        100% {
            height: 6px;
        }
    }
    @keyframes steam {
        0% {
            height: 0px;
        }
        100% {
            height: 6px;
        }
    }
</style>
