(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{24:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return{format:!0,chunk:10,chunksNavigation:"fixed",edgeNavigation:!1,theme:"bootstrap3",texts:{count:"Showing {from} to {to} of {count} records|{count} records|One record",first:"First",last:"Last"}}}},25:function(t,e,i){(function(t){!function(e){var i=function(t){return n(!0===t,!1,arguments)};function a(t,e){if("object"!==s(t))return e;for(var i in e)"object"===s(t[i])&&"object"===s(e[i])?t[i]=a(t[i],e[i]):t[i]=e[i];return t}function n(t,e,n){var r=n[0],o=n.length;(t||"object"!==s(r))&&(r={});for(var c=0;c<o;++c){var l=n[c];if("object"===s(l))for(var u in l)if("__proto__"!==u){var h=t?i.clone(l[u]):l[u];r[u]=e?a(r[u],h):h}}return r}function s(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}i.recursive=function(t){return n(!0===t,!0,arguments)},i.clone=function(t){var e,a,n=t,r=s(t);if("array"===r)for(n=[],a=t.length,e=0;e<a;++e)n[e]=i.clone(t[e]);else if("object"===r)for(e in n={},t)n[e]=i.clone(t[e]);return n},e?t.exports=i:window.merge=i}(t&&"object"==typeof t.exports&&t.exports)}).call(this,i(14)(t))},26:function(t,e,i){"use strict";t.exports=function(){return function(t){var e=this.Theme,i=[],a="",n="",s="",r="";return this.opts.edgeNavigation&&this.totalChunks>1&&(s=t("li",{class:"VuePagination__pagination-item "+e.item+" "+(1===this.page?e.disabled:"")+" VuePagination__pagination-item-prev-chunk"},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:1===this.page},on:{click:this.setPage.bind(this,1)}},[this.opts.texts.first])]),r=t("li",{class:"VuePagination__pagination-item "+e.item+" "+(this.page===this.totalPages?e.disabled:"")+" VuePagination__pagination-item-prev-chunk"},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:this.page===this.totalPages},on:{click:this.setPage.bind(this,this.totalPages)}},[this.opts.texts.last])])),"fixed"===this.opts.chunksNavigation&&(a=t("li",{class:"VuePagination__pagination-item "+e.item+" "+e.prev+" VuePagination__pagination-item-prev-chunk "+this.allowedChunkClass(-1)},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedChunkClass(-1)},on:{click:this.setChunk.bind(this,-1)}},["<<"])]),n=t("li",{class:"VuePagination__pagination-item "+e.item+" "+e.next+" VuePagination__pagination-item-next-chunk "+this.allowedChunkClass(1)},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedChunkClass(1)},on:{click:this.setChunk.bind(this,1)}},[">>"])])),this.pages.map(function(a){i.push(t("li",{class:"VuePagination__pagination-item "+e.item+" "+this.activeClass(a)},[t("a",{class:e.link+" "+this.activeClass(a),attrs:{href:"javascript:void(0)",role:"button"},on:{click:this.setPage.bind(this,a)}},[a])]))}.bind(this)),t("div",{class:"VuePagination "+e.wrapper},[t("nav",{class:""+e.nav},[t("ul",{directives:[{name:"show",value:this.totalPages>1}],class:e.list+" VuePagination__pagination"},[s,a,t("li",{class:"VuePagination__pagination-item "+e.item+" "+e.prev+" VuePagination__pagination-item-prev-page "+this.allowedPageClass(this.page-1)},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedPageClass(this.page-1)},on:{click:this.prev.bind(this)}},["<"])]),i,t("li",{class:"VuePagination__pagination-item "+e.item+" "+e.next+" VuePagination__pagination-item-next-page "+this.allowedPageClass(this.page+1)},[t("a",{class:e.link,attrs:{href:"javascript:void(0);",disabled:!!this.allowedPageClass(this.page+1)},on:{click:this.next.bind(this)}},[">"])]),n,r]),t("p",{directives:[{name:"show",value:parseInt(this.records)}],class:"VuePagination__count "+e.count},[this.count])])])}}},27:function(t,e,i){"use strict";t.exports={nav:"",count:"",wrapper:"",list:"pagination",item:"page-item",link:"page-link",next:"",prev:"",active:"active",disabled:"disabled"}},28:function(t,e,i){"use strict";t.exports={nav:"",count:"",wrapper:"",list:"pagination",item:"page-item",link:"page-link",next:"",prev:"",active:"active",disabled:"disabled"}},29:function(t,e,i){"use strict";t.exports={nav:"",count:"",wrapper:"pagination",list:"pagination-list",item:"",link:"pagination-link",next:"",prev:"",active:"is-current",disabled:""}},4:function(t,e,i){"use strict";var a=i(2),n={name:"Media1",props:["data"],created:function(){}},s=i(0),r={name:"Media2",props:["data"],created:function(){}};function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={name:"Sidebar",components:{Media1:Object(s.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media"},[e("div",{staticClass:"media-left"},[e("router-link",{attrs:{to:this.data.link}},[e("div",{staticClass:"skeleton",staticStyle:{width:"80px",height:"80px","background-size":"cover"},style:{"background-image":"url("+this.data.img+")"}})])],1),this._v(" "),e("div",{staticClass:"media-body"},[e("h3",{staticClass:"media-heading"},[e("router-link",{attrs:{to:this.data.link}},[this._v("\n                "+this._s(this.data.title)+"\n            ")])],1)])])},[],!1,null,null,null).exports,Media2:Object(s.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("router-link",{attrs:{to:t.data.link}},[i("div",{staticClass:"skeleton",staticStyle:{width:"80px",height:"80px","background-size":"cover"},style:{"background-image":"url("+t.data.img+")"}})])],1),t._v(" "),i("div",{staticClass:"media-body"},[i("h3",{staticClass:"media-heading"},[i("router-link",{attrs:{to:t.data.link}},[t._v("\n                "+t._s(t.data.title)+"\n            ")])],1),t._v(" "),i("div",{staticClass:"comment_box"},[t._m(0),t._v(" "),i("div",{staticClass:"comments"},[i("router-link",{attrs:{to:t.data.link}},[t._v(t._s(t.data.comment_count)+" Comments")])],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comments_icon"},[e("i",{staticClass:"fa fa-comments",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null).exports},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){o(t,e,i[e])})}return t}({},Object(a.c)(["getSidebar"])),data:function(){return{tab_v:"#1"}},methods:{tab:function(t,e){this.tab_v=t}}},l=Object(s.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"tab sitebar"},[i("ul",{staticClass:"nav nav-tabs"},[i("li",{class:{active:"#1"===t.tab_v}},[i("a",{on:{click:function(e){return t.tab("#1",e)}}},[t._v("Latest")])]),t._v(" "),i("li",{class:{active:"#2"===t.tab_v}},[i("a",{on:{click:function(e){return t.tab("#2",e)}}},[t._v("Populer")])])]),t._v(" "),i("div",{staticClass:"tab-content"},[i("div",{staticClass:"tab-pane",class:{active:"#1"===t.tab_v},attrs:{id:"1"}},t._l(t.getSidebar.latest,function(t){return i("Media1",{key:t.id,attrs:{data:t}})}),1),t._v(" "),i("div",{staticClass:"tab-pane",class:{active:"#2"===t.tab_v},attrs:{id:"2"}},t._l(t.getSidebar.populer,function(t){return i("Media1",{key:t.id,attrs:{data:t}})}),1)])])])},[],!1,null,null,null);e.a=l.exports},5:function(t,e,i){"use strict";var a={name:"Media4",props:["data"],created:function(){}},n=i(0),s=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item feature_news_item"},[i("div",{staticClass:"item_wrapper"},[i("div",{staticClass:"item_img_background \n        ",style:{"background-image":"url("+t.data.img+")"}}),t._v(" "),i("div",{staticClass:"item_title_date"},[i("div",{staticClass:"news_item_title"},[i("h2",[i("router-link",{attrs:{to:t.data.link}},[t._v("\n                        "+t._s(t.data.title)+"\n                    ")])],1)]),t._v(" "),i("div",{staticClass:"item_meta"},[i("a",{attrs:{href:"#"}},[t._v(t._s(t._f("toDateIndo")(t.data.date))+",")]),t._v(" "),i("a",{attrs:{href:"#"}},[t._v(t._s(t.data.writer))])])])]),t._v(" "),i("div",{staticClass:"item_content"},[i("div",{staticClass:"prev"},[t._v("\n            "+t._s(t.data.content_prev)+"\n        ")])])])},[],!1,null,null,null);e.a=s.exports},75:function(t,e,i){"use strict";i.r(e);var a=i(2),n=i(4),s=i(1),r=i(5),o=i(9),c=i.n(o);function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={name:"Category",components:{Sidebar:n.a,Media4:r.a,Pagination:c.a},watch:{$route:function(t,e){this.filter.q=this.$router.history.current.query.q,this.getData();var i={title:" Search "+this.filter.q+" | "+this.getSetting.name};this.meta.set(i)}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){l(t,e,i[e])})}return t}({},Object(a.c)(["getSetting"])),created:function(){this.filter.q=this.$router.history.current.query.q,this.getData();var t={title:" Search "+this.filter.q+" | "+this.getSetting.name};this.meta.set(t)},data:function(){return{loading:!0,filter:{page:1,limit:6,q:"",cat:""},countData:0,data:[],main_news:{}}},mounted:function(){},methods:{getData:function(){var t=this;this.loading=!0;var e={client_secret:s.a.clientSecret,filter:this.filter};window.axios.post(s.a.news,e).then(function(e){t.loading=!1;var i=e.data;t.data=i.data,t.main_news=i.data[0],t.countData=i.count}).catch(function(e){t.loading=!1})},pagenation:function(t){jQuery("html, body").animate({scrollTop:0},500),this.getData()}}},h=i(0),d=Object(h.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"feature_category_section category_page section_wrapper",attrs:{id:"feature_category_section"}},[t.loading?i("MediaSkolten"):t._e(),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-9"},[!t.loading&&t.data.length<=0?i("div",{staticClass:"row"},[t._m(0)]):t._e(),t._v(" "),i("div",{staticClass:"row"},t._l(t.data,function(t){return i("div",{staticClass:"col-md-6"},[i("Media4",{attrs:{data:t}})],1)}),0),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12",staticStyle:{"text-align":"center"}},[i("pagination",{attrs:{records:t.countData,"per-page":t.filter.limit},on:{paginate:t.pagenation},model:{value:t.filter.page,callback:function(e){t.$set(t.filter,"page",e)},expression:"filter.page"}})],1)])]),t._v(" "),i("div",{staticClass:"col-md-3"},[i("Sidebar")],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12"},[e("h2",[this._v("Data not found")])])}],!1,null,null,null);e.default=d.exports},76:function(t,e,i){"use strict";i.r(e);var a={name:"Error",mounted:function(){}},n=i(0),s=Object(n.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{},[this._v("\n  Err Q\n")])},[],!1,null,null,null);e.default=s.exports},9:function(t,e,i){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=r(i(24)),s=r(i(25));function r(t){return t&&t.__esModule?t:{default:t}}var o=i(26);t.exports={render:o.call(void 0),model:{prop:"page",event:"paginate"},props:{page:{type:Number,required:!0},for:{type:String,required:!1},records:{type:Number,required:!0},perPage:{type:Number,default:25},vuex:{type:Boolean},options:{type:Object}},data:function(){return{firstPage:this.page}},watch:{page:function(t){"scroll"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t)&&(this.firstPage=t)}},computed:{opts:function(){return(0,s.default)((0,n.default)(),this.options)},Theme:function(){if("object"===a(this.opts.theme))return this.opts.theme;var t={bootstrap3:i(27),bootstrap4:i(28),bulma:i(29)};if(void 0===a(t[this.opts.theme]))throw"vue-pagination-2: the theme "+this.opts.theme+" does not exist";return t[this.opts.theme]},pages:function(){return this.records?(t=this.paginationStart,e=this.pagesInCurrentChunk,Array.apply(0,Array(e)).map(function(e,i){return i+t})):[];var t,e},totalPages:function(){return this.records?Math.ceil(this.records/this.perPage):1},totalChunks:function(){return Math.ceil(this.totalPages/this.opts.chunk)},currentChunk:function(){return Math.ceil(this.page/this.opts.chunk)},paginationStart:function(){return"scroll"===this.opts.chunksNavigation?this.firstPage:(this.currentChunk-1)*this.opts.chunk+1},pagesInCurrentChunk:function(){return this.paginationStart+this.opts.chunk<=this.totalPages?this.opts.chunk:this.totalPages-this.paginationStart+1},count:function(){if(/{page}/.test(this.opts.texts.count))return this.totalPages<=1?"":this.opts.texts.count.replace("{page}",this.page).replace("{pages}",this.totalPages);var t=this.opts.texts.count.split("|"),e=(this.page-1)*this.perPage+1,i=this.page==this.totalPages?this.records:e+this.perPage-1;return t[Math.min(1==this.records?2:1==this.totalPages?1:0,t.length-1)].replace("{count}",this.formatNumber(this.records)).replace("{from}",this.formatNumber(e)).replace("{to}",this.formatNumber(i))}},methods:{setPage:function(t){this.allowedPage(t)&&this.paginate(t)},paginate:function(t){this.$emit("paginate",t)},next:function(){var t=this.page+1;return"scroll"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t)&&this.firstPage++,this.setPage(t)},prev:function(){var t=this.page-1;return"scroll"===this.opts.chunksNavigation&&this.allowedPage(t)&&!this.inDisplay(t)&&this.firstPage--,this.setPage(t)},inDisplay:function(t){var e=this.firstPage,i=e+this.opts.chunk-1;return t>=e&&t<=i},nextChunk:function(){return this.setChunk(1)},prevChunk:function(){return this.setChunk(-1)},setChunk:function(t){this.setPage((this.currentChunk-1+t)*this.opts.chunk+1)},allowedPage:function(t){return t>=1&&t<=this.totalPages},allowedChunk:function(t){return 1==t&&this.currentChunk<this.totalChunks||-1==t&&this.currentChunk>1},allowedPageClass:function(t){return this.allowedPage(t)?"":this.Theme.disabled},allowedChunkClass:function(t){return this.allowedChunk(t)?"":this.Theme.disabled},activeClass:function(t){return this.page==t?this.Theme.active:""},formatNumber:function(t){return this.opts.format?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):t}}}}}]);