(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],i[s]&&d.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);v&&v(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"77c93d06","chunk-2d0e9771":"5f07adc7","chunk-72bbc3a6":"a7867ded"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-72bbc3a6":1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d0e9771":"31d6cfe0","chunk-72bbc3a6":"6a7aabe4"}[t]+".css",i=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.request=n,delete s[t],v.parentNode.removeChild(v),a(r)},v.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(v)}).then(function(){s[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");r.type=n,r.request=s,a[1](r)}i[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"nav-main"},[a("b-navbar",{staticClass:"bg_shaleem",attrs:{toggleable:"lg",type:"dark"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}},[t._v(" Menu ")]),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{href:"#"}},[t._v("Home")]),a("b-nav-item",{attrs:{href:"#"}},[t._v("About Us")]),a("b-nav-item",{attrs:{href:"#/location"}},[t._v("Location")]),a("b-nav-item",{attrs:{href:"#/contact"}},[t._v("Contact Us")])],1)],1)],1),t._m(0)],1),a("div",{staticClass:"container py-5"},[a("router-view")],1),t._m(1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo text-center py-4"},[a("img",{attrs:{src:"assets/cropped-headerBG-1-1.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center pt-5"},[a("div",{staticClass:"col-4 col-md-2 text-center"},[a("h4",[t._v("SAFE")])]),a("div",{staticClass:"col-4 col-md-2 text-center"},[a("h4",[t._v("RELIABLE")])]),a("div",{staticClass:"col-4 col-md-2 text-center"},[a("h4",[t._v("LOCAL")])])]),a("div",{staticClass:"row justify-content-center py-5"},[a("div",{staticClass:"col-3 col-md-1 thumbs"},[a("img",{attrs:{src:"/assets/ISO9001_GB__RGB-270x270.png"}})]),a("div",{staticClass:"col-3 col-md-1 thumbs"},[a("img",{attrs:{src:"/assets/ISO14001_GB__RGB-270x270.png"}})]),a("div",{staticClass:"col-3 col-md-1 thumbs"},[a("img",{attrs:{src:"/assets/OHSAS18001_GB__RGB-270x270.jpg"}})]),a("div",{staticClass:"col-3 col-md-1 thumbs"},[a("img",{attrs:{src:"/assets/opal.png"}})]),a("div",{staticClass:"col-3 col-md-1 thumbs"},[a("img",{attrs:{src:"/assets/IADC-1.png"}})])])])])}],r={components:{}},o=r,c=(a("5c0b"),a("2877")),l=Object(c["a"])(o,s,i,!1,null,null,null),u=l.exports,d=a("8c4f"),v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"quote-box p-4"},[a("h3",[t._v("Work is no longer a personal hobby but it is indeed part and parcel of worship, and therefore it should be performed with sincerity, perfection and honour.’")]),a("p",[t._v("His Majesty Sultan Qaboos bin Said addressing the Council of Oman on 25th of September 2001")])]),a("div",{staticClass:"row py-5 align-items-center"},[a("div",{staticClass:"col-md-8"},[a("h1",[t._v("Shaleem")]),a("p",[t._v("Established in 1998, Shaleem Petroleum Company SAOC has developed into a leading Omani owned Local Community Contracting Company with over 15 years’ experience delivering Well Maintenance and Workover Services. Today,Shaleem employs over 280 people and proudly represents the ownership interests of over 400 shareholders who are citizens of the Willayat of Shaleem.\n      ")])]),a("div",{staticClass:"col-md-4 thumbs"},[a("img",{attrs:{src:"assets/WorkingShaleem.png"}})])]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-5 py-5"},[a("div",{staticClass:"strip"})])]),a("div",{staticClass:"row justify-content-between"},[a("div",{staticClass:"col-md-5"},[a("h2",[t._v("Vision")]),a("p",[t._v("To be the best Well Services and Workover Contractor in Oman and in the Region.   A Local Community Company that wins on merit by delivering world-class, internationally competitive performance:")]),a("ul",[a("li",[t._v("delighting our customers")]),a("li",[t._v("satisfying our shareholders")]),a("li",[t._v("the employer of first choice for talented people")]),a("li",[t._v("delivering development for our local communities.")])]),a("div",{staticClass:"thumbs py-5"},[a("img",{attrs:{src:"assets/helmtSafety.png"}})])]),a("div",{staticClass:"col-md-5 company-values"},[a("h2",[t._v("Our core values")]),a("p",[t._v("We believe in delivering world class Oil & Gas industry standards")]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("HSE")]),a("p",[t._v("No harm to people, no harm to the environment.")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("People")]),a("p",[t._v("Developing, training, employing, rewarding and motivating the best team in the field.")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("Customers")]),a("p",[t._v("Exceeding customer expectations safely and efficiently.")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("in-country value")]),a("p",[t._v("Maximum efficient use of local employees, goods and services.")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("best practices")]),a("p",[a("b",[t._v("Continuous improvement ethos to develop:")])]),a("p",[t._v("Highest international standards of safe and efficient operations; Good Governance; Transparency; Sound & Secure Financial Health (strong balance sheet); Best Systems & Processes (Operations, HR, Financial and Legal).")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("integrity")]),a("p",[t._v("Behaving with honesty and integrity; Impeccable business ethics; walking the talk of our values.")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("community")]),a("p",[t._v("Investing resources to help create self-reliance and provide support to those in need, with the aim always of making tomorrow better than yesterday.")])])])]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-5 py-5"},[a("div",{staticClass:"strip"})])]),a("div",{staticClass:"thumbs"},[a("img",{attrs:{src:"assets/WorkersEquipment-1.png"}})])])}],m={name:"home",components:{}},f=m,h=(a("a3bc"),Object(c["a"])(f,v,p,!1,null,"2603ba0a",null)),b=h.exports;n["a"].use(d["a"]);var g=new d["a"]({routes:[{path:"/",name:"home",component:b},{path:"/contact",name:"contact",component:function(){return a.e("chunk-72bbc3a6").then(a.bind(null,"b8fa"))}},{path:"/location",name:"location",component:function(){return a.e("chunk-2d0e9771").then(a.bind(null,"8e3a"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),y=a("9f7b"),_=a.n(y),C=a("0136"),w=a.n(C);a("7fad");n["a"].config.productionTip=!1,n["a"].use(w.a),n["a"].use(_.a),new n["a"]({router:g,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){},a3bc:function(t,e,a){"use strict";var n=a("f9a2"),s=a.n(n);s.a},f9a2:function(t,e,a){}});
//# sourceMappingURL=app.93cd5a74.js.map