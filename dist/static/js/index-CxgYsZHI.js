import{d as y,V as b,r as w,dE as c,b as s,e as d,k as i,i as l,w as n,f as o,B as g,F as k,l as C,al as V,ap as x,a1 as B,dK as S}from"./index-pkOKtQ3P.js";const P=o("p",{class:"mb-2"}," 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ",-1),F={class:"card-header"},H=y({name:"PermissionPage",__name:"index",setup(U){var t;const m=b(()=>({width:"85vw",justifyContent:"start"})),a=w((t=c())==null?void 0:t.username),p=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function _(){c().loginByUsername({username:a.value,password:"admin123"}).then(r=>{r.success&&(x().removeItem("async-routes"),B().clearAllCachePage(),S())})}return(r,u)=>{const v=s("el-option"),f=s("el-select"),h=s("el-card");return d(),i("div",null,[P,l(h,{shadow:"never",style:V(m.value)},{header:n(()=>[o("div",F,[o("span",null,"当前角色："+g(a.value),1)])]),default:n(()=>[l(f,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=e=>a.value=e),class:"!w-[160px]",onChange:_},{default:n(()=>[(d(),i(k,null,C(p,e=>l(v,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])])}}});export{H as default};
