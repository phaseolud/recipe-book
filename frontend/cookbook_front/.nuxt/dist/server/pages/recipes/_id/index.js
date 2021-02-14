exports.ids = [3];
exports.modules = {

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/_id/index.vue?vue&type=template&id=16581392&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.$fetchState.pending)?_vm._ssrNode("<p>","</p>"):(_vm.$fetchState.error)?_vm._ssrNode(("<p>Error tijdens het laden van de recepten</p>")):_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"bg-red-500 rounded-lg h-48\">"+((_vm.recipe_data.image !== null)?("<img"+(_vm._ssrAttr("src",'http://' + _vm.serverUrl + '/' + _vm.recipe_data.image))+" alt class=\"w-full h-48 object-cover rounded-lg opacity-100\">"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"py-2 mb-1\">","</div>",[_vm._ssrNode("<div class=\"flex items-center\">","</div>",[_vm._ssrNode("<p class=\"text-2xl inline-block\">"+_vm._ssrEscape(_vm._s(_vm.recipe_data.title))+"</p> "),_c('nuxt-link',{staticClass:" hover:text-red-500 focus:outline-none  mt-1 ml-4",attrs:{"to":'/recipes/' + _vm.recipe_id + '/edit'}},[_c('fa-layers',{staticClass:"fa inline-block"},[_c('fa',{attrs:{"icon":"pen"}})],1)],1)],2),_vm._ssrNode(" "+((_vm.recipe_data.source)?("<p class=\"text-sm text-gray-600\">"+_vm._ssrEscape("\n        bron: "+_vm._s(_vm.recipe_data.source)+"\n      ")+"</p>"):"<!---->")+" <div class=\"flex flex-wrap mt-1\">"+(_vm._ssrList((_vm.recipe_data.tags),function(tag,index){return ("<div class=\"bg-gray-300 py-1 px-2 rounded-md mr-2\">"+_vm._ssrEscape("\n          "+_vm._s(tag.name)+"\n        ")+"</div>")}))+"</div>")],2),_vm._ssrNode(" <div class=\"md:flex\"><div class=\"py-2 md:flex-shrink md:mr-12 md:max-w-p40\"><p class=\"text-lg font-bold\">Ingredienten</p> <table class=\"table-auto\"><tbody>"+(_vm._ssrList((_vm.recipe_data.ingredient),function(ingredient,idx){return ("<tr><td nowrap=\"nowrap\" class=\"align-top\">"+_vm._ssrEscape("\n                "+_vm._s(ingredient.quantity)+" "+_vm._s(ingredient.unit)+"\n              ")+"</td> <td class=\"px-4\">"+_vm._ssrEscape(_vm._s(ingredient.ingredient))+"</td></tr>")}))+"</tbody></table></div> <div class=\"py-2 md:flex-grow\">"+(_vm._ssrList((_vm.recipe_data.instruction),function(instruction){return ("<div class=\"pb-2 mb-4 w-full border-b-2 border-gray-300\"><p class=\"text-lg font-bold\">"+_vm._ssrEscape("\n            Stap "+_vm._s(Number(instruction.step) + 1)+"\n          ")+"</p> <p class=\"text-sm\">"+_vm._ssrEscape(_vm._s(instruction.instruction))+"</p></div>")}))+"</div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/recipes/_id/index.vue?vue&type=template&id=16581392&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.recipe_data = await this.$axios.get('http://' + "192.168.2.252:3333" + '/api/recipes/' + this.recipe_id).then(res => res.data).catch(error => console.log(error));
  },

  computed: {
    serverUrl() {
      return "192.168.2.252:3333";
    }

  }
});
// CONCATENATED MODULE: ./pages/recipes/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var recipes_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/recipes/_id/index.vue



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
  "d47c5096"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map