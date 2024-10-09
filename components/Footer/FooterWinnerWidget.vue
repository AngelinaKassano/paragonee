<template>
    <div class="mr-8">
        <FooterWidgetTitle :title="title"/>

        <div class="grid grid-cols-3 sm:grid-cols-3 gap-3">
            <n-link 
                v-for="(match, index) in matches" 
                :key="index" 
                v-if="match.gamingLink && match.gamingLink.startsWith('/')"
                :to="match.gamingLink"
            >
                <img :src="`${match.gamingBg}`" :alt="match.gamingAlt">
            </n-link>

            <a 
                v-for="(match, index) in matches" 
                :key="index" 
                v-if="match.gamingLink && !match.gamingLink.startsWith('/')" 
                :href="match.gamingLink" 
                target="_blank"
            >
                <img :src="`${match.gamingBg}`" :alt="match.gamingAlt">
            </a>

            <!-- Для случаев без ссылки -->
            <n-link 
                v-for="(match, index) in matches" 
                :key="index" 
                v-if="!match.gamingLink"
                to="/player"
            >
                <img :src="`${match.gamingBg}`" :alt="match.gamingAlt">
            </n-link>
        </div>
    </div>
</template>

<script>
export default {
    components:{
        FooterWidgetTitle: () => import('@/components/Footer/FooterWidgetTitle'),
    },
    data () {
        return {
            title: "",
            matches: [
                {
                    gamingBg: "/images/others/vk.webp",
                    gamingAlt: "vkplay"
                },
                {
                    gamingBg: "/images/others/steam.webp",
                    gamingAlt: "steam",
                    gamingLink: "https://store.steampowered.com/app/3193780/Paragone_Bomb/"
                },
                {
                    gamingBg: "/images/others/16+.webp",
                    gamingAlt: "16+"
                }
            ]
        }
    },
}
</script>
