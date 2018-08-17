(function(t){function a(a){for(var s,c,n=a[0],d=a[1],o=a[2],l=0,p=[];l<n.length;l++)c=n[l],r[c]&&p.push(r[c][0]),r[c]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,n=1;n<e.length;n++){var d=e[n];0!==r[d]&&(s=!1)}s&&(i.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},r={app:0},i=[];function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/drumkit/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=a,n=n.slice();for(var o=0;o<n.length;o++)a(n[o]);var u=d;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2856:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"drum-machine"}},[e("h1",[t._v("AG DrumKit")]),e("h2",{attrs:{id:"display"}},[t._v(t._s(t.sound))]),e("section",{attrs:{id:"pad-section"}},[e("article",{staticClass:"drum-pad drum-pad--1",attrs:{"data-key":"81"},on:{click:t.clickEvent}},[e("audio",{staticClass:"clip",attrs:{id:"Q","data-key":"81",src:"/samples/kick-tron.wav"}}),e("kbd",[t._v("Q")]),e("span",{staticClass:"audio-sound"},[t._v("Tron")])]),e("article",{staticClass:"drum-pad drum-pad--2",attrs:{"data-key":"87"},on:{click:t.clickEvent}},[e("audio",{staticClass:"clip",attrs:{id:"W",src:"/samples/perc-tribal.wav","data-key":"87"}}),e("kbd",[t._v("W")]),e("span",{staticClass:"audio-sound"},[t._v("Tribal")])]),e("article",{staticClass:"drum-pad drum-pad--3",attrs:{"data-key":"69"},on:{click:t.clickEvent}},[e("audio",{staticClass:"clip",attrs:{id:"E",src:"/samples/openhat-acoustic01.wav","data-key":"69"}}),e("kbd",[t._v("E")]),e("span",{staticClass:"audio-sound"},[t._v("Acoustic Hat")])]),e("article",{staticClass:"drum-pad drum-pad--4",attrs:{"data-key":"65"},on:{click:t.clickEvent}},[e("audio",{staticClass:"clip",attrs:{id:"A",src:"/samples/snare-vinyl02.wav","data-key":"65"}}),e("kbd",[t._v("A")]),e("span",{staticClass:"audio-sound"},[t._v("Snare Vinyl")])]),e("article",{staticClass:"drum-pad drum-pad--5",attrs:{"data-key":"83"},on:{click:t.clickEvent}},[e("audio",{staticClass:"clip",attrs:{id:"S",src:"/samples/tom-fm.wav","data-key":"83"}}),e("kbd",[t._v("S")]),e("span",{staticClass:"audio-sound"},[t._v("Tom FM")])]),e("article",{staticClass:"drum-pad drum-pad--6",attrs:{"data-key":"68"},on:{click:t.clickEvent}},[e("audio",{staticClass:"clip",attrs:{id:"D",src:"/samples/tom-rototom.wav","data-key":"68"}}),e("kbd",[t._v("D")]),e("span",{staticClass:"audio-sound"},[t._v("Tom Rototom")])]),e("article",{staticClass:"drum-pad drum-pad--7",attrs:{"data-key":"90"},on:{click:t.clickEvent}},[e("audio",{staticClass:"clip",attrs:{id:"Z",src:"/samples/clap-crushed.wav","data-key":"90"}}),e("kbd",[t._v("Z")]),e("span",{staticClass:"audio-sound"},[t._v("Clap Crushed")])]),e("article",{staticClass:"drum-pad drum-pad--8",attrs:{"data-key":"88"},on:{click:t.clickEvent}},[e("audio",{staticClass:"clip",attrs:{id:"X",src:"/samples/kick-cultivator.wav","data-key":"88"}}),e("kbd",[t._v("X")]),e("span",{staticClass:"audio-sound"},[t._v("Cultivator")])]),e("article",{staticClass:"drum-pad drum-pad--9",attrs:{"data-key":"67"},on:{click:t.clickEvent}},[e("audio",{staticClass:"clip",attrs:{id:"C",src:"/samples/kick-newwave.wav","data-key":"67"}}),e("kbd",[t._v("C")]),e("span",{staticClass:"audio-sound"},[t._v("Newwave")])])])])])},i=[],c=(e("ac6a"),e("1c4c"),{name:"app",data:function(){return{sound:""}},methods:{playAudio:function(t){var a=document.querySelector('audio[data-key="'.concat(t.keyCode,'"]')),e=(document.querySelector('article[data-key="'.concat(t.keyCode,'"]')),document.querySelector('article[data-key="'.concat(t.keyCode,'"] span.audio-sound')));a&&(a.startTime=0,a.play(),this.sound=e.textContent)},clickEvent:function(t){var a={keyCode:t.target.dataset.key};this.playAudio(a)}},created:function(){var t=this,a=Array.from(document.querySelectorAll(".drum-pad"));a.forEach(function(a){return a.addEventListener("click",t.clickEvent)}),window.addEventListener("keyup",this.playAudio)},beforeDestory:function(){document.removeEventListener("keyup",this.playAudio)}}),n=c,d=(e("5c0b"),e("2877")),o=Object(d["a"])(n,r,i,!1,null,null,null);o.options.__file="App.vue";var u=o.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("2856"),r=e.n(s);r.a}});
//# sourceMappingURL=app.5c021a89.js.map