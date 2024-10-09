<template>
    <!-- Testimonial Section Start -->
    <section class="testimonial-section">
        <div class="relative pt-120 pb-120" style="background-image:url(/images/others/testimonial-bg-fullwidth.webp)">

            <div class="container relative">
                <swiper class="swiper" :options="swiperOption">
                    <swiper-slide v-for="(testimonial, index) in testimonialData" :key="index">
                        <div class="flex flex-col items-center bg-cover py-10 px-8 rounded-50" style="background-image:url(/images/others/testimonial-bg.webp)">
                            <img :src="testimonial.clientImage" alt="Testimonial" width="800" height="600">
                        </div>
                    </swiper-slide>
                </swiper>

                <!-- Testimonial Arrows -->
                <div class="flex justify-center mt-14">
                    <div class="testimonial-button-prev swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all mr-4 cursor-pointer">
                        <img class="w-4 h-6" src="/images/icon/navigation-arrow2.webp" alt="Arrow">
                    </div>
                    <div class="testimonial-button-next swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all ml-4 cursor-pointer">
                        <img class="w-4 h-6" src="/images/icon/navigation-arrow1.webp" alt="Arrow">
                    </div>
                </div>

            </div>

        </div>
    </section>
    <!-- Testimonial Section End -->
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import testimonialData from '../data/testimonial.json'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            testimonialData, // Массив данных
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: false,
                navigation: {
                    nextEl: '.testimonial-section .testimonial-button-next',
                    prevEl: '.testimonial-section .testimonial-button-prev'
                },
                autoplay: {
                    delay: 10000, // Промежуток в 10 секунд
                    disableOnInteraction: false // Автопрокрутка не будет отключаться при взаимодействии
                },
                loop: true // Включаем цикл
            }
        }
    }
}
</script>
