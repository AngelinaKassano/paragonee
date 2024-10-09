<template>
    <div class="container mb-120">
        <TitleSection :title="title" :text="text"/>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
            <div class="relative group before:empty-content before:absolute before:w-full before:h-full before:bg-transparent before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden transition-all" v-for="(games, index) in gameHome.slice(0, 4)" :key="index">
                <img class="w-full rounded-4xl" :src="games.gameImage" alt="Feature Icon">
            </div>
        </div>
    </div>
</template>

<script>
    import gameHome from '@/data/games.json'
    export default {
        components: {
            TitleSection: () => import('@/components/Title/TitleSection'),
        },
        data () {
            return {
                gameHome,
                title: "Скриншоты",
                text: "Познакомьтесь со списком игр, которые мы предлагаем"
            }
        }
    }
</script>
