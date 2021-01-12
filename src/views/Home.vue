<template>
    <div class="home">
        <h1 class="homeTitle">Скидки до -50%
            <br>Успей заказать!</h1>
        <div class="clock" id="clock">
            <div class="timer"> {{ hours }} : {{ minutes }} : {{ seconds }}</div>
            <div class="clock-text"><p class="clock-text-p">часов</p>
                <p class="clock-text-p">минут</p>
                <p class="clock-text-p">секунд</p></div>
            <div class="timerTitle"></div>
        </div>

        <div class="sub-container">
            <div id="insideNav">
                <router-link to="/subscribers" style="text-decoration-line: none;" active-class="active-left">
                    <p class="rout-p left">Подписчики</p>
                </router-link>
                <router-link to="/views" style="text-decoration-line: none" active-class="active-center">
                    <p class="rout-p">Просмотры</p>
                </router-link>
                <router-link to="/likes" style="text-decoration-line: none" active-class="active-center">
                    <p class="rout-p">Лайки</p>
                </router-link>
                <router-link to="/auto-likes" style="text-decoration-line: none" active-class="active-right">
                    <p class="rout-p right">Авто Лайки</p>
                </router-link>
            </div>
            <router-view/>
            <div class="info-block">
                <div class="info-block-icon">
                    <i class="fas fa-play"></i>
                    <p class="info-block-p">Старт за 10 минут</p>
                </div>
                <div class="info-block-icon">
                    <i class="fas fa-truck"></i>
                    <p class="info-block-p">Быстрая накрутка</p>
                </div>
                <div class="info-block-icon">
                    <i class="fas fa-shield-alt"></i>
                    <p class="info-block-p">Низкий % списаний</p>
                </div>
                <div class="info-block-icon">
                    <i class="fas fa-star"></i>
                    <p class="info-block-p">Живая аудитория</p>
                </div>
            </div>

            <div class="block-how-it-work">
                <h1 class="block-how-it-work-title">Как это работает</h1>
                <div class="block-how-it-work-icons">
                    <div class="block-how-it-work-icons-item">
                        <i class="far fa-hand-point-up round"></i>
                        <p class="block-how-it-work-p">Выберите услугу и нажмите "Купить сейчас"</p>
                    </div>
                    <div class="block-how-it-work-icons-item">
                        <i class="fas fa-desktop round"></i>
                        <p class="block-how-it-work-p">В появившемся окне введите ссылку на аккаунт или пост</p>
                    </div>
                    <div class="block-how-it-work-icons-item">
                        <i class="fas fa-money-check-alt round"></i>
                        <p class="block-how-it-work-p">Оплатите заказ</p>
                    </div>
                    <div class="block-how-it-work-icons-item">
                        <i class="fas fa-chart-line round"></i>
                        <p class="block-how-it-work-p">Сервис начинает выполнение заказа</p>
                    </div>
                </div>
                <hr>
                <div class="basic">
                    <div class="basic-methods">
                        <h4>Базовые методы, которые увеличат вовлеченность вашей аудитории и привлекут к вашему аккаунту
                            новую</h4>
                        <p><b>_____</b></p>
                        <p>Соц-сети произвели революцию в формате того, как мы взаимодействуем с нашими друзьями,
                            знакомыми, клиентами.
                            Статистика показывает, что Instagram является самой популярной и быстрорастущей соц-сетью на
                            данный момент.</p>
                    </div>
                    <div class="basic-methods-img">
                        <img src="../assets/img/photo.png" alt="test">
                    </div>
                </div>
            </div>
            <div class="follow-methods">
                <div class="follow-methods-text">
                    <h3>Следуя методам, описанным ниже,
                        Вы зададите правильный базиз для Вашего профиля,
                        а также позволите ему развиваться в разы стремительнее</h3>
                </div>
                <hr>
                <div class="follow-methods-first-row">
                    <div class="group-first">
                        <img src="../assets/img/friendship.png" alt="test">
                        <p class="follow-methods-first-row-p">
                            Предоставьте хорошо продуманную биографию своей страницы в Instagram,
                            чтобы повысить доверие и закажите подписчиков - страница не будет выглядеть новой.
                        </p>
                    </div>
                    <div class="group-first">
                        <img src="../assets/img/youtube.png" alt="test" style="margin-top: 18px;">
                        <p class="follow-methods-first-row-p">
                            Не забывайте про видео! Создавайте потрясающие ролики и
                            выгружайте их на страницу - это так же послужит рекламным материалом.
                        </p>
                    </div>
                    <div class="group-first">
                        <img src="../assets/img/group.png" alt="test">
                        <p class="follow-methods-first-row-p">
                            Делайте снимки и вставляйте фотографии вашей команды. Аудитория Instagram - это реальные люди,
                            и людям нравится смотреть на фотографии других людей.
                        </p>
                    </div>
                </div>
                <div class="follow-methods-second-row">
                    <div class="group">
                        <img src="../assets/img/podium.png" alt="test">
                        <p class="follow-methods-first-row-p">
                            Создавайте онлайн-события и конкурсы, чтобы заинтересовать и поддерживать интерес
                            вашей аудитории.
                        </p>
                    </div>
                    <div class="group">
                        <img src="../assets/img/megaphone.png" alt="test">
                        <p class="follow-methods-first-row-p">
                            Продвигайте свои продукты и услуги, с помощью таргетированной рекламы и лидеров мнений,
                            подчеркивая почему ВАШ бренд является уникальным
                        </p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="contacts">
                <div class="contacts-title">
                    <h1>Наши контакты</h1>
                    <h4>Для консультации и по любым вопросам напишите нам на почту:
                        instabarua@gmail.com</h4>
                </div>
                <div class="contacts-icons">
                    <div class="contacts-icon-item">
                        <i class="fas fa-envelope-open-text" style="font-size: 48px"></i>
                        <h4 class="adres">Mail</h4>
                        <p>instabarua@gmail.com</p>
                    </div>
                    <div class="contacts-icon-item">
                        <i class="fas fa-map-marker-alt " style="font-size: 48px"></i>
                        <h4 class="adres">Адрес</h4>
                        <p>Улица Короленко, 21. Харьков</p>
                    </div>
                    <div class="contacts-icon-item">
                        <i class="far fa-compass" style="font-size: 48px"></i>
                        <h4 class="adres">Как добраться</h4>
                        <p>Мы находимся недалеко от ст. м. Советская.
                            Из центра удобнее всего добраться с улицы Шевченко</p>
                    </div>
                </div>
            </div>
            <div class="pay-system">
                <img class="pay-system-img" src="../assets/img/logo_.png" alt="test">
                <img class="pay-system-img" src="../assets/img/Privat-245964ffe28a9.png" alt="test">
                <img class="pay-system-img" src="../assets/img/mastercard-512.png" alt="test">
                <img class="pay-system-img" src="../assets/img/visa.png" alt="test">
            </div>
        </div>
        <HelloWorld/>
    </div>
</template>

<style>

    h5 {
        color: black;
        padding: 10px;
        margin-top: 15px;
    }

    h6 {
        color: dodgerblue;
        padding: 10px;
        margin-bottom: 15px;
        font-weight: bold;
    }

    p {
        font-size: 16px;
    }

    .clock-text {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .clock-text-p {
        padding: 0 25px;
    }

    .router-link-active{
        color: black;
    }
    .active-left{
        border: 1px solid dodgerblue;
        height: 45px;
        border-radius: 22px 0 0 22px;
        background-color: dodgerblue;
        color: white;
    }
    .active-center{
        border: 1px solid dodgerblue;
        height: 45px;
        background-color: dodgerblue;
        color: white;
    }
    .active-right{
        border: 1px solid dodgerblue;
        height: 45px;
        border-radius: 0 22px 22px 0;
        background-color: dodgerblue;
        color: white;
    }
    @keyframes pulse {
        0% {
            color: #001F3F;
        }
        50% {
            color: #FF4136;
        }
        100%{
            color: #001F3F;
        }
    }
    .rout-p {
        padding: 10px 40px;
        border: 1px solid lightgray;
    }

    .rout-p:hover {
        background-color: dodgerblue;
        color: white;
    }

    .rout-p.left {
        border-radius: 30px 0 0 30px;
    }

    .rout-p.right {
        border-radius: 0 30px 30px 0;
    }

    #insideNav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 5px;
    }

    .homeTitle {
        color: black;
        font-weight: bold;
        font-size: 42px;
    }

    .timer {
        margin-top: 20px;
        font-size: 56px;
        color: black;
    }


    hr {
        width: auto;
    }

    .info-block {
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 32px;
        margin-top: 40px;
        color: black;
    }

    .info-block-icon {
        border: 1px solid lightgray;
        border-radius: 8px;
        padding: 20px 40px;
        margin: 0 45px;
    }

    .info-block-p {
        padding-top: 10px;
        font-size: 14px;
    }

    .block-how-it-work {
        margin-top: 50px;
        background-color: #E5E5E5;
    }

    .block-how-it-work-title {
        color: black;
        padding: 40px;
        font-weight: bold;
    }

    .block-how-it-work-icons {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .block-how-it-work-icons-item {
        margin: 0 80px;
        color: black;
        font-size: 56px;
    }

    .round {
        border: 2px solid black;
        padding: 30px;
        border-radius: 90px;
    }

    .basic {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
    }
    .follow-methods{
        display: flex;
        flex-direction: column;
        color: black;
        margin: 50px 0;
        justify-content: center;
        align-items: center;
    }
    .follow-methods-text{
       width: 700px;
    }
    .follow-methods-first-row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .group-first{
        width: 300px;
        margin: 20px 50px;
    }

    .follow-methods-second-row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .group{
        width: 300px;
        margin: 20px 50px;
    }

    .block-how-it-work-p {
        color: black;
        margin: 20px 0;
        width: 200px;
    }

    .basic-methods {
        padding: 30px 60px;
        color: black;
        display: flex;
        flex-direction: column;
        width: 50%;
        text-align: left;
    }

    .basic-methods-img {
        display: flex;
    }

    .contacts{
        display: flex;
        flex-direction: column;
        color: black;
        align-items: center;
        justify-content: center;
    }
    .contacts-title{
        width: 500px;
        margin-top: 70px;
        font-weight: bolder;
    }
    .contacts-icons{
        display: flex;
        flex-direction: row;
        margin: 70px 40px;
    }
    .contacts-icon-item{
        width: 33%;
    }
.adres{
    margin-top: 40px;
}
.pay-system{
    background-color: #E5E5E5;
}
.pay-system-img{
    padding: 20px 60px;
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
                const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
                const x = setInterval(() => {
                    const now = new Date().getTime();
                    const distance = countDownDate - now;
                    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 0)
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
