(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{265:function(e,t,n){"use strict";n.r(t);n(116),n(187),n(28);var r=n(6),o={data:function(){return{ingredients:[{name:"",qnty:"",unit:""}],title:"",people:0,instructies:[{beschrijving:""}],options:["g","kg","L","mL","tsp","tbsp"],errors:{},file:null,filepath:"",source:""}},methods:{addIngredient:function(){var e=this;this.ingredients.push({name:"",qnty:"",unit:""}),this.$nextTick((function(){return e.$refs.ingredient_qnty.slice(-1)[0].focus()}))},removeIngredient:function(e){this.ingredients.splice(e,1)},addStap:function(){var e=this;this.instructies.push({beschrijving:""}),this.$nextTick((function(){return e.$refs.instruction.slice(-1)[0].focus()}))},removeStap:function(e){this.instructies.splice(e,1)},handleFile:function(e){this.file=e.target.files[0]},uploadImage:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("image",e.file),t.abrupt("return",e.$axios.post("http://192.168.2.248:3333/api/recipes/upload-image",n).then((function(e){return e.data})).catch((function(t){e.errors=t.response.data})));case 3:case"end":return t.stop()}}),t)})))()},addRecipe:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e.file||null===e.file||0!==e.filepath.length){t.next=4;break}return t.next=3,e.uploadImage();case 3:e.filepath=t.sent;case 4:n=e,e.$axios.post("http://192.168.2.248:3333/api/recipes",{ingredients:e.ingredients,title:e.title,people:e.people,instructies:e.instructies,imagepath:e.filepath,source:e.source}).then((function(e){console.log(e),n.$router.push("/recipes")})).catch((function(t){console.log("ERROR: ",t.response.data),e.errors=t.response.data}));case 6:case"end":return t.stop()}}),t)})))()}}},l=n(33),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h1",{staticClass:"text-xl font-sans mb-3 text-gray-900"},[e._v("Add a recipe")]),e._v(" "),0!==Object.keys(e.errors).length?n("div",{staticClass:"bg-red-300 border-red-800 border-2 p-2 align-center flex justify-between rounded"},[n("ul",e._l(e.errors,(function(t){return n("li",{key:t[0]},[e._v(e._s(t[0]))])})),0),e._v(" "),n("button",{staticClass:"hover:text-red-800 focus:outline-none",on:{click:function(t){e.errors={}}}},[n("fa-layers",{},[n("fa",{attrs:{icon:"times"}})],1)],1)]):e._e(),e._v(" "),n("div",{staticClass:"mb-6"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex-grow mr-5"},[n("label",{staticClass:"text-sm text-gray-600 font-sans",attrs:{for:"title"}},[e._v("titel")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full",attrs:{type:"text",id:"title",name:"title",placeholder:"titel",required:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"w-1/6 flex-none"},[n("label",{staticClass:"text-sm text-gray-600 font-sans",attrs:{for:"people"}},[e._v("aantal")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.people,expression:"people",modifiers:{number:!0}}],staticClass:"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full",attrs:{type:"number",name:"people"},domProps:{value:e.people},on:{input:function(t){t.target.composing||(e.people=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])]),e._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"text-sm text-gray-600 font-sans block",attrs:{for:"image"}},[e._v("afbeelding")]),e._v(" "),n("input",{staticClass:"bg-gray-300 border-b-2 border-red-300 focus:border-red-500 focus:outline-none",attrs:{type:"file",accept:"image/*",name:"image",id:"image"},on:{change:e.handleFile}})]),e._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"text-sm text-gray-600 font-sans",attrs:{for:"ingredients"}},[e._v("ingredienten")]),e._v(" "),e._l(e.ingredients,(function(t,r){return n("div",{key:t},[n("div",{staticClass:"w-full flex"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.qnty,expression:"ingredient.qnty",modifiers:{number:!0}}],ref:"ingredient_qnty",refInFor:!0,staticClass:"bg-gray-300 focus:outline-none p-1 mr-3 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-12 flex-none",attrs:{type:"number",min:"0",placeholder:"hoeveelheid"},domProps:{value:t.qnty},on:{input:function(n){n.target.composing||e.$set(t,"qnty",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.unit,expression:"ingredient.unit"}],staticClass:"bg-gray-300 focus:outline-none p-1 mr-3 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-14 flex-none",on:{change:function(n){var r=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(t,"unit",n.target.multiple?r:r[0])}}},[n("option",{attrs:{value:""}}),e._v(" "),e._l(e.options,(function(option){return n("option",{key:option,domProps:{value:option}},[e._v("\n              "+e._s(option)+"\n            ")])}))],2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"ingredient.name"}],key:t,staticClass:"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out flex-grow",attrs:{type:"text",placeholder:"ingredient"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),e._v(" "),n("button",{staticClass:"pl-3 hover:text-red-500 focus:outline-none",on:{click:function(t){return e.removeIngredient(r)}}},[n("fa",{attrs:{icon:"trash"}})],1)])])})),e._v(" "),n("button",{staticClass:"block mt-3 bg-gray-300 p-2 pl-3 pr-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out",on:{click:e.addIngredient}},[e._v("\n        Ingredient Toevoegen\n      ")])],2),e._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"text-sm text-gray-600 font-sans",attrs:{for:"instructies"}},[e._v("instructies")]),e._v(" "),e._l(e.instructies,(function(t,r){return n("div",{key:t,staticClass:"mb-2"},[n("div",{staticClass:"flex items-center pb-2"},[n("h2",{staticClass:"text-l"},[e._v("Stap "+e._s(r+1))]),e._v(" "),n("button",{staticClass:"w-10 hover:text-red-500 focus:outline-none",on:{click:function(t){return e.removeStap(r)}}},[n("fa-layers",{staticClass:"fa-xs"},[n("fa",{attrs:{icon:"trash"}})],1)],1)]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.beschrijving,expression:"stap.beschrijving"}],key:r,ref:"instruction",refInFor:!0,staticClass:"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full",attrs:{type:"text",placeholder:"Instructie"},domProps:{value:t.beschrijving},on:{input:function(n){n.target.composing||e.$set(t,"beschrijving",n.target.value)}}})])})),e._v(" "),n("button",{staticClass:"block mt-3 bg-gray-300 p-2 pl-3 pr-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out",on:{click:e.addStap}},[e._v("\n        Stap toevoegen\n      ")])],2),e._v(" "),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"text-sm text-gray-600 font-sans",attrs:{for:"source"}},[e._v("bron")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],staticClass:"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-full",attrs:{type:"text",id:"source",name:"source",placeholder:"bron (website/kookboek)"},domProps:{value:e.source},on:{input:function(t){t.target.composing||(e.source=t.target.value)}}})]),e._v(" "),n("button",{staticClass:"bg-gray-300 p-2 px-3 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out",on:{click:e.addRecipe}},[e._v("\n      Sla op\n    ")])])])}),[],!1,null,null,null);t.default=component.exports}}]);