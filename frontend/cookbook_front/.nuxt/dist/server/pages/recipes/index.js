exports.ids = [5];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RecipeBlock.vue?vue&type=template&id=272b9d5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"bg-gray-200 p-2 rounded-sm",attrs:{"to":'recipes/' + _vm.recipe.id}},[_c('div',{staticClass:"bg-red-300 h-32 rounded-lg hover:bg-red-500 flex align-center"},[(_vm.recipe.image !== null)?_c('img',{staticClass:"hover:opacity-50 object-cover w-full h-32 rounded-lg",attrs:{"src":'http://' + _vm.serverUrl + '/' + _vm.recipe.image,"alt":"","onerror":"this.style.display='none'"}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"flex justify-between py-2"},[_c('p',{staticClass:"text-sm font-bold"},[_vm._v(_vm._s(_vm.recipe.title))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RecipeBlock.vue?vue&type=template&id=272b9d5a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RecipeBlock.vue?vue&type=script&lang=js&
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
/* harmony default export */ var RecipeBlockvue_type_script_lang_js_ = ({
  props: ['recipe'],
  computed: {
    serverUrl() {
      return "127.0.0.1:8000";
    }

  }
});
// CONCATENATED MODULE: ./components/RecipeBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RecipeBlockvue_type_script_lang_js_ = (RecipeBlockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/RecipeBlock.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RecipeBlockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1f5a67a8"
  
)

/* harmony default export */ var RecipeBlock = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/index.vue?vue&type=template&id=7491c4a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.$fetchState.pending)?_vm._ssrNode("<p>","</p>"):(_vm.$fetchState.error)?_vm._ssrNode(("<p>Error tijdens het laden van de recepten</p>")):_vm._ssrNode("<div class=\"transition duration-300 ease-in-out grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5\">","</div>",_vm._l((_vm.recipes),function(recipe){return _c('recipe-block',{key:recipe.id,attrs:{"recipe":recipe}})}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/recipes/index.vue?vue&type=template&id=7491c4a2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var recipesvue_type_script_lang_js_ = ({
  data() {
    return {
      recipes: []
    };
  },

  async fetch() {
    this.recipes = await fetch('http://' + "127.0.0.1:8000" + '/api/recipes/').then(res => res.json());
  }

});
// CONCATENATED MODULE: ./pages/recipes/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_recipesvue_type_script_lang_js_ = (recipesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/recipes/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_recipesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "650e8d60"
  
)

/* harmony default export */ var recipes = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {RecipeBlock: __webpack_require__(38).default})


/***/ })

};;
//# sourceMappingURL=index.js.map