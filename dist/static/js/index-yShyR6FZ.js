import{d as h,b as s,j as m,e as n,k as y,f as l,B as v,u as o,dN as w,i as t,w as e,h as d,dO as u,c as _,C as b,m as f}from"./index-CpDnptRB.js";const g={class:"mb-2"},k=l("div",{class:"card-header"},"组件方式判断权限",-1),B=l("div",{class:"card-header"},"函数方式判断权限",-1),x=l("div",{class:"card-header"}," 指令方式判断权限（该方式不能动态修改权限） ",-1),D=h({name:"PermissionButton",__name:"index",setup(C){return(N,A)=>{const a=s("el-button"),c=s("Auth"),r=s("el-space"),i=s("el-card"),p=m("auth");return n(),y("div",null,[l("p",g,"当前拥有的code列表："+v(o(w)()),1),t(i,{shadow:"never",class:"mb-2"},{header:e(()=>[k]),default:e(()=>[t(r,{wrap:""},{default:e(()=>[t(c,{value:"btn_add"},{default:e(()=>[t(a,{plain:"",type:"warning"},{default:e(()=>[d(" 拥有code：'btn_add' 权限可见 ")]),_:1})]),_:1}),t(c,{value:["btn_edit"]},{default:e(()=>[t(a,{plain:"",type:"primary"},{default:e(()=>[d(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})]),_:1}),t(c,{value:["btn_add","btn_edit","btn_delete"]},{default:e(()=>[t(a,{plain:"",type:"danger"},{default:e(()=>[d(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})]),_:1})]),_:1})]),_:1}),t(i,{shadow:"never",class:"mb-2"},{header:e(()=>[B]),default:e(()=>[t(r,{wrap:""},{default:e(()=>[o(u)("btn_add")?(n(),_(a,{key:0,plain:"",type:"warning"},{default:e(()=>[d(" 拥有code：'btn_add' 权限可见 ")]),_:1})):b("",!0),o(u)(["btn_edit"])?(n(),_(a,{key:1,plain:"",type:"primary"},{default:e(()=>[d(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})):b("",!0),o(u)(["btn_add","btn_edit","btn_delete"])?(n(),_(a,{key:2,plain:"",type:"danger"},{default:e(()=>[d(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})):b("",!0)]),_:1})]),_:1}),t(i,{shadow:"never"},{header:e(()=>[x]),default:e(()=>[t(r,{wrap:""},{default:e(()=>[f((n(),_(a,{plain:"",type:"warning"},{default:e(()=>[d(" 拥有code：'btn_add' 权限可见 ")]),_:1})),[[p,"btn_add"]]),f((n(),_(a,{plain:"",type:"primary"},{default:e(()=>[d(" 拥有code：['btn_edit'] 权限可见 ")]),_:1})),[[p,["btn_edit"]]]),f((n(),_(a,{plain:"",type:"danger"},{default:e(()=>[d(" 拥有code：['btn_add', 'btn_edit', 'btn_delete'] 权限可见 ")]),_:1})),[[p,["btn_add","btn_edit","btn_delete"]]])]),_:1})]),_:1})])}}});export{D as default};
