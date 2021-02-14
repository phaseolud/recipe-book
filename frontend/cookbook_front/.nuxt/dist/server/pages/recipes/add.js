exports.ids = [4];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("ca03a2a2", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".multiselect__tags{--bg-opacity:1;background-color:#e2e8f0;background-color:rgba(226,232,240,var(--bg-opacity));border-radius:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/add.vue?vue&type=template&id=49ffd70e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h1 class=\"text-2xl font-sans mb-3 text-gray-900\">Voeg recept toe</h1> "),(Object.keys(_vm.errors).length !== 0)?_vm._ssrNode("<div class=\"bg-red-300 border-red-800 border-2 p-2 align-center flex justify-between rounded\">","</div>",[_vm._ssrNode("<ul>"+(_vm._ssrList((_vm.errors),function(error,index){return ("<li>"+_vm._ssrEscape(_vm._s(error[0]))+"</li>")}))+"</ul> "),_vm._ssrNode("<button class=\"hover:text-red-800 focus:outline-none\">","</button>",[_c('fa-layers',{},[_c('fa',{attrs:{"icon":"times"}})],1)],1)],2):_vm._e(),_vm._ssrNode(" <div class=\"mb-6\"><div class=\"flex\"><div class=\"flex-grow mr-5\"><label for=\"title\" class=\"text-sm text-gray-600 font-sans\">titel</label> <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"titel\" required=\"required\""+(_vm._ssrAttr("value",(_vm.title)))+" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full\"></div> <div class=\"w-1/6 flex-none\"><label for=\"people\" class=\"text-sm text-gray-600 font-sans\">aantal</label> <input type=\"number\" name=\"people\""+(_vm._ssrAttr("value",(_vm.people)))+" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full\"></div></div></div> <div class=\"mb-6\"><label for=\"image\" class=\"text-sm text-gray-600 font-sans block\">afbeelding</label> <input type=\"file\" accept=\"image/*;capture=camera\" name=\"image\" id=\"image\" class=\"bg-gray-300 border-b-2 border-red-300 focus:border-red-500 focus:outline-none\"></div> "),_vm._ssrNode("<div class=\"mb-6\">","</div>",[_vm._ssrNode("<label for=\"ingredients\" class=\"text-sm text-gray-600 font-sans\">ingredienten</label> "),_vm._l((_vm.ingredients),function(ingredient,index){return _vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"w-full flex\">","</div>",[_vm._ssrNode("<input type=\"number\" min=\"0\" placeholder=\"hoeveelheid\""+(_vm._ssrAttr("value",(ingredient.qnty)))+" class=\"bg-gray-300 focus:outline-none p-1 mr-3 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-12 flex-none\"> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(ingredient.unit),expression:"ingredient.unit"}],staticClass:"bg-gray-300 focus:outline-none p-1 mr-3 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-14 flex-none",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(ingredient, "unit", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":""}}),_vm._v(" "),_vm._l((_vm.options),function(option,indexo){return _c('option',{key:indexo,domProps:{"value":option}},[_vm._v("\n              "+_vm._s(option)+"\n            ")])})],2),_vm._ssrNode(" <input type=\"text\" placeholder=\"ingredient\""+(_vm._ssrAttr("value",(ingredient.name)))+" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out flex-grow\"> "),_vm._ssrNode("<button class=\"pl-3 hover:text-red-500 focus:outline-none\">","</button>",[_c('fa',{attrs:{"icon":"trash"}})],1)],2)])}),_vm._ssrNode(" <button class=\"block mt-3 bg-gray-300 p-2 pl-3 pr-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out\">\n        Ingredient Toevoegen\n      </button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-6\">","</div>",[_vm._ssrNode("<label for=\"instructies\" class=\"text-sm text-gray-600 font-sans\">instructies</label> "),_vm._l((_vm.instructies),function(stap,index){return _vm._ssrNode("<div class=\"mb-2\">","</div>",[_vm._ssrNode("<div class=\"flex items-center pb-2\">","</div>",[_vm._ssrNode("<h2 class=\"text-l\">"+_vm._ssrEscape("Stap "+_vm._s(index + 1))+"</h2> "),_vm._ssrNode("<button class=\"w-10 hover:text-red-500 focus:outline-none\">","</button>",[_c('fa-layers',{staticClass:"fa-xs"},[_c('fa',{attrs:{"icon":"trash"}})],1)],1)],2),_vm._ssrNode(" <textarea type=\"text\" placeholder=\"Instructie\" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full\">"+_vm._ssrEscape(_vm._s(stap.beschrijving))+"</textarea>")],2)}),_vm._ssrNode(" <button class=\"block mt-3 bg-gray-300 p-2 pl-3 pr-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out\">\n        Stap toevoegen\n      </button>")],2),_vm._ssrNode(" <div class=\"mb-6\"><label for=\"source\" class=\"text-sm text-gray-600 font-sans\">bron</label> <input type=\"text\" id=\"source\" name=\"source\" placeholder=\"bron (website/kookboek)\""+(_vm._ssrAttr("value",(_vm.source)))+" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full\"></div> "),_vm._ssrNode("<div class=\"mb-6\">","</div>",[_c('multiselect',{staticClass:"bg-white focus:outline-none border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full",attrs:{"options":_vm.tags_available,"searchable":false,"track-by":"id","label":"name","multiple":true,"placeholder":"Kies een tag"},model:{value:(_vm.tags),callback:function ($$v) {_vm.tags=$$v},expression:"tags"}})],1),_vm._ssrNode(" <button class=\"bg-gray-300 p-2 px-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out\">\n      Sla op\n    </button>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/recipes/add.vue?vue&type=template&id=49ffd70e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/add.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var addvue_type_script_lang_js_ = ({
  data() {
    return {
      ingredients: [{
        "name": "",
        "qnty": "",
        "unit": ""
      }],
      title: "",
      people: 0,
      instructies: [{
        "beschrijving": ""
      }],
      options: ['g', 'kg', 'L', 'mL', 'tsp', 'tbsp'],
      errors: {},
      file: null,
      filepath: '',
      source: '',
      tags: [],
      tags_available: []
    };
  },

  async fetch() {
    const url = 'http://' + "192.168.2.252:3333" + '/api/tags';
    this.tags_available = await fetch(url).then(res => res.json());
  },

  methods: {
    addIngredient() {
      this.ingredients.push({
        "name": '',
        'qnty': '',
        'unit': ''
      });
      this.$nextTick(() => this.$refs.ingredient_qnty.slice(-1)[0].focus());
    },

    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },

    addStap() {
      this.instructies.push({
        "beschrijving": ""
      });
      this.$nextTick(() => this.$refs.instruction.slice(-1)[0].focus());
    },

    removeStap(index) {
      this.instructies.splice(index, 1);
    },

    handleFile(e) {
      this.file = e.target.files[0];
    },

    async uploadImage() {
      let fd = new FormData();
      fd.append('image', this.file);
      return this.$axios.post('http://' + "192.168.2.252:3333" + '/api/recipes/' + '/upload-image', fd).then(response => response.data).catch(error => {
        this.errors = error.response.data;
      });
    },

    async addRecipe() {
      if (typeof this.file !== 'undefined' && this.file !== null) {
        this.filepath = await this.uploadImage();
      }

      let self = this;
      let send_tags = this.tags.map(tag => tag.id);
      this.$axios.post('http://' + "192.168.2.252:3333" + '/api/recipes', {
        ingredients: this.ingredients,
        title: this.title,
        people: this.people,
        instructies: this.instructies,
        imagepath: this.filepath,
        source: this.source,
        tag: send_tags
      }).then(function (response) {
        console.log(response);
        self.$router.push('/recipes');
      }).catch(error => {
        console.log("ERROR: ", error.response.data);
        this.errors = error.response.data;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/recipes/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var recipes_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/recipes/add.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  recipes_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d6033534"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add.js.map