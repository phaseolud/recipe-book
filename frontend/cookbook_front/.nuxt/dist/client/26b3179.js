(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{263:function(e,t,r){"use strict";r.r(t);var n={props:["recipe"]},c=r(33),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"bg-gray-200 p-2 rounded-sm",attrs:{to:"recipes/"+e.recipe.id}},[r("div",{staticClass:"bg-red-300 h-32 rounded-lg hover:bg-red-500 flex align-center"},[null!==e.recipe.image?r("img",{staticClass:"hover:opacity-50 object-cover w-full h-32 rounded-lg",attrs:{src:"http://192.168.2.248:3333/"+e.recipe.image,alt:"",onerror:"this.style.display='none'"}}):e._e()]),e._v(" "),r("div",{staticClass:"flex justify-between py-2"},[r("p",{staticClass:"text-sm font-bold"},[e._v(e._s(e.recipe.title))])])])}),[],!1,null,null,null);t.default=component.exports},264:function(e,t,r){"use strict";r.r(t);r(9),r(59),r(28);var n=r(6),c={data:function(){return{recipes:[]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://192.168.2.248/api/recipes").then((function(e){return e.json()}));case 2:e.recipes=t.sent;case 3:case"end":return t.stop()}}),t)})))()}))},o=r(33),component=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.$fetchState.pending?t("p"):this.$fetchState.error?t("p",[this._v("Error tijdens het laden van de recepten")]):t("div",{staticClass:"transition duration-300 ease-in-out grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},this._l(this.recipes,(function(e){return t("recipe-block",{key:e.id,attrs:{recipe:e}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{RecipeBlock:r(263).default})}}]);