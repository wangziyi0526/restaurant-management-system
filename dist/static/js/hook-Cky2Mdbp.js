var R=(l,m,s)=>new Promise((u,f)=>{var p=t=>{try{c(s.next(t))}catch(i){f(i)}},o=t=>{try{c(s.throw(t))}catch(i){f(i)}},c=t=>t.done?u(t.value):Promise.resolve(t.value).then(p,o);c((s=s.apply(l,m)).next())});import{K as F,r,o as O,i as _,b as j,aS as x,aR as I,dP as z,aa as P,a8 as A,D as K,A as S}from"./index-BmVpTjm9.js";import{_ as N}from"./form.vue_vue_type_script_setup_true_lang-BtPvzqEJ.js";import{g as V}from"./system-Dou_HI2C.js";import{u as q}from"./hooks-Dl7cwLex.js";import"./index-Dio6S3_W.js";function Z(){const l=F({name:"",status:null}),m=r(),s=r([]),u=r(!0),{tagStyle:f}=q(),p=[{label:"部门名称",prop:"name",width:180,align:"left"},{label:"排序",prop:"sort",minWidth:70},{label:"状态",prop:"status",minWidth:100,cellRenderer:({row:a,props:e})=>_(j("el-tag"),{size:e.size,style:f.value(a.status)},{default:()=>[a.status===1?"启用":"停用"]})},{label:"创建时间",minWidth:200,prop:"createTime",formatter:({createTime:a})=>x(a).format("YYYY-MM-DD HH:mm:ss")},{label:"备注",prop:"remark",minWidth:320},{label:"操作",fixed:"right",width:210,slot:"operation"}];function o(a){}function c(a){a&&(a.resetFields(),t())}function t(){return R(this,null,function*(){u.value=!0;const{data:a}=yield V();let e=a;I(l.name)||(e=e.filter(n=>n.name.includes(l.name))),I(l.status)||(e=e.filter(n=>n.status===l.status)),s.value=z(e),setTimeout(()=>{u.value=!1},500)})}function i(a){if(!a||!a.length)return;const e=[];for(let n=0;n<a.length;n++)a[n].disabled=a[n].status===0,i(a[n].children),e.push(a[n]);return e}function H(a="新增",e){var n,d,h,g,D,b,v,k;P({title:`${a}部门`,props:{formInline:{higherDeptOptions:i(A(s.value)),parentId:(n=e==null?void 0:e.parentId)!=null?n:0,name:(d=e==null?void 0:e.name)!=null?d:"",principal:(h=e==null?void 0:e.principal)!=null?h:"",phone:(g=e==null?void 0:e.phone)!=null?g:"",email:(D=e==null?void 0:e.email)!=null?D:"",sort:(b=e==null?void 0:e.sort)!=null?b:0,status:(v=e==null?void 0:e.status)!=null?v:1,remark:(k=e==null?void 0:e.remark)!=null?k:""}},width:"40%",draggable:!0,fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>K(N,{ref:m}),beforeSure:(T,{options:W})=>{const Y=m.value.getRef(),$=W.props.formInline;function y(){S(`您${a}了部门名称为${$.name}的这条数据`,{type:"success"}),T(),t()}Y.validate(C=>{C&&y()})}})}function M(a){S(`您删除了部门名称为${a.name}的这条数据`,{type:"success"}),t()}return O(()=>{t()}),{form:l,loading:u,columns:p,dataList:s,onSearch:t,resetForm:c,openDialog:H,handleDelete:M,handleSelectionChange:o}}export{Z as useDept};
