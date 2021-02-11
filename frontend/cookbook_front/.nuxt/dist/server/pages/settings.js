exports.ids = [6];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings.vue?vue&type=template&id=63cce534&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<p class=\"text-2xl\">Instellingen</p> <div><p class=\"text-xl my-2\">Tags</p> <div class=\"flex content-center\"><input type=\"text\" placeholder=\"Tag\""+(_vm._ssrAttr("value",(_vm.tag_new)))+" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out h-10 mr-3\"> <button class=\" bg-gray-300  px-3 h-10 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out\">Voeg toe</button></div> <div>"+(_vm._ssrList((_vm.tags),function(tag){return ("<div class=\"rounded-lg bg-gray-300\">"+_vm._ssrEscape("\n        "+_vm._s(tag)+"\n      ")+"</div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings.vue?vue&type=template&id=63cce534&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  data() {
    return {
      tag_new: '',
      tags: ['abc']
    };
  },

  async addTag() {
    this.tags = await this.$axios.post('http://' + "127.0.0.1:8000" + '/api/tags', {
      tag: this.tag_new
    }).then(function (res) {
      this.tag_new = '';
      return res.data;
    }).catch(error => console.log(error));
  },

  async removeTag(tag) {
    this.tags = await this.$axios.delete('http://' + "127.0.0.1:8000" + '/api/tags/' + tag).then(res => res.data).catch(error => console.log(error));
  },

  async fetch() {
    this.tags = await this.$axios.get('http://' + "127.0.0.1:8000" + '/api/tags').then(res => res.data).catch(error => console.log(error));
  }

});
// CONCATENATED MODULE: ./pages/settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "720c83ae"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=settings.js.map