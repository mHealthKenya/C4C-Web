(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c26ac"],{"49e6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md11:""}},[a("material-card",{attrs:{color:"green",title:"New Broadcast",text:"Kindly fill all the required fields"}},[a("v-card-text",[a("p",{staticClass:"display-1 text--primary"},[e._v("\n              New Bulk Broadcast\n            ")]),e._v(" "),a("div",{staticClass:"text--primary"},[e._v("\n              If you are uploading an exel, the column name of the phone numbers should be 'mobile'\n            ")])]),e._v(" "),a("div",{staticStyle:{height:"10%"}},[a("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}})],1),e._v(" "),a("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.post_BulkBroadcast(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",{attrs:{"py-0":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:[e.rules.required],label:"Add Phone Numbers Seperated By A Comma",required:"","single-line":""},model:{value:e.phoneNo,callback:function(t){e.phoneNo=t},expression:"phoneNo"}},[e._v("\n                "+e._s(e.phoneNo)+"\n                ")])],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{rules:e.textRules,label:"Message",counter:"",placeholder:"Write here",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"mr-4 success",attrs:{disabled:!e.valid,type:"submit"},on:{click:function(t){e.validate(),e.alert=!e.alert,e.dialog1=!0}}},[e._v("\n                submit")])],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-dialog",{attrs:{"max-width":"290",lazy:""},model:{value:e.dialog1,callback:function(t){e.dialog1=t},expression:"dialog1"}},[a("v-card",[a("v-card-text",{staticClass:"text-xs-center"},[a("v-progress-circular",{staticClass:"primary--text",attrs:{size:70,indeterminate:""}})],1)],1)],1),e._v(" "),a("v-alert",{attrs:{value:e.alert,icon:"mdi-alert",dismissible:"",outline:"",color:"error",elevation:"2"}},[a("h6",[e._v(" "+e._s(e.output.error)+" "+e._s(e.output.message)+" ")])])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],l=a("bc3a"),i=a.n(l),o=a("3796"),n={components:{UploadExcelComponent:o["default"]},data:function(){return{phoneNo:[],tableHeader:[],valid:!0,dialog1:!1,alert:!1,output:"",phoneNumbers:[],message:"",rules:{required:function(e){return!!e||"This field is required."}},textRules:[function(e){return e.length<=160||"Max of 160 Characters"}]}},watch:{dialog1:function(e){var t=this;e&&setTimeout((function(){return t.dialog1=!1}),4e3)}},methods:{validate:function(){this.$refs.form.validate()},post_BulkBroadcast:function(e){var t=this;e.preventDefault(),i.a.post("broadcasts/web/direct",{phone_numbers:String(this.phoneNo),message:this.message}).then((function(e){t.output=e.data,t.resp=Boolean(e.data.success),t.alert=!0,t.$router.push("/all_broadcasts")})).catch((function(e){t.output=e,t.alert=!0}))},beforeUpload:function(e){var t=e.size/1024/1024<1;return!!t||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var t=e.results,a=e.header;for(var s in this.tableHeader=a,this.is_data=!1,t){if("254"!=String(t[s].mobile).slice(0,3)&&"7"===String(t[s].mobile).slice(0,1))t[s].mobile="254"+String(t[s].mobile);else if(String(t[s].mobile).length<5){console.log(t.splice(s,1));break}this.phoneNo.push(t[s].mobile)}}}},u=n,c=a("2877"),d=Object(c["a"])(u,s,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c26ac.64540907.js.map