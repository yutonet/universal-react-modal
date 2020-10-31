(this["webpackJsonpuniversal-react-modal-example"]=this["webpackJsonpuniversal-react-modal-example"]||[]).push([[0],{20:function(e,t,r){e.exports=r.p+"static/media/logo.0c437b4c.svg"},22:function(e,t,r){e.exports=r(33)},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(17),i=r.n(o),c=r(6),l=r(1),u=r(8);var s=e=>a.a.createElement("main",{className:"page about"},a.a.createElement("div",{className:"wrapper wysiwyg"},a.a.createElement("h1",null,"React Modals, Made Simple and Customizable."),a.a.createElement("p",null,"Universal React Modal (URM) is a highliy customizable modal controller component for React.js."),a.a.createElement("p",null,"URM provides developers better control on modal instances with multiple layers."),a.a.createElement("p",null,"To find out how to implement  URM, see the ",a.a.createElement(c.c,{to:"getting-started"},"getting started")," page."),a.a.createElement("h2",null,"Demos"),a.a.createElement("p",null,a.a.createElement("button",{className:"link",onClick:()=>{Object(u.b)("example")}},"Show me an example")),a.a.createElement("p",null,"For more info, see ",a.a.createElement(c.c,{to:"demos"},"demos")," page."))),p=r(21),f=r(13),m=r(19);var v=e=>{const t=Object(n.useState)(!1),r=Object(p.a)(t,2),o=r[0],i=r[1];return Object(n.useEffect)(()=>{e.src&&fetch("/universal-react-modal/examples/"+e.src).then(e=>{e.ok&&e.text().then(e=>{i(e)})})},[e.src]),a.a.createElement("div",{className:"code-display"},!1===o?a.a.createElement("div",{className:"display-loader"},"..."):a.a.createElement(f.a,Object.assign({},f.b,{theme:m.a,code:o,language:"jsx"}),({className:e,style:t,tokens:r,getLineProps:n,getTokenProps:o})=>a.a.createElement("pre",{className:e,style:t},r.map((e,t)=>a.a.createElement("div",n({line:e,key:t}),e.map((e,t)=>a.a.createElement("span",o({token:e,key:t}))))))))};var d=e=>a.a.createElement("main",{className:"page getting-started"},a.a.createElement("div",{className:"wrapper wysiwyg"},a.a.createElement("h1",null,"Getting Started."),a.a.createElement("h2",null,"Installation"),a.a.createElement("p",null,"You can install Universal React Modal (URM) through NPM."),a.a.createElement(v,{src:"gettingstarted-1.js"}),a.a.createElement("p",null,"To implement Universal React Modal (URM), you must include the ModalController and the modal components on your app first."),a.a.createElement("h4",null,"./App.js"),a.a.createElement(v,{src:"gettingstarted-2.js"}),a.a.createElement("p",null,"The modal component is a simple React.js component with some distinct props."),a.a.createElement("h4",null,"./modals/example.js"),a.a.createElement(v,{src:"gettingstarted-2.js"})));var h=e=>a.a.createElement("main",{className:"page documentation"},a.a.createElement("div",{className:"wrapper wysiwyg"},a.a.createElement("h1",null,"Documentation"),a.a.createElement("p",null,"This section is not ready at all. If you are really eager to use this plugin this soon, refer to the source code of this page. ",a.a.createElement("strong",null,"(./example/)"))));var b=e=>a.a.createElement("main",{className:"page demos"},a.a.createElement("div",{className:"wrapper wysiwyg"},a.a.createElement("h1",null,"Demos"),a.a.createElement("p",null,"Demos page is not completely ready, but here's an example for grasping the fundamentals."),a.a.createElement("h3",null,"Passing dynamic variables."),a.a.createElement("p",null,a.a.createElement("button",{className:"link",onClick:()=>{Object(u.b)("text",{title:"Text Modal",content:"This is a simple text modal."})}},"Try me!")),a.a.createElement("h5",null,"Button code"),a.a.createElement(v,{src:"demos-text-1.js"}),a.a.createElement("h5",null,"Modal"),a.a.createElement(v,{src:"demos-text-2.js"})));const y=e=>a.a.createElement("div",{className:e.className},e.closeBtn,a.a.createElement("div",{className:"modal-content"},e.title&&a.a.createElement("h1",{className:"text-title",style:{marginBottom:"2rem"}},e.title),e.content&&a.a.createElement("div",{className:"text-content wysiwyg highlight-links"},!!e.content&&e.content)));y.defaultProps={name:"text",containerClass:"modal-text",className:"",title:!1,content:!1};var g=y;const j=e=>a.a.createElement("div",{className:e.className},e.closeBtn,a.a.createElement("div",{className:"modal-content"},a.a.createElement("h1",{style:{marginBottom:"2rem"}},"Hello World"),a.a.createElement("div",{className:"wysiwyg"},a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate dolor at augue eleifend egestas. Nulla finibus erat leo, a fringilla velit efficitur sit amet. Donec ullamcorper egestas luctus. Phasellus imperdiet venenatis convallis. Etiam eget eleifend sapien. Cras dapibus pharetra sem non porttitor. Donec id diam sem. Nunc at tempor augue, vel gravida lectus. Maecenas rutrum dui in pulvinar pellentesque. Proin sed ultricies urna. Quisque vulputate odio et velit laoreet, id tempor leo ullamcorper. Integer varius vulputate tortor, nec mollis ante. Nulla nisi libero, pulvinar eu ligula id, dictum suscipit nisi. Curabitur sed lectus non ex pulvinar imperdiet."),a.a.createElement("p",null,"Mauris eu condimentum augue. Cras sit amet sodales ligula, non pharetra augue. Nam eu ipsum condimentum, elementum nulla id, iaculis odio. Fusce ac est egestas, tempor dui eget, vulputate magna. Suspendisse sodales vel libero non porta. Nunc nisi eros, vestibulum a porta posuere, mattis ac purus. Fusce eget purus risus. Quisque posuere vitae sem quis viverra. Quisque ipsum tortor, ultricies ornare lobortis vitae, ornare eget tellus. Ut et orci at dui ultrices dapibus sit amet sed odio. Nullam interdum turpis vitae dui faucibus auctor vel at nulla. Duis semper ligula odio, quis iaculis mauris tristique vitae. Aliquam eros leo, feugiat at hendrerit vitae, vestibulum non erat. Quisque non neque a nisi pulvinar aliquam. Nullam risus neque, laoreet in pretium sit amet, volutpat et urna."),a.a.createElement("p",null,"Ut sollicitudin vestibulum ex vitae fermentum. Donec porta nibh mauris, vel consequat ipsum fermentum nec. Donec finibus mattis interdum. Etiam venenatis semper ipsum, a porta augue. Vestibulum eget nunc facilisis, ultrices quam sed, efficitur mi. Phasellus in lacus cursus, dictum elit nec, tincidunt odio. Proin consequat nibh at augue scelerisque maximus. Quisque iaculis massa non nisi rhoncus, ut aliquet orci euismod."))));j.defaultProps={name:"example",containerClass:"modal-example"};var _=j,w=r(20),E=r.n(w);r(31),r(32);var O=()=>a.a.createElement(c.a,{basename:"/universal-react-modal"},a.a.createElement(u.a,null,a.a.createElement(_,null),a.a.createElement(g,null)),a.a.createElement("div",{className:"app-wrap"},a.a.createElement("header",{className:"app-header"},a.a.createElement("div",{className:"wrapper"},a.a.createElement(c.b,{to:"/"},a.a.createElement("img",{src:E.a,className:"header-logo",alt:"logo"})))),a.a.createElement("nav",{className:"app-nav"},a.a.createElement("div",{className:"wrapper nav-wrap"},a.a.createElement(c.c,{to:"/",exact:!0},"About"),a.a.createElement(c.c,{to:"/getting-started"},"Getting Started"),a.a.createElement(c.c,{to:"/demos"},"Demos"),a.a.createElement("a",{href:"https://github.com/yutonet/universal-react-modal/",target:"_blank",rel:"noopener noreferrer"},"View on GitHub"),a.a.createElement("a",{href:"https://www.npmjs.com/package/universal-react-modal",target:"_blank",rel:"noopener noreferrer"},"View on NPM"))),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/getting-started",exact:!0},a.a.createElement(d,null)),a.a.createElement(l.a,{path:"/documentation",exact:!0},a.a.createElement(h,null)),a.a.createElement(l.a,{path:"/demos",exact:!0},a.a.createElement(b,null)),a.a.createElement(l.a,null,a.a.createElement(s,null))),a.a.createElement("footer",{className:"app-footer"},"MIT \xa9 Yunus Tabako\u011flu, 2020")));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null)),document.getElementById("root"))},8:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return hn})),r.d(t,"b",(function(){return l}));var n=r(0),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e,t){void 0===t&&(t={});var r=new CustomEvent("openUniversalModal",{detail:o({modal:e,layer:1},t)});window.dispatchEvent(r)};var u=function(){this.__data__=[],this.size=0};var s=function(e,t){return e===t||e!==e&&t!==t};var p=function(e,t){for(var r=e.length;r--;)if(s(e[r][0],t))return r;return-1},f=Array.prototype.splice;var m=function(e){var t=this.__data__,r=p(t,e);return!(r<0)&&(r==t.length-1?t.pop():f.call(t,r,1),--this.size,!0)};var v=function(e){var t=this.__data__,r=p(t,e);return r<0?void 0:t[r][1]};var d=function(e){return p(this.__data__,e)>-1};var h=function(e,t){var r=this.__data__,n=p(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function b(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}b.prototype.clear=u,b.prototype.delete=m,b.prototype.get=v,b.prototype.has=d,b.prototype.set=h;var y=b;var g=function(){this.__data__=new y,this.size=0};var j=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var _=function(e){return this.__data__.get(e)};var w=function(e){return this.__data__.has(e)},E="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function O(e,t){return e(t={exports:{}},t.exports),t.exports}var A="object"==typeof E&&E&&E.Object===Object&&E,M="object"==typeof self&&self&&self.Object===Object&&self,x=A||M||Function("return this")(),N=x.Symbol,S=Object.prototype,C=S.hasOwnProperty,D=S.toString,P=N?N.toStringTag:void 0;var T=function(e){var t=C.call(e,P),r=e[P];try{e[P]=void 0;var n=!0}catch(o){}var a=D.call(e);return n&&(t?e[P]=r:delete e[P]),a},k=Object.prototype.toString;var U=function(e){return k.call(e)},z=N?N.toStringTag:void 0;var B=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":z&&z in Object(e)?T(e):U(e)};var F=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var q=function(e){if(!F(e))return!1;var t=B(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},I=x["__core-js_shared__"],R=function(){var e=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();var L=function(e){return!!R&&R in e},$=Function.prototype.toString;var V=function(e){if(null!=e){try{return $.call(e)}catch(t){}try{return e+""}catch(t){}}return""},W=/^\[object .+?Constructor\]$/,G=Function.prototype,Q=Object.prototype,H=G.toString,J=Q.hasOwnProperty,Y=RegExp("^"+H.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var K=function(e){return!(!F(e)||L(e))&&(q(e)?Y:W).test(V(e))};var X=function(e,t){return null==e?void 0:e[t]};var Z=function(e,t){var r=X(e,t);return K(r)?r:void 0},ee=Z(x,"Map"),te=Z(Object,"create");var re=function(){this.__data__=te?te(null):{},this.size=0};var ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;if(te){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ae.call(t,e)?t[e]:void 0},ie=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;return te?void 0!==t[e]:ie.call(t,e)};var le=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=te&&void 0===t?"__lodash_hash_undefined__":t,this};function ue(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ue.prototype.clear=re,ue.prototype.delete=ne,ue.prototype.get=oe,ue.prototype.has=ce,ue.prototype.set=le;var se=ue;var pe=function(){this.size=0,this.__data__={hash:new se,map:new(ee||y),string:new se}};var fe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var me=function(e,t){var r=e.__data__;return fe(t)?r["string"==typeof t?"string":"hash"]:r.map};var ve=function(e){var t=me(this,e).delete(e);return this.size-=t?1:0,t};var de=function(e){return me(this,e).get(e)};var he=function(e){return me(this,e).has(e)};var be=function(e,t){var r=me(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ye.prototype.clear=pe,ye.prototype.delete=ve,ye.prototype.get=de,ye.prototype.has=he,ye.prototype.set=be;var ge=ye;var je=function(e,t){var r=this.__data__;if(r instanceof y){var n=r.__data__;if(!ee||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new ge(n)}return r.set(e,t),this.size=r.size,this};function _e(e){var t=this.__data__=new y(e);this.size=t.size}_e.prototype.clear=g,_e.prototype.delete=j,_e.prototype.get=_,_e.prototype.has=w,_e.prototype.set=je;var we=_e;var Ee=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var Oe=function(e){return this.__data__.has(e)};function Ae(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new ge;++t<r;)this.add(e[t])}Ae.prototype.add=Ae.prototype.push=Ee,Ae.prototype.has=Oe;var Me=Ae;var xe=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1};var Ne=function(e,t){return e.has(t)};var Se=function(e,t,r,n,a,o){var i=1&r,c=e.length,l=t.length;if(c!=l&&!(i&&l>c))return!1;var u=o.get(e);if(u&&o.get(t))return u==t;var s=-1,p=!0,f=2&r?new Me:void 0;for(o.set(e,t),o.set(t,e);++s<c;){var m=e[s],v=t[s];if(n)var d=i?n(v,m,s,t,e,o):n(m,v,s,e,t,o);if(void 0!==d){if(d)continue;p=!1;break}if(f){if(!xe(t,(function(e,t){if(!Ne(f,t)&&(m===e||a(m,e,r,n,o)))return f.push(t)}))){p=!1;break}}else if(m!==v&&!a(m,v,r,n,o)){p=!1;break}}return o.delete(e),o.delete(t),p},Ce=x.Uint8Array;var De=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Pe=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Te=N?N.prototype:void 0,ke=Te?Te.valueOf:void 0;var Ue=function(e,t,r,n,a,o,i){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Ce(e),new Ce(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return s(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var c=De;case"[object Set]":var l=1&n;if(c||(c=Pe),e.size!=t.size&&!l)return!1;var u=i.get(e);if(u)return u==t;n|=2,i.set(e,t);var p=Se(c(e),c(t),n,a,o,i);return i.delete(e),p;case"[object Symbol]":if(ke)return ke.call(e)==ke.call(t)}return!1};var ze=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},Be=Array.isArray;var Fe=function(e,t,r){var n=t(e);return Be(e)?n:ze(n,r(e))};var qe=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,o=[];++r<n;){var i=e[r];t(i,r,e)&&(o[a++]=i)}return o};var Ie=function(){return[]},Re=Object.prototype.propertyIsEnumerable,Le=Object.getOwnPropertySymbols,$e=Le?function(e){return null==e?[]:(e=Object(e),qe(Le(e),(function(t){return Re.call(e,t)})))}:Ie;var Ve=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var We=function(e){return null!=e&&"object"==typeof e};var Ge=function(e){return We(e)&&"[object Arguments]"==B(e)},Qe=Object.prototype,He=Qe.hasOwnProperty,Je=Qe.propertyIsEnumerable,Ye=Ge(function(){return arguments}())?Ge:function(e){return We(e)&&He.call(e,"callee")&&!Je.call(e,"callee")};var Ke=function(){return!1},Xe=O((function(e,t){var r=t&&!t.nodeType&&t,n=r&&e&&!e.nodeType&&e,a=n&&n.exports===r?x.Buffer:void 0,o=(a?a.isBuffer:void 0)||Ke;e.exports=o})),Ze=/^(?:0|[1-9]\d*)$/;var et=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Ze.test(e))&&e>-1&&e%1==0&&e<t};var tt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},rt={};rt["[object Float32Array]"]=rt["[object Float64Array]"]=rt["[object Int8Array]"]=rt["[object Int16Array]"]=rt["[object Int32Array]"]=rt["[object Uint8Array]"]=rt["[object Uint8ClampedArray]"]=rt["[object Uint16Array]"]=rt["[object Uint32Array]"]=!0,rt["[object Arguments]"]=rt["[object Array]"]=rt["[object ArrayBuffer]"]=rt["[object Boolean]"]=rt["[object DataView]"]=rt["[object Date]"]=rt["[object Error]"]=rt["[object Function]"]=rt["[object Map]"]=rt["[object Number]"]=rt["[object Object]"]=rt["[object RegExp]"]=rt["[object Set]"]=rt["[object String]"]=rt["[object WeakMap]"]=!1;var nt=function(e){return We(e)&&tt(e.length)&&!!rt[B(e)]};var at=function(e){return function(t){return e(t)}},ot=O((function(e,t){var r=t&&!t.nodeType&&t,n=r&&e&&!e.nodeType&&e,a=n&&n.exports===r&&A.process,o=function(){try{var e=n&&n.require&&n.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(t){}}();e.exports=o})),it=ot&&ot.isTypedArray,ct=it?at(it):nt,lt=Object.prototype.hasOwnProperty;var ut=function(e,t){var r=Be(e),n=!r&&Ye(e),a=!r&&!n&&Xe(e),o=!r&&!n&&!a&&ct(e),i=r||n||a||o,c=i?Ve(e.length,String):[],l=c.length;for(var u in e)!t&&!lt.call(e,u)||i&&("length"==u||a&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||et(u,l))||c.push(u);return c},st=Object.prototype;var pt=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||st)};var ft=function(e,t){return function(r){return e(t(r))}},mt=ft(Object.keys,Object),vt=Object.prototype.hasOwnProperty;var dt=function(e){if(!pt(e))return mt(e);var t=[];for(var r in Object(e))vt.call(e,r)&&"constructor"!=r&&t.push(r);return t};var ht=function(e){return null!=e&&tt(e.length)&&!q(e)};var bt=function(e){return ht(e)?ut(e):dt(e)};var yt=function(e){return Fe(e,bt,$e)},gt=Object.prototype.hasOwnProperty;var jt=function(e,t,r,n,a,o){var i=1&r,c=yt(e),l=c.length;if(l!=yt(t).length&&!i)return!1;for(var u=l;u--;){var s=c[u];if(!(i?s in t:gt.call(t,s)))return!1}var p=o.get(e);if(p&&o.get(t))return p==t;var f=!0;o.set(e,t),o.set(t,e);for(var m=i;++u<l;){var v=e[s=c[u]],d=t[s];if(n)var h=i?n(d,v,s,t,e,o):n(v,d,s,e,t,o);if(!(void 0===h?v===d||a(v,d,r,n,o):h)){f=!1;break}m||(m="constructor"==s)}if(f&&!m){var b=e.constructor,y=t.constructor;b==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof y&&y instanceof y||(f=!1)}return o.delete(e),o.delete(t),f},_t=Z(x,"DataView"),wt=Z(x,"Promise"),Et=Z(x,"Set"),Ot=Z(x,"WeakMap"),At=V(_t),Mt=V(ee),xt=V(wt),Nt=V(Et),St=V(Ot),Ct=B;(_t&&"[object DataView]"!=Ct(new _t(new ArrayBuffer(1)))||ee&&"[object Map]"!=Ct(new ee)||wt&&"[object Promise]"!=Ct(wt.resolve())||Et&&"[object Set]"!=Ct(new Et)||Ot&&"[object WeakMap]"!=Ct(new Ot))&&(Ct=function(e){var t=B(e),r="[object Object]"==t?e.constructor:void 0,n=r?V(r):"";if(n)switch(n){case At:return"[object DataView]";case Mt:return"[object Map]";case xt:return"[object Promise]";case Nt:return"[object Set]";case St:return"[object WeakMap]"}return t});var Dt=Ct,Pt=Object.prototype.hasOwnProperty;var Tt=function(e,t,r,n,a,o){var i=Be(e),c=Be(t),l=i?"[object Array]":Dt(e),u=c?"[object Array]":Dt(t),s="[object Object]"==(l="[object Arguments]"==l?"[object Object]":l),p="[object Object]"==(u="[object Arguments]"==u?"[object Object]":u),f=l==u;if(f&&Xe(e)){if(!Xe(t))return!1;i=!0,s=!1}if(f&&!s)return o||(o=new we),i||ct(e)?Se(e,t,r,n,a,o):Ue(e,t,l,r,n,a,o);if(!(1&r)){var m=s&&Pt.call(e,"__wrapped__"),v=p&&Pt.call(t,"__wrapped__");if(m||v){var d=m?e.value():e,h=v?t.value():t;return o||(o=new we),a(d,h,r,n,o)}}return!!f&&(o||(o=new we),jt(e,t,r,n,a,o))};var kt=function e(t,r,n,a,o){return t===r||(null==t||null==r||!We(t)&&!We(r)?t!==t&&r!==r:Tt(t,r,n,a,e,o))};var Ut=function(e,t){return kt(e,t)},zt=function(){try{var e=Z(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();var Bt=function(e,t,r){"__proto__"==t&&zt?zt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r},Ft=Object.prototype.hasOwnProperty;var qt=function(e,t,r){var n=e[t];Ft.call(e,t)&&s(n,r)&&(void 0!==r||t in e)||Bt(e,t,r)};var It=function(e,t,r,n){var a=!r;r||(r={});for(var o=-1,i=t.length;++o<i;){var c=t[o],l=n?n(r[c],e[c],c,r,e):void 0;void 0===l&&(l=e[c]),a?Bt(r,c,l):qt(r,c,l)}return r};var Rt=function(e){return e};var Lt=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)},$t=Math.max;var Vt=function(e,t,r){return t=$t(void 0===t?e.length-1:t,0),function(){for(var n=arguments,a=-1,o=$t(n.length-t,0),i=Array(o);++a<o;)i[a]=n[t+a];a=-1;for(var c=Array(t+1);++a<t;)c[a]=n[a];return c[t]=r(i),Lt(e,this,c)}};var Wt=function(e){return function(){return e}},Gt=zt?function(e,t){return zt(e,"toString",{configurable:!0,enumerable:!1,value:Wt(t),writable:!0})}:Rt,Qt=Date.now;var Ht=function(e){var t=0,r=0;return function(){var n=Qt(),a=16-(n-r);if(r=n,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(Gt);var Jt=function(e,t){return Ht(Vt(e,t,Rt),e+"")};var Yt=function(e,t,r){if(!F(r))return!1;var n=typeof t;return!!("number"==n?ht(r)&&et(t,r.length):"string"==n&&t in r)&&s(r[t],e)};var Kt=function(e){return Jt((function(t,r){var n=-1,a=r.length,o=a>1?r[a-1]:void 0,i=a>2?r[2]:void 0;for(o=e.length>3&&"function"==typeof o?(a--,o):void 0,i&&Yt(r[0],r[1],i)&&(o=a<3?void 0:o,a=1),t=Object(t);++n<a;){var c=r[n];c&&e(t,c,n,o)}return t}))};var Xt=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t},Zt=Object.prototype.hasOwnProperty;var er=function(e){if(!F(e))return Xt(e);var t=pt(e),r=[];for(var n in e)("constructor"!=n||!t&&Zt.call(e,n))&&r.push(n);return r};var tr=function(e){return ht(e)?ut(e,!0):er(e)},rr=Kt((function(e,t){It(t,tr(t),e)}));var nr=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a};var ar=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e};var or=function(e,t){return e&&It(t,bt(t),e)};var ir=function(e,t){return e&&It(t,tr(t),e)},cr=O((function(e,t){var r=t&&!t.nodeType&&t,n=r&&e&&!e.nodeType&&e,a=n&&n.exports===r?x.Buffer:void 0,o=a?a.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var r=e.length,n=o?o(r):new e.constructor(r);return e.copy(n),n}}));var lr=function(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t};var ur=function(e,t){return It(e,$e(e),t)},sr=ft(Object.getPrototypeOf,Object),pr=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)ze(t,$e(e)),e=sr(e);return t}:Ie;var fr=function(e,t){return It(e,pr(e),t)};var mr=function(e){return Fe(e,tr,pr)},vr=Object.prototype.hasOwnProperty;var dr=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&vr.call(e,"index")&&(r.index=e.index,r.input=e.input),r};var hr=function(e){var t=new e.constructor(e.byteLength);return new Ce(t).set(new Ce(e)),t};var br=function(e,t){var r=t?hr(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)},yr=/\w*$/;var gr=function(e){var t=new e.constructor(e.source,yr.exec(e));return t.lastIndex=e.lastIndex,t},jr=N?N.prototype:void 0,_r=jr?jr.valueOf:void 0;var wr=function(e){return _r?Object(_r.call(e)):{}};var Er=function(e,t){var r=t?hr(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)};var Or=function(e,t,r){var n=e.constructor;switch(t){case"[object ArrayBuffer]":return hr(e);case"[object Boolean]":case"[object Date]":return new n(+e);case"[object DataView]":return br(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Er(e,r);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(e);case"[object RegExp]":return gr(e);case"[object Set]":return new n;case"[object Symbol]":return wr(e)}},Ar=Object.create,Mr=function(){function e(){}return function(t){if(!F(t))return{};if(Ar)return Ar(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();var xr=function(e){return"function"!=typeof e.constructor||pt(e)?{}:Mr(sr(e))};var Nr=function(e){return We(e)&&"[object Map]"==Dt(e)},Sr=ot&&ot.isMap,Cr=Sr?at(Sr):Nr;var Dr=function(e){return We(e)&&"[object Set]"==Dt(e)},Pr=ot&&ot.isSet,Tr=Pr?at(Pr):Dr,kr={};kr["[object Arguments]"]=kr["[object Array]"]=kr["[object ArrayBuffer]"]=kr["[object DataView]"]=kr["[object Boolean]"]=kr["[object Date]"]=kr["[object Float32Array]"]=kr["[object Float64Array]"]=kr["[object Int8Array]"]=kr["[object Int16Array]"]=kr["[object Int32Array]"]=kr["[object Map]"]=kr["[object Number]"]=kr["[object Object]"]=kr["[object RegExp]"]=kr["[object Set]"]=kr["[object String]"]=kr["[object Symbol]"]=kr["[object Uint8Array]"]=kr["[object Uint8ClampedArray]"]=kr["[object Uint16Array]"]=kr["[object Uint32Array]"]=!0,kr["[object Error]"]=kr["[object Function]"]=kr["[object WeakMap]"]=!1;var Ur=function e(t,r,n,a,o,i){var c,l=1&r,u=2&r,s=4&r;if(n&&(c=o?n(t,a,o,i):n(t)),void 0!==c)return c;if(!F(t))return t;var p=Be(t);if(p){if(c=dr(t),!l)return lr(t,c)}else{var f=Dt(t),m="[object Function]"==f||"[object GeneratorFunction]"==f;if(Xe(t))return cr(t,l);if("[object Object]"==f||"[object Arguments]"==f||m&&!o){if(c=u||m?{}:xr(t),!l)return u?fr(t,ir(c,t)):ur(t,or(c,t))}else{if(!kr[f])return o?t:{};c=Or(t,f,l)}}i||(i=new we);var v=i.get(t);if(v)return v;i.set(t,c),Tr(t)?t.forEach((function(a){c.add(e(a,r,n,a,t,i))})):Cr(t)&&t.forEach((function(a,o){c.set(o,e(a,r,n,o,t,i))}));var d=s?u?mr:yt:u?keysIn:bt,h=p?void 0:d(t);return ar(h||t,(function(a,o){h&&(a=t[o=a]),qt(c,o,e(a,r,n,o,t,i))})),c};var zr=function(e){return"symbol"==typeof e||We(e)&&"[object Symbol]"==B(e)},Br=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fr=/^\w*$/;var qr=function(e,t){if(Be(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!zr(e))||(Fr.test(e)||!Br.test(e)||null!=t&&e in Object(t))};function Ir(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function r(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(Ir.Cache||ge),r}Ir.Cache=ge;var Rr=Ir;var Lr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$r=/\\(\\)?/g,Vr=function(e){var t=Rr(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Lr,(function(e,r,n,a){t.push(n?a.replace($r,"$1"):r||e)})),t})),Wr=N?N.prototype:void 0,Gr=Wr?Wr.toString:void 0;var Qr=function e(t){if("string"==typeof t)return t;if(Be(t))return nr(t,e)+"";if(zr(t))return Gr?Gr.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var Hr=function(e){return null==e?"":Qr(e)};var Jr=function(e,t){return Be(e)?e:qr(e,t)?[e]:Vr(Hr(e))};var Yr=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0};var Kr=function(e){if("string"==typeof e||zr(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Xr=function(e,t){for(var r=0,n=(t=Jr(t,e)).length;null!=e&&r<n;)e=e[Kr(t[r++])];return r&&r==n?e:void 0};var Zr=function(e,t,r){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(r=r>a?a:r)<0&&(r+=a),a=t>r?0:r-t>>>0,t>>>=0;for(var o=Array(a);++n<a;)o[n]=e[n+t];return o};var en=function(e,t){return t.length<2?e:Xr(e,Zr(t,0,-1))};var tn=function(e,t){return t=Jr(t,e),null==(e=en(e,t))||delete e[Kr(Yr(t))]},rn=Function.prototype,nn=Object.prototype,an=rn.toString,on=nn.hasOwnProperty,cn=an.call(Object);var ln=function(e){if(!We(e)||"[object Object]"!=B(e))return!1;var t=sr(e);if(null===t)return!0;var r=on.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&an.call(r)==cn};var un=function(e){return ln(e)?void 0:e},sn=N?N.isConcatSpreadable:void 0;var pn=function(e){return Be(e)||Ye(e)||!!(sn&&e&&e[sn])};var fn=function e(t,r,n,a,o){var i=-1,c=t.length;for(n||(n=pn),o||(o=[]);++i<c;){var l=t[i];r>0&&n(l)?r>1?e(l,r-1,n,a,o):ze(o,l):a||(o[o.length]=l)}return o};var mn=function(e){return(null==e?0:e.length)?fn(e,1):[]};var vn=function(e){return Ht(Vt(e,void 0,mn),e+"")}((function(e,t){var r={};if(null==e)return r;var n=!1;t=nr(t,(function(t){return t=Jr(t,e),n||(n=t.length>1),t})),It(e,mr(e),r),n&&(r=Ur(r,7,un));for(var a=t.length;a--;)tn(r,t[a]);return r})),dn=function(e){if(void 0===e&&(e=!0),e){var t=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.marginRight=t+"px",document.body.classList.add("urm-block-overflow")}else document.documentElement.style.marginRight="",document.body.classList.remove("urm-block-overflow")},hn=function(e){function t(t){var r;return(r=e.call(this,t)||this).emptyModalData=r.calculateEmptyModalData(t.layers),r.modalClosed=r.modalClosed.bind(c(r)),r.modalOpened=r.modalOpened.bind(c(r)),r.state={modalData:r.emptyModalData},r}i(t,e);var r=t.prototype;return r.calculateEmptyModalData=function(e){for(var t=[],r=0;r<e;r++)t.push(!1);return t},r.modalClosed=function(){Ut(this.state.modalData,this.emptyModalData)&&dn(!1)},r.modalOpened=function(){dn(!0)},r.componentDidMount=function(){var e=this,t=this;window.addEventListener("openUniversalModal",(function(e){if(!Ut(t.state.modalData[e.detail.layer-1],e.detail)){var r=[].concat(t.state.modalData);r[e.detail.layer-1]=e.detail,t.setState({modalData:r})}}),!1),window.addEventListener("closeUniversalModal",(function(r){t.setState({modalData:e.emptyModalData})}),!1)},r.componentWillUnmount=function(){window.removeEventListener("openUniversalModal"),window.removeEventListener("closeUniversalModal")},r.componentDidUpdate=function(e,t){e.layers!==this.props.layers&&console.warn("Dynamic change of the amount of layers on the modals controller is not allowed.")},r.render=function(){var e=this;return a.a.createElement(a.a.Fragment,null,this.state.modalData.map((function(t,r){return a.a.createElement(bn,{key:r,layer:r+1,data:t,closeBtn:e.props.defaultCloseBtn,onClose:e.modalClosed,onOpen:e.modalOpened},e.props.children)})))},t}(a.a.Component);hn.defaultProps={defaultCloseBtn:a.a.createElement("button",{className:"modal-defaultclosebtn",type:"button"},a.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},a.a.createElement("path",{d:"M512 439.603l-362.035-362.035-72.397 72.397 362.035 362.035-362.035 362.035 72.397 72.397 362.035-362.035 362.035 362.035 72.397-72.397-362.035-362.035 362.035-362.035-72.397-72.397-362.035 362.035z"}))),layers:2};var bn=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={data:!1,show:!1,component:!1},r._mounted=!1,r.actionTimer=!1,r.closeModal=r.closeModal.bind(c(r)),r.getModalComponent=r.getModalComponent.bind(c(r)),r.clearActions=r.clearActions.bind(c(r)),r.closeBtn=a.a.cloneElement(t.closeBtn,{onClick:r.closeModal}),r.defaultOpts={modal:"",url:!1,urlTitle:!1,closeBtn:r.closeBtn,onClose:r.onClose,className:""},r}i(t,e);var r=t.prototype;return r.componentDidMount=function(){this._mounted=!0},r.componentWillUnmount=function(){this._mounted=!1},r.componentDidUpdate=function(e,t){var r=this,n=function(){r.setState({component:r.getModalComponent()}),!1!==r.state.data&&(r.actionTimer=setTimeout((function(){r._mounted&&(r.props.onOpen(),r.setState({show:!0}),r.actionTimer=!1)}),30))};if(!Ut(e.data,r.props.data)){var a=!1!==r.props.data&&rr({},r.defaultOpts,r.props.data);r.state.show?(r.clearActions(),r.setState({show:!1}),r.actionTimer=setTimeout((function(){r._mounted&&(r.setState({data:!1}),r.setState({data:a}),r.props.onClose(),r.actionTimer=!1)}),400)):r.setState({data:a})}Ut(t.data,r.state.data)||(!1!==r.actionTimer?(r.clearActions(),setTimeout((function(){r._mounted&&n()}),601)):n())},r.getModalComponent=function(){var e=!1,t=this;if(this.state.data){var r=vn(this.state.data,["modal"]),n=a.a.Children.toArray(this.props.children);r.className="modal-contentwrap "+r.className,r.wide&&(r.className+=" wide");var i=o({},this.state.data).modal;r.close=function(e){t.closeModal(e,i)};for(var c=0;c<n.length;c++){var l=n[c];(l.props.name===this.state.data.modal||l.type.props&&l.type.props.name===this.state.data.modal)&&(e=a.a.cloneElement(l,o({},r)))}!1===e&&console.warn('Modals Error: Modal "'+this.state.data.modal+'" not found.')}return e},r.clearActions=function(){!1!==this.actionTimer&&(clearTimeout(this.actionTimer),this.actionTimer=!1)},r.closeModal=function(e,t){if(void 0===t&&(t=!1),!1===t||t===this.props.data.modal){var r=this.state.component.type.props?this.state.component.type.props:this.state.component.props;!function(e){void 0===e&&(e=!1);var t=new CustomEvent("closeUniversalModal",{detail:{layer:e}});window.dispatchEvent(t)}(this.props.layer),this.state.data.onClose&&this.state.data.onClose(e,this.state.data),r.onClose&&r.onClose(e,this.state.data)}},r.render=function(){var e=this.state.component;if(e){var t=e.type.props?e.type.props:e.props;return a.a.createElement("div",{className:"modal-container layer-"+this.props.layer+" "+t.containerClass+(this.state.show?" show":"")},a.a.createElement("div",{className:"modal-outerwrap"},a.a.createElement("div",{className:"modal-innerwrap"},e),t.preventClose?a.a.createElement("div",{className:"modal-overlay"}):a.a.createElement("button",{className:"modal-overlay",onClick:function(e){t.preventClose||t.close(e)}})))}return!1},t}(a.a.Component);bn.defaultProps={top:!1}}).call(this,r(15))}},[[22,1,2]]]);
//# sourceMappingURL=main.6dbe87b4.chunk.js.map