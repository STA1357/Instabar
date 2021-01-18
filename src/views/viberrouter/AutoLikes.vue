<template>
    <div class="container-fluid bg-3 text-center justify-content-between">
        <div class="row" style="margin: 50px">
            <div class="col-12 col-sm-4"></div>
            <div class="col-12 col-sm-4">
                <div class="container">
                    <p class="auto-likes-p">Каждый пакет рассчитан на <b>50 постов</b>. Лайки поступают автоматически на каждый новый пост.</p>
                </div>
            </div>
            <div class="col-12 col-sm-4"></div>
        </div>
    </div>

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
        name: "AutoLikes"
    }
</script>

<style scoped>
    @import "../../styles/_variables.scss";
.auto-likes-p{
    font-size: 18px;
}
</style>