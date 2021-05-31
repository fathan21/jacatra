(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7zA9":function(t,a,e){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=r(e("tLi0")),n=r(e("wcCE"));function r(t){return t&&t.__esModule?t:{default:t}}var o=e("ed4o");t.exports={render:o.call(void 0),model:{prop:"page",event:"paginate"},props:{page:{type:Number,required:!0},for:{type:String,required:!1},records:{type:Number,required:!0},perPage:{type:Number,default:25},vuex:{type:Boolean},options:{type:Object}},data:function(){return{firstPage:this.page}},watch:{page:function(t){"scroll"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t)&&(this.firstPage=t)}},computed:{opts:function(){return(0,n.default)((0,s.default)(),this.options)},Theme:function(){if("object"===i(this.opts.theme))return this.opts.theme;var t={bootstrap3:e("qHon"),bootstrap4:e("wyBb"),bulma:e("MQ+X")};if(void 0===i(t[this.opts.theme]))throw"vue-pagination-2: the theme "+this.opts.theme+" does not exist";return t[this.opts.theme]},pages:function(){return this.records?(t=this.paginationStart,a=this.pagesInCurrentChunk,Array.apply(0,Array(a)).map(function(a,e){return e+t})):[];var t,a},totalPages:function(){return this.records?Math.ceil(this.records/this.perPage):1},totalChunks:function(){return Math.ceil(this.totalPages/this.opts.chunk)},currentChunk:function(){return Math.ceil(this.page/this.opts.chunk)},paginationStart:function(){return"scroll"===this.opts.chunksNavigation?this.firstPage:(this.currentChunk-1)*this.opts.chunk+1},pagesInCurrentChunk:function(){return this.paginationStart+this.opts.chunk<=this.totalPages?this.opts.chunk:this.totalPages-this.paginationStart+1},count:function(){if(/{page}/.test(this.opts.texts.count))return this.totalPages<=1?"":this.opts.texts.count.replace("{page}",this.page).replace("{pages}",this.totalPages);var t=this.opts.texts.count.split("|"),a=(this.page-1)*this.perPage+1,e=this.page==this.totalPages?this.records:a+this.perPage-1;return t[Math.min(1==this.records?2:1==this.totalPages?1:0,t.length-1)].replace("{count}",this.formatNumber(this.records)).replace("{from}",this.formatNumber(a)).replace("{to}",this.formatNumber(e))}},methods:{setPage:function(t){this.allowedPage(t)&&this.paginate(t)},paginate:function(t){this.$emit("paginate",t)},next:function(){var t=this.page+1;return"scroll"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t)&&this.firstPage++,this.setPage(t)},prev:function(){var t=this.page-1;return"scroll"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t)&&this.firstPage--,this.setPage(t)},inDisplay:function(t){var a=this.firstPage,e=a+this.opts.chunk-1;return t>=a&&t<=e},nextChunk:function(){return this.setChunk(1)},prevChunk:function(){return this.setChunk(-1)},setChunk:function(t){this.setPage((this.currentChunk-1+t)*this.opts.chunk+1)},allowedPage:function(t){return t>=1&&t<=this.totalPages},allowedChunk:function(t){return 1==t&&this.currentChunk<this.totalChunks||-1==t&&this.currentChunk>1},allowedPageClass:function(t){return this.allowedPage(t)?"":this.Theme.disabled},allowedChunkClass:function(t){return this.allowedChunk(t)?"":this.Theme.disabled},activeClass:function(t){return this.page==t?this.Theme.active:""},formatNumber:function(t){return this.opts.format?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):t}}}},"8UgP":function(t,a,e){"use strict";e.r(a);var i=e("E2nf"),s=e("ck9e"),n=e("yxA1"),r=e("7zA9"),o=e.n(r),l={name:"Category",components:{Sidebar:i.a,Media4:n.a,Pagination:o.a},watch:{$route:function(t,a){this.main_news={},this.filter.page=1,this.load_more=!1,this.load_more_loading=!1,this.filter.cat=this.$router.history.current.params.link,this.getData()}},destroyed:function(){},created:function(){this.filter.cat=this.$router.history.current.params.link,this.getData()},data:function(){return{loading:!1,error:!1,load_more:!1,load_more_loading:!1,filter:{page:1,limit:6,q:"",cat:""},countData:0,data:[],main_news:{}}},mounted:function(){},methods:{handleScroll:function(){var t=this;window.onscroll=function(){var a=document.getElementById("countDT");a&&(document.documentElement.scrollTop>a.offsetHeight&&(console.log("loadmore"),t.loadMore(t.data)))}},loadMore:function(t){var a=this;if(this.filter.page=this.filter.page+1,!this.load_more){var e={client_secret:s.a.clientSecret,filter:this.filter,page_type:"cat"};this.load_more=!0,this.load_more_loading=!0,window.axios.post(s.a.news,e).then(function(t){var e=t.data,i=a,s=e.data;i.load_more_loading=!1,s.length<=0?i.load_more=!0:i.load_more=!1;for(var n=0;n<s.length;n++)a.data.push(s[n])}).catch(function(t){app.load_more=!1})}},getData:function(){var t=this;this.loading=!0;var a={client_secret:s.a.clientSecret,filter:this.filter,page_type:"cat"};window.axios.post(s.a.news,a).then(function(a){t.loading=!1,t.error=!1;var e=a.data;t.data=e.data,e.main.title&&(t.main_news=e.main),t.countData=e.count}).catch(function(a){t.loading=!1,t.error=!0})},pagenation:function(t){jQuery("html, body").animate({scrollTop:0},500),this.getData()}}},c=e("KHd+"),d=Object(c.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"feature_category_section category_page section_wrapper",attrs:{id:"feature_category_section"}},[t.loading?e("MediaSkolten"):t._e(),t._v(" "),t.error&&!t.loading?e("div",{staticClass:"text-center"},[t._v("\n        plesae try again, "),e("br"),e("a",{staticClass:"btn btn btn-danger btn-sm",on:{click:function(a){return t.getData()}}},[t._v("try")])]):t._e(),t._v(" "),t.loading||t.error?t._e():e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9",attrs:{id:""}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[t.data.length<=0&&!t.main_news.title?e("div",{staticClass:"text-center"},[e("h2",[t._v("Data not available")])]):t._e(),t._v(" "),t.main_news.title?e("div",{staticClass:"category_layout category_layout_headline"},[t.main_news.title?e("Media4",{attrs:{data:t.main_news,isHeader:!0}}):t._e()],1):t._e()])]),t._v(" "),e("div",{staticClass:"row",attrs:{id:"countDT"}},t._l(t.data,function(t){return e("div",{staticClass:"col-md-6"},[e("Media4",{attrs:{data:t}})],1)}),0),t._v(" "),t.load_more_loading?e("div",{staticStyle:{"text-align":"center"}},[t._v("\n                    Loading ....\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"row",attrs:{id:"loadmore"}},[e("div",{staticClass:"col-md-12",staticStyle:{"text-align":"center"}},[e("pagination",{attrs:{records:t.countData,"per-page":t.filter.limit},on:{paginate:t.pagenation},model:{value:t.filter.page,callback:function(a){t.$set(t.filter,"page",a)},expression:"filter.page"}})],1)]),t._v(" -\n\n            ")]),t._v(" "),t.loading?t._e():e("div",{staticClass:"col-md-3"},[e("Sidebar")],1)])])],1)},[],!1,null,null,null);a.default=d.exports},E2nf:function(t,a,e){"use strict";var i=e("L2JU"),s={name:"Media1",props:["data"],created:function(){}},n=e("KHd+"),r={name:"Media2",props:["data"],created:function(){}};function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var l={name:"Sidebar",components:{Media1:Object(n.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"media"},[e("router-link",{attrs:{to:t.data.link}},[e("div",{staticClass:"media-left"},[e("router-link",{attrs:{to:t.data.link}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.data.img,expression:"data.img"}],staticStyle:{width:"80px"},attrs:{alt:t.data.title,src:"/assets/img/img-def-min.png"}})])],1),t._v(" "),e("div",{staticClass:"media-body"},[e("h3",{staticClass:"media-heading"},[t._v("\n        "+t._s(t.data.title)+"\n      ")])])])],1)},[],!1,null,null,null).exports,Media2:Object(n.a)(r,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"media"},[e("div",{staticClass:"media-left"},[e("router-link",{attrs:{to:t.data.link}},[e("div",{staticClass:"skeleton lazy",staticStyle:{width:"80px",height:"80px","background-size":"cover"},style:{"background-image":"url("+t.data.img+")"}})])],1),t._v(" "),e("div",{staticClass:"media-body"},[e("h3",{staticClass:"media-heading"},[e("router-link",{attrs:{to:t.data.link}},[t._v("\n                "+t._s(t.data.title)+"\n            ")])],1),t._v(" "),e("div",{staticClass:"comment_box"},[t._m(0),t._v(" "),e("div",{staticClass:"comments"},[e("router-link",{attrs:{to:t.data.link}},[t._v(t._s(t.data.comment_count)+" Comments")])],1)])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"comments_icon"},[a("i",{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null).exports},mounted:function(){},computed:function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{},i=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(a){o(t,a,e[a])})}return t}({},Object(i.c)(["getSidebar"])),data:function(){return{tab_v:"#1"}},methods:{tab:function(t,a){this.tab_v=t},loadAdsen:function(){var t=t=window.adsbygoogle||[];document.querySelectorAll(".adsbygoogle").forEach(function(a){console.log(a),t.push(a)})}}},c=Object(n.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"tab sitebar"},[t._m(0),t._v(" "),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active"},t._l(t.getSidebar.latest,function(t){return e("Media1",{key:t.id,attrs:{data:t}})}),1)])]),t._v(" "),e("div",{staticClass:"tab sitebar"},[t._m(1),t._v(" "),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane active"},t._l(t.getSidebar.populer,function(t){return e("Media1",{key:t.id,attrs:{data:t}})}),1)])]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"ad"})])},[function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"nav nav-tabs"},[a("li",{staticClass:"active"},[a("a",[this._v("Latest")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"nav nav-tabs"},[a("li",{staticClass:"active"},[a("a",[this._v("Populer")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"ad"},[a("div",{staticClass:"adswrapper"})])}],!1,null,null,null);a.a=c.exports},"MQ+X":function(t,a,e){"use strict";t.exports={nav:"",count:"",wrapper:"pagination",list:"pagination-list",item:"",link:"pagination-link",next:"",prev:"",active:"is-current",disabled:""}},ed4o:function(t,a,e){"use strict";t.exports=function(){return function(t){var a=this.Theme,e=[],i="",s="",n="",r="";return this.opts.edgeNavigation&&this.totalChunks>1&&(n=t("li",{class:"VuePagination__pagination-item "+a.item+" "+(1===this.page?a.disabled:"")+" VuePagination__pagination-item-prev-chunk"},[t("a",{class:a.link,attrs:{href:"javascript:void(0);",disabled:1===this.page},on:{click:this.setPage.bind(this,1)}},[this.opts.texts.first])]),r=t("li",{class:"VuePagination__pagination-item "+a.item+" "+(this.page===this.totalPages?a.disabled:"")+" VuePagination__pagination-item-prev-chunk"},[t("a",{class:a.link,attrs:{href:"javascript:void(0);",disabled:this.page===this.totalPages},on:{click:this.setPage.bind(this,this.totalPages)}},[this.opts.texts.last])])),"fixed"===this.opts.chunksNavigation&&(i=t("li",{class:"VuePagination__pagination-item "+a.item+" "+a.prev+" VuePagination__pagination-item-prev-chunk "+this.allowedChunkClass(-1)},[t("a",{class:a.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedChunkClass(-1)},on:{click:this.setChunk.bind(this,-1)}},["<<"])]),s=t("li",{class:"VuePagination__pagination-item "+a.item+" "+a.next+" VuePagination__pagination-item-next-chunk "+this.allowedChunkClass(1)},[t("a",{class:a.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedChunkClass(1)},on:{click:this.setChunk.bind(this,1)}},[">>"])])),this.pages.map(function(i){e.push(t("li",{class:"VuePagination__pagination-item "+a.item+" "+this.activeClass(i)},[t("a",{class:a.link+" "+this.activeClass(i),attrs:{href:"javascript:void(0)",role:"button"},on:{click:this.setPage.bind(this,i)}},[i])]))}.bind(this)),t("div",{class:"VuePagination "+a.wrapper},[t("nav",{class:""+a.nav},[t("ul",{directives:[{name:"show",value:this.totalPages>1}],class:a.list+" VuePagination__pagination"},[n,i,t("li",{class:"VuePagination__pagination-item "+a.item+" "+a.prev+" VuePagination__pagination-item-prev-page "+this.allowedPageClass(this.page-1)},[t("a",{class:a.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedPageClass(this.page-1)},on:{click:this.prev.bind(this)}},["<"])]),e,t("li",{class:"VuePagination__pagination-item "+a.item+" "+a.next+" VuePagination__pagination-item-next-page "+this.allowedPageClass(this.page+1)},[t("a",{class:a.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedPageClass(this.page+1)},on:{click:this.next.bind(this)}},[">"])]),s,r]),t("p",{directives:[{name:"show",value:parseInt(this.records)}],class:"VuePagination__count "+a.count},[this.count])])])}}},qHon:function(t,a,e){"use strict";t.exports={nav:"",count:"",wrapper:"",list:"pagination",item:"page-item",link:"page-link",next:"",prev:"",active:"active",disabled:"disabled"}},tLi0:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return{format:!0,chunk:10,chunksNavigation:"fixed",edgeNavigation:!1,theme:"bootstrap3",texts:{count:"Showing {from} to {to} of {count} records|{count} records|One record",first:"First",last:"Last"}}}},wcCE:function(t,a,e){(function(t){!function(a){var e=function(t){return s(!0===t,!1,arguments)};function i(t,a){if("object"!==n(t))return a;for(var e in a)"object"===n(t[e])&&"object"===n(a[e])?t[e]=i(t[e],a[e]):t[e]=a[e];return t}function s(t,a,s){var r=s[0],o=s.length;(t||"object"!==n(r))&&(r={});for(var l=0;l<o;++l){var c=s[l];if("object"===n(c))for(var d in c)if("__proto__"!==d){var u=t?e.clone(c[d]):c[d];r[d]=a?i(r[d],u):u}}return r}function n(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}e.recursive=function(t){return s(!0===t,!0,arguments)},e.clone=function(t){var a,i,s=t,r=n(t);if("array"===r)for(s=[],i=t.length,a=0;a<i;++a)s[a]=e.clone(t[a]);else if("object"===r)for(a in s={},t)s[a]=e.clone(t[a]);return s},a?t.exports=e:window.merge=e}(t&&"object"==typeof t.exports&&t.exports)}).call(this,e("YuTi")(t))},wyBb:function(t,a,e){"use strict";t.exports={nav:"",count:"",wrapper:"",list:"pagination",item:"page-item",link:"page-link",next:"",prev:"",active:"active",disabled:"disabled"}},yxA1:function(t,a,e){"use strict";var i={name:"Media4",props:["data","isHeader"],created:function(){},methods:{getImgSrc:function(){var t=window.matchMedia("(max-width: 992px)").matches;return console.log(t),t?this.data.img_m:this.data.img}}},s=e("KHd+"),n=Object(s.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.isHeader?t._e():e("div",{staticClass:"item feature_news_item"},[e("div",{staticClass:"item_wrapper"},[e("div",{staticClass:"item_img"},[e("router-link",{attrs:{to:t.data.link}},[t.isHeader?t._e():e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.data.img,expression:"data.img"}],staticClass:"img-responsive",staticStyle:{width:"100%"},attrs:{src:"/assets/img/img-def-min.png ",alt:t.data.title}})])],1),t._v(" "),e("div",{staticClass:"item_title_date"},[e("div",{staticClass:"news_item_title"},[e("h2",[e("router-link",{attrs:{to:t.data.link}},[t._v("\n                            "+t._s(t.data.title)+"\n                        ")])],1)]),t._v(" "),e("div",{staticClass:"item_meta"},[e("a",{attrs:{href:"#"}},[t._v(t._s(t._f("toDateIndo")(t.data.date))+",")]),t._v(" "),e("router-link",{staticClass:"page-scroll",attrs:{to:"/search?writer="+t.data.writer}},[t._v(t._s(t.data.writer))])],1)])]),t._v(" "),e("div",{staticClass:"item_content"},[e("div",{staticClass:"prev"},[t._v("\n                "+t._s(t.data.content_prev)+"\n            ")])])]),t._v(" "),t.isHeader?e("div",{},[e("div",{staticClass:"item_wrapper"},[e("div",{staticClass:"item_img"},[e("router-link",{attrs:{to:t.data.link}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.getImgSrc(),expression:"getImgSrc()"}],staticClass:"img-responsive img",staticStyle:{width:"100%"},attrs:{alt:t.data.title,src:"/assets/img/img-def-min.png "}})])],1),t._v(" "),e("div",{staticClass:"item_title_date",staticStyle:{padding:"10px 20px 0px"}},[e("div",{staticClass:"news_item_title"},[e("h2",[e("router-link",{attrs:{to:t.data.link}},[t._v("\n                            "+t._s(t.data.title)+"\n                        ")])],1)]),t._v(" "),e("div",{staticClass:"item_meta"},[e("a",{attrs:{href:"#"}},[t._v(t._s(t._f("toDateIndo")(t.data.date))+",")]),t._v(" "),e("router-link",{staticClass:"page-scroll",attrs:{to:"/search?writer="+t.data.writer}},[t._v(t._s(t.data.writer))])],1)])])]):t._e()])},[],!1,null,null,null);a.a=n.exports}}]);