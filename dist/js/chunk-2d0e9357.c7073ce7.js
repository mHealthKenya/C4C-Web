(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9357"],{"8d0e":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",{attrs:{"grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"","text-xs-right":""}},[e("v-btn",{staticClass:"mx-0 font-weight-light ",attrs:{color:"success"},on:{click:function(s){t.$router.push("add-resource")}}},[t._v("\n        Add A New Resource\n      ")])],1),t._v(" "),t._l(t.results,(function(s){return e("v-flex",{key:s.id,attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"744"}},[e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),t._v(" "),e("v-card-title",[t._v("\n          "+t._s(s.title)+"\n        ")]),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"green",text:""}},[t._v("Share")]),t._v(" "),e("v-btn",{attrs:{color:"purple",text:""}},[t._v("\n            Explore\n          ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(s){t.show=!t.show}}},[e("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),t._v(" "),e("v-expand-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("v-divider"),t._v(" "),e("v-card-text",[t._v("\n              "+t._s(s.body)+"\n            ")])],1)])],1)],1)}))],2)],1)},r=[],o=e("bc3a"),c=e.n(o),a={data:function(){return{results:[]}},created:function(){this.getResources()},methods:{getResources:function(){var t=this;c.a.get("resources/cmes").then((function(s){t.results=s.data.data})).catch((function(t){return console.log(t.message)}))}}},i=a,v=e("2877"),u=Object(v["a"])(i,n,r,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e9357.c7073ce7.js.map