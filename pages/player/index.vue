<template>
    <div class="bg-cover bg-gray-800" style="background-image:url(/images/bg/body-bg2.webp);">

        <HeaderSection/>

        <OffCanvasMobileMenu :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <Breadcrumb :BreadcrumbTitle="BreadcrumbTitle" :BreadcrumbSubTitle="BreadcrumbSubTitle"/>

        <AllPlayers/>

        <CounterUp/>

        <ContactBanner :paddingTop="paddingTop"/>

        <Footer/>

    </div>
</template>

<script>
import matchesData from '@/data/matches.json'
export default {
    components: {
        HeaderSection: () => import('@/components/HeaderSection'),
        OffCanvasMobileMenu: () => import('@/components/Header/OffCanvasMobileMenu'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        CounterUp: () => import('@/components/CounterUp'),
        ContactBanner: () => import('@/components/ContactBanner'),
        Footer: () => import('@/components/Footer'),
        AllPlayers: () => import('@/components/AllPlayers')
    },
    head() {
    return {
      title: 'Contact - Bonx Gaming',
      meta: [
      { hid: 'description', name: 'description', content: 'Find answers to frequently asked questions about Bonx gaming services and products.' }, // Добавляем описание
    { name: 'format-detection', content: 'telephone=no' },
    { hid: 'keywords', name: 'keywords', content: 'Bonx, gaming, FAQ, questions, support' }, // Добавляем ключевые слова для SEO
    { hid: 'og:title', name: 'og:title', content: 'FAQ - Bonx Gaming Website' }, // Open Graph теги для соцсетей
    { hid: 'og:description', name: 'og:description', content: 'Find answers to frequently asked questions about Bonx gaming services.' },
    { hid: 'og:image', name: 'og:image', content: '/images/og/faq.jpg' }, // Ссылка на изображение для соцсетей
    { hid: 'og:type', name: 'og:type', content: 'website' }
      ]
    }
  }
}
</script>