(function(t){function a(a){for(var n,o,u=a[0],s=a[1],c=a[2],h=0,b=[];h<u.length;h++)o=u[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(a);while(b.length)b.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,u=1;u<e.length;u++){var s=e[u];0!==r[s]&&(n=!1)}n&&(i.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},r={app:0},i=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/first-bit/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=a,u=u.slice();for(var c=0;c<u.length;c++)a(u[c]);var l=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("85ec"),r=e.n(n);r.a},"0ab0":function(t,a,e){"use strict";var n=e("c432"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"sketch"}}),e("div",{staticClass:"title"},[t._v(" <First Bit/> ")]),t._m(0),e("Grid")],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[t._v(" It's hard. It's always hard the first time you do something. Especially when you are collaborating, making mistakes isn't a comfortable thing. We at "),e("a",{staticClass:"link",attrs:{href:"https://github.com/BitByte-TPC"}},[t._v("BitByte - The Programming Club")]),t._v(" wanted to simplify the way new open-source contributors learn & contribute for the first time. "),e("br"),e("br"),t._v(" If you are a beginner and wants to get your hands dirty with Open Source contributions, you've hopped on to the right place. This project is made just for you. Visit "),e("a",{staticClass:"link",attrs:{href:"https://github.com/BitByte-TPC/first-bit#readme"}},[t._v("README.md")]),t._v(" to get started. ")])}],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},t._l(t.nameDB,(function(t,a){return e("Card",{key:a,attrs:{name:t.name,bio:t.bio,githubId:t.githubId,avatar_url:t.avatar_url}})})),1)},u=[],s=(e("4de4"),e("b0c0"),e("f81b")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"item"},[e("img",{staticClass:"avatar",attrs:{src:t.avatar_url}}),e("div",{staticClass:"des"},[e("div",{staticClass:"name"},[t._v(t._s(t.name))]),e("div",{staticClass:"github-profile"},[e("a",{attrs:{href:"https://github.com/"+t.githubId}},[t._v("github.com/"+t._s(t.githubId))])]),e("div",{staticClass:"bio"},[t._v(t._s(t.bio))])])])},l=[],h={name:"Card",props:{avatar_url:String,name:String,githubId:String,bio:String}},b=h,d=(e("0ab0"),e("2877")),p=Object(d["a"])(b,c,l,!1,null,null,null),m=p.exports,v={name:"Grid",components:{Card:m},props:{},data:function(){return{nameDB:s}},mounted:function(){this.nameDB=this.nameDB.filter((function(t){return t.name&&t.bio&&t.githubId})).sort((function(t,a){var e=t.name.toLowerCase(),n=a.name.toLowerCase();return e<n?-1:e>n?1:0}))}},f=v,g=(e("9f4b"),Object(d["a"])(f,o,u,!1,null,null,null)),_=g.exports,y=e("3425"),w=e.n(y),j=(e("cd7c"),{name:"App",components:{Grid:_},created:function(){new w.a}}),C=j,I=(e("034f"),Object(d["a"])(C,r,i,!1,null,null,null)),O=I.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,a,e){},"9f4b":function(t,a,e){"use strict";var n=e("c48a"),r=e.n(n);r.a},c432:function(t,a,e){},c48a:function(t,a,e){},cd7c:function(t,a,e){e("970b"),e("5bc3");console.log("loaded")},f81b:function(t){t.exports=JSON.parse('[{"githubId":"MananJethwani","name":"manan jethwani","bio":"Something about yourself using not more than 64 characters.","avatar_url":"https://avatars0.githubusercontent.com/u/50267986?v=4"},{"githubId":"ajwad-shaikh","name":"Ajwad Shaikh","bio":"I\'m a software development engineer, based in Mumbai, exploring opportunities to build and democratize technology for the next billion internet users with a keen focus on mobile.","avatar_url":"https://avatars1.githubusercontent.com/u/37571185?v=4"},{"githubId":"garg3133","name":"Priyansh Garg","bio":"Just another guy with a knack for programming :P","avatar_url":"https://avatars1.githubusercontent.com/u/39924567?v=4"},{"githubId":"get-thepacket","name":"Lakshya Baghel","bio":"To be or to be not","avatar_url":"https://avatars0.githubusercontent.com/u/38386292?v=4"},{"githubId":"janglee123","name":"Meru Patel","bio":"Finding 0\'s between 1\'s inside cpu.","avatar_url":"https://avatars3.githubusercontent.com/u/29702428?v=4"},{"githubId":"pranjalg131","name":"Pranjal Gupta","bio":"Passionate about Web and Android Development","avatar_url":"https://avatars2.githubusercontent.com/u/58547882?v=4"},{"githubId":"priyanshnama","name":"Priyansh Nama","bio":"Android Developer and Open Source Contributor","avatar_url":"https://avatars3.githubusercontent.com/u/54625644?v=4"},{"githubId":"sdhiman99","name":"Shivansh Dhiman","bio":"404","avatar_url":"https://avatars2.githubusercontent.com/u/38396362?v=4"},{"githubId":"shivamsouravjha","name":"Shivam Sourav Jha","bio":"A learner learning with earpods on.","avatar_url":"https://avatars0.githubusercontent.com/u/60891544?v=4"},{"githubId":"tmo66","name":"Tushar Maheshwari","bio":"A Random guy with Random Dreams...","avatar_url":"https://avatars0.githubusercontent.com/u/63875632?v=4"}]')}});
//# sourceMappingURL=app.d5eae4e0.js.map