(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{240:function(t,e,o){t.exports=o.p+"img/jambo.c46e5e7.jpg"},241:function(t,e,o){var map={"./ik.png":242,"./ik.webp":243,"./jambo.jpg":240};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=241},242:function(t,e,o){t.exports=o.p+"img/ik.dddb159.png"},243:function(t,e,o){t.exports=o.p+"img/ik.e3814bf.webp"},244:function(t){t.exports=JSON.parse('{"title":"Posts","content":["Here I publish my thoughs, technical articles, updates and everything in between."],"list":[{"title":"Meet Jambo: the new junior bark-end developer","badge":"blog","slug":"jambo-bark-end-developer","date":"11 June 2022","visual":{"title":"Jambo","url":"jambo.jpg"},"intro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ab accusantium, placeat commodi obcaecati amet! Vel dicta incidunt, ut earum impedit maxime optio cumque minus voluptatibus labore delectus, expedita tempore?","comments":[{"name":"Dirk","date":"24 July 2024","comment":"Very ugly post, wasted my time reading this! Keep up the good work!"},{"name":"Dirk","date":"24 July 2024","comment":"Very ugly post, wasted my time reading this! Keep up the good work!"}]},{"title":"Hedera Helix: Helping the environment with smart contracts","badge":"project","slug":"hedera-helix","date":"31 May 2022","visual":{"title":"Jambo","url":"jambo.jpg"},"intro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ab accusantium, placeat commodi obcaecati amet! Vel dicta incidunt, ut earum impedit maxime optio cumque minus voluptatibus labore delectus, expedita tempore?"},{"title":"How and why I created a NFT collection","badge":"blog","slug":"the-hederian-mint-nft-collection","date":"31 May 2022","visual":{"title":"Jambo","url":"jambo.jpg"},"intro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ab accusantium, placeat commodi obcaecati amet! Vel dicta incidunt, ut earum impedit maxime optio cumque minus voluptatibus labore delectus, expedita tempore?"},{"title":"CryptoCrafts: The first store for creative crypto-enthousiasts!","badge":"news","slug":"cryptocrafts-store-is-open","date":"24 July 2022","visual":{"title":"Jambo","url":"jambo.jpg"},"intro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ab accusantium, placeat commodi obcaecati amet! Vel dicta incidunt, ut earum impedit maxime optio cumque minus voluptatibus labore delectus, expedita tempore?"},{"title":"How to use Hedera SDK in a Vue app","badge":"tutorial","slug":"tutorial-hedera-sdk-vue","date":"1 July 2022","visual":{"title":"Jambo","url":"jambo.jpg"},"intro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ab accusantium, placeat commodi obcaecati amet! Vel dicta incidunt, ut earum impedit maxime optio cumque minus voluptatibus labore delectus, expedita tempore?"},{"title":"A selection of the projects I did for Commandos","badge":"blog","slug":"projects-commandos","date":"11 June 2022","visual":{"title":"Jambo","url":"jambo.jpg"},"intro":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ab accusantium, placeat commodi obcaecati amet! Vel dicta incidunt, ut earum impedit maxime optio cumque minus voluptatibus labore delectus, expedita tempore?","comments":[{"name":"Dirk","date":"24 July 2024","comment":"Very ugly post, wasted my time reading this! Keep up the good work!"},{"name":"Dirk","date":"24 July 2024","comment":"Very ugly post, wasted my time reading this! Keep up the good work!"}]}]}')},245:function(t,e,o){var content=o(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(55).default)("732429a0",content,!0,{sourceMap:!1})},246:function(t,e,o){"use strict";o.r(e);var n={props:{title:{type:String,default:"",required:!0}},computed:{domain:function(){return"http://localhost:8000"}}},r=o(10),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"my-5"},[o("div",{staticClass:"hstack gap-3"},[o("span",{staticClass:"align-middle me-1"},[t._v("Share:")]),t._v(" "),o("a",{staticClass:"align-middle",attrs:{href:"https://www.linkedin.com/sharing/share-offsite/?url="+t.domain+t.$route.path,target:"_blank"}},[o("i",{staticClass:"bi bi-linkedin fs-5"})]),t._v(" "),o("a",{attrs:{href:"https://twitter.com/intent/tweet?url="+t.domain+t.$route.path+"&text="+t.title,target:"_blank"}},[o("i",{staticClass:"bi bi-twitter fs-5"})]),t._v(" "),o("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?u="+t.domain+t.$route.path+"&quote="+t.title,target:"_blank"}},[o("i",{staticClass:"bi bi-facebook fs-5"})])])])}),[],!1,null,null,null);e.default=component.exports},248:function(t,e,o){"use strict";var n=o(6),r=o(70).find,l=o(129),c="find",m=!0;c in[]&&Array(1).find((function(){m=!1})),n({target:"Array",proto:!0,forced:m},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},249:function(t,e,o){"use strict";o(245)},250:function(t,e,o){var n=o(54)(!1);n.push([t.i,".bg-c[data-v-8318f71a]{background-color:rgba(11,224,212,.2);transition:background-color .4s ease-in-out}",""]),t.exports=n},254:function(t,e,o){"use strict";o.r(e);o(43),o(248),o(18);var n={posts:o(244),data:function(){return{name:!1}},methods:{getName:function(t){this.name=t.target.value}},computed:{post:function(){var t=this;return this.$options.posts.list.find((function(a){return a.slug===t.$route.params.slug}))}}},r=(o(249),o(10)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"w-100",staticStyle:{height:"82px"},attrs:{id:"pushdown"}}),t._v(" "),n("section",{staticClass:"py-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-8 offset-sm-2"},[n("div",{staticClass:"badge bg-secondary text-primary mb-3"},[t._v("\n          "+t._s(t.post.badge)+"\n        ")]),t._v(" "),n("h1",{staticClass:"h2"},[t._v(t._s(t.post.title))]),t._v(" "),n("p",[t._v(t._s(t.post.date))])]),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"ratio ratio-21x9 mt-3 mb-5"},[n("img",{staticClass:"img-fluid rounded-3",attrs:{src:o(241)("./"+t.post.visual.url),alt:t.post.visual.title}})])]),t._v(" "),n("div",{staticClass:"col-12 col-sm-8 offset-sm-2"},[n("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum\n          iusto, omnis autem assumenda totam soluta distinctio quidem laborum\n          cum, dolor et quisquam illo adipisci rerum, deleniti error\n          explicabo. Cum, enim!\n        ")]),t._v(" "),n("p",[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis\n          quis dolorum provident, rerum sed beatae, in eveniet saepe minus\n          doloremque aliquid amet ab omnis perferendis ut deleniti.\n          Cupiditate, est?\n        ")]),t._v(" "),n("div",{staticClass:"my-5 img-c"},[n("img",{staticClass:"img-fluid rounded-3",attrs:{src:o(240),alt:"anneloes"}})]),t._v(" "),n("p",[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis\n          quis dolorum provident, rerum sed beatae, in eveniet saepe minus\n          doloremque aliquid amet ab omnis perferendis ut deleniti.\n          Cupiditate, est?\n        ")]),t._v(" "),n("social-share",{attrs:{title:t.post.title}})],1)])]),t._v(" "),n("section",{staticClass:"h-100 py-4",attrs:{id:"comments"}},[n("div",{staticClass:"row min-vh-100"},[n("div",{staticClass:"col-12 align-self-center"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-7"},[n("div",{staticClass:"rounded-3 bg-c p-3 p-sm-4 px-xl-5 mb-5"},[t.post.comments&&0!==t.post.comments.length?t._e():n("p",{staticClass:"mb-0"},[t._v("\n                No comments yet\n              ")]),t._v(" "),t.post.comments&&t.post.comments.length>0?[n("h3",{staticClass:"mb-3"},[t._v("Comments")]),t._v(" "),t._l(t.post.comments,(function(e,i){return n("div",{key:i,staticClass:"rounded-3 bg-c p-3 mb-3",attrs:{xxxclass:"i < post.comments.length - 1 ? 'mb-4' : false"}},[n("p",[t._v(t._s(e.comment))]),t._v(" "),n("span",{staticClass:"fw-light text-light"},[n("i",{staticClass:"bi bi-person"}),t._v("\n                    "+t._s(e.name)+" on "+t._s(e.date)+"\n                  ")])])}))]:t._e()],2)]),t._v(" "),n("div",{staticClass:"col-12 col-md-5 col-lg-4 offset-lg-1"},[n("div",{staticClass:"rounded-3 bg-c p-3 p-sm-4 p-xl-5"},[t._m(0),t._v(" "),n("form",{attrs:{name:"comment",method:"POST",action:t.$route.path+"?state=success&name="+t.name+"#comments","data-netlify":"true","netlify-honeypot":"title"}},[n("input",{attrs:{type:"hidden",name:"form-name",value:"comment"}}),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"form-floating mb-4"},[n("input",{staticClass:"form-control bg-c",attrs:{type:"text",id:"name",name:"name",required:""},on:{input:t.getName}}),t._v(" "),n("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Name")])]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"form-check mb-4"},[n("input",{staticClass:"form-check-input me-2 bg-c",attrs:{type:"checkbox",value:"",name:"privacy",id:"privacy",required:""}}),t._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:"privacy"}},[t._v("\n                    I agree to the\n                    "),n("nuxt-link",{staticClass:"text-light",attrs:{to:"/privacy-statement"}},[t._v("privacy statement")])],1)]),t._v(" "),n("button",{staticClass:"btn btn-secondary btn-block mb-4",attrs:{type:"submit"}},[t._v("\n                  Send\n                ")])])])])])])])]),t._v(" "),n("section",{staticClass:"h-100 py-4"},[n("div",{staticClass:"row min-vh-100"},[n("div",{staticClass:"col-12 align-self-center"},[n("h1",{staticClass:"h2 mb-4"},[t._v("Latest posts")]),t._v(" "),n("div",{staticClass:"row"},t._l(t.$options.posts.list.filter((function(a){return a.slug!=t.$route.params.slug})).slice(0,4),(function(a,i){return n("div",{key:i,staticClass:"col-12 col-md-6 mb-4"},[n("nuxt-link",{staticClass:"card bg-c rounded-3 h-100",attrs:{to:"/post/"+a.slug}},[n("div",{staticClass:"card-body"},[a.badge?n("div",{staticClass:"badge bg-secondary text-primary mb-1"},[t._v("\n                  "+t._s(a.badge)+"\n                ")]):t._e(),t._v(" "),n("h3",{staticClass:"card-title"},[t._v(t._s(a.title))]),t._v(" "),n("p",{staticClass:"card-text"},[t._v("\n                  Some quick example text to build on the card title and make\n                  up the bulk of the card's content.\n                ")])]),t._v(" "),n("div",{staticClass:"card-footer"},[n("i",{staticClass:"\n                    bi bi-arrow-right-short\n                    fs-5\n                    align-middle\n                    text-secondary\n                  "}),t._v(" "),n("span",{staticClass:"align-middle"},[t._v("Read more")])])])],1)})),0),t._v(" "),t.$options.posts.list.length>4?n("div",{staticClass:"text-center mt-3"},[n("nuxt-link",{staticClass:"btn btn-secondary",attrs:{to:"/posts"}},[t._v("\n            All posts\n          ")])],1):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ms-1 mb-3"},[e("i",{staticClass:"bi bi-chat fs-2"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-none"},[o("label",[t._v("\n                    Don’t fill this out if you’re human:\n                    "),o("input",{attrs:{name:"title"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-floating mb-4"},[o("textarea",{staticClass:"form-control h-100 bg-c",attrs:{id:"message",name:"message",rows:"5",required:""}}),t._v(" "),o("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("Comment")])])}],!1,null,"8318f71a",null);e.default=component.exports;installComponents(component,{SocialShare:o(246).default})}}]);