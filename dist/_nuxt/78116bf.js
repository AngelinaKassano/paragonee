(window.webpackJsonp=window.webpackJsonp||[]).push([[39,2,5,10,15,27,33,34,63],{306:function(t,e,n){"use strict";n.r(e);var r={props:{paddingTop:String},data:function(){return{videoBannerBg:"/images/bg/gaming-update.webp",btnName:"Contact Now"}}},l=n(7),component=Object(l.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!1},text:{type:String,required:!1}}},l=n(7),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center lg:mb-15 md:mb-12 mb-8"},[t.title?e("h2",{staticClass:"text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto"},[t._v(" "+t._s(t.title)+" ")]):t._e(),t._v(" "),t.text?e("p",{staticClass:"max-w-lg text-gray-100 mx-auto text-base sm:text-lg leading-8 mt-3"},[t._v(" "+t._s(t.text)+" ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},308:function(t){t.exports=JSON.parse('[{"teamOne":"/images/others/upcoming-game-thumb3.webp","teamVs":"/images/others/game-vs2.webp","teamTwo":"/images/others/upcoming-game-thumb4.webp","title":"Страница игры в Steam","description":"Стала доступна страница нашей игры на площадке Steam","playBtn":"/images/others/play-btn2.webp","playAlt":"Gaming BG","src":"https://www.youtube.com/embed/eS9Qm4AOOBY","autoplay":true,"slug":"2","videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/gaming-bg1.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"Watch Live Streaming 2 "}]')},309:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,l=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=l=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=l=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!l);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=l=l||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&l||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=l=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=l},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},311:function(t,e,n){"use strict";n.r(e);var r=n(309),l={components:{countTo:n.n(r).a},data:function(){return{commentsVisible:!1,counter:[]}},methods:{visibilityChanged:function(t){this.commentsVisible=t}}},o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-32 pb-32"},[e("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.commentsVisible?e("div",{staticClass:"grid md:grid-cols-4 grid-cols-2 gap-9"},t._l(t.counter,(function(n,r){return e("div",{key:r,staticClass:"text-white text-center"},[e("countTo",{staticClass:"text-white text-5xl lg:text-10xl uppercase font-metal font-normal block",class:n.className,attrs:{startVal:n.startVal,endVal:n.endVal,duration:3e3,autoplay:!0}}),t._v(" "),e("p",{staticClass:"uppercase mt-3 sm:mt-5 text-base lg:text-lg"},[t._v(t._s(n.text))])],1)})),0):t._e()])])}),[],!1,null,null,null);e.default=component.exports},321:function(t){t.exports=JSON.parse('[{"clientImage":"/images/others/1.png"},{"clientImage":"/images/others/2.png"},{"clientImage":"/images/others/3.png"},{"clientImage":"/images/others/4.png"},{"clientImage":"/images/others/5.png"}]')},326:function(t,e,n){"use strict";n.r(e);var r=n(147),l=n(321),o={components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},data:function(){return{testimonialData:l,swiperOption:{slidesPerView:1,spaceBetween:30,pagination:!1,navigation:{nextEl:".testimonial-section .testimonial-button-next",prevEl:".testimonial-section .testimonial-button-prev"},autoplay:{delay:1e4,disableOnInteraction:!1},loop:!0}}}},c=n(7),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"testimonial-section"},[e("div",{staticClass:"relative pt-120 pb-120",staticStyle:{"background-image":"url(/images/others/testimonial-bg-fullwidth.webp)"}},[e("div",{staticClass:"container relative"},[e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.testimonialData,(function(t,n){return e("swiper-slide",{key:n},[e("div",{staticClass:"flex flex-col items-center bg-cover py-10 px-8 rounded-50",staticStyle:{"background-image":"url(/images/others/testimonial-bg.webp)"}},[e("img",{attrs:{src:t.clientImage,alt:"Testimonial",width:"800",height:"600"}})])])})),1),t._v(" "),t._m(0)],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"flex justify-center mt-14"},[t("div",{staticClass:"testimonial-button-prev swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all mr-4 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow2.webp",alt:"Arrow"}})]),this._v(" "),t("div",{staticClass:"testimonial-button-next swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all ml-4 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow1.webp",alt:"Arrow"}})])])}],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r=n(312),l=(n(313),{components:{CoolLightBox:r.a},data:function(){return{btnName:"Play Now",items:[{src:"https://www.youtube.com/watch?v=eS9Qm4AOOBY"}],index:null}}}),o=n(7),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container flex items-center space-x-4 flex-col lg:flex-row"},[e("div",{staticClass:"w-full lg:w-1/2 mb-10 lg:mb-0"},[e("div",{staticClass:"sm:mr-12 mr-0 text-center relative"},[e("img",{attrs:{src:"/images/others/about-thumb.webp",alt:""}}),t._v(" "),e("CoolLightBox",{attrs:{items:t.items,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),t._l(t.items,(function(n,r){return e("div",{key:r},[e("div",{staticClass:"absolute bottom-0 right-0 md:right-32 lg:right-0 cursor-pointer h-120 w-120 bg-primary rounded-full flex justify-center items-center z-30 content-before before:h-120 before:w-120 before:bg-primary before:opacity-50 before:rounded-full before:absolute before:z-20 before:transition-all hover:before:h-32 hover:before:w-32",on:{click:function(e){t.index=r}}},[e("i",{staticClass:"icofont-ui-play z-40 text-white"})])])}))],2)]),t._v(" "),e("div",{staticClass:"w-full lg:w-1/2"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"about_btn"},[e("n-link",{staticClass:"group primary-btn opacity-100 transition-all",staticStyle:{"background-image":"url(/images/others/btn-bg.webp)"},attrs:{to:"/contact"}},[t._v("\n                "+t._s(t.btnName)+"\n                "),e("img",{staticClass:"ml-3 w-5 h-5 group-hover:ml-4 transition-all",attrs:{src:"/images/icon/arrrow-icon.webp",alt:"Arrow Icon"}})])],1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about_title lg:mb-6 mb-4"},[e("h5",{staticClass:"text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute content-before before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16"},[t._v("About Bonx Studio")]),t._v(" "),e("h2",{staticClass:"text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl"},[t._v(" bonx is the best gaming studio for all gamer. ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"about_desc mb-10"},[e("p",[t._v("It is a long established fact that a reader will be distracted the readable content of page when looking at it layout the point using lorem Ipsum is that it has a more-or-less normal distribution.")]),t._v(" "),e("p",[t._v("It is a long established fact that a reader will be distracted the readable content of page when looking at it layout the point using lorem Ipsum is that it has a more-or-less normal distribution.")])])}],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";n.r(e);var r=n(312),l=(n(313),n(147)),o=(n(215),n(308)),c={components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide,CoolLightBox:r.a},data:function(){return{matchesData:o,swiperOption:{slidesPerView:1,spaceBetween:30,pagination:!1,navigation:{nextEl:".live-section .livesection-button-next",prevEl:".live-section .livesection-button-prev"}},index:null}}},m=n(7),component=Object(m.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"live-section"},[e("div",{staticClass:"container relative"},[e("CoolLightBox",{attrs:{items:t.matchesData,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.matchesData,(function(n,r){return e("swiper-slide",{key:r},[e("div",{staticClass:"relative"},[e("img",{staticClass:"sm:h-full h-64 w-full object-cover",attrs:{src:"".concat(n.gamingBg),alt:n.gamingAlt}}),t._v(" "),e("div",{staticClass:"absolute-center",on:{click:function(e){t.index=r}}},[e("img",{staticClass:"md:w-120 w-20 h-20 md:h-120 cursor-pointer rounded",attrs:{src:"".concat(n.playBtnOne),alt:n.playAlt}})]),t._v(" "),e("div",{staticClass:"absolute md:h-20 h-12 left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center",style:{backgroundImage:"url(".concat(n.videoShapeBg,")")}},[e("h3",{staticClass:"text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl"},[t._v(t._s(n.shapeTitle))])])])])})),1),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"livesection-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all 2xl:-left-28 left-3 z-50 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow2.webp",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"livesection-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all 2xl:-right-28 2xl:left-auto right-3 z-50 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow1.webp",alt:""}})])}],!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);n(34),n(14),n(21),n(22);var r={components:{TitleSection:function(){return Promise.resolve().then(n.bind(null,307))}},data:function(){return{title:"Meet Gamer Team",text:"When unknown printer took type and scrambled it to make type specimen book centuries",services:[{imgSrc:"/images/others/team1.webp",alt:"Service Image",name:"Tasia Mancuso",subtitle:"SEO & Founder"},{imgSrc:"/images/others/team2.webp",alt:"Service Image",name:"Rosaline Emmons",subtitle:"Team Leader"},{imgSrc:"/images/others/team3.webp",alt:"Service Image",name:"Willbarn Beharn",subtitle:"Team Member"}]}}},l=n(7),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container pt-32"},[e("TitleSection",{attrs:{title:t.title,text:t.text}}),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"},t._l(t.services,(function(n,r){return e("div",{key:r,staticClass:"relative group w-300 sm:w-full mx-auto"},[e("div",[e("img",{attrs:{src:n.imgSrc,alt:n.alt}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 bg-team-shape bg-cover h-24 sm:h-20 md:h-28 lg:h-24 xl:h-32 2xl:h-32 group-hover:bg-team-hover-shape hover:transition-all"},[e("h3",{staticClass:"text-white font-bold text-lg md:text-2xl uppercase mb-2 xl:mb-4 leading-tight"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"text-primary text-sm md:text-base group-hover:text-white transition-all"},[t._v(t._s(n.subtitle))])])])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleSection:n(307).default})},351:function(t,e,n){"use strict";n.r(e);n(14),n(21),n(22);var r={components:{HeaderSection:function(){return Promise.resolve().then(n.bind(null,210))},OffCanvasMobileMenu:function(){return n.e(0).then(n.bind(null,369))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,212))},AboutUs:function(){return Promise.resolve().then(n.bind(null,330))},CounterUp:function(){return Promise.resolve().then(n.bind(null,311))},LiveStream:function(){return Promise.resolve().then(n.bind(null,331))},GamerTeam:function(){return Promise.resolve().then(n.bind(null,332))},Testimonial:function(){return Promise.resolve().then(n.bind(null,326))},ContactBanner:function(){return Promise.resolve().then(n.bind(null,306))},Footer:function(){return Promise.resolve().then(n.bind(null,211))}},data:function(){return{navOpen:!1,BreadcrumbTitle:"About Us",BreadcrumbSubTitle:"About Us",paddingTop:"pt-32"}}},l=n(7),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-cover bg-gray-800",staticStyle:{"background-image":"url(/images/bg/body-bg2.webp)"}},[e("HeaderSection"),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),e("Breadcrumb",{attrs:{BreadcrumbTitle:t.BreadcrumbTitle,BreadcrumbSubTitle:t.BreadcrumbSubTitle}}),t._v(" "),e("AboutUs"),t._v(" "),e("CounterUp"),t._v(" "),e("LiveStream"),t._v(" "),e("GamerTeam"),t._v(" "),e("Testimonial"),t._v(" "),e("ContactBanner",{attrs:{paddingTop:t.paddingTop}}),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderSection:n(210).default,Breadcrumb:n(212).default,AboutUs:n(330).default,CounterUp:n(311).default,LiveStream:n(331).default,GamerTeam:n(332).default,Testimonial:n(326).default,ContactBanner:n(306).default,Footer:n(211).default})}}]);