(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{266:function(t,e,r){"use strict";r.r(e);r(28);var n=r(6),c={data:function(){return{recipe_data:{}}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=r.id,e.abrupt("return",{recipe_id:n});case 3:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("http://erised:3333/api/recipes/"+t.recipe_id).then((function(t){return t.data})).catch((function(t){return console.log(t)}));case 2:t.recipe_data=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},d=r(33),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$fetchState.pending?r("p"):t.$fetchState.error?r("p",[t._v("Error tijdens het laden van de recepten")]):r("div",[r("div",{staticClass:"bg-red-500 rounded-lg"},[null!==t.recipe_data.image?r("img",{staticClass:"w-full h-48 object-cover rounded-lg opacity-100",attrs:{src:"http://erised:3333/"+t.recipe_data.image,alt:""}}):t._e()]),t._v(" "),r("div",{staticClass:"py-2 mb-4"},[r("p",{staticClass:"text-xl"},[t._v(t._s(t.recipe_data.title))]),t._v(" "),t.recipe_data.source?r("p",{staticClass:"text-sm text-gray-600"},[t._v("\n        bron: "+t._s(t.recipe_data.source)+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"md:flex"},[r("div",{staticClass:"py-2 md:flex-shrink md:mr-12"},[r("p",{staticClass:"text-lg font-bold"},[t._v("Ingredienten")]),t._v(" "),r("table",{staticClass:"table-auto text"},[r("tbody",t._l(t.recipe_data.ingredient,(function(e){return r("tr",{key:e},[r("td",{},[t._v(t._s(e.quantity)+" "+t._s(e.unit))]),t._v(" "),r("td",{staticClass:"px-4"},[t._v(t._s(e.ingredient))])])})),0)])]),t._v(" "),r("div",{staticClass:"py-2 md:flex-grow"},t._l(t.recipe_data.instruction,(function(e){return r("div",{key:e.step,staticClass:"pb-2 mb-4 w-full border-b-2 border-gray-300"},[r("p",{staticClass:"text-lg font-bold"},[t._v("\n          Stap "+t._s(Number(e.step)+1)+"\n        ")]),t._v(" "),r("p",{staticClass:"text-sm"},[t._v(t._s(e.instruction))])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);