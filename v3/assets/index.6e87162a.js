import{u as A,a as b,T as I}from"./index.77b903ee.js";import{c as N,M as D,n as V,G as F,N as _,a as $}from"./use-translate.43484c14.js";import{c as M,m as q,t as z,w as G}from"./with-install.d47ea1a2.js";import{u as H}from"./use-expose.f4ec549a.js";import{L as X}from"./index.da11a5bc.js";import{z as P,C as v,x as E,X as J,M as K,e as s,q as O,o as g,c as p,w as f,A as n,a as j,b as C,F as k}from"./vue-libs.f710b8ed.js";import{C as B}from"./index.f669a479.js";import{P as Q}from"./index.e73ee9d2.js";import"./use-route.600bd02b.js";import"./index.0308b47a.js";import"./use-touch.8e5a0907.js";import"./on-popup-reopen.4b166a39.js";import"./constant.80c6de18.js";import"./interceptor.bbea64df.js";import"./use-refs.29822121.js";import"./index.3fb10fdd.js";import"./index.2cac46c1.js";const[W,m,Y]=N("list"),Z={error:Boolean,offset:M(300),loading:Boolean,finished:Boolean,errorText:String,direction:q("down"),loadingText:String,finishedText:String,immediateCheck:z};var ee=P({name:W,props:Z,emits:["load","update:error","update:loading"],setup(i,{emit:o,slots:t}){const l=v(!1),c=v(),u=v(),e=A(),r=D(c),d=()=>{O(()=>{if(l.value||i.finished||i.error||(e==null?void 0:e.value)===!1)return;const{offset:a,direction:x}=i,h=F(r);if(!h.height||_(c))return;let T=!1;const R=F(u);x==="up"?T=h.top-R.top<=a:T=R.bottom-h.bottom<=a,T&&(l.value=!0,o("update:loading",!0),o("load"))})},w=()=>{if(i.finished){const a=t.finished?t.finished():i.finishedText;if(a)return s("div",{class:m("finished-text")},[a])}},U=()=>{o("update:error",!1),d()},S=()=>{if(i.error){const a=t.error?t.error():i.errorText;if(a)return s("div",{class:m("error-text"),onClick:U},[a])}},y=()=>{if(l.value&&!i.finished)return s("div",{class:m("loading")},[t.loading?t.loading():s(X,{class:m("loading-icon")},{default:()=>[i.loadingText||Y("loading")]})])};return E([()=>i.loading,()=>i.finished,()=>i.error],d),e&&E(e,a=>{a&&d()}),J(()=>{l.value=i.loading}),K(()=>{i.immediateCheck&&d()}),H({check:d}),V("scroll",d,{target:r}),()=>{var h;const a=(h=t.default)==null?void 0:h.call(t),x=s("div",{ref:u,class:m("placeholder")},null);return s("div",{ref:c,role:"feed",class:m(),"aria-busy":l.value},[i.direction==="down"?a:x,y(),w(),S(),i.direction==="up"?a:x])}}});const L=G(ee);const pe=P({setup(i){const o=$({"zh-CN":{errorInfo:"\u9519\u8BEF\u63D0\u793A",errorText:"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",pullRefresh:"\u4E0B\u62C9\u5237\u65B0",finishedText:"\u6CA1\u6709\u66F4\u591A\u4E86"},"en-US":{errorInfo:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"PullRefresh",finishedText:"Finished"}}),t=v([{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]),l=u=>{const e=t.value[u];e.loading=!0,setTimeout(()=>{e.refreshing&&(e.items=[],e.refreshing=!1);for(let r=0;r<10;r++){const d=e.items.length+1;e.items.push(d<10?"0"+d:String(d))}e.loading=!1,e.refreshing=!1,u===1&&e.items.length===10&&!e.error?e.error=!0:e.error=!1,e.items.length>=40&&(e.finished=!0)},1e3)},c=u=>{t.value[u].finished=!1,l(u)};return(u,e)=>(g(),p(n(I),null,{default:f(()=>[s(n(b),{title:n(o)("basicUsage")},{default:f(()=>[s(n(L),{loading:t.value[0].loading,"onUpdate:loading":e[0]||(e[0]=r=>t.value[0].loading=r),finished:t.value[0].finished,"finished-text":n(o)("finishedText"),onLoad:e[1]||(e[1]=r=>l(0))},{default:f(()=>[(g(!0),j(k,null,C(t.value[0].items,r=>(g(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["title"]),s(n(b),{title:n(o)("errorInfo")},{default:f(()=>[s(n(L),{loading:t.value[1].loading,"onUpdate:loading":e[2]||(e[2]=r=>t.value[1].loading=r),error:t.value[1].error,"onUpdate:error":e[3]||(e[3]=r=>t.value[1].error=r),finished:t.value[1].finished,"error-text":n(o)("errorText"),onLoad:e[4]||(e[4]=r=>l(1))},{default:f(()=>[(g(!0),j(k,null,C(t.value[1].items,r=>(g(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","error","finished","error-text"])]),_:1},8,["title"]),s(n(b),{title:n(o)("pullRefresh")},{default:f(()=>[s(n(Q),{modelValue:t.value[2].refreshing,"onUpdate:modelValue":e[7]||(e[7]=r=>t.value[2].refreshing=r),onRefresh:e[8]||(e[8]=r=>c(2))},{default:f(()=>[s(n(L),{loading:t.value[2].loading,"onUpdate:loading":e[5]||(e[5]=r=>t.value[2].loading=r),finished:t.value[2].finished,"finished-text":n(o)("finishedText"),onLoad:e[6]||(e[6]=r=>l(2))},{default:f(()=>[(g(!0),j(k,null,C(t.value[2].items,r=>(g(),p(n(B),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{pe as default};