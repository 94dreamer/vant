import{A as E,C as f,D as P,E as $,B as M,G as v,H as te,I as ue,J as R,L,M as U,q as oe,N as se,x as k,O as z,P as ae}from"./vue-libs.f710b8ed.js";function je(){}const Ie=Object.assign,j=typeof window!="undefined";function I(e,n){const t=n.split(".");let u=e;return t.forEach(o=>{var s;u=(s=u[o])!=null?s:""}),u}function _e(e,n,t){return n.reduce((u,o)=>((!t||e[o]!==void 0)&&(u[o]=e[o]),u),{})}const p=typeof window!="undefined";function g(e){return p?requestAnimationFrame(e):-1}function ie(e){p&&cancelAnimationFrame(e)}function He(e){g(()=>g(e))}const re=e=>e===window,_=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),ce=e=>{const n=E(e);if(re(n)){const t=n.innerWidth,u=n.innerHeight;return _(t,u)}return(n==null?void 0:n.getBoundingClientRect)?n.getBoundingClientRect():_(0,0)};function Ve(e=!1){const n=f(e);return[n,(u=!n.value)=>{n.value=u}]}function We(e){const n=P(e,null);if(n){const t=z(),{link:u,unlink:o,internalChildren:s}=n;u(t),$(()=>o(t));const a=M(()=>s.indexOf(t));return{parent:n,index:a}}return{parent:null,index:f(-1)}}function de(e){const n=[],t=u=>{Array.isArray(u)&&u.forEach(o=>{var s;ae(o)&&(n.push(o),((s=o.component)==null?void 0:s.subTree)&&t(o.component.subTree.children),o.children&&t(o.children))})};return t(e),n}function le(e,n,t){const u=de(e.subTree.children);t.sort((s,a)=>u.indexOf(s.vnode)-u.indexOf(a.vnode));const o=t.map(s=>s.proxy);n.sort((s,a)=>{const r=o.indexOf(s),i=o.indexOf(a);return r-i})}function Ye(e){const n=v([]),t=v([]),u=z();return{children:n,linkChildren:s=>{te(e,Object.assign({link:i=>{i.proxy&&(t.push(i),n.push(i.proxy),le(u,n,t))},unlink:i=>{const c=t.indexOf(i);n.splice(c,1),t.splice(c,1)},children:n,internalChildren:t},s))}}}const w=1e3,b=60*w,F=60*b,H=24*F;function fe(e){const n=Math.floor(e/H),t=Math.floor(e%H/F),u=Math.floor(e%F/b),o=Math.floor(e%b/w),s=Math.floor(e%w);return{total:e,days:n,hours:t,minutes:u,seconds:o,milliseconds:s}}function pe(e,n){return Math.floor(e/1e3)===Math.floor(n/1e3)}function qe(e){let n,t,u,o;const s=f(e.time),a=M(()=>fe(s.value)),r=()=>{u=!1,ie(n)},i=()=>Math.max(t-Date.now(),0),c=l=>{var O,N;s.value=l,(O=e.onChange)==null||O.call(e,a.value),l===0&&(r(),(N=e.onFinish)==null||N.call(e))},d=()=>{n=g(()=>{u&&(c(i()),s.value>0&&d())})},S=()=>{n=g(()=>{if(u){const l=i();(!pe(l,s.value)||l===0)&&c(l),s.value>0&&S()}})},x=()=>{!p||(e.millisecond?d():S())},ee=()=>{u||(t=Date.now()+s.value,u=!0,x())},ne=(l=e.time)=>{r(),s.value=l};return ue(r),R(()=>{o&&(u=!0,o=!1,x())}),L(()=>{u&&(r(),o=!0)}),{start:ee,pause:r,reset:ne,current:a}}function Ee(e){let n;U(()=>{e(),oe(()=>{n=!0})}),R(()=>{n&&e()})}function me(e,n,t={}){if(!p)return;const{target:u=window,passive:o=!1,capture:s=!1}=t;let a;const r=c=>{const d=E(c);d&&!a&&(d.addEventListener(e,n,{capture:s,passive:o}),a=!0)},i=c=>{const d=E(c);d&&a&&(d.removeEventListener(e,n,s),a=!1)};$(()=>i(u)),L(()=>i(u)),Ee(()=>r(u)),se(u)&&k(u,(c,d)=>{i(d),r(c)})}function Je(e,n,t={}){const{eventName:u="click"}=t;me(u,s=>{const a=E(e);a&&!a.contains(s.target)&&n(s)},{target:document})}let h,A;function Ke(){if(!h&&(h=f(0),A=f(0),p)){const e=()=>{h.value=window.innerWidth,A.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:h,height:A}}const ge=/scroll|auto/i,V=p?window:void 0;function he(e){const n=1;return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===n}function Ce(e,n=V){let t=e;for(;t&&t!==n&&he(t);){const{overflowY:u}=window.getComputedStyle(t);if(ge.test(u))return t;t=t.parentNode}return n}function Ze(e,n=V){const t=f();return U(()=>{e.value&&(t.value=Ce(e.value,n))}),t}let C;function Ge(){if(!C&&(C=f("visible"),p)){const e=()=>{C.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return C}const ve=Symbol("van-field");function Xe(e){const n=P(ve,null);n&&!n.customValue.value&&(n.customValue.value=e,k(e,()=>{n.resetValidation(),n.validateWithTrigger("onChange")}))}const B=e=>e!=null,D=e=>typeof e=="function",W=e=>e!==null&&typeof e=="object",Qe=e=>W(e)&&D(e.then)&&D(e.catch),en=e=>Object.prototype.toString.call(e)==="[object Date]"&&!Number.isNaN(e.getTime());function nn(e){return e=e.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(e)||/^0[0-9-]{10,13}$/.test(e)}const we=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),be=()=>j?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Fe(e){const n="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(n,0)}function Y(e,n){"scrollTop"in e?e.scrollTop=n:e.scrollTo(e.scrollX,n)}function q(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Ae(e){Y(window,e),Y(document.body,e)}function tn(e,n){if(e===window)return 0;const t=n?Fe(n):q();return ce(e).top+t}const Be=be();function un(){Be&&Ae(q())}const De=e=>e.stopPropagation();function on(e,n){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),n&&De(e)}function sn(e){const n=E(e);if(!n)return!1;const t=window.getComputedStyle(n),u=t.display==="none",o=n.offsetParent===null&&t.position!=="fixed";return u||o}function ye(e){if(!!B(e))return we(e)?`${e}px`:String(e)}function an(e){if(B(e)){const n=ye(e);return{width:n,height:n}}}function rn(e){const n={};return e!==void 0&&(n.zIndex=+e),n}let y;function Te(){if(!y){const e=document.documentElement,n=e.style.fontSize||window.getComputedStyle(e).fontSize;y=parseFloat(n)}return y}function Se(e){return e=e.replace(/rem/g,""),+e*Te()}function xe(e){return e=e.replace(/vw/g,""),+e*window.innerWidth/100}function Oe(e){return e=e.replace(/vh/g,""),+e*window.innerHeight/100}function cn(e){if(typeof e=="number")return e;if(j){if(e.includes("rem"))return Se(e);if(e.includes("vw"))return xe(e);if(e.includes("vh"))return Oe(e)}return parseFloat(e)}const Ne=/-(\w)/g,J=e=>e.replace(Ne,(n,t)=>t.toUpperCase()),dn=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function ln(e,n=2){let t=e+"";for(;t.length<n;)t="0"+t;return t}const fn=(e,n,t)=>Math.min(Math.max(e,n),t);function K(e,n,t){const u=e.indexOf(n);return u===-1?e:n==="-"&&u!==0?e.slice(0,u):e.slice(0,u+1)+e.slice(u).replace(t,"")}function pn(e,n=!0,t=!0){n?e=K(e,".",/\./g):e=e.split(".")[0],t?e=K(e,"-",/-/g):e=e.replace(/-/,"");const u=n?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(u,"")}function En(e,n){const t=10**10;return Math.round((e+n)*t)/t}const{hasOwnProperty:Pe}=Object.prototype;function $e(e,n,t){const u=n[t];!B(u)||(!Pe.call(e,t)||!W(u)?e[t]=u:e[t]=Z(Object(e[t]),u))}function Z(e,n){return Object.keys(n).forEach(t=>{$e(e,n,t)}),e}var Me={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",confirm:"\u786E\u5B9A",startEnd:"\u5F00\u59CB/\u7ED3\u675F",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,n)=>`${e}\u5E74${n}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanContactCard:{addText:"\u6DFB\u52A0\u8054\u7CFB\u4EBA"},vanContactList:{addText:"\u65B0\u5EFA\u8054\u7CFB\u4EBA"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1\uFF1A"},vanCoupon:{unlimited:"\u65E0\u4F7F\u7528\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528\u4F18\u60E0\u5238",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",postal:"\u90AE\u653F\u7F16\u7801",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",postalEmpty:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressEditDetail:{label:"\u8BE6\u7EC6\u5730\u5740",placeholder:"\u8857\u9053\u95E8\u724C\u4FE1\u606F"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const G=f("zh-CN"),X=v({"zh-CN":Me}),m={messages(){return X[G.value]},use(e,n){G.value=e,this.add({[e]:n})},add(e={}){Z(X,e)}};function Q(e){const n=J(e)+".";return(t,...u)=>{const o=m.messages(),s=I(o,n+t)||I(o,t);return D(s)?s(...u):s}}function T(e,n){return n?typeof n=="string"?` ${e}--${n}`:Array.isArray(n)?n.reduce((t,u)=>t+T(e,u),""):Object.keys(n).reduce((t,u)=>t+(n[u]?T(e,u):""),""):""}function Re(e){return(n,t)=>(n&&typeof n!="string"&&(t=n,n=""),n=n?`${e}__${n}`:e,`${n}${T(n,t)}`)}function mn(e){const n=`van-${e}`;return[n,Re(n),Q(n)]}var Le={name:"Name",tel:"Phone",save:"Save",confirm:"Confirm",cancel:"Cancel",delete:"Delete",loading:"Loading...",noCoupon:"No coupons",nameEmpty:"Please fill in the name",telInvalid:"Malformed phone number",vanCalendar:{end:"End",start:"Start",title:"Calendar",startEnd:"Start/End",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:(e,n)=>`${e}/${n}`,rangePrompt:e=>`Choose no more than ${e} days`},vanCascader:{select:"Select"},vanContactCard:{addText:"Add contact info"},vanContactList:{addText:"Add new contact"},vanPagination:{prev:"Previous",next:"Next"},vanPullRefresh:{pulling:"Pull to refresh...",loosing:"Loose to refresh..."},vanSubmitBar:{label:"Total\uFF1A"},vanCoupon:{unlimited:"Unlimited",discount:e=>`${e*10}% off`,condition:e=>`At least ${e}`},vanCouponCell:{title:"Coupon",count:e=>`You have ${e} coupons`},vanCouponList:{exchange:"Exchange",close:"Close",enable:"Available",disabled:"Unavailable",placeholder:"Coupon code"},vanAddressEdit:{area:"Area",postal:"Postal",areaEmpty:"Please select a receiving area",addressEmpty:"Address can not be empty",postalEmpty:"Wrong postal code",defaultAddress:"Set as the default address"},vanAddressEditDetail:{label:"Address",placeholder:"Address"},vanAddressList:{add:"Add new address"}};function Ue(){m.add({"en-US":Le}),window.vueRouter&&window.vueRouter.afterEach(e=>{const{lang:n}=e.meta||{};n&&m.use(n)}),m.add({"zh-CN":{add:"\u589E\u52A0",red:"\u7EA2\u8272",tab:"\u6807\u7B7E",tag:"\u6807\u7B7E",desc:"\u63CF\u8FF0\u4FE1\u606F",back:"\u8FD4\u56DE",title:"\u6807\u9898",status:"\u72B6\u6001",button:"\u6309\u94AE",option:"\u9009\u9879",search:"\u641C\u7D22",orange:"\u6A59\u8272",yellow:"\u9EC4\u8272",purple:"\u7D2B\u8272",custom:"\u81EA\u5B9A\u4E49",content:"\u5185\u5BB9",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",decrease:"\u51CF\u5C11",disabled:"\u7981\u7528\u72B6\u6001",uneditable:"\u4E0D\u53EF\u7F16\u8F91",basicUsage:"\u57FA\u7840\u7528\u6CD5",advancedUsage:"\u9AD8\u7EA7\u7528\u6CD5",loadingStatus:"\u52A0\u8F7D\u72B6\u6001"},"en-US":{add:"Add",red:"Red",tab:"Tab",tag:"Tag",desc:"Description",back:"Back",title:"Title",status:"Status",button:"Button",option:"Option",search:"Search",orange:"Orange",yellow:"Yellow",purple:"Purple",custom:"Custom",content:"Content",username:"Username",password:"Password",decrease:"Decrease",disabled:"Disabled",uneditable:"Uneditable",basicUsage:"Basic Usage",advancedUsage:"Advanced Usage",loadingStatus:"Loading"}})}Ue();let ke=0;function gn(e){const n=`demo-i18n-${ke++}`;if(e){const t={},u=J(n);Object.keys(e).forEach(o=>{t[o]={[u]:e[o]}}),m.add(t)}return Q(n)}export{un as A,Xe as B,ve as C,fn as D,cn as E,Ve as F,ce as G,Y as H,en as I,g as J,Fe as K,Ke as L,Ze as M,sn as N,tn as O,Ge as P,He as Q,ie as R,De as S,En as T,ln as U,qe as V,Je as W,p as X,gn as a,Ye as b,mn as c,j as d,Ie as e,W as f,J as g,ye as h,B as i,we as j,dn as k,Ce as l,on as m,me as n,Ee as o,_e as p,an as q,Qe as r,je as s,rn as t,We as u,nn as v,D as w,q as x,Ae as y,pn as z};