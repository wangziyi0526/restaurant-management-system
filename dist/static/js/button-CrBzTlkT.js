import{d as r,r as _,c as n,w as a,b as c,e as l,f as e}from"./index-CpDnptRB.js";var d={VITE_PORT:"8848",VITE_HIDE_HOME:"false",VITE_PUBLIC_PATH:"/",VITE_ROUTER_HISTORY:"hash",VITE_CDN:"false",VITE_COMPRESSION:"none",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const f=e("div",{class:"card-header"},[e("span",{class:"font-medium"},"通过 iframe 引入按钮页面")],-1),m=["src"],p=r({name:"ButtonPage",__name:"button",setup(u){const{VITE_PUBLIC_PATH:t}=d,s=_(`${t}html/button.html`);return(i,E)=>{const o=c("el-card");return l(),n(o,{shadow:"never"},{header:a(()=>[f]),default:a(()=>[e("iframe",{src:s.value,frameborder:"0",class:"iframe w-full h-[60vh]"},null,8,m)]),_:1})}}});export{p as default};