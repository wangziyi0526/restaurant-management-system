import{useColumns as T}from"./columns-D93fXNrL.js";import{d as z,r as p,b as t,e as d,c as k,w as o,f as F,i as l,u as e,k as N,F as U,l as P,h as i,aC as E}from"./index-pkOKtQ3P.js";const L={class:"m-4"},A=z({__name:"index",setup(O){const f=p(),_=p(),g=p(),{searchForm:r,sexOptions:C,columns:x,pagination:s,selectValue:c,tableData:V,onSure:h,onClear:y,onReset:v,onSearch:R,removeTag:Y,handleSelectionChange:D}=T(g,f,_);return(W,n)=>{const S=t("el-option"),b=t("el-select"),u=t("el-form-item"),w=t("el-date-picker"),m=t("el-button"),B=t("el-form"),M=t("pure-table");return d(),k(b,{ref_key:"selectRef",ref:g,modelValue:e(c),"onUpdate:modelValue":n[2]||(n[2]=a=>E(c)?c.value=a:null),class:"!w-[200px]",placeholder:"请选择",clearable:"",multiple:"","collapse-tags":"","value-key":"id",onRemoveTag:e(Y),onClear:e(y)},{empty:o(()=>[F("div",L,[l(B,{ref_key:"formRef",ref:f,inline:!0,model:e(r)},{default:o(()=>[l(u,{prop:"sexValue"},{default:o(()=>[l(b,{modelValue:e(r).sexValue,"onUpdate:modelValue":n[0]||(n[0]=a=>e(r).sexValue=a),class:"!w-[120px]",placeholder:"请选择性别",teleported:!1,clearable:""},{default:o(()=>[(d(!0),N(U,null,P(e(C),a=>(d(),k(S,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(u,{prop:"searchDate"},{default:o(()=>[l(w,{modelValue:e(r).searchDate,"onUpdate:modelValue":n[1]||(n[1]=a=>e(r).searchDate=a),class:"!w-[150px]",type:"date",placeholder:"请选择日期",format:"YYYY/MM/DD","value-format":"YYYY-MM-D"},null,8,["modelValue"])]),_:1}),l(u,{class:"float-right !mr-0"},{default:o(()=>[l(m,{type:"primary",text:"",bg:"",onClick:e(R)},{default:o(()=>[i(" 查询 ")]),_:1},8,["onClick"]),l(m,{text:"",bg:"",onClick:e(v)},{default:o(()=>[i(" 重置 ")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"]),l(M,{ref_key:"tableRef",ref:_,"row-key":"id",alignWhole:"center","header-cell-style":{background:"#f5f7fa",color:"#303133"},data:e(V).slice((e(s).currentPage-1)*e(s).pageSize,e(s).currentPage*e(s).pageSize),columns:e(x),pagination:e(s),onSelectionChange:e(D)},null,8,["data","columns","pagination","onSelectionChange"]),l(m,{class:"absolute bottom-[17px]",type:"primary",size:"small",text:"",bg:"",onClick:e(h)},{default:o(()=>[i(" 确定 ")]),_:1},8,["onClick"])])]),_:1},8,["modelValue","onRemoveTag","onClear"])}}});export{A as _};
