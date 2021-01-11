<template>
    <div class="info active">

        <div class="first-row">
            <div class="sub250 p-3">
                <h5>250</h5>
                <p>Подписчиков</p>
                <hr>
                <h6>59 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>
            <div class="sub500 p-3">
                <h5>500</h5>
                <p>Подписчиков</p>
                <hr>
                <h6>99 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>
        </div>
        <br>
        <div class="second-row">
            <div class="sub1000 p-3">
                <h5>1000</h5>
                <p>Подписчиков</p>
                <hr>
                <h6>59 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>
            <div class="sub2500 p-3">
                <h5>2500</h5>
                <p>Подписчиков</p>
                <hr>
                <h6>99 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>
            <div class="sub5000 p-3">
                <h5>5000</h5>
                <p>Подписчиков</p>
                <hr>
                <h6>59 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>
            <div class="sub10000 p-3">
                <h5>9999</h5>
                <p>Подписчиков</p>
                <hr>
                <h6>99 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "subscribers"
    }
</script>

<style>
    .active{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .sub-btn{
        color: white;
        background-color: dodgerblue;
        border: 1px solid dodgerblue;
        border-radius: 10px;
        margin-bottom: 20px;
        padding: 3px 20px;
    }

    .first-row {
        display: inline-flex;
        justify-content: center;
    }
    .sub250{
        background-color: #E5E5E5;
        border-radius: 15px;
        margin-right: 10px;
    }
    .sub500{
        background-color: #E5E5E5;
        border-radius: 15px;
        margin-left: 10px;
    }

    .second-row{
        display: inline-flex;
        justify-content: center;
    }

    .sub1000{
        background-color: #E5E5E5;
        border-radius: 15px;
        padding: 10px;
        margin-right: 20px;
    }
    .sub2500{
        background-color: #E5E5E5;
        border-radius: 15px;
        padding: 10px;
        margin-right: 10px;
    }

    .sub5000{
        background-color: #E5E5E5;
        border-radius: 15px;
        padding: 10px;
        margin-left: 10px;
    }

    .sub10000{
        background-color: #E5E5E5;
        border-radius: 15px;
        padding: 10px;
        margin-left: 20px;
    }
</style>