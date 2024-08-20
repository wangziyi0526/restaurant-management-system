import{R as n}from"./index-Dh8DgcAz.js";import{K as B,dM as S,dP as q,d as D,r as b,b as d,e as i,c as _,w as t,i as e,u,C as c,k as x,F as E,l as N,f as O,B as g,aF as P}from"./index-CpDnptRB.js";import{u as L}from"./hooks-BMNcp6ex.js";const z=B({nickname:[{required:!0,message:"用户昵称为必填项",trigger:"blur"}],username:[{required:!0,message:"用户名称为必填项",trigger:"blur"}],password:[{required:!0,message:"用户密码为必填项",trigger:"blur"}],phone:[{validator:(v,m,r)=>{m===""||S(m)?r():r(new Error("请输入正确的手机号码格式"))},trigger:"blur"}],email:[{validator:(v,m,r)=>{m===""||q(m)?r():r(new Error("请输入正确的邮箱格式"))},trigger:"blur"}]}),H={key:0},j=D({__name:"index",props:{formInline:{default:()=>({title:"新增",higherDeptOptions:[],parentId:0,nickname:"",username:"",password:"",phone:"",email:"",sex:"",status:1,remark:""})}},setup(v,{expose:m}){const r=v,w=[{value:0,label:"男"},{value:1,label:"女"}],V=b(),{switchStyle:k}=L(),l=b(r.formInline);function y(){return V.value}return m({getRef:y}),(J,o)=>{const p=d("el-input"),s=d("el-form-item"),h=d("el-option"),U=d("el-select"),C=d("el-cascader"),F=d("el-switch"),I=d("el-row"),R=d("el-form");return i(),_(R,{ref_key:"ruleFormRef",ref:V,model:l.value,rules:u(z),"label-width":"82px"},{default:t(()=>[e(I,{gutter:30},{default:t(()=>[e(u(n),{value:12,xs:24,sm:24},{default:t(()=>[e(s,{label:"用户昵称",prop:"nickname"},{default:t(()=>[e(p,{modelValue:l.value.nickname,"onUpdate:modelValue":o[0]||(o[0]=a=>l.value.nickname=a),clearable:"",placeholder:"请输入用户昵称"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(n),{value:12,xs:24,sm:24},{default:t(()=>[e(s,{label:"用户名称",prop:"username"},{default:t(()=>[e(p,{modelValue:l.value.username,"onUpdate:modelValue":o[1]||(o[1]=a=>l.value.username=a),clearable:"",placeholder:"请输入用户名称"},null,8,["modelValue"])]),_:1})]),_:1}),l.value.title==="新增"?(i(),_(u(n),{key:0,value:12,xs:24,sm:24},{default:t(()=>[e(s,{label:"用户密码",prop:"password"},{default:t(()=>[e(p,{modelValue:l.value.password,"onUpdate:modelValue":o[2]||(o[2]=a=>l.value.password=a),clearable:"",placeholder:"请输入用户密码"},null,8,["modelValue"])]),_:1})]),_:1})):c("",!0),e(u(n),{value:12,xs:24,sm:24},{default:t(()=>[e(s,{label:"手机号",prop:"phone"},{default:t(()=>[e(p,{modelValue:l.value.phone,"onUpdate:modelValue":o[3]||(o[3]=a=>l.value.phone=a),clearable:"",placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(n),{value:12,xs:24,sm:24},{default:t(()=>[e(s,{label:"邮箱",prop:"email"},{default:t(()=>[e(p,{modelValue:l.value.email,"onUpdate:modelValue":o[4]||(o[4]=a=>l.value.email=a),clearable:"",placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1}),e(u(n),{value:12,xs:24,sm:24},{default:t(()=>[e(s,{label:"用户性别"},{default:t(()=>[e(U,{modelValue:l.value.sex,"onUpdate:modelValue":o[5]||(o[5]=a=>l.value.sex=a),placeholder:"请选择用户性别",class:"w-full",clearable:""},{default:t(()=>[(i(),x(E,null,N(w,(a,f)=>e(h,{key:f,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u(n),{value:12,xs:24,sm:24},{default:t(()=>[e(s,{label:"归属部门"},{default:t(()=>[e(C,{modelValue:l.value.parentId,"onUpdate:modelValue":o[6]||(o[6]=a=>l.value.parentId=a),class:"w-full",options:l.value.higherDeptOptions,props:{value:"id",label:"name",emitPath:!1,checkStrictly:!0},clearable:"",filterable:"",placeholder:"请选择归属部门"},{default:t(({node:a,data:f})=>[O("span",null,g(f.name),1),a.isLeaf?c("",!0):(i(),x("span",H," ("+g(f.children.length)+") ",1))]),_:1},8,["modelValue","options"])]),_:1})]),_:1}),l.value.title==="新增"?(i(),_(u(n),{key:1,value:12,xs:24,sm:24},{default:t(()=>[e(s,{label:"用户状态"},{default:t(()=>[e(F,{modelValue:l.value.status,"onUpdate:modelValue":o[7]||(o[7]=a=>l.value.status=a),"inline-prompt":"","active-value":1,"inactive-value":0,"active-text":"启用","inactive-text":"停用",style:P(u(k))},null,8,["modelValue","style"])]),_:1})]),_:1})):c("",!0),e(u(n),null,{default:t(()=>[e(s,{label:"备注"},{default:t(()=>[e(p,{modelValue:l.value.remark,"onUpdate:modelValue":o[8]||(o[8]=a=>l.value.remark=a),placeholder:"请输入备注信息",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{j as _};
