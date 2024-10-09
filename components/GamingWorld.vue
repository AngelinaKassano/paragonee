<template>
    <!-- Gaming World Section Start -->
    <div class="lg:mb-32 md:mb-20 mb-15">
        <div class="container">
            <TitleSection :title="title" class="mt-24" />
        </div>
        <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div class="text-white text-center align-center bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460" :style="{backgroundImage: `url(${ service.videoBannerBg })`}" v-for="(service, index) in services" :key="index">
                <div class="mb-12 text-center align-center">
                    <img class="h-37 w-36" :src="service.imgSrc" :alt="service.name">
                </div>
                <div class="block">
                    <h3 class="text-white font-exo text-xl md:text-2xl font-bold uppercase mb-4">{{service.live}}</h3>
                    <p class="">{{service.text}}</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Gaming World Section End -->
</template>

<script>
    export default {
        components: {
            TitleSection: () => import('@/components/Title/TitleSection'),
        },
        data() {
            return {
                title:"Особенность игры",
                services: [
                    {
                        imgSrc: "/images/others/13.png",
                        name: "Service Image",
                        live: "",
                        text: "Интенсивный экшен: Топ-даун вид и быстрая динамика игры обещают захватывающий и напряженный геймплей. ",
                    },
                    {
                        imgSrc: "/images/others/11.png",
                        name: "Service Image",
                        live: "",
                        text: "Стратегические элементы: Важно не только точное прицеливание, но и умение планировать свои действия, чтобы одолеть противников.",
                    },
                    {
                        imgSrc: "/images/others/12.png",
                        name: "Service Image",
                        live: "",
                        text: "Разнообразие контента: В игре планируется множество уровней и врагов, что обеспечит долгие часы увлекательного игрового процесса.",
                    },
                ]
            }
        },
    }
</script>
