exports.ids = [4];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/add.vue?vue&type=template&id=5c3818a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h1 class=\"text-xl font-sans mb-3 text-gray-900\">Add a recipe</h1> "),(Object.keys(_vm.errors).length !== 0)?_vm._ssrNode("<div class=\"bg-red-300 border-red-800 border-2 p-2 align-center flex justify-between rounded\">","</div>",[_vm._ssrNode("<ul>"+(_vm._ssrList((_vm.errors),function(error){return ("<li>"+_vm._ssrEscape(_vm._s(error[0]))+"</li>")}))+"</ul> "),_vm._ssrNode("<button class=\"hover:text-red-800 focus:outline-none\">","</button>",[_c('fa-layers',{},[_c('fa',{attrs:{"icon":"times"}})],1)],1)],2):_vm._e(),_vm._ssrNode(" <div class=\"mb-6\"><div class=\"flex\"><div class=\"flex-grow mr-5\"><label for=\"title\" class=\"text-sm text-gray-600 font-sans\">titel</label> <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"titel\" required=\"required\""+(_vm._ssrAttr("value",(_vm.title)))+" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full\"></div> <div class=\"w-1/6 flex-none\"><label for=\"people\" class=\"text-sm text-gray-600 font-sans\">aantal</label> <input type=\"number\" name=\"people\""+(_vm._ssrAttr("value",(_vm.people)))+" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full\"></div></div></div> <div class=\"mb-6\"><label for=\"image\" class=\"text-sm text-gray-600 font-sans block\">afbeelding</label> <input type=\"file\" accept=\"image/*\" name=\"image\" id=\"image\" class=\"bg-gray-300 border-b-2 border-red-300 focus:border-red-500 focus:outline-none\"></div> "),_vm._ssrNode("<div class=\"mb-6\">","</div>",[_vm._ssrNode("<label for=\"ingredients\" class=\"text-sm text-gray-600 font-sans\">ingredienten</label> "),_vm._l((_vm.ingredients),function(ingredient,index){return _vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"w-full flex\">","</div>",[_vm._ssrNode("<input type=\"number\" min=\"0\" placeholder=\"hoeveelheid\""+(_vm._ssrAttr("value",(ingredient.qnty)))+" class=\"bg-gray-300 focus:outline-none p-1 mr-3 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-12 flex-none\"> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(ingredient.unit),expression:"ingredient.unit"}],staticClass:"bg-gray-300 focus:outline-none p-1 mr-3 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-14 flex-none",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(ingredient, "unit", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{attrs:{"value":""}}),_vm._v(" "),_vm._l((_vm.options),function(option){return _c('option',{key:option,domProps:{"value":option}},[_vm._v("\n              "+_vm._s(option)+"\n            ")])})],2),_vm._ssrNode(" <input type=\"text\" placeholder=\"ingredient\""+(_vm._ssrAttr("value",(ingredient.name)))+" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out flex-grow\"> "),_vm._ssrNode("<button class=\"pl-3 hover:text-red-500 focus:outline-none\">","</button>",[_c('fa',{attrs:{"icon":"trash"}})],1)],2)])}),_vm._ssrNode(" <button class=\"block mt-3 bg-gray-300 p-2 pl-3 pr-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out\">\n        Ingredient Toevoegen\n      </button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-6\">","</div>",[_vm._ssrNode("<label for=\"instructies\" class=\"text-sm text-gray-600 font-sans\">instructies</label> "),_vm._l((_vm.instructies),function(stap,index){return _vm._ssrNode("<div class=\"mb-2\">","</div>",[_vm._ssrNode("<div class=\"flex items-center pb-2\">","</div>",[_vm._ssrNode("<h2 class=\"text-l\">"+_vm._ssrEscape("Stap "+_vm._s(index + 1))+"</h2> "),_vm._ssrNode("<button class=\"w-10 hover:text-red-500 focus:outline-none\">","</button>",[_c('fa-layers',{staticClass:"fa-xs"},[_c('fa',{attrs:{"icon":"trash"}})],1)],1)],2),_vm._ssrNode(" <textarea type=\"text\" placeholder=\"Instructie\" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full\">"+_vm._ssrEscape(_vm._s(stap.beschrijving))+"</textarea>")],2)}),_vm._ssrNode(" <button class=\"block mt-3 bg-gray-300 p-2 pl-3 pr-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out\">\n        Stap toevoegen\n      </button>")],2),_vm._ssrNode(" <div class=\"mb-6\"><label for=\"source\" class=\"text-sm text-gray-600 font-sans\">bron</label> <input type=\"text\" id=\"source\" name=\"source\" placeholder=\"bron (website/kookboek)\""+(_vm._ssrAttr("value",(_vm.source)))+" class=\"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full\"></div> <button class=\"bg-gray-300 p-2 px-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out\">\n      Sla op\n    </button>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/recipes/add.vue?vue&type=template&id=5c3818a4&

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
      source: ''
    };
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
      return this.$axios.post('http://192.168.2.248:3333/api/recipes/upload-image', fd).then(response => response.data).catch(error => {
        this.errors = error.response.data;
      });
    },

    async addRecipe() {
      if (typeof this.file !== 'undefined' && this.file !== null && this.filepath.length === 0) {
        this.filepath = await this.uploadImage();
      }

      let self = this;
      this.$axios.post('http://192.168.2.248:3333/api/recipes', {
        ingredients: this.ingredients,
        title: this.title,
        people: this.people,
        instructies: this.instructies,
        imagepath: this.filepath,
        source: this.source
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





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  recipes_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0636b9a2"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add.js.map