(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assets/js/home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCarousel.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeCarousel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomeCarousel',
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCategory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeCategory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _components_Media4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Media4 */ "./resources/js/components/Media4.vue");
/* harmony import */ var _components_HomeCategoryLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeCategoryLayout */ "./resources/js/components/HomeCategoryLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomeCategory',
  components: {
    Sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    HomeCategoryLayout: _components_HomeCategoryLayout__WEBPACK_IMPORTED_MODULE_2__["default"],
    Media4: _components_Media4__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {// console.log(this.category_home);
  },
  props: ['category_home'],
  data: function data() {
    return {
      /*
      category_home: [
        {
          id:'1',
          name:'Jakarta',
          link:'/c/jakarta',
          class:'red',
          news_header:{
              id:'1',
              link:'/p/link',
              date:'2019-05-01 19:00:00',
              title:'Spain going to made class football',
              img:'assets/img/img_feature_news.jpg',
              content_prev: 'Sed perspiciatis unde omnis iste natus voluptatem.',
              rating:5,
              comment_count:5,
              writer:"indi",
           },
          news:[
            {
                id:'1',
                link:'/p/link',
                date:'2019-05-01 19:00:00',
                title:'Spain going to made class football',
                img:'assets/img/img-list.jpg',
                content_prev: 'Sed perspiciatis unde omnis iste natus voluptatem.',
                rating:5,
                comment_count:5,
                writer:"indi",
            },
            {
                id:'2',
                link:'/p/link',
                date:'2019-05-01 19:00:00',
                title:'Spain going to made class football',
                img:'assets/img/img-list.jpg',
                content_prev: 'Sed perspiciatis unde omnis iste natus voluptatem.',
                rating:5,
                comment_count:5,
                writer:"indi",
            },
          ]
        }
      ],
      */
      more_news: [{
        id: '1',
        link: '/p/link',
        date: '2019-05-01 19:00:00',
        title: 'Spain going to made class football',
        img: 'assets/img/img_feature_news.jpg',
        content_prev: 'Sed perspiciatis unde omnis iste natus voluptatem. Sed perspiciatis unde omnis iste natus voluptatem. Sed perspiciatis unde omnis iste natus voluptatem.',
        rating: 5,
        comment_count: 5,
        writer: "indi"
      }, {
        id: '2',
        link: '/p/link',
        date: '2019-05-01 19:00:00',
        title: 'Spain going to made class football',
        img: 'assets/img/img_feature_news.jpg',
        content_prev: 'Sed perspiciatis unde omnis iste natus voluptatem.',
        rating: 5,
        comment_count: 5,
        writer: "indi"
      }]
    };
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCategoryLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeCategoryLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Media3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Media3 */ "./resources/js/components/Media3.vue");
/* harmony import */ var _components_Media4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Media4 */ "./resources/js/components/Media4.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomeCategoryLayout',
  components: {
    Media3: _components_Media3__WEBPACK_IMPORTED_MODULE_0__["default"],
    Media4: _components_Media4__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['data'],
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeGalery.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeGalery.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-owl-carousel */ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Media5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Media5 */ "./resources/js/components/Media5.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomeGalery',
  components: {
    Media5: _components_Media5__WEBPACK_IMPORTED_MODULE_1__["default"],
    carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: ['data'],
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media3.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Media3.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Media3',
  props: ['data'],
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media4.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Media4.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Media4',
  props: ['data'],
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media5.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Media5.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Media4',
  props: ['data'],
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./resources/js/api.js");
/* harmony import */ var _components_HomeCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeCarousel */ "./resources/js/components/HomeCarousel.vue");
/* harmony import */ var _components_HomeCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeCategory */ "./resources/js/components/HomeCategory.vue");
/* harmony import */ var _components_HomeGalery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeGalery */ "./resources/js/components/HomeGalery.vue");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  components: {
    HomeCarousel: _components_HomeCarousel__WEBPACK_IMPORTED_MODULE_2__["default"],
    HomeCategory: _components_HomeCategory__WEBPACK_IMPORTED_MODULE_3__["default"],
    HomeGalery: _components_HomeGalery__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      loading: false,
      error: false
    };
  },
  mounted: function mounted() {
    if (this.getCategoryHome.length <= 0) {
      this.getCategoryH();
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getCategoryHome', 'getGaleryHome'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['setCategoryHome', // map `this.increment()` to `this.$store.dispatch('increment')`
  'setGaleryHome']), {
    getCategoryH: function getCategoryH() {
      var _this = this;

      this.loading = true;
      var parameter = {
        client_secret: _api__WEBPACK_IMPORTED_MODULE_1__["api"].clientSecret
      };
      window.axios.post(_api__WEBPACK_IMPORTED_MODULE_1__["api"].category_home, parameter).then(function (res) {
        var r = res.data;
        var app = _this;

        _this.setCategoryHome(r.data).then(function (e) {
          // console.log(app.getCategoryHome);
          app.loading = false;
        });

        if (_this.getGaleryHome.length <= 0) {
          _this.getGaleryyH();
        }
      })["catch"](function (err) {
        _this.loading = false;
      });
    },
    getGaleryyH: function getGaleryyH() {
      var _this2 = this;

      // this.loading = true;
      var parameter = {
        client_secret: _api__WEBPACK_IMPORTED_MODULE_1__["api"].clientSecret
      };
      window.axios.post(_api__WEBPACK_IMPORTED_MODULE_1__["api"].galery_home, parameter).then(function (res) {
        var r = res.data;
        var app = _this2;

        _this2.setGaleryHome(r.data).then(function (e) {
          // console.log(app.getGaleryHome);
          app.loading = false;
        });
      })["catch"](function (err) {
        _this2.loading = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCarousel.vue?vue&type=template&id=8cbdd06c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeCarousel.vue?vue&type=template&id=8cbdd06c& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass: "feature_news_section section_wrapper",
        attrs: { id: "feature_news_section" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "feature_news_carousel" }, [
                _c(
                  "div",
                  {
                    staticClass: "carousel slide",
                    attrs: {
                      id: "featured-news-carousal",
                      "data-ride": "carousel"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "carousel-inner",
                        attrs: { role: "listbox" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "item active feature_news_item" },
                          [
                            _c("div", { staticClass: "item_wrapper" }, [
                              _c("div", { staticClass: "item_img" }, [
                                _c("img", {
                                  staticClass: "img-responsive",
                                  attrs: {
                                    src: "assets/img/img-carousel1.jpg",
                                    alt: "Chania"
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "item_title_date" }, [
                                _c("div", { staticClass: "news_item_title" }, [
                                  _c("h2", [
                                    _c(
                                      "a",
                                      { attrs: { href: "single.html" } },
                                      [
                                        _vm._v(
                                          "Seamlessly embrace B2C catalysts for change\n                                                    vis-a-vis economically sound communities."
                                        )
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "item_meta" }, [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("20Aug- 2015,")
                                  ]),
                                  _vm._v(" by:"),
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("Jhonson")
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "item_content" }, [
                              _vm._v(
                                "\n                                    Sed ut perspiciatis unde omnis iste natus error sit\n                                    voluptatem accusantium doloremque.\n                                "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "item feature_news_item" }, [
                          _c("div", { staticClass: "item_wrapper" }, [
                            _c("div", { staticClass: "item_img" }, [
                              _c("img", {
                                staticClass: "img-responsive",
                                attrs: {
                                  src: "assets/img/img-carousel2.jpg",
                                  alt: "Chania"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "item_title_date" }, [
                              _c("div", { staticClass: "news_item_title" }, [
                                _c("h2", [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v(
                                      "Manchester United want to Back Cristiano Ronaldo\n                                                    natus error sit."
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "item_meta" }, [
                                _c("a", { attrs: { href: "#" } }, [
                                  _vm._v("20Aug- 2015,")
                                ]),
                                _vm._v(" by:"),
                                _c("a", { attrs: { href: "#" } }, [
                                  _vm._v("Jhonson")
                                ])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "item_content" }, [
                            _vm._v(
                              "\n                                    Sed ut perspiciatis unde omnis iste natus error sit\n                                    voluptatem accusantium doloremque.\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "control-wrapper" }, [
                          _c(
                            "a",
                            {
                              staticClass: "left carousel-control",
                              attrs: {
                                href: "#featured-news-carousal",
                                role: "button",
                                "data-slide": "prev"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-chevron-left",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "right carousel-control",
                              attrs: {
                                href: "#featured-news-carousal",
                                role: "button",
                                "data-slide": "next"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-chevron-right",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "feature_news_static" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "feature_news_item" }, [
                      _c("div", { staticClass: "item active" }, [
                        _c("div", { staticClass: "item_wrapper" }, [
                          _c("div", { staticClass: "item_img" }, [
                            _c("img", {
                              staticClass: "img-responsive",
                              attrs: {
                                src: "assets/img/img_feature.jpg",
                                alt: "Chania"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "item_title_date" }, [
                            _c("div", { staticClass: "news_item_title" }, [
                              _c("h2", [
                                _c("a", { attrs: { href: "single.html" } }, [
                                  _vm._v("Track Roboto the Real Tracker.")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "item_meta" }, [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("20Aug- 2015,")
                              ]),
                              _vm._v(" by:"),
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Jhonson")
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "item_content" }, [
                          _vm._v(
                            "\n                                        Sed ut perspiciatis unde omnis iste natus error sit\n                                    "
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "feature_news_item" }, [
                      _c("div", { staticClass: "item active" }, [
                        _c("div", { staticClass: "item_wrapper" }, [
                          _c("div", { staticClass: "item_img" }, [
                            _c("img", {
                              staticClass: "img-responsive",
                              attrs: {
                                src: "assets/img/img_feature2.jpg",
                                alt: "Chania"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "item_title_date" }, [
                            _c("div", { staticClass: "news_item_title" }, [
                              _c("h2", [
                                _c("a", { attrs: { href: "single.html" } }, [
                                  _vm._v(
                                    "David villa change his team last year."
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "item_meta" }, [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("20Aug- 2015,")
                              ]),
                              _vm._v(" by:"),
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("Jhonson")
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "item_content" }, [
                          _vm._v(
                            "\n                                        Sed ut perspiciatis unde omnis iste natus error sit\n                                    "
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCategory.vue?vue&type=template&id=6c847468&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeCategory.vue?vue&type=template&id=6c847468& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "feature_category_section section_wrapper",
      attrs: { id: "feature_category_section" }
    },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-9" },
            _vm._l(_vm.category_home, function(item) {
              return item.news.length > 0
                ? _c("HomeCategoryLayout", {
                    key: item.id,
                    attrs: { data: item }
                  })
                : _vm._e()
            }),
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3" }, [_c("Sidebar")], 1)
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCategoryLayout.vue?vue&type=template&id=80f1ea9c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeCategoryLayout.vue?vue&type=template&id=80f1ea9c& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "category_layout" }, [
    _c("div", { staticClass: "item_caregory ", class: _vm.data.class }, [
      _c(
        "h2",
        [
          _c("router-link", { attrs: { to: _vm.data.link } }, [
            _vm._v(
              "\n                " + _vm._s(_vm.data.name) + "\n            "
            )
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-7" },
        [_c("Media4", { attrs: { data: _vm.data.news_header } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-5" }, [
        _c(
          "div",
          { staticClass: "media_wrapper" },
          _vm._l(_vm.data.news, function(item) {
            return _c("Media3", { key: item.id, attrs: { data: item } })
          }),
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeGalery.vue?vue&type=template&id=26e3a744&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeGalery.vue?vue&type=template&id=26e3a744& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "feature_video_item section_wrapper",
      attrs: { id: "feature_video_item" }
    },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "div",
              { staticClass: "feature_video_wrapper" },
              [
                _vm._m(0),
                _vm._v(" "),
                _vm.data.length > 0
                  ? _c(
                      "carousel",
                      {
                        attrs: {
                          id: "feature_video_slider",
                          responsive: {
                            0: { items: 1, nav: false },
                            600: { items: 2, nav: false },
                            600: { items: 3, nav: false }
                          }
                        }
                      },
                      _vm._l(_vm.data, function(item) {
                        return _c("Media5", {
                          key: item.id,
                          attrs: { data: item }
                        })
                      }),
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "feature_video_title" }, [
      _c("h2", [_vm._v("Galeri")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media3.vue?vue&type=template&id=28b5890c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Media3.vue?vue&type=template&id=28b5890c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "media" }, [
    _c(
      "div",
      { staticClass: "media-left" },
      [
        _c("router-link", { attrs: { to: _vm.data.link } }, [
          _c("div", {
            staticClass: "skeleton",
            staticStyle: {
              width: "80px",
              height: "80px",
              "background-size": "cover"
            },
            style: { "background-image": "url(" + _vm.data.img + ")" }
          })
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "media-body" }, [
      _c(
        "h3",
        { staticClass: "media-heading" },
        [
          _c("router-link", { attrs: { to: _vm.data.link } }, [
            _vm._v(
              "\n                " + _vm._s(_vm.data.title) + "\n            "
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.data.content_prev))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media4.vue?vue&type=template&id=28995a0a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Media4.vue?vue&type=template&id=28995a0a& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "item feature_news_item" }, [
    _c("div", { staticClass: "item_wrapper" }, [
      _c("div", {
        staticClass: "item_img_background \n        ",
        style: { "background-image": "url(" + _vm.data.img + ")" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "item_title_date" }, [
        _c("div", { staticClass: "news_item_title" }, [
          _c(
            "h2",
            [
              _c("router-link", { attrs: { to: _vm.data.link } }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.data.title) +
                    "\n                    "
                )
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item_meta" }, [
          _c("a", { attrs: { href: "#" } }, [
            _vm._v(_vm._s(_vm._f("toDateIndo")(_vm.data.date)) + ",")
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "#" } }, [_vm._v(_vm._s(_vm.data.writer))])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "item_content" }, [
      _c("div", { staticClass: "prev" }, [
        _vm._v("\n            " + _vm._s(_vm.data.content_prev) + "\n        ")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media5.vue?vue&type=template&id=287d2b08&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Media5.vue?vue&type=template&id=287d2b08& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "item" }, [
    _c("div", { staticClass: "video_thumb skeleton" }, [
      _c("img", { attrs: { src: _vm.data.img, alt: _vm.data.title } })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "video_info" }, [
      _c("div", { staticClass: "video_item_title" }, [
        _c(
          "h3",
          [
            _c("router-link", { attrs: { to: _vm.data.link } }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.data.title) +
                  "\n                "
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "item_meta" }, [
        _c("a", { attrs: { href: "#" } }, [
          _vm._v(_vm._s(_vm._f("toDateIndo")(_vm.data.date)))
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c("HomeCarousel"),
      _vm._v(" "),
      _vm.loading ? _c("MediaSkolten") : _vm._e(),
      _vm._v(" "),
      !_vm.loading && !_vm.error
        ? _c("HomeCategory", { attrs: { category_home: _vm.getCategoryHome } })
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && !_vm.error
        ? _c("HomeGalery", { attrs: { data: _vm.getGaleryHome } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/HomeCarousel.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/HomeCarousel.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeCarousel_vue_vue_type_template_id_8cbdd06c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeCarousel.vue?vue&type=template&id=8cbdd06c& */ "./resources/js/components/HomeCarousel.vue?vue&type=template&id=8cbdd06c&");
/* harmony import */ var _HomeCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeCarousel.vue?vue&type=script&lang=js& */ "./resources/js/components/HomeCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeCarousel_vue_vue_type_template_id_8cbdd06c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeCarousel_vue_vue_type_template_id_8cbdd06c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HomeCarousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HomeCarousel.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/HomeCarousel.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeCarousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCarousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HomeCarousel.vue?vue&type=template&id=8cbdd06c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/HomeCarousel.vue?vue&type=template&id=8cbdd06c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_template_id_8cbdd06c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeCarousel.vue?vue&type=template&id=8cbdd06c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCarousel.vue?vue&type=template&id=8cbdd06c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_template_id_8cbdd06c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_template_id_8cbdd06c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/HomeCategory.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/HomeCategory.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeCategory_vue_vue_type_template_id_6c847468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeCategory.vue?vue&type=template&id=6c847468& */ "./resources/js/components/HomeCategory.vue?vue&type=template&id=6c847468&");
/* harmony import */ var _HomeCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/HomeCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeCategory_vue_vue_type_template_id_6c847468___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeCategory_vue_vue_type_template_id_6c847468___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HomeCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HomeCategory.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/HomeCategory.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HomeCategory.vue?vue&type=template&id=6c847468&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/HomeCategory.vue?vue&type=template&id=6c847468& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_template_id_6c847468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeCategory.vue?vue&type=template&id=6c847468& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCategory.vue?vue&type=template&id=6c847468&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_template_id_6c847468___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategory_vue_vue_type_template_id_6c847468___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/HomeCategoryLayout.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/HomeCategoryLayout.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeCategoryLayout_vue_vue_type_template_id_80f1ea9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeCategoryLayout.vue?vue&type=template&id=80f1ea9c& */ "./resources/js/components/HomeCategoryLayout.vue?vue&type=template&id=80f1ea9c&");
/* harmony import */ var _HomeCategoryLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeCategoryLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/HomeCategoryLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeCategoryLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeCategoryLayout_vue_vue_type_template_id_80f1ea9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeCategoryLayout_vue_vue_type_template_id_80f1ea9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HomeCategoryLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HomeCategoryLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/HomeCategoryLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategoryLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeCategoryLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCategoryLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategoryLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HomeCategoryLayout.vue?vue&type=template&id=80f1ea9c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/HomeCategoryLayout.vue?vue&type=template&id=80f1ea9c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategoryLayout_vue_vue_type_template_id_80f1ea9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeCategoryLayout.vue?vue&type=template&id=80f1ea9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeCategoryLayout.vue?vue&type=template&id=80f1ea9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategoryLayout_vue_vue_type_template_id_80f1ea9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCategoryLayout_vue_vue_type_template_id_80f1ea9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/HomeGalery.vue":
/*!************************************************!*\
  !*** ./resources/js/components/HomeGalery.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeGalery_vue_vue_type_template_id_26e3a744___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeGalery.vue?vue&type=template&id=26e3a744& */ "./resources/js/components/HomeGalery.vue?vue&type=template&id=26e3a744&");
/* harmony import */ var _HomeGalery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeGalery.vue?vue&type=script&lang=js& */ "./resources/js/components/HomeGalery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeGalery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeGalery_vue_vue_type_template_id_26e3a744___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeGalery_vue_vue_type_template_id_26e3a744___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HomeGalery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HomeGalery.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/HomeGalery.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeGalery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeGalery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HomeGalery.vue?vue&type=template&id=26e3a744&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/HomeGalery.vue?vue&type=template&id=26e3a744& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalery_vue_vue_type_template_id_26e3a744___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeGalery.vue?vue&type=template&id=26e3a744& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeGalery.vue?vue&type=template&id=26e3a744&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalery_vue_vue_type_template_id_26e3a744___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeGalery_vue_vue_type_template_id_26e3a744___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Media3.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Media3.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media3_vue_vue_type_template_id_28b5890c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media3.vue?vue&type=template&id=28b5890c& */ "./resources/js/components/Media3.vue?vue&type=template&id=28b5890c&");
/* harmony import */ var _Media3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media3.vue?vue&type=script&lang=js& */ "./resources/js/components/Media3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Media3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Media3_vue_vue_type_template_id_28b5890c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Media3_vue_vue_type_template_id_28b5890c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Media3.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Media3.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Media3.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Media3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Media3.vue?vue&type=template&id=28b5890c&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Media3.vue?vue&type=template&id=28b5890c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media3_vue_vue_type_template_id_28b5890c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Media3.vue?vue&type=template&id=28b5890c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media3.vue?vue&type=template&id=28b5890c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media3_vue_vue_type_template_id_28b5890c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media3_vue_vue_type_template_id_28b5890c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Media4.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Media4.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media4_vue_vue_type_template_id_28995a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media4.vue?vue&type=template&id=28995a0a& */ "./resources/js/components/Media4.vue?vue&type=template&id=28995a0a&");
/* harmony import */ var _Media4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media4.vue?vue&type=script&lang=js& */ "./resources/js/components/Media4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Media4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Media4_vue_vue_type_template_id_28995a0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Media4_vue_vue_type_template_id_28995a0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Media4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Media4.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Media4.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Media4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Media4.vue?vue&type=template&id=28995a0a&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Media4.vue?vue&type=template&id=28995a0a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media4_vue_vue_type_template_id_28995a0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Media4.vue?vue&type=template&id=28995a0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media4.vue?vue&type=template&id=28995a0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media4_vue_vue_type_template_id_28995a0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media4_vue_vue_type_template_id_28995a0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Media5.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Media5.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media5_vue_vue_type_template_id_287d2b08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media5.vue?vue&type=template&id=287d2b08& */ "./resources/js/components/Media5.vue?vue&type=template&id=287d2b08&");
/* harmony import */ var _Media5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media5.vue?vue&type=script&lang=js& */ "./resources/js/components/Media5.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Media5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Media5_vue_vue_type_template_id_287d2b08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Media5_vue_vue_type_template_id_287d2b08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Media5.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Media5.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Media5.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Media5.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media5.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Media5.vue?vue&type=template&id=287d2b08&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Media5.vue?vue&type=template&id=287d2b08& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media5_vue_vue_type_template_id_287d2b08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Media5.vue?vue&type=template&id=287d2b08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Media5.vue?vue&type=template&id=287d2b08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media5_vue_vue_type_template_id_287d2b08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media5_vue_vue_type_template_id_287d2b08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);