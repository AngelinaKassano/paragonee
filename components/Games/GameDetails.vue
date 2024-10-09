<template>
    <div class="container relative">
        <p class="date text-primary font-bold mb-3">22 Сентября 2024 года </p>
        <h2 class="text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10">{{games.title}}</h2>
        <div class="content-details">
            <div class="description mt-6">
                <p class="leading-8">Топдаун-шутер с видом сверху – эпическая охота на врагов. Исследуйте разнообразные локации, применяйте тактические манёвры для обхода противников, используйте широкий арсенал оружия и уникальные способности главного героя. Вас ждут интенсивные сражения и захватывающие миссии против разных типов врагов. Испытайте захватывающий геймплей и стратегические бои в динамичной игре с видом сверху.</p>
            </div>

            <div class="gameslide my-15">

                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="(game, imageIndex) in gameslide" :key="imageIndex">
                        <div class="relative">
                            <img class="sm:h-full h-64 w-full object-cover" :src="`${game.gamingBg}`">
                        </div>
                    </swiper-slide>
                </swiper>

                <!-- Testimonial Arrows -->

                <div class="flex mt-10">
                    <div class="gameslide-button-prev swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all z-50 mr-2">
                        <img class="w-4 h-6" src="/images/icon/navigation-arrow2.webp" alt="">
                    </div>
                    <div class="gameslide-button-next swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all z-50 ml-2">
                        <img class="w-4 h-6" src="/images/icon/navigation-arrow1.webp" alt="">
                    </div>
                </div>
            </div>

            <div class="description mt-6">
                <h3 class="text-2xl text-white uppercase font-bold mb-5">Описание:</h3>
                <p class="leading-8">Наша игра предлагает вам захватывающий геймплей с элементами стратегии. Благодаря поддержке Steam Workshop, вы можете создавать и делиться уникальными пользовательскими картами и испытаниями, добавляя бесконечное количество контента от сообщества. В одиночном режиме вы столкнётесь с продвинутыми и умными ботами на разнообразных картах. Развивайте свои навыки, улучшайте оружие, способности и модули, чтобы стать сильнее по ходу игры. Посещайте внутриигровой магазин, чтобы приобрести боеприпасы, новое оружие, модули, аптечки и многое другое, используя ресурсы, собранные во время миссий. Исследуйте все возможности для тактической победы и погружайтесь в богатый мир с бесконечными стратегическими решениями..</p>
            </div>
           <!-- <div class="description mt-6">
                <h3 class="text-2xl text-white uppercase font-bold mb-5">Лор:</h3>
                <p class="leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div class="description mt-6">
                <h3 class="text-2xl text-primary uppercase font-bold mb-5">Whats New!</h3>
                <p class="leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <blockquote class="py-5 mb-5">
                <p class="font-bold text-yellow italic lg:text-3xl text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.</p> 
            </blockquote>-->

            <div class="additional-information-area bg-secondary-100 px-9 py-9 rounded-2xl mb-9">
                <h3 class="text-2xl text-white uppercase font-bold mb-6">Системные требования:</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 text-white">
                    <div class="additional_information_text">
                        <h4 class="font-bold mb-5">Процессор:</h4>
                        <p class=" text-gray-400">Intel Core i3 7100</p>
                    </div>
                    <div class="additional_information_text">
                        <h4 class="font-bold mb-5">Видеокарта:</h4>
                        <p class=" text-gray-400">NVIDIA GeForce GTX 960</p>
                    </div>
                    <div class="additional_information_text">
                        <h4 class="font-bold mb-5">Оперативная память:</h4>
                        <p class=" text-gray-400">Не менее 8 Gb</p>
                    </div>
                    <div class="additional_information_text">
                        <h4 class="font-bold mb-5">ОС:</h4>
                        <p class=" text-gray-400">Windows 10 (64 bits)</p>
                    </div>
                    <div class="additional_information_text">
                        <h4 class="font-bold mb-5">Место на диске:</h4>
                        <p class=" text-gray-400">20 Gb</p>
                    </div>
                </div>
            </div>
            <div class="description mt-6">
            </div>
        </div>
        
        <Disqus class=" mt-10" shortname='Admin' />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { Disqus } from 'vue-disqus'
export default {
    components: {
        Swiper,
        SwiperSlide,
        Disqus
    },
    props: ["games"],
    data () {
        return {    
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: false,
                navigation: {
                    nextEl: '.gameslide .gameslide-button-next',
                    prevEl: '.gameslide .gameslide-button-prev'
                }
            },
            gameslide: [
                {
                    gamingBg: "/images/others/3.png"
                },
                {
                    gamingBg: "/images/others/4.png"
                },
                {
                    gamingBg: "/images/others/5.png"
                }
            ]
        }
    }
}
</script>