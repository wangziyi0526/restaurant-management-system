import{d as H,r as n,c as v,w as s,b as d,j as T,e as r,f as u,h as l,m as o,i as t,k as J,B as U,C as K,A as p}from"./index-CpDnptRB.js";const M=u("div",{class:"card-header"},[u("span",{class:"font-medium"},"自定义防抖、截流、文本复制、长按指令")],-1),O={class:"mb-2"},P={class:"mb-2"},Q={class:"mb-2"},W={class:"mb-2"},X={class:"text-sky-500"},ee=H({name:"Directives",__name:"directives",setup(Y){const x=n(""),b=n(""),g=n(""),w=n(""),h=n(""),y=n("copy"),B=n("可复制的文本"),c=n(!1),_=n(""),C=n(0);function I(){p(x.value)}function F(){p(b.value)}function N({name:f,sex:e}){p(`${f}${e}${g.value}`)}function L(){p(w.value)}function S({name:f,sex:e}){p(`${f}${e}${h.value}`)}function j(){c.value=!0}function A(){c.value=!0}function E(){C.value+=1,c.value=!0,_.value=`持续回调${C.value}次`}function R(){c.value=!1,_.value="",C.value=0}return(f,e)=>{const i=d("el-input"),k=d("el-divider"),V=d("el-button"),z=d("el-tag"),q=d("el-space"),G=d("el-card"),m=T("optimize"),D=T("copy"),$=T("longpress");return r(),v(G,{shadow:"never"},{header:s(()=>[M]),default:s(()=>[u("div",O,[l(" 防抖指令（连续输入，只会执行第一次点击事件，立即执行） "),o(t(i,{modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=a=>x.value=a),class:"!w-[200px]",clearable:"",onClear:I},null,8,["modelValue"]),[[m,{event:"input",fn:I,immediate:!0,timeout:1e3}]])]),u("div",P,[l(" 防抖指令（连续输入，只会执行最后一次事件，延后执行） "),o(t(i,{modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=a=>b.value=a),class:"!w-[200px]",clearable:""},null,8,["modelValue"]),[[m,{event:"input",fn:F,timeout:400}]])]),u("div",null,[l(" 防抖指令（连续输入，只会执行最后一次事件，延后执行，传参用法） "),o(t(i,{modelValue:g.value,"onUpdate:modelValue":e[2]||(e[2]=a=>g.value=a),class:"!w-[200px]",clearable:""},null,8,["modelValue"]),[[m,{event:"input",fn:N,timeout:400,params:{name:"小明",sex:"男"}}]])]),t(k),u("div",Q,[l(" 节流指令（连续输入，每一秒只会执行一次事件） "),o(t(i,{modelValue:w.value,"onUpdate:modelValue":e[3]||(e[3]=a=>w.value=a),class:"!w-[200px]",clearable:""},null,8,["modelValue"]),[[m,{event:"input",fn:L,timeout:1e3},"throttle"]])]),u("div",null,[l(" 节流指令（连续输入，每一秒只会执行一次事件，传参用法） "),o(t(i,{modelValue:h.value,"onUpdate:modelValue":e[4]||(e[4]=a=>h.value=a),class:"!w-[200px]",clearable:""},null,8,["modelValue"]),[[m,{event:"input",fn:S,params:{name:"小明",sex:"男"}},"throttle"]])]),t(k),u("div",W,[l(" 文本复制指令（双击输入框内容即可复制） "),o(t(i,{modelValue:y.value,"onUpdate:modelValue":e[5]||(e[5]=a=>y.value=a),class:"!w-[200px]"},null,8,["modelValue"]),[[D,y.value]])]),u("div",null,[l(" 文本复制指令（自定义触发事件，单击复制） "),o((r(),J("span",X,[l(U(B.value),1)])),[[D,B.value,"click"]])]),t(k),t(q,{wrap:""},{default:s(()=>[l(" 长按指令 "),o((r(),v(V,null,{default:s(()=>[l("长按（默认500ms）")]),_:1})),[[$,j]]),o((r(),v(V,null,{default:s(()=>[l(" 自定义长按时长（1000ms） ")]),_:1})),[[$,A,"1000"]]),o((r(),v(V,null,{default:s(()=>[l(" 2秒后每200ms持续回调 ")]),_:1})),[[$,E,"2000:200"]]),t(V,{onClick:R},{default:s(()=>[l(" 重置状态 ")]),_:1}),t(z,{type:c.value?"success":"info",class:"ml-2",size:"large"},{default:s(()=>[l(U(c.value?"当前为长按状态":"当前非长按状态"),1)]),_:1},8,["type"]),_.value?(r(),v(z,{key:0,type:"danger",class:"ml-2",size:"large"},{default:s(()=>[l(U(_.value),1)]),_:1})):K("",!0)]),_:1})]),_:1})}}});export{ee as default};
