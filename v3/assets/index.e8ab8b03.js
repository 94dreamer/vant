import{c as V,B as f,h as g}from"./use-translate.43484c14.js";import{n as C,u as i,w}from"./with-install.d47ea1a2.js";import{L as b}from"./index.da11a5bc.js";import{z as k,e as l}from"./vue-libs.f710b8ed.js";const[S,n]=V("switch"),j={size:C,loading:Boolean,disabled:Boolean,modelValue:i,activeColor:String,inactiveColor:String,activeValue:{type:i,default:!0},inactiveValue:{type:i,default:!1}};var y=k({name:S,props:j,emits:["change","update:modelValue"],setup(e,{emit:c}){const o=()=>e.modelValue===e.activeValue,s=()=>{if(!e.disabled&&!e.loading){const a=o()?e.inactiveValue:e.activeValue;c("update:modelValue",a),c("change",a)}},d=()=>{if(e.loading){const a=o()?e.activeColor:e.inactiveColor;return l(b,{class:n("loading"),color:a},null)}};return f(()=>e.modelValue),()=>{const{size:a,loading:r,disabled:u,activeColor:m,inactiveColor:v}=e,t=o(),h={fontSize:g(a),backgroundColor:t?m:v};return l("div",{role:"switch",class:n({on:t,loading:r,disabled:u}),style:h,"aria-checked":t,onClick:s},[l("div",{class:n("node")},[d()])])}}});const x=w(y);export{x as S};