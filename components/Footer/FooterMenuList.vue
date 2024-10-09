<template>
    <!-- Footer Menu Start -->
    <div class="xl:pl-16">
        <FooterWidgetTitle :title="title"/>
        <ul class="flex flex-col">
            <li v-for="(link, index) in links" :key="index" class="mb-4 last:mb-0">
                <n-link :to="link.pageLink" class="text-white transition-all hover:text-primary">{{link.className}}</n-link>
            </li>
        </ul>
    </div>

    <!-- Footer Menu End -->
</template>
<script>
    export default {
        components:{
            FooterWidgetTitle: () => import('@/components/Footer/FooterWidgetTitle'),
        },
        data() {
            return {
                title: "Другое",
                links: [
                    {
                        pageLink: "/about",
                        className: "Сотрудничество"
                    },
                    {
                        pageLink: "/contact",
                        className: "Блоггерам"
                    },
                    {
                        pageLink: "/content",
                        className: "Вакансии"
                    }
                ]
            }
        }
    }
</script>