(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{307:function(t,e,n){"use strict";n.r(e);var l=n(305),c={components:{countTo:n.n(l).a},data:function(){return{commentsVisible:!1,counter:[]}},methods:{visibilityChanged:function(t){this.commentsVisible=t}}},o=n(7),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-32 pb-32"},[e("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.commentsVisible?e("div",{staticClass:"grid md:grid-cols-4 grid-cols-2 gap-9"},t._l(t.counter,(function(n,l){return e("div",{key:l,staticClass:"text-white text-center"},[e("countTo",{staticClass:"text-white text-5xl lg:text-10xl uppercase font-metal font-normal block",class:n.className,attrs:{startVal:n.startVal,endVal:n.endVal,duration:3e3,autoplay:!0}}),t._v(" "),e("p",{staticClass:"uppercase mt-3 sm:mt-5 text-base lg:text-lg"},[t._v(t._s(n.text))])],1)})),0):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);