var P=(U,s,u)=>new Promise((f,r)=>{var c=d=>{try{m(u.next(d))}catch(g){r(g)}},C=d=>{try{m(u.throw(d))}catch(g){r(g)}},m=d=>d.done?f(d.value):Promise.resolve(d.value).then(c,C);m((u=u.apply(U,s)).next())});import{M as p}from"./motion-EELh_TZ8.js";import{d as T,H as z,r as k,K as A,b as _,e as D,c as F,w as o,i as l,u as e,a3 as y,dn as w,f as H,h as v,B as V,A as B,dG as I}from"./index-CpDnptRB.js";import{u as R,a as M}from"./verifyCode-Bc8cBT8e.js";import{u as x}from"./hooks-BymUezt-.js";import{d as S}from"./lock-fill-BZPnsoM7.js";import{d as G}from"./iphone-CgGaW-_Y.js";const Z={width:24,height:24,body:'<path fill="currentColor" d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2Zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z"/>'},j={class:"w-full flex justify-between"},X=T({__name:"regist",setup(U){const{t:s}=z(),u=k(!1),f=k(!1),r=A({username:"",phone:"",verifyCode:"",password:"",repeatPassword:""}),c=k(),{isDisabled:C,text:m}=R(),d=[{validator:(h,a,n)=>{a===""?n(new Error(y(w("login.passwordSureReg")))):r.password!==a?n(new Error(y(w("login.passwordDifferentReg")))):n()},trigger:"blur"}],g=h=>P(this,null,function*(){f.value=!0,h&&(yield h.validate((a,n)=>{if(a)u.value?setTimeout(()=>{B(y(w("login.registerSuccess")),{type:"success"}),f.value=!1},2e3):(f.value=!1,B(y(w("login.tickPrivacy")),{type:"warning"}));else return f.value=!1,n}))});function $(){R().end(),I().SET_CURRENTPAGE(0)}return(h,a)=>{const n=_("el-input"),i=_("el-form-item"),b=_("el-button"),E=_("el-checkbox"),N=_("el-form");return D(),F(N,{ref_key:"ruleFormRef",ref:c,model:r,rules:e(M),size:"large"},{default:o(()=>[l(e(p),null,{default:o(()=>[l(i,{rules:[{required:!0,message:e(y)(e(w)("login.usernameReg")),trigger:"blur"}],prop:"username"},{default:o(()=>[l(n,{modelValue:r.username,"onUpdate:modelValue":a[0]||(a[0]=t=>r.username=t),clearable:"",placeholder:e(s)("login.username"),"prefix-icon":e(x)(e(Z))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1},8,["rules"])]),_:1}),l(e(p),{delay:100},{default:o(()=>[l(i,{prop:"phone"},{default:o(()=>[l(n,{modelValue:r.phone,"onUpdate:modelValue":a[1]||(a[1]=t=>r.phone=t),clearable:"",placeholder:e(s)("login.phone"),"prefix-icon":e(x)(e(G))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(p),{delay:150},{default:o(()=>[l(i,{prop:"verifyCode"},{default:o(()=>[H("div",j,[l(n,{modelValue:r.verifyCode,"onUpdate:modelValue":a[2]||(a[2]=t=>r.verifyCode=t),clearable:"",placeholder:e(s)("login.smsVerifyCode"),"prefix-icon":e(x)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),l(b,{disabled:e(C),class:"ml-2",onClick:a[3]||(a[3]=t=>e(R)().start(c.value,"phone"))},{default:o(()=>[v(V(e(m).length>0?e(m)+e(s)("login.info"):e(s)("login.getVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),l(e(p),{delay:200},{default:o(()=>[l(i,{prop:"password"},{default:o(()=>[l(n,{modelValue:r.password,"onUpdate:modelValue":a[4]||(a[4]=t=>r.password=t),clearable:"","show-password":"",placeholder:e(s)("login.password"),"prefix-icon":e(x)(e(S))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(p),{delay:250},{default:o(()=>[l(i,{rules:d,prop:"repeatPassword"},{default:o(()=>[l(n,{modelValue:r.repeatPassword,"onUpdate:modelValue":a[5]||(a[5]=t=>r.repeatPassword=t),clearable:"","show-password":"",placeholder:e(s)("login.sure"),"prefix-icon":e(x)(e(S))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),l(e(p),{delay:300},{default:o(()=>[l(i,null,{default:o(()=>[l(E,{modelValue:u.value,"onUpdate:modelValue":a[6]||(a[6]=t=>u.value=t)},{default:o(()=>[v(V(e(s)("login.readAccept")),1)]),_:1},8,["modelValue"]),l(b,{link:"",type:"primary"},{default:o(()=>[v(V(e(s)("login.privacyPolicy")),1)]),_:1})]),_:1})]),_:1}),l(e(p),{delay:350},{default:o(()=>[l(i,null,{default:o(()=>[l(b,{class:"w-full",size:"default",type:"primary",loading:f.value,onClick:a[7]||(a[7]=t=>g(c.value))},{default:o(()=>[v(V(e(s)("login.definite")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),l(e(p),{delay:400},{default:o(()=>[l(i,null,{default:o(()=>[l(b,{class:"w-full",size:"default",onClick:$},{default:o(()=>[v(V(e(s)("login.back")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{X as _,Z as d};
