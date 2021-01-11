<template>

    <div class="autoLikes-header">
        <h7>Каждый пакет рассчитан на <b>50 постов</b>.
            Лайки поступают автоматически на каждый новый пост.</h7>
    </div>

    <div class="viber-autoLikes">

        <div class="second-row">
            <div class="sub1000 p-3">
                <i class="fas fa-percent" id="percent4"></i>
                <h5>200</h5>
                <p>Лайков</p>
                <hr>
                <h6>59 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>

            <div class="sub2500 p-3">
                <i class="fas fa-percent" id="percent1"></i>
                <h5>500</h5>
                <p>Лайков</p>
                <hr>
                <h6>99 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>

            <div class="sub5000 p-3">
                <i class="fas fa-percent" id="percent2"></i>
                <h5>1500</h5>
                <p>Лайков</p>
                <hr>
                <h6>59 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>

            <div class="sub10000 p-3">
                <i class="fas fa-percent" id="percent3"></i>
                <h5>4000</h5>
                <p>Лайков</p>
                <hr>
                <h6>99 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>

        </div>

    </div>

</template>

<script>
    export default {
        name: "AutoLikes"
    }
</script>

<style scoped>
.autoLikes-header{
    font-size: 18px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
h7{
    max-width: 550px;
}
.viber-autoLikes{
    margin-top: 40px;
}
#percent4 {
    border: 1px solid dodgerblue;
    padding: 15px;
    border-radius: 40px;
    position: absolute;
    font-weight: bold;
    font-size: 22px;
    margin-left: 48px;
    margin-top: -40px;
    background-color: dodgerblue;
    color: white;
}

</style>