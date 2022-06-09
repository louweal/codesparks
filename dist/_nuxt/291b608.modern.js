(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{196:function(t,e,n){t.exports=n.p+"img/jambo.c46e5e7.jpg"},197:function(t){t.exports=JSON.parse('{"title":"Blog","content":["Here I publish my thoughs, technical articles, updates and everything in between."],"list":[{"title":"Meet Jambo: the new junior bark-end developer","badge":"blog","slug":"jambo-bark-end-developer"},{"title":"How did I win the Sustainability Challenge in the Hedera Hackathon?","badge":"news","slug":"won-hedera-hackathon"},{"title":"How did I win the Women in Web3 Challenge in the Hedera Hackathon?","badge":"news","slug":"won-hedera-hackathon-2"},{"title":"CryptoCrafts: The first store for creative crypto-enthousiasts!","badge":"news","slug":"cryptocrafts-store-is-open"},{"title":"How to use Hedera SDK in a Vue app","badge":"tutorial","slug":"tutorial-hedera-sdk-vue"}]}')},199:function(t,e,n){"use strict";n.r(e);var l=n(8),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row min-vh-100"},[n("div",{staticClass:"col-12 align-self-center"},[n("h1",{staticClass:"h3 text-secondary fw-normal lh-1"},[t._v("Hi, I'm")]),t._v(" "),n("h1",[t._v("Anneloes Louwe")]),t._v(" "),n("h2",{staticClass:"h4 fw-light fs-6 mb-4 text-light"},[t._v("\n      Front-end developer | UX-designer | Hedera enthousiast\n    ")]),t._v(" "),t._m(0),t._v(" "),n("nuxt-link",{staticClass:"btn btn-secondary mb-4",attrs:{to:"#about"}},[t._v("\n      More about me\n    ")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-sm-9 col-md-5"},[n("p",[t._v("\n        I'm a front-end developer & UX designer based in Leiden (The\n        Netherlands). I love building and designing sparkling websites, solid\n        applications, distributed apps, and everything in between.\n      ")])])}],!1,null,"82fa3cae",null);e.default=component.exports},202:function(t,e,n){var map={"./ik.png":203,"./ik.webp":204,"./jambo.jpg":196};function l(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=o,t.exports=l,l.id=202},203:function(t,e,n){t.exports=n.p+"img/ik.dddb159.png"},204:function(t,e,n){t.exports=n.p+"img/ik.e3814bf.webp"},205:function(t){t.exports=JSON.parse('{"title":"About me","content":["Mauris at pharetra nisi. Mauris pharetra rutrum justo vitae feugiat. Quisque pulvinar feugiat laoreet. Sed semper gravida diam, id imperdiet nulla lobortis non. Etiam tempus porttitor tincidunt. Integer arcu nunc, suscipit ut nisl sed, viverra varius ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim ligula non condimentum eleifend.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet accumsan nunc, ac hendrerit tortor blandit et. Donec ut felis odio. Donec consequat aliquet odio sit amet convallis. ","Some of the technologies and tools in my tech stack are:"],"visual":"ik.webp","tech":["html","css","javascript","solidity","bootstrap","hedera sdk","vue","nuxt","react","npm","git","python","php","wordpress*","figma","blender","illustrator"]}')},206:function(t){t.exports=JSON.parse('{"title":"Projects","content":["All these projects are build by me to learn something new."],"list":[{"title":"Hedera Helix","tech":["hedera-sdk","solidity","vue","nuxt"]},{"title":"The Hederian Mint","tech":["vue","nuxt","scss","blender","figma"]},{"title":"Codesparks","tech":["bootstrap"]},{"title":"Openbuur","tech":["react","redux","express","mongodb","bootstrap"]},{"title":"HOSLO","tech":["vue","nuxt","bootstrap"]},{"title":"xBike Tracker","tech":["d3.js","javascript"]},{"title":"Cryptovestigation","tech":["vue","nuxt"]},{"title":"Mastermind","tech":["react","javascript"]}]}')},207:function(t){t.exports=JSON.parse('{"title":"Get in touch","content":["Mauris at pharetra nisi. Mauris pharetra rutrum justo vitae feugiat. Quisque pulvinar feugiat laoreet. Sed semper gravida diam, id imperdiet nulla lobortis non. Etiam tempus porttitor tincidunt. Integer arcu nunc, suscipit ut nisl sed, viverra varius ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim ligula non condimentum eleifend.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]}')},209:function(t,e,n){"use strict";n.r(e);var l={name:"Main",transition:"home",about:n(205),projects:n(206),articles:n(197),socials:n(61),contact:n(207),data:()=>({numProjects:6,numArticles:4}),methods:{loadMoreProjects(){this.numProjects+=3},loadMoreArticles(){this.numArticles+=4}}},o=n(8),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",[l("hero"),t._v(" "),l("section",{staticClass:"h-100 py-4",attrs:{id:"about"}},[l("div",{staticClass:"row min-vh-100"},[l("div",{staticClass:"col-12 col-md-6 align-self-center mb-5 mb-md-0"},[l("h2",{staticClass:"text-secondary"},[t._v(t._s(t.$options.about.title))]),t._v(" "),t._l(t.$options.about.content,(function(p,i){return l("p",{key:i},[t._v(t._s(p))])})),t._v(" "),l("div",{staticClass:"row mb-3"},t._l(t.$options.about.tech,(function(e,i){return l("div",{key:i,staticClass:"col-6 col-sm-4"},[l("i",{staticClass:"bi bi-arrow-right-short text-secondary align-middle"}),t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v("\n        * planning to use only\n        "),l("a",{staticClass:"text-secondary",attrs:{href:"#"}},[t._v("Sanity")]),t._v(" or another headless CMS\n        in the future\n      ")],2),t._v(" "),l("div",{staticClass:"\n          col-10\n          offset-1\n          col-sm-8\n          offset-sm-2\n          col-md-5\n          offset-md-1\n          col-xl-5\n          align-self-center\n        "},[l("div",{staticClass:"img-c"},[l("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(202)("./"+t.$options.about.visual),alt:"anneloes"}})])])])]),t._v(" "),l("section",{staticClass:"h-100 py-4",attrs:{id:"projects"}},[l("div",{staticClass:"row min-vh-100 align-self-center"},[l("div",{staticClass:"col-12 align-self-center"},[l("h2",{staticClass:"text-secondary"},[t._v(t._s(t.$options.projects.title))]),t._v(" "),l("div",{staticClass:"col-11 col-sm-8 col-md-6 col-lg-5 mb-5"},t._l(t.$options.projects.content,(function(p,i){return l("p",{key:i},[t._v(t._s(p))])})),0),t._v(" "),l("div",{staticClass:"row"},[t._l(t.$options.projects.list,(function(p,i){return[i<t.numProjects?l("div",{key:i,staticClass:"col-12 col-md-6 col-lg-4 mb-4"},[l("div",{staticClass:"card bg-c rounded-3 h-100"},[l("div",{staticClass:"card-body"},[l("h3",{staticClass:"card-title"},[t._v(t._s(p.title))]),t._v(" "),p.tech?l("div",{staticClass:"hstack gap-2 row-gap-0 flex-wrap",staticStyle:{"row-gap":"0 !important"}},t._l(p.tech,(function(e,i){return l("div",{key:i,staticClass:"text-secondary fw-bold"},[t._v("\n                      "+t._s(e)+"\n                    ")])})),0):t._e(),t._v(" "),l("p",{staticClass:"card-text"},[t._v("\n                    Some quick example text to build on the card title and\n                    make up the bulk of the card's content.\n                  ")])]),t._v(" "),t._m(0,!0)])]):t._e()]})),t._v(" "),t.$options.projects.list.length>t.numProjects?l("div",{staticClass:"text-center mt-3"},[l("div",{staticClass:"btn btn-secondary",on:{click:t.loadMoreProjects}},[t._v("\n              More projects\n            ")])]):t._e()],2)])])]),t._v(" "),l("section",{staticClass:"h-100 py-4",attrs:{id:"articles"}},[l("div",{staticClass:"row min-vh-100 align-self-center"},[l("div",{staticClass:"col-12 align-self-center"},[l("h2",{staticClass:"text-secondary"},[t._v(t._s(t.$options.articles.title))]),t._v(" "),l("div",{staticClass:"col-11 col-sm-8 col-md-6 col-lg-5 mb-5"},t._l(t.$options.articles.content,(function(p,i){return l("p",{key:i},[t._v(t._s(p))])})),0),t._v(" "),l("div",{staticClass:"row"},[t._l(t.$options.articles.list.slice(0,t.numArticles),(function(a,i){return l("div",{key:i,staticClass:"col-12 col-md-6 mb-4"},[l("nuxt-link",{staticClass:"card bg-c rounded-3 h-100",attrs:{to:"/post/"+a.slug}},[l("div",{staticClass:"card-body"},[a.badge?l("div",{staticClass:"badge bg-secondary text-primary mb-1"},[t._v("\n                  "+t._s(a.badge)+"\n                ")]):t._e(),t._v(" "),l("h3",{staticClass:"card-title"},[t._v(t._s(a.title))]),t._v(" "),l("p",{staticClass:"card-text"},[t._v("\n                  Some quick example text to build on the card title and make\n                  up the bulk of the card's content.\n                ")])]),t._v(" "),l("div",{staticClass:"card-footer"},[l("i",{staticClass:"\n                    bi bi-arrow-right-short\n                    fs-5\n                    align-middle\n                    text-secondary\n                  "}),t._v(" "),l("span",{staticClass:"align-middle"},[t._v("Read more")])])])],1)})),t._v(" "),t.$options.articles.list.length>t.numArticles?l("div",{staticClass:"text-center mt-3"},[l("div",{staticClass:"btn btn-secondary",on:{click:t.loadMoreArticles}},[t._v("\n              More articles\n            ")])]):t._e()],2)])])]),t._v(" "),l("section",{staticClass:"h-100 py-4",attrs:{id:"contact"}},[l("div",{staticClass:"row min-vh-100"},[l("div",{staticClass:"col-12 col-md-5 align-self-center mb-5 mb-md-0"},[l("h2",{staticClass:"text-secondary"},[t._v(t._s(t.$options.contact.title))]),t._v(" "),t._l(t.$options.contact.content,(function(p,i){return l("p",{key:i},[t._v(t._s(p))])})),t._v(" "),l("div",{staticClass:"vstack gap-1"},t._l(t.$options.socials,(function(s,i){return l("a",{key:i,attrs:{href:s.url,target:"_blank"}},[l("i",{class:"bi bi-"+s.icon+" me-2 align-middle"}),t._v(" "),l("span",{staticClass:"align-middle"},[t._v(t._s(s.title))])])})),0)],2),t._v(" "),l("div",{staticClass:"\n          col-12 col-md-7\n          offset-lg-1\n          col-lg-6 col-xl-5\n          align-self-center\n        "},[l("div",{staticClass:"rounded-3 bg-c p-3 p-sm-4 p-xl-5"},[t._m(1),t._v(" "),l("form",{attrs:{name:"contact",method:"POST","data-netlify":"true"}},[l("input",{attrs:{type:"hidden",name:"form-name",value:"contact"}}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),l("div",{staticClass:"form-check mb-4"},[l("input",{staticClass:"form-check-input me-2 bg-c",attrs:{type:"checkbox",value:"",id:"form4Example4"}}),t._v(" "),l("label",{staticClass:"form-check-label",attrs:{for:"form4Example4"}},[t._v("\n                I agree to the\n                "),l("nuxt-link",{staticClass:"text-light",attrs:{to:"/privacy-statement"}},[t._v("privacy statement")])],1)]),t._v(" "),l("button",{staticClass:"btn btn-secondary btn-block mb-4",attrs:{type:"submit"}},[t._v("\n              Send\n            ")])])])])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-footer"},[n("div",{staticClass:"hstack gap-3"},[n("a",{attrs:{href:"#",target:"_blank"}},[n("i",{staticClass:"bi bi-github fs-5 align-middle me-1"}),t._v(" "),n("span",{staticClass:"align-middle"},[t._v("Github")])]),t._v(" "),n("a",{attrs:{href:"#",target:"_blank"}},[n("i",{staticClass:"bi bi-globe2 fs-5 align-middle me-1"}),t._v(" "),n("span",{staticClass:"align-middle"},[t._v("Live site")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ms-1 mb-3"},[e("i",{staticClass:"bi bi-envelope-open fs-2"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-floating mb-4"},[n("input",{staticClass:"form-control bg-c",attrs:{type:"text",id:"name",name:"name"}}),t._v(" "),n("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Name")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-floating mb-4"},[n("input",{staticClass:"form-control bg-c",attrs:{type:"email",id:"email",name:"email"}}),t._v(" "),n("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("E-mail")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-floating mb-4"},[n("textarea",{staticClass:"form-control h-100 bg-c",attrs:{id:"message",name:"message",rows:"5"}}),t._v(" "),n("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("Message")])])}],!1,null,"7fd5ef1c",null);e.default=component.exports;installComponents(component,{Hero:n(199).default})}}]);