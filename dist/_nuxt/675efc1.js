(window.webpackJsonp=window.webpackJsonp||[]).push([[30,34,62],{307:function(t,e,l){"use strict";l.r(e);var r={props:{title:{type:String,required:!1},text:{type:String,required:!1}}},n=l(7),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center lg:mb-15 md:mb-12 mb-8"},[t.title?e("h2",{staticClass:"text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto"},[t._v(" "+t._s(t.title)+" ")]):t._e(),t._v(" "),t.text?e("p",{staticClass:"max-w-lg text-gray-100 mx-auto text-base sm:text-lg leading-8 mt-3"},[t._v(" "+t._s(t.text)+" ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},310:function(t){t.exports=JSON.parse('[{"gameImage":"/images/others/434.jpg","btnName":"Подробнее","title":"Paragone Bomb","slug":"1","category":"1"}]')},345:function(t,e,l){"use strict";l.r(e);l(63),l(14),l(21),l(22);var r=l(310),n={components:{TitleSection:function(){return Promise.resolve().then(l.bind(null,307))}},data:function(){return{gameHome:r,title:"Скриншоты",text:"Познакомьтесь со списком игр, которые мы предлагаем"}}},o=l(7),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mb-120"},[e("TitleSection",{attrs:{title:t.title,text:t.text}}),t._v(" "),e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6"},t._l(t.gameHome.slice(0,4),(function(t,l){return e("div",{key:l,staticClass:"relative group before:empty-content before:absolute before:w-full before:h-full before:bg-transparent before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden transition-all"},[e("img",{staticClass:"w-full rounded-4xl",attrs:{src:t.gameImage,alt:"Feature Icon"}})])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleSection:l(307).default})}}]);