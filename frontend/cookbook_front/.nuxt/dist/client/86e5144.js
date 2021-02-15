(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(e,t,r){"use strict";r.r(t);r(27);var n=r(6),o={data:function(){return{recipe_data:{},people:null}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=r.id,t.abrupt("return",{recipe_id:n});case 3:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("http://192.168.2.252:3333/api/recipes/"+e.recipe_id).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:e.recipe_data=t.sent,console.log(e.recipe_data),e.people=e.recipe_data.people;case 5:case"end":return t.stop()}}),t)})))()},computed:{serverUrl:function(){return"192.168.2.252:3333"}}},c=r(32),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.$fetchState.pending?r("p"):e.$fetchState.error?r("p",[e._v("Error tijdens het laden van de recepten")]):r("div",[r("div",{staticClass:"bg-red-500 rounded-lg h-48"},[null!==e.recipe_data.image?r("img",{staticClass:"w-full h-48 object-cover rounded-lg opacity-100",attrs:{src:"http://"+e.serverUrl+"/"+e.recipe_data.image,alt:""}}):e._e()]),e._v(" "),r("div",{staticClass:"py-2 mb-1"},[r("div",{staticClass:"flex items-center"},[r("p",{staticClass:"text-2xl inline-block"},[e._v(e._s(e.recipe_data.title))]),e._v(" "),r("nuxt-link",{staticClass:" hover:text-red-500 focus:outline-none  mt-1 ml-4",attrs:{to:"/recipes/"+e.recipe_id+"/edit"}},[r("fa-layers",{staticClass:"fa inline-block"},[r("fa",{attrs:{icon:"pen"}})],1)],1)],1),e._v(" "),e.recipe_data.source?r("p",{staticClass:"text-sm text-gray-600 dark:text-gray-300"},[e._v("\n        bron: "+e._s(e.recipe_data.source)+"\n      ")]):e._e(),e._v(" "),r("div",{staticClass:"flex flex-wrap mt-1"},e._l(e.recipe_data.tags,(function(t,n){return r("div",{key:n,staticClass:"bg-gray-200 dark:bg-gray-600 py-1 px-2 rounded-md mr-2"},[e._v("\n          "+e._s(t.name)+"\n        ")])})),0)]),e._v(" "),r("div",{staticClass:"md:flex"},[r("div",{staticClass:"py-2 md:flex-shrink md:mr-12 md:max-w-p40"},[r("p",{staticClass:"text-lg font-bold pb-1"},[e._v("Aantal personen")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.people,expression:"people"}],staticClass:"bg-gray-200 dark:bg-gray-600 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out w-16 mb-2",attrs:{type:"number"},domProps:{value:e.people},on:{input:function(t){t.target.composing||(e.people=t.target.value)}}}),e._v(" "),r("p",{staticClass:"text-lg font-bold"},[e._v("Ingredienten")]),e._v(" "),r("table",{staticClass:"table-auto"},[r("tbody",e._l(e.recipe_data.ingredient,(function(t,n){return r("tr",{key:n},[r("td",{staticClass:"align-top",attrs:{nowrap:"nowrap"}},[e._v("\n                "+e._s(Math.round(t.quantity*e.people/e.recipe_data.people))+" "+e._s(t.unit)+"\n              ")]),e._v(" "),r("td",{staticClass:"px-4"},[e._v(e._s(t.ingredient))])])})),0)])]),e._v(" "),r("div",{staticClass:"py-2 md:flex-grow"},e._l(e.recipe_data.instruction,(function(t){return r("div",{key:t.step,staticClass:"pb-2 mb-4 w-full border-b-2 border-gray-300"},[r("p",{staticClass:"text-lg font-bold"},[e._v("\n            Stap "+e._s(Number(t.step)+1)+"\n          ")]),e._v(" "),r("p",{staticClass:"text-sm"},[e._v(e._s(t.instruction))])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports}}]);