(function(t){function e(e){for(var n,a,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)a=c[u],i[a]&&d.push(i[a][0]),i[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);v&&v(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,a=1;a<s.length;a++){var c=s[a];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i={app:0},r=[];function c(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a7346546","chunk-2d0d3a29":"b52f811f","chunk-2d0e9771":"cba67e0e","chunk-5e86cc9e":"d96a3525","chunk-67c2de83":"006e137a"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s={"chunk-67c2de83":1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=new Promise(function(e,s){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d0d3a29":"31d6cfe0","chunk-2d0e9771":"31d6cfe0","chunk-5e86cc9e":"31d6cfe0","chunk-67c2de83":"2ed58fd2"}[t]+".css",i=o.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.request=n,delete a[t],v.parentNode.removeChild(v),s(r)},v.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(v)}).then(function(){a[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,s){n=i[t]=[e,s]});e.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var s=i[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");r.type=n,r.request=a,s[1](r)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"212d":function(t,e,s){},"4d72":function(t,e,s){"use strict";var n=s("212d"),a=s.n(n);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.ready?s("div",{attrs:{id:"app"}},[s("div",{staticClass:"nav-main"},[s("b-navbar",{staticClass:"bg_shaleem",attrs:{toggleable:"lg",type:"dark"}},[s("div",{staticClass:"choose-lang"},[s("span",{on:{click:function(e){t.lang="en"}}},[t._v("ENG")]),t._v(" \\ "),s("span",{on:{click:function(e){t.lang="ar"}}},[t._v("العربيه")])]),s("b-navbar-toggle",{attrs:{target:"nav_collapse"}},[t._v(" "+t._s(t.strings.topMenuText)+" ")]),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-item",{attrs:{href:"#"}},[t._v(t._s(t.strings.navbar.homeText))]),s("b-nav-item-dropdown",{attrs:{text:t.strings.navbar.aboutUsText,right:""}},[s("b-dropdown-item",{attrs:{href:"#/about"}},[t._v(t._s(t.strings.navbar.aboutUsText))]),s("b-dropdown-item",{attrs:{href:"#/performance"}},[t._v("HSE Performance")]),s("b-dropdown-item",{attrs:{href:"#/timeline"}},[t._v("Shaleem Timeline")]),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("ISO 9001")]),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("ISO 14001")]),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("ISO 18001")])],1),s("b-nav-item",{attrs:{href:"#/location"}},[t._v(t._s(t.strings.navbar.locationText))]),s("b-nav-item",{attrs:{href:"#/contact"}},[t._v(t._s(t.strings.navbar.contactUsText))])],1)],1)],1),t._m(0)],1),s("div",{staticClass:"container py-5"},[s("router-view",{attrs:{lang:t.lang}})],1),s("div",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center pt-5"},[s("div",{staticClass:"col-4 col-md-2 text-center"},[s("h4",[t._v(t._s(t.strings.footer.labelSafe))])]),s("div",{staticClass:"col-4 col-md-2 text-center"},[s("h4",[t._v(t._s(t.strings.footer.labelReliable))])]),s("div",{staticClass:"col-4 col-md-2 text-center"},[s("h4",[t._v(t._s(t.strings.footer.labelLocal))])])]),t._m(1)])])]):t._e()},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo text-center py-4"},[s("img",{attrs:{src:"assets/cropped-headerBG-1-1.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center py-5"},[s("div",{staticClass:"col-3 col-md-1 thumbs"},[s("img",{attrs:{src:"/assets/ISO9001_GB__RGB-270x270.png"}})]),s("div",{staticClass:"col-3 col-md-1 thumbs"},[s("img",{attrs:{src:"/assets/ISO14001_GB__RGB-270x270.png"}})]),s("div",{staticClass:"col-3 col-md-1 thumbs"},[s("img",{attrs:{src:"/assets/OHSAS18001_GB__RGB-270x270.jpg"}})]),s("div",{staticClass:"col-3 col-md-1 thumbs"},[s("img",{attrs:{src:"/assets/opal.png"}})]),s("div",{staticClass:"col-3 col-md-1 thumbs"},[s("img",{attrs:{src:"/assets/IADC-1.png"}})])])}],r=s("bc3a"),c=s.n(r),o={name:"App",data:function(){return{lang:"ar",url:"",ready:!1,strings:{}}},created:function(){this.setLang()},watch:{lang:function(t,e){this.setLang()}},methods:{setLang:function(){var t=this;c.a.get(this.url+"/assets/lang/"+this.lang+"/main.json").then(function(e){t.strings=e.data,t.ready=!0})}}},l=o,u=(s("5c0b"),s("2877")),d=Object(u["a"])(l,a,i,!1,null,null,null),v=d.exports,f=s("8c4f"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.ready?s("div",{class:"home lang-"+t.lang},[s("div",{staticClass:"quote-box p-4"},[s("h1",[s("i",[t._v(t._s(t.strings.quoteMain))])]),s("p",[t._v(t._s(t.strings.quoteBy))])]),s("div",{staticClass:"row py-5 align-items-center"},[s("div",{staticClass:"col-md-8"},[s("h1",[t._v(t._s(t.strings.shaleemLabel))]),s("p",[t._v(t._s(t.strings.shaleemBio)+"\n      ")])]),t._m(0)]),t._m(1),s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-md-5"},[s("h2",[t._v(t._s(t.strings.visionText))]),s("p",[t._v(t._s(t.strings.visionDescription)+":")]),s("ul",[s("li",[t._v(t._s(t.strings.vision_1))]),s("li",[t._v(t._s(t.strings.vision_2))]),s("li",[t._v(t._s(t.strings.vision_3))]),s("li",[t._v(t._s(t.strings.vision_4))])]),t._m(2)]),s("div",{staticClass:"col-md-5 company-values"},[s("h2",[t._v(t._s(t.strings.valuesText))]),s("p",[t._v(t._s(t.strings.valuesDescription))]),s("div",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v(t._s(t.strings.value_1.title))]),s("p",[t._v(t._s(t.strings.value_1.description))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v(t._s(t.strings.value_2.title))]),s("p",[t._v(t._s(t.strings.value_2.description)+".")])]),s("div",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v(t._s(t.strings.value_3.title))]),s("p",[t._v(t._s(t.strings.value_1.description))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v(t._s(t.strings.value_4.title))]),s("p",[t._v(t._s(t.strings.value_4.description))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v(t._s(t.strings.value_5.title))]),s("p",[s("b",[t._v(t._s(t.strings.value_5.info))])]),s("p",[t._v(t._s(t.strings.value_5.description))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v(t._s(t.strings.value_6.title))]),s("p",[t._v(t._s(t.strings.value_6.description))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"title"},[t._v(t._s(t.strings.value_7.title))]),s("p",[t._v(t._s(t.strings.value_7.description))])])])]),t._m(3),t._m(4)]):t._e()},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4 thumbs"},[s("img",{attrs:{src:"assets/WorkingShaleem.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-5 py-5"},[s("div",{staticClass:"strip"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"thumbs py-5"},[s("img",{attrs:{src:"assets/helmtSafety.png"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-5 py-5"},[s("div",{staticClass:"strip"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"thumbs"},[s("img",{attrs:{src:"assets/WorkersEquipment-1.png"}})])}],m={name:"home",props:["lang"],data:function(){return{url:this.$parent.url,ready:!1,strings:{}}},watch:{lang:function(t,e){this.setLang()}},created:function(){this.setLang()},methods:{setLang:function(){var t=this;c.a.get(this.url+"/assets/lang/"+this.lang+"/home.json").then(function(e){t.strings=e.data,t.ready=!0})}}},h=m,g=(s("4d72"),Object(u["a"])(h,_,p,!1,null,"669be7cd",null)),b=g.exports;n["default"].use(f["a"]);var C=new f["a"]({routes:[{path:"/",name:"home",component:b},{path:"/contact",name:"contact",component:function(){return s.e("chunk-67c2de83").then(s.bind(null,"b8fa"))}},{path:"/location",name:"location",component:function(){return s.e("chunk-2d0e9771").then(s.bind(null,"8e3a"))}},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/performance",name:"performance",component:function(){return s.e("chunk-2d0d3a29").then(s.bind(null,"5e36"))}},{path:"/timeline",name:"timeline",component:function(){return s.e("chunk-5e86cc9e").then(s.bind(null,"f67a"))}}]}),y=s("9f7b"),w=s.n(y),x=s("0136"),k=s.n(x);s("7fad"),s("b35e");n["default"].config.productionTip=!1,n["default"].use(k.a),n["default"].use(w.a),new n["default"]({router:C,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("5e27"),a=s.n(n);a.a},"5e27":function(t,e,s){}});
//# sourceMappingURL=app.ed789c8b.js.map