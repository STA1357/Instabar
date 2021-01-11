<template>
    <div class="viber-views">
        <div class="second-row">
            <div class="sub1000 p-3">
                <h5>1000</h5>
                <p>Просмотров</p>
                <hr>
                <h6>59 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>
            <div class="sub2500 p-3">
                <i class="fas fa-percent" id="percent1"></i>
                <h5>5000</h5>
                <p>Просмотров</p>
                <hr>
                <h6>99 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>

            <div class="sub5000 p-3">
                <i class="fas fa-percent" id="percent2"></i>
                <h5>15000</h5>
                <p>Просмотров</p>
                <hr>
                <h6>59 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>

            <div class="sub10000 p-3">
                <i class="fas fa-percent" id="percent3"></i>
                <h5>50000</h5>
                <p>Просмотров</p>
                <hr>
                <h6>99 грн</h6>
                <button class="sub-btn">Купить сейчас</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Views"
    }
</script>

<style>
.viber-views{
    margin-top: 40px;
}
#percent1 {
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
#percent2{
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
#percent3{
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