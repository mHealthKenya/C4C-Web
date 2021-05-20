(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3033b43b"],{2699:function(t,e,n){"use strict";var i=n("e11e"),o=function(t,e){var n;return function(){var i=[],o=arguments.length;while(o--)i[o]=arguments[o];var a=this;n&&clearTimeout(n),n=setTimeout((function(){t.apply(a,i),n=null}),e)}},a=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},r=function(t,e,n,o){var r=function(o){var r="set"+a(o),s=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[r]?t.$watch(o,(function(e,n){t[r](e,n)}),{deep:s}):"setOptions"===r?t.$watch(o,(function(t,n){Object(i["setOptions"])(e,t)}),{deep:s}):e[r]&&t.$watch(o,(function(t,n){e[r](t)}),{deep:s})};for(var s in n)r(s)},s=function(t){var e={};for(var n in t){var i=t[n];null!==i&&void 0!==i&&(e[n]=i)}return e},l=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var i=s(n);t=s(t);var o=e.$options.props;for(var a in t){var r=o[a]?o[a].default:Symbol("unique");i[a]&&r!==t[a]?(console.warn(a+" props is overriding the value passed in the options props"),i[a]=t[a]):i[a]||(i[a]=t[a])}return i},u={props:{options:{type:Object,default:function(){return{}}}}},c={name:"LMap",mixins:[u],props:{center:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},bounds:{type:[Array,Object],custom:!0,default:null},maxBounds:{type:[Array,Object],default:null},zoom:{type:Number,custom:!0,default:0},minZoom:{type:Number,default:null},maxZoom:{type:Number,default:null},paddingBottomRight:{type:Array,custom:!0,default:null},paddingTopLeft:{type:Array,custom:!0,default:null},padding:{type:Array,custom:!0,default:null},worldCopyJump:{type:Boolean,default:!1},crs:{type:Object,custom:!0,default:function(){return i["CRS"].EPSG3857}},maxBoundsViscosity:{type:Number,default:null},inertia:{type:Boolean,default:null},inertiaDeceleration:{type:Number,default:null},inertiaMaxSpeed:{type:Number,default:null},easeLinearity:{type:Number,default:null},zoomAnimation:{type:Boolean,default:null},zoomAnimationThreshold:{type:Number,default:null},fadeAnimation:{type:Boolean,default:null},markerZoomAnimation:{type:Boolean,default:null},noBlockingAnimations:{type:Boolean,default:!1}},data:function(){return{ready:!1,lastSetCenter:null,lastSetBounds:null,lastSetZoom:null,layerControl:void 0,layersToAdd:[],layersInControl:[]}},computed:{fitBoundsOptions:function(){var t={animate:!this.noBlockingAnimations&&null};return this.padding?t.padding=this.padding:(this.paddingBottomRight&&(t.paddingBottomRight=this.paddingBottomRight),this.paddingTopLeft&&(t.paddingTopLeft=this.paddingTopLeft)),t}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()},mounted:function(){var t=this,e=l({minZoom:this.minZoom,maxZoom:this.maxZoom,maxBounds:this.maxBounds,maxBoundsViscosity:this.maxBoundsViscosity,worldCopyJump:this.worldCopyJump,crs:this.crs,center:this.center,zoom:this.zoom,inertia:this.inertia,inertiaDeceleration:this.inertiaDeceleration,inertiaMaxSpeed:this.inertiaMaxSpeed,easeLinearity:this.easeLinearity,zoomAnimation:this.zoomAnimation,zoomAnimationThreshold:this.zoomAnimationThreshold,fadeAnimation:this.fadeAnimation,markerZoomAnimation:this.markerZoomAnimation},this);this.mapObject=Object(i["map"])(this.$el,e),this.setBounds(this.bounds),this.mapObject.on("moveend",o(this.moveEndHandler,100)),this.mapObject.on("overlayadd",this.overlayAddHandler),this.mapObject.on("overlayremove",this.overlayRemoveHandler),i["DomEvent"].on(this.mapObject,this.$listeners),r(this,this.mapObject,this.$options.props),this.ready=!0,this.$emit("leaflet:load"),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},methods:{registerLayerControl:function(t){var e=this;this.layerControl=t,this.mapObject.addControl(t.mapObject),this.layersToAdd.forEach((function(t){e.layerControl.addLayer(t)})),this.layersToAdd=[]},addLayer:function(t,e){if(void 0!==t.layerType)if(void 0===this.layerControl)this.layersToAdd.push(t);else{var n=this.layersInControl.find((function(e){return e.mapObject._leaflet_id===t.mapObject._leaflet_id}));n||(this.layerControl.addLayer(t),this.layersInControl.push(t))}e||!1===t.visible||this.mapObject.addLayer(t.mapObject)},hideLayer:function(t){this.mapObject.removeLayer(t.mapObject)},removeLayer:function(t,e){void 0!==t.layerType&&(void 0===this.layerControl?this.layersToAdd=this.layersToAdd.filter((function(e){return e.name!==t.name})):(this.layerControl.removeLayer(t),this.layersInControl=this.layersInControl.filter((function(e){return e.mapObject._leaflet_id!==t.mapObject._leaflet_id})))),e||this.mapObject.removeLayer(t.mapObject)},setZoom:function(t,e){this.mapObject.setZoom(t,{animate:!this.noBlockingAnimations&&null})},setCenter:function(t,e){if(null!=t){var n=Object(i["latLng"])(t),o=this.lastSetCenter||this.mapObject.getCenter();o.lat===n.lat&&o.lng===n.lng||(this.lastSetCenter=n,this.mapObject.panTo(n,{animate:!this.noBlockingAnimations&&null}))}},setBounds:function(t,e){if(t){var n=Object(i["latLngBounds"])(t);if(n.isValid()){var o=this.lastSetBounds||this.mapObject.getBounds(),a=!o.equals(n,0);a&&(this.lastSetBounds=n,this.mapObject.fitBounds(n,this.fitBoundsOptions))}}},setPaddingBottomRight:function(t,e){this.paddingBottomRight=t},setPaddingTopLeft:function(t,e){this.paddingTopLeft=t},setPadding:function(t,e){this.padding=t},setCrs:function(t,e){console.log("Changing CRS is not yet supported by Leaflet")},fitBounds:function(t){this.mapObject.fitBounds(t,{animate:!this.noBlockingAnimations&&null})},moveEndHandler:function(){this.$emit("update:zoom",this.mapObject.getZoom());var t=this.mapObject.getCenter();this.$emit("update:center",t);var e=this.mapObject.getBounds();this.$emit("update:bounds",e)},overlayAddHandler:function(t){var e=this.layersInControl.find((function(e){return e.name===t.name}));e&&e.updateVisibleProp(!0)},overlayRemoveHandler:function(t){var e=this.layersInControl.find((function(e){return e.name===t.name}));e&&e.updateVisibleProp(!1)}}};function d(t,e,n,i,o,a,r,s,l,u){"boolean"!==typeof r&&(l=s,s=r,r=!1);var c,d="function"===typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),i&&(d._scopeId=i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):e&&(c=r?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(d.functional){var p=d.render;d.render=function(t,e){return c.call(e),p(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,c):[c]}return n}var p,h="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function f(t){return function(t,e){return v(t,e)}}var m={};function v(t,e){var n=h?e.media||"default":t,i=m[n]||(m[n]={ids:new Set,styles:[]});if(!i.ids.has(t)){i.ids.add(t);var o=e.source;if(e.map&&(o+="\n/*# sourceURL="+e.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",e.media&&i.element.setAttribute("media",e.media),void 0===p&&(p=document.head||document.getElementsByTagName("head")[0]),p.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(o),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var a=i.ids.size-1,r=document.createTextNode(o),s=i.element.childNodes;s[a]&&i.element.removeChild(s[a]),s.length?i.element.insertBefore(r,s[a]):i.element.appendChild(r)}}}var y=c,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue2leaflet-map"},[t.ready?t._t("default"):t._e()],2)},g=[],O=function(t){t&&t("data-v-49b28618_0",{source:".vue2leaflet-map{height:100%;width:100%}",map:void 0,media:void 0})},j=void 0,_=void 0,C=!1,L=d({render:b,staticRenderFns:g},O,y,j,C,_,!1,f,void 0,void 0);e["a"]=L},"61f3":function(t,e,n){},"847d":function(t,e,n){"use strict";var i=n("61f3"),o=n.n(i);o.a},"9acc":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{md12:""}},[n("material-card",{attrs:{color:"green",title:"Broadcast Messages"}},[n("v-card-text",[n("div"),t._v(" "),n("p",{staticClass:"display-1 text--primary"},[t._v("\n            List of Checkins\n          ")])]),t._v(" "),n("v-container",{attrs:{"py-0":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md10:""}},[n("v-text-field",{attrs:{"append-icon":"mdi-search-web",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md2:""}},[n("v-btn",{attrs:{loading:t.downloadLoading,color:"primary"},on:{click:t.handleDownload}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-download")]),t._v("Export Excel\n              ")],1)],1)],1)],1),n("br"),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.users,search:t.search,"rows-per-page-items":t.rowsPerPageItems},scopedSlots:t._u([{key:"items",fn:function(e){return[n("tr",{on:{click:function(t){e.expanded=!e.expanded}}},[n("td",[t._v(t._s(e.item.id))]),t._v(" "),n("td",[t._v(t._s(e.item.user_id))]),t._v(" "),n("td",[t._v(t._s(e.item.created_at))]),t._v(" "),n("td",[n("v-btn",{attrs:{loading:t.downloadLoading,disabled:Boolean(e.item.approved),type:"submit",color:"secondary"},on:{click:function(n){n.preventDefault(),t.approvCh(e.item.id)}}},[t._v("\n                  Approve"),n("v-icon",{attrs:{right:""}},[t._v("mdi-check")])],1)],1)])]}},{key:"expand",fn:function(e){return[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("div",{staticClass:"maps"},[n("l-map",{attrs:{zoom:t.zoom,center:t.LatLng(e.item.lat,e.item.lng)}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._v(" "),n("l-marker",{attrs:{"lat-lng":t.LatLng(e.item.lat,e.item.lng)}})],1)],1)])],1)]}}])},[n("v-alert",{attrs:{slot:"no-results",value:!0,color:"success",icon:"mdi-emoticon-sad"},slot:"no-results"},[t._v('\n            Your search for "'+t._s(t.search)+'" found no results.\n          ')])],1)],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{color:"#f55a4e",timeout:2e3,top:""},model:{value:t.showResult,callback:function(e){t.showResult=e},expression:"showResult"}},[t._v("\n    "+t._s(t.result)+"\n  ")])],1)},o=[],a=n("4795"),r=n.n(a),s=n("bc3a"),l=n.n(s),u=n("2f62"),c=n("e11e"),d=n.n(c),p=n("2699"),h=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},f=function(t,e,n,i){var o=function(i){var o="set"+h(i),a=n[i].type===Object||n[i].type===Array||Array.isArray(n[i].type);n[i].custom&&t[o]?t.$watch(i,(function(e,n){t[o](e,n)}),{deep:a}):"setOptions"===o?t.$watch(i,(function(t,n){Object(c["setOptions"])(e,t)}),{deep:a}):e[o]&&t.$watch(i,(function(t,n){e[o](t)}),{deep:a})};for(var a in n)o(a)},m=function(t){var e={};for(var n in t){var i=t[n];null!==i&&void 0!==i&&(e[n]=i)}return e},v=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var i=m(n);t=m(t);var o=e.$options.props;for(var a in t){var r=o[a]?o[a].default:Symbol("unique");i[a]&&r!==t[a]?(console.warn(a+" props is overriding the value passed in the options props"),i[a]=t[a]):i[a]||(i[a]=t[a])}return i},y=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},b={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){var n=this.$parent.mapObject.attributionControl;n.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},g={mixins:[b],props:{pane:{type:String,default:"tilePane"},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},tileSize:{type:Number,default:256},noWrap:{type:Boolean,default:!1}},mounted:function(){this.gridLayerOptions=Object.assign({},this.layerOptions,{pane:this.pane,opacity:this.opacity,zIndex:this.zIndex,tileSize:this.tileSize,noWrap:this.noWrap})}},O={mixins:[g],props:{tms:{type:Boolean,default:!1},subdomains:{type:String,default:"abc"},detectRetina:{type:Boolean,default:!1}},mounted:function(){this.tileLayerOptions=Object.assign({},this.gridLayerOptions,{tms:this.tms,subdomains:this.subdomains,detectRetina:this.detectRetina})},render:function(){return null}},j={props:{options:{type:Object,default:function(){return{}}}}},_={name:"LTileLayer",mixins:[O,j],props:{url:{type:String,default:null},tileLayerClass:{type:Function,default:c["tileLayer"]}},mounted:function(){var t=this,e=v(this.tileLayerOptions,this);this.mapObject=this.tileLayerClass(this.url,e),c["DomEvent"].on(this.mapObject,this.$listeners),f(this,this.mapObject,this.$options.props),this.parentContainer=y(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))}};function C(t,e,n,i,o,a,r,s,l,u){"boolean"!==typeof r&&(l=s,s=r,r=!1);var c,d="function"===typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),i&&(d._scopeId=i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):e&&(c=r?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(d.functional){var p=d.render;d.render=function(t,e){return c.call(e),p(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,c):[c]}return n}"undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var L=_,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},w=[],$=void 0,T=void 0,A=void 0,S=!1,k=C({render:x,staticRenderFns:w},$,L,T,S,A,!1,void 0,void 0,void 0),B=k,R=function(t,e){var n;return function(){var i=[],o=arguments.length;while(o--)i[o]=arguments[o];var a=this;n&&clearTimeout(n),n=setTimeout((function(){t.apply(a,i),n=null}),e)}},P=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},E=function(t,e,n,i){var o=function(i){var o="set"+P(i),a=n[i].type===Object||n[i].type===Array||Array.isArray(n[i].type);n[i].custom&&t[o]?t.$watch(i,(function(e,n){t[o](e,n)}),{deep:a}):"setOptions"===o?t.$watch(i,(function(t,n){Object(c["setOptions"])(e,t)}),{deep:a}):e[o]&&t.$watch(i,(function(t,n){e[o](t)}),{deep:a})};for(var a in n)o(a)},z=function(t){var e={};for(var n in t){var i=t[n];null!==i&&void 0!==i&&(e[n]=i)}return e},N=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var i=z(n);t=z(t);var o=e.$options.props;for(var a in t){var r=o[a]?o[a].default:Symbol("unique");i[a]&&r!==t[a]?(console.warn(a+" props is overriding the value passed in the options props"),i[a]=t[a]):i[a]||(i[a]=t[a])}return i},D=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},I={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){var n=this.$parent.mapObject.attributionControl;n.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},V={props:{options:{type:Object,default:function(){return{}}}}},U={name:"LMarker",mixins:[I,V],props:{pane:{type:String,default:"markerPane"},draggable:{type:Boolean,custom:!0,default:!1},latLng:{type:[Object,Array],custom:!0,default:null},icon:{type:[Object],custom:!1,default:function(){return new c["Icon"].Default}},zIndexOffset:{type:Number,custom:!1,default:null}},data:function(){return{ready:!1}},mounted:function(){var t=this,e=N(Object.assign({},this.layerOptions,{icon:this.icon,zIndexOffset:this.zIndexOffset,draggable:this.draggable}),this);this.mapObject=Object(c["marker"])(this.latLng,e),c["DomEvent"].on(this.mapObject,this.$listeners),this.mapObject.on("move",R(this.latLngSync,100)),E(this,this.mapObject,this.$options.props),this.parentContainer=D(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.ready=!0,this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},methods:{setDraggable:function(t,e){this.mapObject.dragging&&(t?this.mapObject.dragging.enable():this.mapObject.dragging.disable())},setLatLng:function(t){if(null!=t&&this.mapObject){var e=this.mapObject.getLatLng(),n=Object(c["latLng"])(t);n.lat===e.lat&&n.lng===e.lng||this.mapObject.setLatLng(n)}},latLngSync:function(t){this.$emit("update:latLng",t.latlng),this.$emit("update:lat-lng",t.latlng)}},render:function(t){return this.ready&&this.$slots.default?t("div",{style:{display:"none"}},this.$slots.default):null}};function Z(t,e,n,i,o,a,r,s,l,u){"boolean"!==typeof r&&(l=s,s=r,r=!1);var c,d="function"===typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),i&&(d._scopeId=i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):e&&(c=r?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(d.functional){var p=d.render;d.render=function(t,e){return c.call(e),p(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,c):[c]}return n}"undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var M=U,F=void 0,J=void 0,H=void 0,W=void 0,X=Z({},F,M,J,W,H,!1,void 0,void 0,void 0),q=X;function G(t,e,n,i,o,a,r){try{var s=t[a](r),l=s.value}catch(u){return void n(u)}s.done?e(l):Promise.resolve(l).then(i,o)}function Y(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function r(t){G(a,i,o,r,s,"next",t)}function s(t){G(a,i,o,r,s,"throw",t)}r(void 0)}))}}function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et={components:{LMap:p["a"],LTileLayer:B,LMarker:q},data:function(){return{map:null,zoom:11,center:d.a.latLng(0,0),url:"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',marker:d.a.latLng(0,0),rowsPerPageItems:[50,250,500],search:"",link:"",output:[],headers:[{text:"ID",value:"id"},{text:"User",value:"user_id"},{text:"Date",value:"Date"},{text:"Approve",value:"approve"}],users:[],result:"",showResult:!1,downloadLoading:!1,filename:"Checkins",autoWidth:!0,bookType:"xlsx"}},computed:Q({},Object(u["c"])({user:"auth/user"})),mounted:function(){this.getChec()},methods:{getChec:function(){var t=this;l.a.get("check_in/history/facility/".concat(this.user.hcw.facility_id)).then((function(e){t.users=e.data.data,t.link=e.data.links.next,t.loopT(t.link)})).catch((function(t){return console.log(t.message)}))},loopT:function(t){var e=this;return Y(r.a.mark((function n(){var i,o;return r.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=0;case 1:if(!(i<1)){n.next=13;break}if(null==t){n.next=10;break}return n.next=5,l.a.get(t);case 5:o=n.sent,t=o.data.links.next,e.users=e.users.concat(o.data.data),n.next=11;break;case 10:i=11;case 11:n.next=1;break;case 13:console.log(e.users);case 14:case"end":return n.stop()}}),n)})))()},approvCh:function(t){var e=this;console.log(t),l.a.post("check_in/approve",{check_in_id:t}).then((function(t){e.result=t.data,e.showResult=!0,e.users=[],e.getChec()})).catch((function(){e.error=!0,e.showResult=!0}))},LatLng:function(t,e){return d.a.latLng(t,e)},handleDownload:function(){var t=this;this.downloadLoading=!0,n.e("chunk-0e610f46").then(n.bind(null,"4bf8")).then((function(e){var n=["Cadre","Previous Exposures","Type","Location","Date"],i=["cadre","previous_exposures","type","location","date"],o=t.users,a=t.formatJson(i,o);e.export_json_to_excel({header:n,data:a,filename:t.filename,autoWidth:t.autoWidth,bookType:t.bookType}),t.downloadLoading=!1}))},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return"cadre"===t?e[t].name:e[t]}))}))}}},nt=et,it=(n("847d"),n("2877")),ot=Object(it["a"])(nt,i,o,!1,null,"0eab153c",null);e["default"]=ot.exports}}]);
//# sourceMappingURL=chunk-3033b43b.81b53b94.js.map