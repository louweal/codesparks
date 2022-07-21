(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2,3],{245:function(t,e,n){var map={"./helix-hero.png":246,"./ik.png":247,"./ik.webp":248,"./jam-hero.jpeg":249,"./jam-hero.png":250,"./jam-visual.jpeg":251,"./jam-visual.png":252,"./jambo.jpg":253,"./logo.svg":178};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=245},246:function(t,e,n){t.exports=n.p+"img/helix-hero.9b523e1.png"},247:function(t,e,n){t.exports=n.p+"img/ik.dddb159.png"},248:function(t,e,n){t.exports=n.p+"img/ik.e3814bf.webp"},249:function(t,e,n){t.exports=n.p+"img/jam-hero.0f1e08e.jpeg"},250:function(t,e,n){t.exports=n.p+"img/jam-hero.63152e3.png"},251:function(t,e,n){t.exports=n.p+"img/jam-visual.6b77ea2.jpeg"},252:function(t,e,n){t.exports=n.p+"img/jam-visual.94be8bf.png"},253:function(t,e,n){t.exports=n.p+"img/jambo.c46e5e7.jpg"},254:function(t){t.exports=JSON.parse('{"title":"Get in touch","content":["Whether you want to talk to me about a cool project, have questions or just want to say hi, my inbox is always open. I will try my best to get back to you as soon as possible! "]}')},255:function(t){t.exports=JSON.parse('{"title":"Posts","content":["Here I publish my thoughs, technical articles, updates and everything in between."],"list":[{"title":"Meet Jambo: the new junior bark-end developer","badge":"blog","slug":"jambo-bark-end-developer","date":"11 July 2022","intro":"The best bark-end developer in the world!","visual":{"title":"Jambo","url":"jam-hero.png"},"sections":[{"content":"Since two months we have a junior bark-end developer named Jambo. He was only 9 weeks old when he started with us and it took him some days to develop his barks, but now he is a very good barker! Aside from barking he loves to be in the park and to play with other dogs. "},{"content":"He also loves to work on this hunting skills with his toys – especially rubber chickens – or by chasing his tail. He can already destruct some toys within minutes! In his free time he enjoys sleeping with a lot of peeing and pooping in between. ;)","visual":{"title":"Jambo 6 weeks old","url":"jam-visual.png"}},{"content":"Fun fact: he is a Schipperke, which is the smallest shepherd breed in the world which was previously used on ships to catch mice and other small animals. But they are also perfectly capable to assist (front-end) developers like me with their positive energy and cuteness. ;)"},{"content":"We are extremely happy to have him on our team! He brings us a tons of happiness & fun and he keeps us healthy by taking us on many walks each day. Jambo adds even more sparkles to Codesparks!","visual":{"title":"Jambo","url":"jambo.jpg"}}]},{"title":"My project Hedera Helix won two prizes in the Hedera 2022 Hackathon!","badge":"blog","slug":"helix-hedera-hackathon-2022","date":"1 June 2022","intro":"My decentralised app Hedera Helix won the in the sustainability challenge sponsored by Avery Dennison!","visual":{"title":"Hedera Helix","url":"helix-hero.png"},"sections":[{"content":"From March 21 until May 16 2022 I have dedicated all my spare time into building a decentralised app (dApp) for the Hedera 2022 Hackathon. The goal of this hackathon was building the next game-changing decentralized application with scalable Solidity Smart Contracts on Hedera. Although I was already a big fan of the Hedera technology, I didn\'t built anything on Hedera yet, nor on any other technology in the web3/decentralized area for that matter. It turned out to be an even bigger challenge than I expected, but all my hard work paid of in the end. Surprisingly, my project was judged as first place winner in the Sustainability Challenge and in the Women for Web3 Challenge! Below you can watch the pitch video and read more about the project."},{"video":{"caption":"Pitch video","url":"helix.mp4"}},{"title":"Where did your inspiration for this project come from?","content":"The inspiration for this project came from observing my neighbors (mostly students) throwing away piles and piles of good furniture when they move out. I try to throw away and buy as little as possible and I wanted to inspire people to buy and sell more items second hand and/or to use their bought items for a longer period of time and make people more aware of how each of their choices have impact on the environment."},{"title":"What is the purpose of the dApp?","content":"A smart contract is attached to each product in Helix. This contract contains a deposit that you pay when you buy the product. The deposit reflects the environmental impact of the materials in the product and the impact of the transportation from the production country to the store. Up to 60% of the deposit will be returned to you over time or after you sell it, 30% of the deposit is transferred to the person who buys the item second hand and 10% is donated to an environmental charity."},{"title":"How did you build it?","content":"The front-end is build with Vue and Nuxt. The smart contracts are written in Solidity. To make the app more efficient, all data retrieved from the Hedera network is stored in a Vuex store such that most data is retrieved only once while using the app. Static data is also encoded and combined in a single string to reduce the amount of queries needed."},{"title":"What were the biggest challenges you ran into?","content":"The main challenge I ran into was storing and retrieving data efficiently, to reduce gas fees and to ensure a smooth user experience. Furthermore, I needed to keep track of which smart contracts were created from the app. I solved this by creating another smart contract that maps user IDs to their smart contract IDs."},{"title":"What are you the most proud of?","content":"During this hackathon I learned to write smart contracts, I learned Solidity and learned to use Hedera SDK services. I’m also proud that I could use my recently learned UX and front-end skills to create a clean user interface for the dApp, which is optimized for use on mobile devices. This was also the first time in my life that I participated in a hackathon and without this hackathon I probably wouldn’t have been able to learn all these things in such a short amount of time."}]}]}')},256:function(t,e,n){"use strict";n.r(e);n(43);var o={data:function(){return{name:!1}},methods:{getName:function(t){this.name=t.target.value}}},r=n(9),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-3 bg-c p-3 p-sm-4 p-xl-5"},[t._m(0),t._v(" "),n("form",{attrs:{name:"contact",method:"POST",action:"/contact/success","data-netlify":"true",netlify:"","netlify-honeypot":"title"}},[n("input",{attrs:{type:"hidden",name:"form-name",value:"contact"}}),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"form-floating mb-4"},[n("input",{staticClass:"form-control bg-c",attrs:{type:"text",id:"name",name:"name",required:""},on:{input:t.getName}}),t._v(" "),n("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Name")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"form-check mb-4"},[n("input",{staticClass:"form-check-input me-2 bg-c",attrs:{type:"checkbox",value:"",name:"privacy",id:"privacy",required:""}}),t._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"privacy"}},[t._v("\n        I agree to the\n        "),n("nuxt-link",{staticClass:"text-light",attrs:{to:"/privacy-statement"}},[t._v("privacy statement")])],1)]),t._v(" "),n("button",{staticClass:"btn btn-secondary btn-block mb-4",attrs:{type:"submit"}},[t._v("\n      Send\n    ")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ms-1 mb-3"},[e("i",{staticClass:"bi bi-envelope-open fs-2"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-none"},[n("label",[t._v("\n        Don’t fill this out if you’re human:\n        "),n("input",{attrs:{name:"title"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-floating mb-4"},[n("input",{staticClass:"form-control bg-c",attrs:{type:"email",id:"email",name:"email",required:""}}),t._v(" "),n("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("E-mail")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-floating mb-4"},[n("textarea",{staticClass:"form-control h-100 bg-c",attrs:{id:"message",name:"message",rows:"5",required:""}}),t._v(" "),n("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("Message")])])}],!1,null,null,null);e.default=component.exports},257:function(t){t.exports=JSON.parse('{"title":"About me","content":["Hi! I’m Anneloes, a web developer and designer based in The Netherlands. I enjoy building and designing things, both in the digital and in the physical world. I’m always looking for ways to apply my knowledge in a way that helps the environment on this earth.","I\'m always eager to learn new things every day and to keep up with the new technologies including everything in the decentralised (Web3) area. I work on a wide variety of interesting and meaningful projects on a daily basis.","Some of the technologies and tools in my tech stack are:"],"visual":"ik.webp","tech":["html","(s)css","javascript","solidity","bootstrap","hedera sdk","vue","nuxt","react","npm","git","python","php","wordpress*","figma","blender","illustrator"]}')},258:function(t){t.exports=JSON.parse('{"title":"Projects","content":["Here I show some projects I worked on in my spare time to learn new techniques and skills."],"list":[{"title":"Hedera Helix","content":"This dApp encourages long-term use of items and buying secondhand items by attaching a smart contract to each product, which contains a small additional deposit amount. 60% of this deposit is returned over time, 30% is given to a secondhand buyer and 10% is donated to an environmental charity.","tech":["hedera-sdk","solidity","vue","nuxt"],"repo":"https://github.com/louweal/helix","site":"https://helix.codesparks.nl"},{"title":"The Hederian Mint","content":"The Hederian Mint is a website that showcases a small collection of 3-dimensional NFT’s representing digital HBAR coins. I started this project because I wanted to learn to create 3D art in Blender for a long time and because I wanted to create something cool for the Hedera community. So far I\'ve sold 15 NFTs.","tech":["vue","nuxt","scss","blender","figma"],"repo":"https://github.com/louweal/thehederianmint","site":"https://www.thehederianmint.com"},{"title":"Codesparks","content":"Codesparks is my personal portfolio website, which I build with Vue and Nuxt. I built this new website because my old website was no longer reflecting my current UX design and web development skills and because it offered a good opportunity to learn Bootstrap.","tech":["bootstrap","scss","vue","nuxt"],"repo":"https://github.com/louweal/codesparks","site":"https://www.codesparks.nl"}]}')},261:function(t,e,n){"use strict";n.r(e);var o=n(9),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row min-vh-100"},[n("div",{staticClass:"col-12 align-self-center"},[n("h1",{staticClass:"h3 text-secondary fw-normal lh-1"},[t._v("Hi, I'm")]),t._v(" "),n("h1",[t._v("Anneloes Louwe")]),t._v(" "),n("h2",{staticClass:"h4 fw-light fs-6 mb-4 text-light"},[t._v("\n      Front-end developer | UX-designer | Hedera enthousiast\n    ")]),t._v(" "),t._m(0),t._v(" "),n("nuxt-link",{staticClass:"btn btn-secondary mb-4",attrs:{to:"#about"}},[t._v("\n      More about me\n    ")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 col-sm-9 col-md-5"},[n("p",[t._v("\n        I'm a front-end developer & UX designer based in Leiden. I love\n        building and designing sparkling websites, modern web apps,\n        decentralized apps, and everything in between.\n      ")])])}],!1,null,"60931703",null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);var o={name:"Main",transition:"page",about:n(257),projects:n(258),posts:n(255),socials:n(99),contact:n(254),data:function(){return{numProjects:6,numPosts:4}},methods:{loadMoreProjects:function(){this.numProjects+=3},loadMorePosts:function(){this.numPosts+=4}}},r=n(9),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("hero"),t._v(" "),o("section",{staticClass:"h-100 py-5",attrs:{id:"about"}},[o("div",{staticClass:"row min-vh-100"},[o("div",{staticClass:"col-12 col-md-6 align-self-center mb-5 mb-md-0"},[o("h2",{staticClass:"text-secondary"},[t._v(t._s(t.$options.about.title))]),t._v(" "),t._l(t.$options.about.content,(function(p,i){return o("p",{key:i},[t._v(t._s(p))])})),t._v(" "),o("div",{staticClass:"row mb-3"},t._l(t.$options.about.tech,(function(e,i){return o("div",{key:i,staticClass:"col-6 col-sm-4"},[o("i",{staticClass:"bi bi-arrow-right-short text-secondary align-middle"}),t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v("\n        * I'm planning to use another headless CMS in the future\n      ")],2),t._v(" "),o("div",{staticClass:"\n          col-10\n          offset-1\n          col-sm-8\n          offset-sm-2\n          col-md-5\n          offset-md-1\n          col-xl-5\n          align-self-center\n        "},[o("div",{staticClass:"img-c"},[o("img",{staticClass:"img-fluid rounded-3",attrs:{src:n(245)("./"+t.$options.about.visual),alt:"anneloes"}})])])])]),t._v(" "),o("section",{staticClass:"h-100 py-5",attrs:{id:"projects"}},[o("div",{staticClass:"row min-vh-100 align-self-center"},[o("div",{staticClass:"col-12 align-self-center"},[o("h2",{staticClass:"text-secondary"},[t._v(t._s(t.$options.projects.title))]),t._v(" "),o("div",{staticClass:"col-11 col-sm-8 col-md-6 col-lg-5 mb-5"},t._l(t.$options.projects.content,(function(p,i){return o("p",{key:i},[t._v(t._s(p))])})),0),t._v(" "),o("div",{staticClass:"row"},[t._l(t.$options.projects.list,(function(p,i){return[i<t.numProjects?o("div",{key:i,staticClass:"col-12 col-md-6 col-lg-4 mb-4"},[o("div",{staticClass:"card bg-c rounded-3 h-100"},[o("div",{staticClass:"card-body"},[o("h3",{staticClass:"card-title"},[t._v(t._s(p.title))]),t._v(" "),p.tech?o("div",{staticClass:"hstack gap-2 flex-wrap",staticStyle:{"row-gap":"0 !important"}},t._l(p.tech,(function(e,i){return o("div",{key:i,staticClass:"text-secondary fw-bold"},[t._v("\n                      "+t._s(e)+"\n                    ")])})),0):t._e(),t._v(" "),o("p",{staticClass:"card-text"},[t._v("\n                    "+t._s(p.content)+"\n                  ")])]),t._v(" "),o("div",{staticClass:"card-footer"},[o("div",{staticClass:"hstack gap-3"},[o("a",{attrs:{href:p.repo,target:"_blank"}},[o("i",{staticClass:"bi bi-github fs-5 align-middle me-1"}),t._v(" "),o("span",{staticClass:"align-middle"},[t._v("Github")])]),t._v(" "),o("a",{attrs:{href:p.site,target:"_blank"}},[o("i",{staticClass:"bi bi-globe2 fs-5 align-middle me-1"}),t._v(" "),o("span",{staticClass:"align-middle"},[t._v("Live site")])])])])])]):t._e()]})),t._v(" "),t.$options.projects.list.length>t.numProjects?o("div",{staticClass:"text-center mt-3"},[o("div",{staticClass:"btn btn-secondary",on:{click:t.loadMoreProjects}},[t._v("\n              More projects\n            ")])]):t._e()],2)])])]),t._v(" "),o("section",{staticClass:"h-100 py-5",attrs:{id:"posts"}},[o("div",{staticClass:"row min-vh-100 align-self-center"},[o("div",{staticClass:"col-12 align-self-center"},[o("h2",{staticClass:"text-secondary"},[t._v(t._s(t.$options.posts.title))]),t._v(" "),o("div",{staticClass:"col-11 col-sm-8 col-md-6 col-lg-5 mb-5"},t._l(t.$options.posts.content,(function(p,i){return o("p",{key:i},[t._v(t._s(p))])})),0),t._v(" "),o("div",{staticClass:"row"},[t._l(t.$options.posts.list.slice(0,t.numPosts),(function(a,i){return o("div",{key:i,staticClass:"col-12 col-md-6 mb-4"},[o("nuxt-link",{staticClass:"card bg-c rounded-3 h-100",attrs:{to:"/post/"+a.slug}},[o("div",{staticClass:"card-body"},[a.badge?o("div",{staticClass:"badge bg-secondary text-primary mb-1"},[t._v("\n                  "+t._s(a.badge)+"\n                ")]):t._e(),t._v(" "),o("h3",{staticClass:"card-title"},[t._v(t._s(a.title))]),t._v(" "),a.intro?o("p",{staticClass:"card-text"},[t._v("\n                  "+t._s(a.intro)+"\n                ")]):t._e()]),t._v(" "),o("div",{staticClass:"card-footer"},[o("i",{staticClass:"\n                    bi bi-arrow-right-short\n                    fs-5\n                    align-middle\n                    text-secondary\n                  "}),t._v(" "),o("span",{staticClass:"align-middle"},[t._v("Read more")])])])],1)})),t._v(" "),t.$options.posts.list.length>t.numPosts?o("div",{staticClass:"text-center mt-3"},[o("div",{staticClass:"btn btn-secondary",on:{click:t.loadMorePosts}},[t._v("\n              More posts\n            ")])]):t._e()],2)])])]),t._v(" "),o("section",{staticClass:"h-100 py-5",attrs:{id:"contact"}},[o("div",{staticClass:"row min-vh-100"},[o("div",{staticClass:"col-12 col-md-5 align-self-center mb-5 mb-md-0"},[o("h2",{staticClass:"text-secondary"},[t._v(t._s(t.$options.contact.title))]),t._v(" "),t._l(t.$options.contact.content,(function(p,i){return o("p",{key:i},[t._v(t._s(p))])})),t._v(" "),o("div",{staticClass:"row mb-3"},t._l(t.$options.socials,(function(s,i){return o("div",{key:i,staticClass:"col-6"},[o("a",{attrs:{href:s.url,target:"_blank"}},[o("i",{class:"bi bi-"+s.icon+" bi-16 me-2 align-middle"}),t._v(" "),o("span",{staticClass:"align-middle"},[t._v(t._s(s.title))])])])})),0)],2),t._v(" "),o("div",{staticClass:"\n          col-12 col-md-7\n          offset-lg-1\n          col-lg-6 col-xl-5\n          align-self-center\n        "},[o("form-contact")],1)])])],1)}),[],!1,null,"eaa2b306",null);e.default=component.exports;installComponents(component,{Hero:n(261).default,FormContact:n(256).default})}}]);