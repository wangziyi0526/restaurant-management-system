import{useDept as N}from"./hook-Bd6flSWm.js";import{R as P,D as U,P as z}from"./refresh-BXyUrX28.js";import{u as i}from"./hooks-BymUezt-.js";import{d as E}from"./edit-pen-Ci7W0xNM.js";import{d as v}from"./add-circle-line-DOJqVT3s.js";import{d as F,r as C,b as a,e as L,k as O,i as o,w as t,u as e,h as s,_ as j}from"./index-CpDnptRB.js";import"./form.vue_vue_type_script_setup_true_lang-EeyFGlhl.js";import"./index-Dh8DgcAz.js";import"./hooks-BMNcp6ex.js";import"./system--1zuN0ab.js";import"./epTheme-OzaPFXDt.js";import"./sortable.esm-6WsHlDA5.js";const q={class:"main"},A=F({name:"SystemDept",__name:"index",setup(G){const f=C(),u=C(),{form:m,loading:_,columns:h,dataList:x,onSearch:b,resetForm:R,openDialog:p,handleDelete:V,handleSelectionChange:$}=N();return(H,n)=>{var k;const w=a("el-input"),d=a("el-form-item"),g=a("el-option"),D=a("el-select"),r=a("el-button"),S=a("el-form"),B=a("el-popconfirm"),T=a("pure-table");return L(),O("div",q,[o(S,{ref_key:"formRef",ref:f,inline:!0,model:e(m),class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]"},{default:t(()=>[o(d,{label:"部门名称：",prop:"name"},{default:t(()=>[o(w,{modelValue:e(m).name,"onUpdate:modelValue":n[0]||(n[0]=l=>e(m).name=l),placeholder:"请输入部门名称",clearable:"",class:"!w-[180px]"},null,8,["modelValue"])]),_:1}),o(d,{label:"状态：",prop:"status"},{default:t(()=>[o(D,{modelValue:e(m).status,"onUpdate:modelValue":n[1]||(n[1]=l=>e(m).status=l),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:t(()=>[o(g,{label:"启用",value:1}),o(g,{label:"停用",value:0})]),_:1},8,["modelValue"])]),_:1}),o(d,null,{default:t(()=>[o(r,{type:"primary",icon:e(i)("search"),loading:e(_),onClick:e(b)},{default:t(()=>[s(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(r,{icon:e(i)(e(P)),onClick:n[2]||(n[2]=l=>e(R)(f.value))},{default:t(()=>[s(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(z),{title:"部门管理（仅演示，操作后不生效）",columns:e(h),tableRef:(k=u.value)==null?void 0:k.getTableRef(),onRefresh:e(b)},{buttons:t(()=>[o(r,{type:"primary",icon:e(i)(e(v)),onClick:n[3]||(n[3]=l=>e(p)())},{default:t(()=>[s(" 新增部门 ")]),_:1},8,["icon"])]),default:t(({size:l,dynamicColumns:I})=>[o(T,{ref_key:"tableRef",ref:u,adaptive:"",adaptiveConfig:{offsetBottom:32},"align-whole":"center","row-key":"id",showOverflowTooltip:"","table-layout":"auto","default-expand-all":"",loading:e(_),size:l,data:e(x),columns:I,"header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},onSelectionChange:e($)},{operation:t(({row:c})=>[o(r,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(i)(e(v)),onClick:y=>e(p)("新增",{parentId:c.id})},{default:t(()=>[s(" 新增 ")]),_:2},1032,["size","icon","onClick"]),o(r,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(i)(e(E)),onClick:y=>e(p)("修改",c)},{default:t(()=>[s(" 修改 ")]),_:2},1032,["size","icon","onClick"]),o(B,{title:`是否确认删除部门名称为${c.name}的这条数据`,onConfirm:y=>e(V)(c)},{reference:t(()=>[o(r,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(i)(e(U))},{default:t(()=>[s(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["title","onConfirm"])]),_:2},1032,["loading","size","data","columns","header-cell-style","onSelectionChange"])]),_:1},8,["columns","tableRef","onRefresh"])])}}}),ne=j(A,[["__scopeId","data-v-7492125e"]]);export{ne as default};
