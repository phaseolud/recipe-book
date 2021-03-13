exports.ids = [3];
exports.modules = {

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recipes/_id/index.vue?vue&type=template&id=016961a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.$fetchState.pending)?_vm._ssrNode("<p>","</p>"):(_vm.$fetchState.error)?_vm._ssrNode(("<p>Error tijdens het laden van de recepten</p>")):_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"bg-red-500 rounded-lg h-48\">"+((_vm.recipe_data.image !== null)?("<img"+(_vm._ssrAttr("src",'http://' + _vm.serverUrl + '/' + _vm.recipe_data.image))+" alt class=\"w-full h-48 object-cover rounded-lg opacity-100\">"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"py-2 mb-1\">","</div>",[_vm._ssrNode("<div class=\"flex items-center\">","</div>",[_vm._ssrNode("<p class=\"text-2xl inline-block\">"+_vm._ssrEscape(_vm._s(_vm.recipe_data.title))+"</p> "),_c('nuxt-link',{staticClass:" hover:text-red-500 focus:outline-none  mt-1 ml-4",attrs:{"to":'/recipes/' + _vm.recipe_id + '/edit'}},[_c('fa-layers',{staticClass:"fa inline-block"},[_c('fa',{attrs:{"icon":"pen"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<button class=\"mt-1 ml-4\">","</button>",[_c('fa',{attrs:{"icon":"save"}})],1)],2),_vm._ssrNode(" "+((_vm.recipe_data.source)?("<p class=\"text-sm text-gray-600 dark:text-gray-300\">"+_vm._ssrEscape("\n        bron: "+_vm._s(_vm.recipe_data.source)+"\n      ")+"</p>"):"<!---->")+" <div class=\"flex flex-wrap mt-1\">"+(_vm._ssrList((_vm.recipe_data.tags),function(tag,index){return ("<div class=\"bg-gray-200 dark:bg-gray-600 py-1 px-2 rounded-md mr-2\">"+_vm._ssrEscape("\n          "+_vm._s(tag.name)+"\n        ")+"</div>")}))+"</div>")],2),_vm._ssrNode(" <div class=\"md:flex\"><div class=\"py-2 md:flex-shrink md:mr-12 md:max-w-p40\"><p class=\"text-lg font-bold pb-1\">Aantal personen</p> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.people)))+" class=\"bg-gray-200 dark:bg-gray-600 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-16 mb-2\"> <p class=\"text-lg font-bold\">Ingredienten</p> <table class=\"table-auto\"><tbody>"+(_vm._ssrList((_vm.recipe_data.ingredient),function(ingredient,idx){return ("<tr><td nowrap=\"nowrap\" class=\"align-top\">"+((ingredient.quantity)?("<div>"+_vm._ssrEscape("\n                  \n                  "+_vm._s(Math.round(ingredient.quantity * _vm.people/ _vm.recipe_data.people))+" "+_vm._s(ingredient.unit)+"\n                ")+"</div>"):"<!---->")+"</td> <td class=\"px-4\">"+_vm._ssrEscape(_vm._s(ingredient.ingredient))+"</td></tr>")}))+"</tbody></table></div> <div class=\"py-2 md:flex-grow\">"+(_vm._ssrList((_vm.recipe_data.instruction),function(instruction){return ("<div class=\"pb-2 mb-4 w-full border-b-2 border-gray-300\"><p class=\"text-lg font-bold\">"+_vm._ssrEscape("\n            Stap "+_vm._s(Number(instruction.step) + 1)+"\n          ")+"</p> <p class=\"text-sm\">"+_vm._ssrEscape(_vm._s(instruction.instruction))+"</p></div>")}))+"</div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/recipes/_id/index.vue?vue&type=template&id=016961a6&

// EXTERNAL MODULE: external "jspdf"
var external_jspdf_ = __webpack_require__(37);
var external_jspdf_default = /*#__PURE__*/__webpack_require__.n(external_jspdf_);

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
      recipe_data: {},
      people: null
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
    this.people = this.recipe_data.people;
  },

  computed: {
    serverUrl() {
      return "192.168.2.252:3333";
    }

  },
  methods: {
    createPDF() {
      const doc = new external_jspdf_default.a();
      let row = 30;
      let ingredient_col = 20;
      doc.setFont('helvetica');
      doc.setFontSize(36);
      doc.text(this.recipe_data.title, ingredient_col, row);
      row += 6;
      doc.setFontSize(16);
      doc.setTextColor(110, 110, 110);
      doc.text(String(this.recipe_data.people) + ' personen', ingredient_col, row);
      row += 30;
      let title_row = row; // ingredients

      doc.setFontSize(18);
      doc.setTextColor(232, 23, 82);
      doc.text('Ingredienten', ingredient_col, row);
      row += 8;
      doc.setFontSize(10);
      let lineHeight = doc.getLineHeight('Some text') / doc.internal.scaleFactor;
      doc.setTextColor(50, 50, 50);

      for (let i = 0; i < this.recipe_data.ingredient.length; i++) {
        const ing = this.recipe_data.ingredient[i];
        let ing_str = '';

        if (ing.quantity !== null) {
          ing_str += ing.quantity + " ";
        }

        ;

        if (ing.unit !== null) {
          ing_str += ing.unit + " ";
        }

        ;
        ing_str += ing.ingredient;
        let splitIng = doc.splitTextToSize(ing_str, 50);
        let ing_lines = splitIng.length;
        let blockHeight = splitIng.length * lineHeight;
        doc.text(splitIng, ingredient_col, row);
        row += blockHeight;
      } // beschrijving


      const beschrijving_col = 90;
      row = title_row;
      doc.setFontSize(18);
      doc.setTextColor(232, 23, 82);
      doc.text('Beschrijving', beschrijving_col, row);
      row += 8;
      doc.setFontSize(10);
      doc.setTextColor(50, 50, 50);

      for (let i = 0; i < this.recipe_data.instruction.length; i++) {
        const instr = this.recipe_data.instruction[i]; // step

        doc.setFontSize(18);
        doc.setTextColor(232, 23, 82);
        doc.text(String(i + 1), beschrijving_col - 3, row + 3, 'right'); // instruction

        doc.setFontSize(10);
        doc.setTextColor(50, 50, 50);
        let splitText = doc.splitTextToSize(instr.instruction, 110);
        doc.text(splitText, beschrijving_col, row);
        let lines = splitText.length;
        let blockHeight = lines * lineHeight;
        row += blockHeight + 6;
      }

      var string = doc.output('datauristring');
      var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
      var x = window.open();
      x.document.open();
      x.document.write(embed);
      x.document.close();
    }

  }
});
// CONCATENATED MODULE: ./pages/recipes/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var recipes_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

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