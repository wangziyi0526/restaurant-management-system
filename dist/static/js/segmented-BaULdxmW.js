import{d as B,r as y,c as L,w as m,b as r,e as D,i as e,f as o,h as c,B as E,u as s,D as u,A as N,p as R,q as W,_ as $}from"./index-BmVpTjm9.js";import{d as b}from"./home-filled-NADQtN-e.js";import{u as _}from"./hooks-anGE_1Kz.js";import{R as a}from"./index-ffMhVgR3.js";const t=n=>(R("data-v-a0693443"),n=n(),W(),n),k=t(()=>o("div",{class:"card-header"},[o("span",{class:"font-medium"},"分段控制器")],-1)),T={class:"mb-2"},q={class:"text-primary"},A=t(()=>o("p",{class:"mb-2"},"tooltip 提示",-1)),O=t(()=>o("p",{class:"mb-2"},"change 事件",-1)),U=t(()=>o("p",{class:"mb-2"},"禁用",-1)),z=t(()=>o("p",{class:"mb-2"},"可设置图标",-1)),F=t(()=>o("p",{class:"mb-2"},"只设置图标",-1)),G=t(()=>o("p",{class:"mb-2"},"自定义渲染",-1)),H=B({name:"Segmented",__name:"segmented",setup(n){const p=y(4),h=[{label:"周一"},{label:"周二"},{label:"周三"},{label:"周四"},{label:"周五"}],f=[{label:"周一",tip:"周一启航，新的篇章"},{label:"周二",tip:"周二律动，携手共进"},{label:"周三",tip:"周三昂扬，激情不减"},{label:"周四",tip:"周四精进，事半功倍"},{label:"周五",tip:"周五喜悦，收尾归档"}],w=[{label:"周一"},{label:"周二"},{label:"周三",disabled:!0},{label:"周四"},{label:"周五",disabled:!0}],x=[{label:"周一",icon:b},{label:"周二"},{label:"周三",icon:"terminalWindowLine"},{label:"周四"},{label:"周五",icon:"streamline-emojis:2"}],g=[{icon:b},{icon:"terminalWindowLine"},{icon:"streamline-emojis:cow-face"},{icon:"streamline-emojis:airplane"},{icon:"streamline-emojis:2"}],C=[{label:()=>e("div",null,[u(_(b),{class:"m-auto mt-1 w-[18px] h-[18px]"}),e("p",null,[c("周一")])])},{label:()=>e("div",null,[u(_("terminalWindowLine"),{class:"m-auto mt-1 w-[18px] h-[18px]"}),e("p",null,[c("周二")])])},{label:()=>e("div",null,[u(_("streamline-emojis:cow-face"),{class:"m-auto mt-1 w-[18px] h-[18px]"}),e("p",null,[c("周三")])])}],I=[{label:"周一",value:1},{label:"周二",value:2},{label:"周三",value:3}];function S({index:v,option:i}){const{label:l,value:d}=i;N(`当前选中项索引为：${v}，名字为${l}，值为${d}`,{type:"success"})}return(v,i)=>{const l=r("el-divider"),d=r("el-scrollbar"),V=r("el-card");return D(),L(V,{shadow:"never"},{header:m(()=>[k]),default:m(()=>[e(d,null,{default:m(()=>[o("p",T,[c(" 基础用法（v-model）"),o("span",q,E(h[p.value].label),1)]),e(s(a),{modelValue:p.value,"onUpdate:modelValue":i[0]||(i[0]=j=>p.value=j),options:h},null,8,["modelValue"]),e(l),A,e(s(a),{options:f}),e(l),O,e(s(a),{options:I,onChange:S}),e(l),U,e(s(a),{options:w}),e(l),z,e(s(a),{options:x}),e(l),F,e(s(a),{options:g}),e(l),G,e(s(a),{options:C})]),_:1})]),_:1})}}}),Q=$(H,[["__scopeId","data-v-a0693443"]]);export{Q as default};
