(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{236:function(t,e,n){"use strict";n.r(e);n(27);var r=n(6),o={data:function(){return{tag_new:"",tags:["abc"]}},addTag:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("http://192.168.2.252:3333/api/tags",{tag:t.tag_new}).then((function(t){return this.tag_new="",t.data})).catch((function(t){return console.log(t)}));case 2:t.tags=e.sent;case 3:case"end":return e.stop()}}),e)})))()},removeTag:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.delete("http://192.168.2.252:3333/api/tags/"+t).then((function(t){return t.data})).catch((function(t){return console.log(t)}));case 2:e.tags=n.sent;case 3:case"end":return n.stop()}}),n)})))()},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("http://192.168.2.252:3333/api/tags").then((function(t){return t.data})).catch((function(t){return console.log(t)}));case 2:t.tags=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},c=n(31),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-2xl"},[t._v("Instellingen")]),t._v(" "),n("div",[n("p",{staticClass:"text-xl my-2"},[t._v("Tags")]),t._v(" "),n("div",{staticClass:"flex content-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tag_new,expression:"tag_new"}],staticClass:"bg-gray-300 focus:outline-none p-1 border-b-2 border-red-300 focus:border-red-500 transition duration-300 ease-in-out h-10 mr-3",attrs:{type:"text",placeholder:"Tag"},domProps:{value:t.tag_new},on:{input:function(e){e.target.composing||(t.tag_new=e.target.value)}}}),t._v(" "),n("button",{staticClass:" bg-gray-300  px-3 h-10 focus:outline-none hover:bg-red-500 transition duration-300 ease-in-out"},[t._v("Voeg toe")])]),t._v(" "),n("div",t._l(t.tags,(function(e){return n("div",{key:e,staticClass:"rounded-lg bg-gray-300"},[t._v("\n        "+t._s(e)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);