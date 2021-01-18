<template>

    <div class="container-fluid bg-3 text-center justify-content-between ">
        <div class="row prices" style="margin: 50px 15vw">
            <div class="col-12 col-sm-3 mb-md-0 mt-5 ">
                <div class="container-in">
                    <h5 class="pt-4">9999</h5>
                    <p>Подписчиков</p>
                    <hr>
                    <h6 class="text-primary">99 грн</h6>
                    <button class="btn btn-primary mt-4">Купить сейчас</button>
                </div>
            </div>
            <div class="col-12 col-sm-3 mb-md-0 mt-5">
                <img src="../../assets/img/percentageblue.png" alt="test" class="w-25 h-20 position-absolute ml-4">
                <div class="container-in">
                    <h5 class="pt-4">9999</h5>
                    <p>Подписчиков</p>
                    <hr>
                    <h6 class="text-primary">99 грн</h6>
                    <button class="btn btn-primary mt-4">Купить сейчас</button>
                </div>
            </div>
            <div class="col-12 col-sm-3 mb-md-0 mt-5">
                <img src="../../assets/img/percentageblue.png" alt="test" class="w-25 h-20 position-absolute ml-4">
                <div class="container-in">
                    <h5 class="pt-4">9999</h5>
                    <p>Подписчиков</p>
                    <hr>
                    <h6 class="text-primary">99 грн</h6>
                    <button class="btn btn-primary mt-4">Купить сейчас</button>
                </div>
            </div>
            <div class="col-12 col-sm-3 mb-md-0 mt-5">
                <img src="../../assets/img/percentageblue.png" alt="test" class="w-25 h-20 position-absolute ml-4">
                <div class="container-in">
                    <h5 class="pt-4">9999</h5>
                    <p>Подписчиков</p>
                    <hr>
                    <h6 class="text-primary">99 грн</h6>
                    <button class="btn btn-primary mt-4">Купить сейчас</button>
                </div>
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
    @import "../../styles/_variables.scss";
    .prices .col-12{
        display: flex;
        justify-content: center;
    }
    .prices .col-12 img {
        margin-left: 145px !important;
        margin-top: -30px;
    }
@media screen and (max-device-width: 450px){
    .prices .col-12 img {
        margin-left: 75px !important;
        margin-top: -30px;
    }
}
</style>