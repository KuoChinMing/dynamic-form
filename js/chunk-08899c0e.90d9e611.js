(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08899c0e"],{"0fd9":function(e,t,n){"use strict";var l=n("ade3"),a=n("5530"),i=(n("13d5"),n("caad"),n("2532"),n("99af"),n("b64b"),n("5319"),n("ac1f"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),s=n("d9f7"),r=n("80d2"),u=["sm","md","lg","xl"],o=["start","end","center"];function c(e,t){return u.reduce((function(n,l){return n[e+Object(r["z"])(l)]=t(),n}),{})}var d=function(e){return[].concat(o,["baseline","stretch"]).includes(e)},f=c("align",(function(){return{type:String,default:null,validator:d}})),p=function(e){return[].concat(o,["space-between","space-around"]).includes(e)},m=c("justify",(function(){return{type:String,default:null,validator:p}})),b=function(e){return[].concat(o,["space-between","space-around","stretch"]).includes(e)},g=c("alignContent",(function(){return{type:String,default:null,validator:b}})),v={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(g)},x={align:"align",justify:"justify",alignContent:"align-content"};function y(e,t,n){var l=x[e];if(null!=n){if(t){var a=t.replace(e,"");l+="-".concat(a)}return l+="-".concat(n),l.toLowerCase()}}var h=new Map;t["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},m),{},{alignContent:{type:String,default:null,validator:b}},g),render:function(e,t){var n=t.props,a=t.data,i=t.children,r="";for(var u in n)r+=String(n[u]);var o=h.get(r);return o||function(){var e,t;for(t in o=[],v)v[t].forEach((function(e){var l=n[e],a=y(t,e,l);a&&o.push(a)}));o.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(l["a"])(e,"align-".concat(n.align),n.align),Object(l["a"])(e,"justify-".concat(n.justify),n.justify),Object(l["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),h.set(r,o)}(),e(n.tag,Object(s["a"])(a,{staticClass:"row",class:o}),i)}})},"4b85":function(e,t,n){},"62ad":function(e,t,n){"use strict";var l=n("ade3"),a=n("5530"),i=(n("13d5"),n("a9e3"),n("b64b"),n("5319"),n("ac1f"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),s=n("d9f7"),r=n("80d2"),u=["sm","md","lg","xl"],o=function(){return u.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),c=function(){return u.reduce((function(e,t){return e["offset"+Object(r["z"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return u.reduce((function(e,t){return e["order"+Object(r["z"])(t)]={type:[String,Number],default:null},e}),{})}(),f={col:Object.keys(o),offset:Object.keys(c),order:Object.keys(d)};function p(e,t,n){var l=e;if(null!=n&&!1!==n){if(t){var a=t.replace(e,"");l+="-".concat(a)}return"col"!==e||""!==n&&!0!==n?(l+="-".concat(n),l.toLowerCase()):l.toLowerCase()}}var m=new Map;t["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},o),{},{offset:{type:[String,Number],default:null}},c),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,a=t.data,i=t.children,r=(t.parent,"");for(var u in n)r+=String(n[u]);var o=m.get(r);return o||function(){var e,t;for(t in o=[],f)f[t].forEach((function(e){var l=n[e],a=p(t,e,l);a&&o.push(a)}));var a=o.some((function(e){return e.startsWith("col-")}));o.push((e={col:!a||!n.cols},Object(l["a"])(e,"col-".concat(n.cols),n.cols),Object(l["a"])(e,"offset-".concat(n.offset),n.offset),Object(l["a"])(e,"order-".concat(n.order),n.order),Object(l["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),m.set(r,o)}(),e(n.tag,Object(s["a"])(a,{class:o}),i)}})},a523:function(e,t,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85");var l=n("e8f2"),a=n("d9f7");t["a"]=Object(l["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,l=t.props,i=t.data,s=t.children,r=i.attrs;return r&&(i.attrs={},n=Object.keys(r).filter((function(e){if("slot"===e)return!1;var t=r[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}))),l.id&&(i.domProps=i.domProps||{},i.domProps.id=l.id),e(l.tag,Object(a["a"])(i,{staticClass:"container",class:Array({"container--fluid":l.fluid}).concat(n||[])}),s)}})},d19d:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("element-setting-input-box",{attrs:{value:e.element["type"],type:"textField",label:"type",disabled:"",dense:"",outlined:"","hide-details":""}}),n("element-setting-input-box",{attrs:{value:e.element["id"],type:"textField",label:"id",disabled:"",dense:"",outlined:"","hide-details":""}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"layout",items:[{text:"",value:""},{text:"horizontal",value:"row"},{text:"vertical",value:"column"}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["layout"],callback:function(t){e.$set(e.element,"layout",t)},expression:"element['layout']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"grow",items:[{text:"true",value:1},{text:"false",value:0}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["flexGrow"],callback:function(t){e.$set(e.element,"flexGrow",t)},expression:"element['flexGrow']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"shrink",items:[{text:"true",value:1},{text:"false",value:0}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["flexShrink"],callback:function(t){e.$set(e.element,"flexShrink",t)},expression:"element['flexShrink']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"textField",label:"basis","hide-details":"",dense:"",outlined:""},model:{value:e.element["flexBasis"],callback:function(t){e.$set(e.element,"flexBasis",t)},expression:"element['flexBasis']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"fillHeight",items:[{text:"true",value:!0},{text:"false",value:!1}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["fillHeight"],callback:function(t){e.$set(e.element,"fillHeight",t)},expression:"element['fillHeight']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"alignItems",items:[{text:"start",value:"align-start"},{text:"center",value:"align-center"},{text:"end",value:"align-end"},{text:"baseline",value:"align-baseline"},{text:"stretch",value:""}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["alignItems"],callback:function(t){e.$set(e.element,"alignItems",t)},expression:"element['alignItems']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"wrap",items:[{text:"true",value:!0},{text:"false",value:!1}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["wrap"],callback:function(t){e.$set(e.element,"wrap",t)},expression:"element['wrap']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",type:"select",label:"justifyContent",items:[{text:"start",value:"justify-start"},{text:"end",value:"justify-end"},{text:"center",value:"justify-center"},{text:"space between",value:"justify-space-between"},{text:"space around",value:"justify-space-around"}],"hide-details":"",dense:"",outlined:""},model:{value:e.element["justifyContent"],callback:function(t){e.$set(e.element,"justifyContent",t)},expression:"element['justifyContent']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginTop","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginTop"],callback:function(t){e.$set(e.element,"marginTop",t)},expression:"element['marginTop']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginLeft","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginLeft"],callback:function(t){e.$set(e.element,"marginLeft",t)},expression:"element['marginLeft']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginBottom","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginBottom"],callback:function(t){e.$set(e.element,"marginBottom",t)},expression:"element['marginBottom']"}}),n("element-setting-input-box",{attrs:{"input-class":"white",label:"marginRight","hide-details":"",dense:"",outlined:""},model:{value:e.element["marginRight"],callback:function(t){e.$set(e.element,"marginRight",t)},expression:"element['marginRight']"}})],1)},a=[],i=n("fd0c"),s={name:"TBoxSettingPanel",components:{ElementSettingInputBox:i["a"]},props:{element:{type:Object,default:function(){}}}},r=s,u=n("2877"),o=n("6544"),c=n.n(o),d=n("a523"),f=Object(u["a"])(r,l,a,!1,null,null,null);t["default"]=f.exports;c()(f,{VContainer:d["a"]})},fd0c:function(e,t,n){"use strict";var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[n("label",[e._v(e._s(e.label))])]),n("v-col",{attrs:{cols:"9"}},[n(e.input,e._g(e._b({tag:"component",class:e.inputClass,attrs:{value:e.value}},"component",e.attrs,!1),e.$listeners))],1)],1)},a=[],i=n("5530"),s=n("8654"),r=n("b974"),u={name:"ElementSettingInputBox",components:{VTextField:s["a"],VSelect:r["a"]},props:{label:{type:String,default:""},inputClass:{type:[Object,Array,String],default:""},value:{},type:{type:String,default:"textField"},items:{type:Array,default:function(){return[]}}},computed:{attrs:function(){var e,t={textField:this.$attrs,select:Object(i["a"])(Object(i["a"])({},this.$attrs),{},{items:this.items})};return null!==(e=t[this.type])&&void 0!==e?e:t["textField"]},input:function(){var e,t={textField:"v-text-field",select:"v-select"};return null!==(e=t[this.type])&&void 0!==e?e:t["textField"]}}},o=u,c=n("2877"),d=n("6544"),f=n.n(d),p=n("62ad"),m=n("0fd9"),b=Object(c["a"])(o,l,a,!1,null,null,null);t["a"]=b.exports;f()(b,{VCol:p["a"],VRow:m["a"]})}}]);
//# sourceMappingURL=chunk-08899c0e.90d9e611.js.map