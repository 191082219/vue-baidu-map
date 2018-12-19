webpackJsonp([41],{"1Ieq":function(s,t,a){s.exports=a("j0CS")},j0CS:function(s,t,a){var e=a("VU/8")(a("lIMF"),a("v8mj"),null,null);s.exports=e.exports},lIMF:function(s,t,a){var e,n,v;!function(a,_){n=[s,t],e=_,void 0!==(v="function"==typeof e?e.apply(t,n):e)&&(s.exports=v)}(0,function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{keyword:""}}},s.exports=t.default})},v8mj:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[[a("h1",[s._v("Auto Complete")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Notice")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("h3",[s._v("Using CustomControls, AutoComplete and LocalSearch component")]),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(4),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[a("baidu-map",{attrs:{center:{lng:116.403765,lat:39.91485},zoom:11}},[a("bm-view",{staticClass:"map"}),s._v(" "),a("bm-control",{attrs:{offset:{width:10,height:10}}},[a("bm-auto-complete",{attrs:{sugStyle:{zIndex:1}},model:{value:s.keyword,callback:function(t){s.keyword=t},expression:"keyword"}},[a("text-field",{attrs:{placeholder:"Keywords"}})],1)],1),s._v(" "),a("bm-local-search",{attrs:{keyword:s.keyword,"auto-viewport":!0}})],1)],1)]],2)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",[s._v("BmAutoComplete")]),s._v(" component renders an"),a("code",[s._v("input")]),s._v(" element by default. You can define your own form component in the slot to instead.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ol",[a("li",[s._v("AutoComplete is a "),a("strong",[s._v("not recommended")]),s._v(" class by the offical BaiduMap JS API because of its poor customization.")]),s._v(" "),a("li",[s._v("If you have advanced UI customization requirements for the auto completed search box, It's recommended to use the "),a("a",{attrs:{href:"http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi"}},[s._v("BaiduMap Web API")]),s._v(" for requesets, and uses the response data with your custom UI components.")]),s._v(" "),a("li",[s._v("The suggestion popup of this component is sometimes overridden by another element, and you need to declare "),a("code",[s._v("zIndex")]),s._v(" in the "),a("code",[s._v("sugStyle")]),s._v(" property to adjust it.")]),s._v(" "),a("li",[s._v("This component may be removed from version 1.0.0 and implemented in a better way.")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("location")]),s._v(" "),a("td",[s._v("String, Map, Point")]),s._v(" "),a("td",[s._v("map")]),s._v(" "),a("td",[s._v("Set the range of the returned result.")])]),s._v(" "),a("tr",[a("td",[s._v("types")]),s._v(" "),a("td",[s._v("'city', None")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("The response data type. 'city' or none.")])]),s._v(" "),a("tr",[a("td",[s._v("sugStyle")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("{}")]),s._v(" "),a("td",[s._v("Fix styles of the suggestion popup.")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("searchcomplete")]),s._v(" "),a("td",[s._v("AutocompleteResult")]),s._v(" "),a("td",[s._v("Triggers when after searching.")])]),s._v(" "),a("tr",[a("td",[s._v("confirm")]),s._v(" "),a("td",[s._v("{type,target,item}")]),s._v(" "),a("td",[s._v("Triggers when select an item.")])]),s._v(" "),a("tr",[a("td",[s._v("highlight")]),s._v(" "),a("td",[s._v("{type,target,fromitem,toitem}")]),s._v(" "),a("td",[s._v("Triggers when highlight an item.")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":center")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{lng: 116.403765, lat: 39.914850}"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":zoom")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"11"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"map"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-view")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-control")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":offset")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"{width: '10px', height: '10px'}\"")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-auto-complete")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"keyword"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":sugStyle")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{zIndex: 1}"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("search-field")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Keywords"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("search-field")]),s._v(">")]),s._v(" "),a("span",{staticClass:"hljs-comment"},[s._v("\x3c!-- This is a custom search box component --\x3e")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-auto-complete")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-control")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":keyword")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"keyword"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":auto-viewport")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" >")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("bm-local-search")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("keyword")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v("\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n"),a("span",{staticClass:"hljs-selector-class"},[s._v(".tangram-suggestion-main")]),s._v(" {\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("z-index")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])}]}}});