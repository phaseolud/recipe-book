exports.ids = [3];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/_id.vue?vue&type=template&id=3a230af0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.$fetchState.pending)?("<p></p>"):(_vm.$fetchState.error)?("<p>Error tijdens het laden van de recepten</p>"):("<div><div class=\"bg-red-500 rounded-lg h-48\">"+((_vm.recipe_data.image !== null)?("<img"+(_vm._ssrAttr("src",'http://192.168.2.248:3333/' + _vm.recipe_data.image))+" alt class=\"w-full h-48 object-cover rounded-lg opacity-100\">"):"<!---->")+"</div> <div class=\"py-2 mb-4\"><p class=\"text-2xl\">"+_vm._ssrEscape(_vm._s(_vm.recipe_data.title))+"</p> "+((_vm.recipe_data.source)?("<p class=\"text-sm text-gray-600\">"+_vm._ssrEscape("\n        bron: "+_vm._s(_vm.recipe_data.source)+"\n      ")+"</p>"):"<!---->")+"</div> <div class=\"md:flex\"><div class=\"py-2 md:flex-shrink md:mr-12 md:max-w-p40\"><p class=\"text-lg font-bold\">Ingredienten</p> <table class=\"table-auto\"><tbody>"+(_vm._ssrList((_vm.recipe_data.ingredient),function(ingredient){return ("<tr><td nowrap=\"nowrap\" class=\"align-top\">"+_vm._ssrEscape(_vm._s(ingredient.quantity)+" "+_vm._s(ingredient.unit))+"</td> <td class=\"px-4\">"+_vm._ssrEscape(_vm._s(ingredient.ingredient))+"</td></tr>")}))+"</tbody></table></div> <div class=\"py-2 md:flex-grow\">"+(_vm._ssrList((_vm.recipe_data.instruction),function(instruction){return ("<div class=\"pb-2 mb-4 w-full border-b-2 border-gray-300\"><p class=\"text-lg font-bold\">"+_vm._ssrEscape("\n          Stap "+_vm._s(Number(instruction.step) + 1)+"\n        ")+"</p> <p class=\"text-sm\">"+_vm._ssrEscape(_vm._s(instruction.instruction))+"</p></div>")}))+"</div></div></div>")))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/recipes/_id.vue?vue&type=template&id=3a230af0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      recipe_data: {}
    };
  },

  async asyncData({
    params
  }) {
    const recipe_id = params.id;
    return {
      recipe_id
    };
  },

  async fetch() {
    this.recipe_data = await this.$axios.get('http://192.168.2.248:3333/api/recipes/' + this.recipe_id).then(res => res.data).catch(error => console.log(error));
  }

});
// CONCATENATED MODULE: ./pages/recipes/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var recipes_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/recipes/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  recipes_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c8bf3070"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map