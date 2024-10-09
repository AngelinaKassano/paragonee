<template>
    <!-- Contact Form Section Start -->
    <div class="container">
        <!-- Title Section Start -->
        <TitleSection :title="title" :text="text"/>

        <!-- New Section for text1 -->
        <div class="text1-section mt-4">
            <p class="text1">{{ text1 }}</p>
        </div>
        <!-- Title Section End -->

        <form id="contact-form" class="grid sm:gap-x-8 gap-x-4 grid-cols-2">
            <div class="single-fild col-span-2">
                <div class="form-btn-wrap flex justify-center w-full mt-16">
                    <!-- Button with btnName -->
                    <button type="button" @click="redirectTo('https://store.steampowered.com/app/3193780/Paragone_Bomb/')" class="form-btn group primary-btn opacity-100 transition-all uppercase" style="background-image:url(/images/others/btn-bg.webp)">
                        {{btnName}}
                        <img src="/images/icon/arrrow-icon.webp" alt="Arrow Icon" class="ml-3 w-5 h-5 group-hover:ml-4 transition-all">
                    </button>
                    
                    <!-- Button with btnName1 and additional class -->
                    <button type="button" @click="redirectTo('https://millant.ru/vkplay')" class="form-btn group primary-btn opacity-100 transition-all uppercase btn-secondary ml-4" style="background-image:url(/images/others/btn-bg.webp)">
                        {{btnName1}}
                        <img src="/images/icon/arrrow-icon.webp" alt="Arrow Icon" class="ml-3 w-5 h-5 group-hover:ml-4 transition-all">
                    </button>

                    <p class="form-messege"></p>
                </div>
            </div>
        </form>
    </div>
    <!-- Contact Form Section End -->
</template>

<script>
    export default {
        components: {
            TitleSection: () => import('@/components/Title/TitleSection')
        },
        data() {
            return {
                title: "Как скачать",
                text: "Покорите виртуальные миры с нашими играми на Steam и VK Play! Всё, что нужно для эпичных моментов — всего один клик",
                text1: "Создайте свой список желаемого с нашими играми и будьте всегда на шаг впереди! Следите за увлекательными обновлениями и акциями.",
                btnName: "Steam",
                btnName1: "VK Play"
            }
        },
        methods: {
            redirectTo(url) {
                window.location.href = url;
            }
        }
    }
</script>

<style>
    /* Styles for text1 */
    .text1 {
        font-size: 1.1rem;
        color: #f3ebeb;
        text-align: center;
        margin-top: 1rem;
    }

    /* Additional class for btnName1 */
    .btn-secondary {
        /* Unique styles for btnName1 if needed */
    }
    .ml-4 {
        margin-left: 100px;
    }
</style>
