(window.webpackJsonp=window.webpackJsonp||[]).push([[47,5,22],{301:function(t){t.exports=JSON.parse('[{"slug":"1","date":"20 January 2022","title":"Wartales is serious making an army of hogs","imgSrc":"/images/blog/blog1.webp","imgLarge":"/images/blog/blog-sticky.webp","blogGrid":"/images/blog/blog-grid-1.webp","tag":"Gamer","slugTag":"Gamer"},{"slug":"2","date":"12 Сентября 2024","title":"Страница нашей игры доступна в Steam.","imgSrc":"/images/blog/blog2.webp","imgLarge":"/images/blog/blog-sticky.webp","blogGrid":"/images/blog/blog-grid-2.webp","tag":"Adventure","slugTag":"Adventure"}]')},302:function(t,e,n){"use strict";n.r(e);var r={props:{paddingTop:String},data:function(){return{videoBannerBg:"/images/bg/gaming-update.webp",btnName:"Contact Now"}}},o=n(7),component=Object(o.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=component.exports},312:function(t,e,n){"use strict";var r=n(2),o=n(64).find,l=n(144),d="find",c=!0;d in[]&&Array(1)[d]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(d)},318:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",o=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],l=["name","button","icon","url","logout","width","height"],i=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],s=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function d(t,e,n,i,s,r,o,a,u,l){"boolean"!=typeof o&&(u=a,a=o,o=!1);var d,c="function"==typeof n?n.options:n;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),i&&(c._scopeId=i),r?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=d):e&&(d=o?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(c.functional){var m=c.render;c.render=function(t,e){return d.call(e),m(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,d):[d]}return n}var c=d({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return o.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return l.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(r);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;i.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),a=d({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(r);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return s((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return s((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function u(t,e){void 0===e&&(e={}),t.component("Disqus",c),t.component("DisqusCount",a),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(u)},330:function(t,e,n){"use strict";n.r(e);n(63);var r=n(301),o={data:function(){return{blogData:r}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-12 px-0"},t._l(t.blogData.slice(0,4),(function(n,r){return e("div",{key:r},[e("div",{staticClass:"flex sm:items-center flex-col sm:flex-row"},[e("div",{staticClass:"lg:w-40 xl:w-52 2xl:w-52 md:w-44 sm:w-37 w-32 mb-7 sm:mb-0 flex-shrink-0"},[e("n-link",{attrs:{to:"/blog/".concat(n.slug)}},[e("img",{attrs:{src:n.imgSrc,alt:n.alt}})])],1),t._v(" "),e("div",{staticClass:"xl:ml-9 lg:ml-6 md:ml-9 ml-3 flex flex-col flex-1"},[e("span",{staticClass:"text-sm text-white font-exo font-normal mb-2 sm:mb-5"},[e("i",{staticClass:"icofont-calendar text-primary mr-2"}),t._v(t._s(n.date))]),t._v(" "),e("h2",{staticClass:"text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9"},[e("n-link",{attrs:{to:"/blog/".concat(n.slug)}},[t._v(t._s(n.title))])],1),t._v(" "),e("n-link",{staticClass:"uppercase font-exo relative pl-12 text-sm text-white transition-all hover:text-primary before:empty-content before:absolute before:h-0.5 before:w-7.5 before:bg-primary before:left-0 before:top-1/2 before:transform before:-translate-y-1/2",attrs:{to:"/blog/".concat(n.slug)}},[t._v("Подробнее")])],1)])])})),0)}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,n){"use strict";n.r(e);n(312),n(14),n(21),n(22);var r=n(301),o={props:["match"],components:{HeaderSection:function(){return Promise.resolve().then(n.bind(null,206))},OffCanvasMobileMenu:function(){return n.e(0).then(n.bind(null,365))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,208))},BlogListinDetails:function(){return Promise.resolve().then(n.bind(null,330))},ContactBanner:function(){return Promise.resolve().then(n.bind(null,302))},Footer:function(){return Promise.resolve().then(n.bind(null,207))},Disqus:n(318).a},data:function(){return{blogData:r,slug:this.$route.params.slug,navOpen:!1,BreadcrumbTitle:"Blog Without Sidebar",BreadcrumbSubTitle:"Blog without sidebar",paddingTop:"pt-32"}},mounted:function(){var t=this;this.blogData=r.find((function(e){return e.slug==t.$route.params.slug}))}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-cover bg-gray-800",staticStyle:{"background-image":"url(/images/bg/body-bg2.webp)"}},[e("HeaderSection"),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),e("Breadcrumb",{attrs:{BreadcrumbTitle:t.BreadcrumbTitle,BreadcrumbSubTitle:t.BreadcrumbSubTitle}}),t._v(" "),e("div",{staticClass:"details"},[e("div",{staticClass:"container"},[e("div",{staticClass:"grid mb-20"},[e("div",{staticClass:"single-grid"},[e("div",{staticClass:"post-top-area max-w-4xl m-auto text-center mb-16"},[e("ul",{staticClass:"flex mb-8 justify-center text-white"},[t._m(0),t._v(" "),e("li",{staticClass:"relative pr-8 content-after after:bg-primary after:absolute after:top-3 after:right-4 after:w-1 after:h-1 after:rounded-full"},[e("span",[t._v(t._s(t.blogData.date))])]),t._v(" "),t._m(1)]),t._v(" "),e("h2",{staticClass:"text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10"},[t._v(t._s(t.blogData.title))])]),t._v(" "),e("div",{staticClass:"post-tags my-8 space-x-3 text-white text-center"},[e("n-link",{staticClass:"px-4 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid inline-block rounded-md",attrs:{to:"/"}},[t._v(" Esports")]),t._v(" "),e("n-link",{staticClass:"px-4 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid inline-block rounded-md",attrs:{to:"/"}},[t._v(" Racing")])],1),t._v(" "),e("div",{staticClass:"text-center"},[e("img",{attrs:{src:t.blogData.imgLarge,alt:""}})]),t._v(" "),t._m(2)])]),t._v(" "),e("BlogListinDetails"),t._v(" "),e("Disqus",{staticClass:"mt-20",attrs:{shortname:"Admin"}})],1)]),t._v(" "),e("ContactBanner",{attrs:{paddingTop:t.paddingTop}}),t._v(" "),e("Footer")],1)}),[function(){var t=this,e=t._self._c;return e("li",{staticClass:"relative pr-8 content-after after:bg-primary after:absolute after:top-3 after:right-4 after:w-1 after:h-1 after:rounded-full"},[t._v("\n                              By "),e("span",[t._v("Harold Leonard")])])},function(){var t=this._self._c;return t("li",{},[t("span",[this._v("5 min read")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content max-w-4xl m-auto mt-20"},[e("div",{staticClass:"description"},[e("h4",{staticClass:"text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all mb-2 sm:mb-5 leading-9"},[t._v("Make your store stand out from the others by converting more shoppers into buyers!")]),t._v(" "),e("p",{staticClass:"leading-8"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),t._v(" "),e("p",{staticClass:"leading-8"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),t._v(" "),e("h4",{staticClass:"text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all mb-2 sm:mb-5 leading-9 mt-10"},[t._v("Our company fails the real world test in all kinds of ways.")]),t._v(" "),e("p",{staticClass:"leading-8"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),t._v(" "),e("img",{staticClass:"rounded-3xl",attrs:{src:"/images/blog/blog_details_layer.webp",alt:""}}),t._v(" "),e("blockquote",{staticClass:"py-5 mb-5"},[e("p",{staticClass:"font-bold text-yellow italic lg:text-3xl text-xl"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.")])]),t._v(" "),e("h4",{staticClass:"text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all mb-2 sm:mb-5 leading-9 mt-10"},[t._v("Our company fails the real world test in all kinds of ways.")]),t._v(" "),e("p",{staticClass:"leading-8"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")]),t._v(" "),e("div",{staticClass:"social-share-wrap items-center mt-14 py-6 border-b-2 border-t-2 border-secondary-80 flex flex-col sm:flex-row justify-between"},[e("h3",{staticClass:"share font-bold text-2xl uppercase"},[t._v("Share This Article:")]),t._v(" "),e("ul",{staticClass:"post-social-list space-x-2 mt-5 sm:mt-0"},[e("li",{staticClass:"inline-block"},[e("a",{staticClass:"px-3 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-md",attrs:{href:"https://www.facebook.com"}},[e("i",{staticClass:"icofont-facebook"})])]),t._v(" "),e("li",{staticClass:"inline-block"},[e("a",{staticClass:"px-3 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-md",attrs:{href:"https://www.twitter.com"}},[e("i",{staticClass:"icofont-twitter"})])]),t._v(" "),e("li",{staticClass:"inline-block"},[e("a",{staticClass:"px-3 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-md",attrs:{href:"https://www.instagram.com"}},[e("i",{staticClass:"icofont-instagram"})])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderSection:n(206).default,Breadcrumb:n(208).default,BlogListinDetails:n(330).default,ContactBanner:n(302).default,Footer:n(207).default})}}]);