(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f929"],{b3ce:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md11:""}},[a("material-card",[a("v-card-text",[a("div"),t._v(" "),a("p",{staticClass:"display-1 text--primary"},[t._v("\n            Add A New Admin\n          ")]),t._v(" "),a("div",{staticClass:"text--primary"},[t._v("\n            Kindly fill all the required fields\n          ")])]),t._v(" "),a("v-form",{on:{submit:t.AddAdmin}},[a("v-container",{attrs:{"py-0":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-combobox",{staticClass:"purple-input",attrs:{rules:[t.rules.required],items:t.facilities,"item-value":"",label:"Facility",loading:t.load},model:{value:t.facility_id,callback:function(e){t.facility_id=e},expression:"facility_id"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-combobox",{staticClass:"green-input",attrs:{rules:[t.rules.required],items:t.all_users,"item-text":"surname","item-value":"id",label:"Name"},model:{value:t.user_id,callback:function(e){t.user_id=e},expression:"user_id"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:"","text-xs-right":""}},[a("v-btn",{staticClass:"mx-0 font-weight-light",attrs:{type:"submit",color:"success"}},[t._v("\n                  Submit\n                ")])],1)],1)],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("material-card",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs10:"",md6:""}},[a("p",{staticClass:"display-1 text--primary"},[t._v("\n              Admins List\n          ")])]),t._v(" "),a("v-flex",{attrs:{xs10:"",md6:""}})],1),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.admins,loading:!0,"rows-per-page-items":t.rowsPerPageItems},scopedSlots:t._u([{key:"headerCell",fn:function(e){var i=e.header;return[a("span",{staticClass:"subheading text--darken-3",domProps:{textContent:t._s(i.text)}})]}},{key:"items",fn:function(e){var i=e.item;return[a("tr",[a("td",[t._v(t._s(i.first_name))]),t._v(" "),a("td",[t._v(t._s(i.surname))]),t._v(" "),a("td",[t._v(t._s(i.email))])])]}}])})],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{color:t.color,bottom:t.bottom,top:t.top,left:t.left,right:t.right,dark:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("v-icon",{staticClass:"mr-3",attrs:{color:"white"}},[t._v("\n      mdi-bell-plus\n    ")]),t._v(" "),a("div",[t._v(t._s(t.pre_out)+" "+t._s(t.output.message)),a("br"),t._v(" "+t._s(t.output.errors))]),t._v(" "),a("v-icon",{attrs:{size:"16"},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      mdi-close-circle\n    ")])],1)],1)},s=[],n=a("4795"),r=a.n(n),o=a("bc3a"),l=a.n(o);function c(t,e,a,i,s,n,r){try{var o=t[n](r),l=o.value}catch(c){return void a(c)}o.done?e(l):Promise.resolve(l).then(i,s)}function u(t){return function(){var e=this,a=arguments;return new Promise((function(i,s){var n=t.apply(e,a);function r(t){c(n,i,s,r,o,"next",t)}function o(t){c(n,i,s,r,o,"throw",t)}r(void 0)}))}}var d={data:function(){return{rowsPerPageItems:[50,250,500],switch1:!0,name:"",load:!0,facility_id:"",user_id:"",facilities:[],headers:[{sortable:!1,text:"First Name",value:"first_name"},{sortable:!1,text:"Surname",value:"surname"},{sortable:!1,text:"Email",value:"email"}],items:[],facilities_all:[],all_users:[],admins:[],rules:{required:function(t){return!!t||"Required."}},resp:!1,output:"",pre_out:"",color:null,colors:["success","error"],top:!0,bottom:!1,left:!1,right:!1,snackbar:!1,downloadLoading:!1,filename:"Devices",autoWidth:!0,bookType:"xlsx"}},created:function(){this.Facilities(),this.Admins(),this.UsersList()},methods:{checkData:function(){return""==this.facility_id?(this.pre_out="Pick facilty to proceed",this.snack("top","center"),!1):""!=this.name||(this.pre_out="Provide device name to proceed",this.snack("top","center"),!1)},Admins:function(){var t=this;l.a.get("facility/admins/all").then((function(e){t.admins=e.data.data})).catch((function(t){return console.log(t.message)}))},loopT:function(t){var e=this;return u(r.a.mark((function a(){var i,s;return r.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=0;case 1:if(!(i<1)){a.next=13;break}if(null==t){a.next=10;break}return a.next=5,l.a.get(t);case 5:s=a.sent,t=s.data.links.next,e.all_users=e.admins.concat(s.data.data),a.next=11;break;case 10:i=11;case 11:a.next=1;break;case 13:e.FilterAdmns();case 14:case"end":return a.stop()}}),a)})))()},Facilities:function(){var t=this;l.a.get("facilities").then((function(e){for(var a in t.facilities_all=e.data.data,t.facilities_all){var i=new Object;i.text=t.facilities_all[a].name,i.value=t.facilities_all[a],t.facilities.push(i)}t.load=!1}))},UsersList:function(){var t=this;l.a.get("users").then((function(e){t.all_users=e.data.data})).catch((function(t){return console.log(t.message)}))},AddAdmin:function(t){var e=this;t.preventDefault(),this.checkData()&&l.a.post("facility_admin/assign",{facility_id:this.facility_id.value.id,user_id:this.name.value.id}).then((function(t){e.output=t.data,e.resp=Boolean(t.data.success),e.snack("top","center"),e.items=[],e.Admins()})).catch((function(t){e.output=t,e.snack("top","center")}))},handleDownload:function(){var t=this;this.downloadLoading=!0,a.e("chunk-0e610f46").then(a.bind(null,"4bf8")).then((function(e){var a=["Name","Safety Designed","Created On"],i=["name","safety_designed","created_at"],s=t.items,n=t.formatJson(i,s);e.export_json_to_excel({header:a,data:n,filename:t.filename,autoWidth:t.autoWidth,bookType:t.bookType}),t.downloadLoading=!1}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return"timestamp"===t?parseTime(e[t]):e[t]}))}))},snack:function(){this.top=!1,this.bottom=!1,this.left=!1,this.right=!1;for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];for(var i=0,s=e;i<s.length;i++){var n=s[i];this[n]=!0}this.resp?this.color=this.colors[0]:this.color=this.colors[1],this.snackbar=!0}}},f=d,m=a("2877"),v=Object(m["a"])(f,i,s,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d20f929.28b1bf5c.js.map