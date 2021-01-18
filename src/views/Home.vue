<template>
    <div class="home">
        <div class="title-home">
            Скидки до -50% <br> Успей заказать!
        </div>


        <div class="container-fluid text-center mt-3">
            <div class="row" style="margin: 0 15vw">
                <div class="col-12 col-sm-4 invisible">
                    <div class="container">
                        {{ hours }}  {{ minutes }}  {{ seconds }}
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <div class="clock">
                        {{ hours }}:{{ minutes }}:{{ seconds }}
                        <p></p>
                    </div>
                </div>
                <div class="col-12 col-sm-4 invisible">
                    <div class="container">
                        {{ hours }} : {{ minutes }} : {{ seconds }}
                    </div>
                </div>
            </div>
        </div>
        </div>

    <div class="container-fluid text-center mb-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-4"></div>
            <div class="col-12 col-md-4 d-flex flex-row justify-content-center">
                <p class="pr-4">часов</p>
                <p>минут</p>
                <p class="pl-4">секунд</p>
            </div>
            <div class="col-12 col-md-4"></div>
        </div>
    </div>


    <div class="container-fluid text-center instagram-routers">
        <div class="row" style="margin: 0 15vw">

            <router-link class="col-12 col-md-3 border-1 p-1" to="/subscribers" style="text-decoration-line: none">
                <div class="container nav-child">
                    <p class="rout-youtube-p left mt-2 mb-2">Лайки</p>
                </div>
            </router-link>

            <router-link class="col-12 col-md-3 border-2 p-1" to="/views" style="text-decoration-line: none">
                <div class="container nav-child">
                    <p class="rout-youtube-p left mt-2 mb-2">Подписчики</p>
                </div>
            </router-link>

            <router-link class="col-12 col-md-3 border-2 p-1" to="/likes" style="text-decoration-line: none">
                <div class="container nav-child">
                    <p class="rout-youtube-p left mt-2 mb-2">Просмотры</p>
                </div>
            </router-link>

            <router-link class="col-12 col-md-3 border-3 p-1" to="/auto-likes" style="text-decoration-line: none">
                <div class="container nav-child">
                    <p class="rout-youtube-p left mt-2 mb-2">Просмотры</p>
                </div>
            </router-link>

        </div>
        <router-view/>
    </div>



        <div class="container mt-3" style="display: flex; justify-content: center">
            <div class="row" style="margin: 0 7vw">
                <div class="col-12 col-md-3 mb-md-0 mt-3">
                    <div class="container border-4">
                        <img class="howIt" src="../assets/img/arrowhead-pointing-t.png" alt="test">
                        <p class="info-block-p">Старт за 10 минут</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-md-0 mt-3">
                    <div class="container border-4">
                        <img class="howIt" src="../assets/img/delivery-truck.png" alt="test">
                        <p class="info-block-p">Быстрая накрутка</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-md-0 mt-3">
                    <div class="container border-4">
                        <img class="howIt" src="../assets/img/shield.png" alt="test">
                        <p class="info-block-p">Низкий % списаний</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 mb-md-0 mt-3">
                    <div class="container border-4">
                        <img class="howIt" src="../assets/img/star.png" alt="test">
                        <p class="info-block-p">Живая аудитория</p>
                    </div>
                </div>
            </div>
        </div>

    <div class="container-grey bg-light">
        <div class="container mt-5">
            <h1 class="pt-5">Как это работает</h1>
            <div class="row">

                <div class="col-6 col-md-3">
                    <div class="container mt-5">
                        <img class="border-5" src="../assets/img/Tilda_Icons_39_IT_landing.png" alt="test">
                        <p class="block-how-it-work-p">Выберите услугу и нажмите "Купить сейчас"</p>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="container mt-5">
                        <img class="border-5" src="../assets/img/Tilda_Icons_39_IT_website.png" alt="test">
                        <p class="block-how-it-work-p">В появившемся окне введите ссылку на аккаунт или пост</p>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="container mt-5">
                        <img class="border-5" src="../assets/img/Tilda_Icons_37_Finance_technologies_atm.png" alt="test">
                        <p class="block-how-it-work-p">Оплатите заказ</p>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="container mt-5">
                        <img class="border-5" src="../assets/img/Tilda_Icons_37_Finance_technologies_growth.png" alt="test">
                        <p class="block-how-it-work-p">Сервис начинает выполнение заказа</p>
                    </div>
                </div>
            </div>

            <hr class="mt-5 mb-5">

            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 mt-5 text-left">
                        <div class="container">
                            <h4>Продвижение и раскрутка YouTube</h4>
                            <div class="hr"></div>
                            <p class="mt-3">Видеоролики являются одним из наиболее эффективных видов подачи информации в
                                среде Интернет: сочетание аудио - и видеоряда, титры, надписи, инфографика позволяют
                                донести до пользователей нужную информацию максимально быстро.</p>
                            <p class="mt-3 mb-5">Самый популярный ресурс, позволяющий выкладывать видео в соответствии с
                                интересами целевой аудитории (для привлечения клиентов, а также получения дополнительной
                                прибыли от рекламы), является YouTube. Функция выделенного канала обеспечивает
                                эффективное продвижение Ютуб в сети Интернет для любого бренда.</p>
                        </div>
                    </div>


                    <div class="col-5 col-md-6 mt-2 pl-0 pl-md-5 mb-5" style="margin-left: -14px!important">
                        <img class=" pl-0 pl-md-5" src="../assets/img/photo.png" alt="test">

                    </div>


                </div>
            </div>
        </div>
    </div>
        <div class="container">
            <div class="row justify-content-center mt-5 mb-5" style="margin: 0 10vw">

                <div class="col-12 col-md-12">
                    <h3 style="font-size: 26px">Следуя методам, описанным ниже,
                        Вы зададите правильный базиз для Вашего профиля,
                        а также позволите ему развиваться в разы стремительнее</h3>
                </div>
            </div>
            <hr>
            <div class="container mt-5 mb-5">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-4 mt-5 mb-5">
                        <img src="../assets/img/friendship.png" alt="test" class="mb-4">
                        <p>
                            Предоставьте хорошо продуманную биографию своей страницы в Instagram,
                            чтобы повысить доверие и закажите подписчиков - страница не будет выглядеть новой.
                        </p>
                    </div>

                    <div class="col-12 col-md-4 mt-5 mb-5">

                        <img src="../assets/img/youtube.png" alt="test" style="margin-top: 18px;" class="mb-4">
                        <p>
                            Не забывайте про видео! Создавайте потрясающие ролики и
                            выгружайте их на страницу - это так же послужит рекламным материалом.
                        </p>
                    </div>

                    <div class="col-12 col-md-4 mt-5 mb-5">
                        <img src="../assets/img/group.png" alt="test" class="mb-4">
                        <p>
                            Делайте снимки и вставляйте фотографии вашей команды. Аудитория Instagram - это реальные
                            люди,
                            и людям нравится смотреть на фотографии других людей.
                        </p>
                    </div>

                    <div class="col-12 col-md-4 mt-5 mb-5">
                        <img src="../assets/img/podium.png" alt="test" class="mb-4">
                        <p>
                            Создавайте онлайн-события и конкурсы, чтобы заинтересовать и поддерживать интерес
                            вашей аудитории.
                        </p>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-12 col-md-4 mt-5 mb-5">
                        <img src="../assets/img/megaphone.png" alt="test" class="mb-4">
                        <p>
                            Продвигайте свои продукты и услуги, с помощью таргетированной рекламы и лидеров мнений,
                            подчеркивая почему ВАШ бренд является уникальным
                        </p>
                    </div>
                </div>
            </div>

            <hr>
            <div class="container mt-5 mb-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6">
                    <h1 class="mb-5 mt-5">Наши контакты</h1>
                    <h4>Для консультации и по любым вопросам напишите нам на почту:
                        instabarua@gmail.com</h4>
                </div>
            </div>
            </div>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-3">
                        <i class="fas fa-envelope-open-text mb-5 mt-5" style="font-size: 48px"></i>
                        <h4 class="adres">Mail</h4>
                        <p>instabarua@gmail.com</p>
                    </div>
                    <div class="col-12 col-md-3">
                        <i class="fas fa-map-marker-alt mb-5 mt-5" style="font-size: 48px"></i>
                        <h4 class="adres">Адрес</h4>
                        <p>Улица Короленко, 21. Харьков</p>
                    </div>
                    <div class="col-12 col-md-3">
                        <i class="far fa-compass mb-5 mt-5" style="font-size: 48px"></i>
                        <h4 class="adres">Как добраться</h4>
                        <p>Мы находимся недалеко от ст. м. Советская.
                            Из центра удобнее всего добраться с улицы Шевченко</p>
                    </div>
                </div>
            </div>

        </div>

    <div class="container-grey bg-light">
        <div class="container mt-5">
            <div class="row justify-content-between">
                <div class="col-12 col-md-3 mt-4">
                    <img class="pay-system-img" src="../assets/img/logo_.png" alt="test">
                </div>
                <div class="col-12 col-md-3 mt-5">
                    <img class="pay-system-img" src="../assets/img/Privat-245964ffe28a9.png" alt="test">
                </div>
                <div class="col-12 col-md-3">
                    <img class="pay-system-img" src="../assets/img/mastercard-512.png" alt="test">
                </div>
                <div class="col-12 col-md-3">
                    <img class="pay-system-img" src="../assets/img/visa.png" alt="test">
                </div>
            </div>
        </div>
    </div>

        <HelloWorld/>

</template>

<style lang="scss">
    @import "../styles/_variables.scss";
.title-home{
    color: $black;
    font-weight: 700;
    font-size: 48px;
    line-height: normal;
}

.instagram-routers a:hover{
    color: $white;
    background-color: $primary;
}
.instagram-routers .router-link-exact-active {
    color: $white;
    background-color: $primary;
    text-decoration: none;
}

.border-1{
    border: 1px solid $light-grey;
    border-radius: 40px 0 0 40px;
}
.border-2 {
    border: 1px solid $light-grey;
}
.border-3{
    border: 1px solid $light-grey;
    border-radius: 0 40px 40px 0;
}
.border-5{
border: 2px solid $black;
    border-radius: 50%;
}
.clock{
    font-size: 56px;
    color: $black;
}
p{
    margin-bottom: 0;
}
.info-block-p{
    font-size: 14px;
}
.howIt{
    width: 35px;
    height: 35px;
}
.border-4{
    border: 1px solid $light-grey;
    border-radius: 10px;
    padding: 40px;
}
.container-for-basket{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.container-basket{
    display: flex;
    align-items: center;
}
@media screen and (max-device-width:750px){
    .border-1{
        border-radius: 10px;
        margin-bottom: 5px;
    }
    .border-2{
        border-radius: 10px;
        margin-bottom: 5px;
    }
    .border-3{
        border-radius: 10px;
        margin-bottom: 5px;
    }
    #nav a.router-link-active {
        border: none;
        background: none;
    }
}


</style>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'


    export default {
        name: 'Home',
        data() {
            return {
                days: '',
                hours: '',
                minutes: '',
                seconds: '',
                text: 'часов | минут | секунд'
            }
        },
        methods: {
            fakeTimer() {
                const countDownDate = new Date("Jan 5, 2022 00:00:00").getTime();
                const x = setInterval(() => {
                    const now = new Date().getTime();
                    const distance = countDownDate - now;
                    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

                   this.seconds = this.seconds >= 10 ? this.seconds : '0' + this.seconds;
                   this.minutes = this.minutes >= 10 ? this.minutes : '0' + this.minutes;
                   this.hours = this.hours >= 10 ? this.hours : '0' + this.hours;

                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 0)
            },
            addZero(){

            }
        },
        mounted() {
            this.fakeTimer();
        },
        components: {
            HelloWorld
        }
    }

</script>
