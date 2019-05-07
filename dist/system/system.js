!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.system=e():t.system=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}({"/kPn":function(t,e,n){"use strict";n.r(e);var r={name:"Button",status:"prototype",release:"3.5.0",props:{type:{type:String,default:"button",validator:function(t){return t.match(/(button|a)/)}},size:{type:String,default:"medium",validator:function(t){return t.match(/(small|medium|large)/)}},href:{type:String,default:null},submit:{type:String,default:null,validator:function(t){return t.match(/(null|submit)/)}},state:{type:String,default:null,validator:function(t){return t.match(/(hover|active|focus)/)}},variation:{type:String,default:null,validator:function(t){return t.match(/(primary|secondary)/)}}}},a=(n("s46O"),n("KHd+")),o=n("tcIX"),i=n.n(o),u=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)(this.type,{tag:"component",class:["button",this.size,this.state,this.variation],attrs:{href:this.href,type:this.submit}},[this._t("default")],2)},[],!1,null,"3c72f0ee",null);"function"==typeof i.a&&i()(u),u.options.__file="Button.vue";e.default=u.exports},"/thn":function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.9 150.5c9 9 14.1 21.2 14.1 33.9v143.1c0 12.7-5.1 24.9-14.1 33.9L361.5 497.9c-9 9-21.2 14.1-33.9 14.1H184.5c-12.7 0-24.9-5.1-33.9-14.1L14.1 361.5c-9-9-14.1-21.2-14.1-33.9V184.5c0-12.7 5.1-24.9 14.1-33.9L150.5 14.1c9-9 21.2-14.1 33.9-14.1h143.1c12.7 0 24.9 5.1 33.9 14.1l136.5 136.4zM377.6 338c4.7-4.7 4.7-12.3 0-17l-65-65 65.1-65.1c4.7-4.7 4.7-12.3 0-17L338 134.4c-4.7-4.7-12.3-4.7-17 0l-65 65-65.1-65.1c-4.7-4.7-12.3-4.7-17 0L134.4 174c-4.7 4.7-4.7 12.3 0 17l65.1 65.1-65.1 65.1c-4.7 4.7-4.7 12.3 0 17l39.6 39.6c4.7 4.7 12.3 4.7 17 0l65.1-65.1 65.1 65.1c4.7 4.7 12.3 4.7 17 0l39.4-39.8z"/></svg>'},0:function(t,e,n){t.exports=n("5m5j")},"1TMA":function(t,e,n){},"1phr":function(t,e){},"2dwG":function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/></svg>'},"4K1/":function(t,e,n){"use strict";n.r(e);var r={name:"NotFound",metaInfo:{title:"Page Not Found | Vue Design System",htmlAttrs:{lang:"en"}},props:{type:{type:String,default:"div"}}},a=(n("OfJr"),n("KHd+")),o=n("gkHm"),i=n.n(o),u=Object(a.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e(this.type,{tag:"component",staticClass:"not-found"},[e("NavBar",{attrs:{active:"NotFound",navItems:[{name:"Template",component:"Index",href:"/#/"},{name:"Documentation",href:"http://localhost:6060/"}]}}),this._v(" "),e("Wrapper",[e("Heading",[this._v("404 Error")]),this._v(" "),e("Paragraph",[this._v("Couldn’t find a component that would match the URL you entered. Double check\n            configuration in router/index.js.")])],1)],1)},[],!1,null,"019fa644",null);"function"==typeof i.a&&i()(u),u.options.__file="NotFound.vue";e.default=u.exports},"5/kh":function(t,e,n){"use strict";var r=n("kTlp");n.n(r).a},"5m5j":function(t,e,n){"use strict";n.r(e);var r=[n("Xl01"),n("JtIp"),n("c1KM")],a=[];r.forEach(function(t){t.keys().forEach(function(e){return a.push(t(e).default)})});var o={install:function(t){a.forEach(function(e){return t.component(e.name,e)})}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},"68yd":function(t,e,n){"use strict";n.r(e);var r=n("bzL3"),a={name:"Icon",status:"review",release:"1.0.0",props:{name:{required:!0,default:"settings"},fill:{type:String,default:"currentColor"},ariaLabel:{type:String,default:"icon"},type:{type:String,default:"span"},size:{type:String,default:"medium",validator:function(t){return t.match(/(small|medium|large)/)}}},data:function(){return{svg:r("./"+this.name+".svg").replace(/^<svg /,'<svg style="fill: '.concat(this.fill,'" '))}}},o=(n("c5QI"),n("KHd+")),i=n("1phr"),u=n.n(i),s=Object(o.a)(a,function(){var t=this.$createElement;return(this._self._c||t)(this.type,{tag:"component",class:["icon",this.size],attrs:{"aria-label":this.ariaLabel},domProps:{innerHTML:this._s(this.svg)}})},[],!1,null,null,null);"function"==typeof u.a&&u()(s),s.options.__file="Icon.vue";e.default=s.exports},"7DUr":function(t,e){},"7dOS":function(t,e){},"7kMZ":function(t,e){},"9I8L":function(t,e){},"9t9y":function(t,e,n){"use strict";n.r(e);var r={name:"Wrapper",status:"review",release:"1.0.0",props:{type:{type:String,default:"div"}}},a=(n("guhO"),n("KHd+")),o=n("HpXA"),i=n.n(o),u=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)(this.type,{tag:"component",staticClass:"wrapper"},[this._t("default")],2)},[],!1,null,"c2c9680e",null);"function"==typeof i.a&&i()(u),u.options.__file="Wrapper.vue";e.default=u.exports},"9xvm":function(t,e,n){},AAsE:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" class="st1"/></svg>'},AlSa:function(t,e,n){"use strict";var r=n("IKQ/");n.n(r).a},BskY:function(t,e,n){},ECTP:function(t,e){},FmFd:function(t,e,n){"use strict";n.r(e);var r={name:"Paragraph",status:"prototype",release:"3.5.0",props:{type:{type:String,default:"p",validator:function(t){return t.match(/(p|span)/)}},variation:{type:String,default:"medium",validator:function(t){return t.match(/(medium|intro|large|small)/)}}}},a=(n("5/kh"),n("KHd+")),o=n("ECTP"),i=n.n(o),u=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)(this.type,{tag:"component",class:["paragraph",this.variation]},[this._t("default")],2)},[],!1,null,"23162433",null);"function"==typeof i.a&&i()(u),u.options.__file="Paragraph.vue";e.default=u.exports},HpXA:function(t,e){},"IKQ/":function(t,e,n){},JtIp:function(t,e,n){var r={"./NavBar.vue":"nrZS"};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="JtIp"},"KHd+":function(t,e,n){"use strict";function r(t,e,n,r,a,o,i,u){var s,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),i?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=s):a&&(s=u?function(){a.call(this,this.$root.$options.shadowRoot)}:a),s)if(l.functional){l._injectStyles=s;var c=l.render;l.render=function(t,e){return s.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:l}}n.d(e,"a",function(){return r})},KzwA:function(t,e,n){},LonU:function(t,e,n){},MAue:function(t,e,n){"use strict";var r=n("9xvm");n.n(r).a},MKVu:function(t,e,n){"use strict";var r=n("yuuF");n.n(r).a},OfJr:function(t,e,n){"use strict";var r=n("qj69");n.n(r).a},Tof5:function(t,e){},UklV:function(t,e,n){"use strict";n.r(e);var r={name:"Input",status:"ready",release:"1.0.0",props:{type:{type:String,default:"text",validator:function(t){return t.match(/(text|number|email)/)}},value:{type:String,default:null},placeholder:{type:String,default:null},label:{type:String,default:null},wrapper:{type:String,default:"div",validator:function(t){return t.match(/(div|section)/)}},id:{type:String,default:null},width:{type:String,default:"expand",validator:function(t){return t.match(/(auto|expand)/)}},disabled:{type:Boolean,default:!1},state:{type:String,default:null,validator:function(t){return t.match(/(hover|active|focus)/)}}},methods:{onInput:function(t){this.$emit("change",t)},onFocus:function(t){this.$emit("focus",t)}}},a=(n("AlSa"),n("KHd+")),o=n("7dOS"),i=n.n(o),u=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.wrapper,{tag:"component",class:["input",{"input-expand":"expand"===t.width}]},[t.label?n("label",{attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),t._v(" "),n("input",{class:t.state,attrs:{id:t.id,disabled:t.disabled,type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.onInput(e.target.value)},focus:function(e){t.onFocus(e.target.value)}}})])},[],!1,null,"60a5765d",null);"function"==typeof i.a&&i()(u),u.options.__file="Input.vue";e.default=u.exports},Xl01:function(t,e,n){var r={"./Button.vue":"/kPn","./Heading.vue":"oIR/","./Icon.vue":"68yd","./Input.vue":"UklV","./Paragraph.vue":"FmFd","./TextStyle.vue":"r6ov","./Textarea.vue":"lK0x","./Wrapper.vue":"9t9y"};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="Xl01"},arIR:function(t,e,n){},bzL3:function(t,e,n){var r={"./deprecated.svg":"/thn","./prototype.svg":"2dwG","./ready.svg":"AAsE","./review.svg":"eAtJ"};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="bzL3"},c1KM:function(t,e,n){var r={"./Index.vue":"lF/O","./NotFound.vue":"4K1/"};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="c1KM"},c5QI:function(t,e,n){"use strict";var r=n("KzwA");n.n(r).a},cedl:function(t,e,n){"use strict";var r=n("1TMA");n.n(r).a},eAtJ:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>'},gkHm:function(t,e){},gs40:function(t,e,n){"use strict";var r=n("ildJ");n.n(r).a},guhO:function(t,e,n){"use strict";var r=n("LonU");n.n(r).a},ildJ:function(t,e,n){},kTlp:function(t,e,n){},"lF/O":function(t,e,n){"use strict";n.r(e);var r={name:"Index",status:"deprecated",release:"1.0.0",metaInfo:{title:"Vue Design System",htmlAttrs:{lang:"en"}},props:{type:{type:String,default:"div"}}},a=(n("MAue"),n("KHd+")),o=n("9I8L"),i=n.n(o),u=Object(a.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e(this.type,{tag:"component",staticClass:"index"},[e("NavBar",{attrs:{active:"Index",navItems:[{name:"Template",component:"Index",href:"/#/"},{name:"Documentation",href:"http://localhost:6060/"}]}}),this._v(" "),e("Wrapper",[e("Heading",[this._v("NP Design System")]),this._v(" "),e("Paragraph",[e("a",{attrs:{href:"https://vueds.com"}},[this._v("Vue Design System")]),this._v("is an open-source tool for building\n            design systems with Vue.js. It provides you and your team a set of organized tools,\n            patterns & practices. It works as the foundation for your application\n            development.\n        ")])],1)],1)},[],!1,null,"cf3e3704",null);"function"==typeof i.a&&i()(u),u.options.__file="Index.vue";e.default=u.exports},lK0x:function(t,e,n){"use strict";n.r(e);var r={name:"Textarea",status:"ready",release:"3.5.0",props:{value:{type:String,default:null},placeholder:{type:String,default:null},label:{type:String,default:null},wrapper:{type:String,default:"div",validator:function(t){return t.match(/(div|section)/)}},id:{type:String,default:null},width:{type:String,default:"expand",validator:function(t){return t.match(/(auto|expand)/)}},disabled:{type:Boolean,default:!1},state:{type:String,default:null,validator:function(t){return t.match(/(hover|active|focus)/)}}},methods:{onInput:function(t){this.$emit("change",t)},onFocus:function(t){this.$emit("focus",t)}}},a=(n("cedl"),n("KHd+")),o=n("7DUr"),i=n.n(o),u=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.wrapper,{tag:"component",class:["textarea",{"textarea-expand":"expand"===t.width}]},[t.label?n("label",{attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],class:t.state,attrs:{id:t.id,disabled:t.disabled,placeholder:t.placeholder},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},function(e){t.onInput(e.target.value)}],focus:function(e){t.onFocus(e.target.value)}}})])},[],!1,null,"122e66a4",null);"function"==typeof i.a&&i()(u),u.options.__file="Textarea.vue";e.default=u.exports},nrZS:function(t,e,n){"use strict";n.r(e);var r={name:"NavBar",status:"ready",release:"1.0.0",model:{prop:"active"},props:{type:{type:String,default:"nav"},active:{required:!0,type:String},navItems:{required:!0,type:Array}},computed:{localActive:{get:function(){return this.active},set:function(t){this.$emit("input",t)}}}},a=(n("MKVu"),n("KHd+")),o=n("Tof5"),i=n.n(o),u=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.type,{tag:"component",staticClass:"nav"},t._l(t.navItems,function(e,r){return n("a",{key:r,class:{active:t.localActive===e.component},attrs:{href:e.href},domProps:{innerHTML:t._s(e.name)}})}))},[],!1,null,"5fbf765f",null);"function"==typeof i.a&&i()(u),u.options.__file="NavBar.vue";e.default=u.exports},"oIR/":function(t,e,n){"use strict";n.r(e);var r={name:"Heading",status:"prototype",release:"1.0.0",props:{level:{type:String,default:"h1",validator:function(t){return t.match(/(h1|h2|h3|h4|h5|h6)/)}}}},a=(n("uEdN"),n("KHd+")),o=n("woMB"),i=n.n(o),u=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)(this.level,{tag:"component",staticClass:"heading"},[this._t("default")],2)},[],!1,null,"2885b2bc",null);"function"==typeof i.a&&i()(u),u.options.__file="Heading.vue";e.default=u.exports},qj69:function(t,e,n){},r6ov:function(t,e,n){"use strict";n.r(e);var r={name:"TextStyle",status:"ready",release:"1.0.0",props:{type:{type:String,default:"span",validator:function(t){return t.match(/(span|em|i|strong)/)}},variation:{type:String,default:"default",validator:function(t){return t.match(/(default|disabled|strong|positive|negative)/)}}}},a=(n("gs40"),n("KHd+")),o=n("7kMZ"),i=n.n(o),u=Object(a.a)(r,function(){var t=this.$createElement;return(this._self._c||t)(this.type,{tag:"component",class:["text-style",this.variation]},[this._t("default")],2)},[],!1,null,"4ac58a4b",null);"function"==typeof i.a&&i()(u),u.options.__file="TextStyle.vue";e.default=u.exports},s46O:function(t,e,n){"use strict";var r=n("BskY");n.n(r).a},tcIX:function(t,e){},uEdN:function(t,e,n){"use strict";var r=n("arIR");n.n(r).a},woMB:function(t,e){},yuuF:function(t,e,n){}})});