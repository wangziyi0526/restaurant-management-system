var l=(e,a,t)=>new Promise((i,n)=>{var S=s=>{try{u(t.next(s))}catch(d){n(d)}},b=s=>{try{u(t.throw(s))}catch(d){n(d)}},u=s=>s.done?i(s.value):Promise.resolve(s.value).then(S,b);u((t=t.apply(e,a)).next())});import{ap as h,aq as o,ar as r,as as p,L as f,at as c}from"./index-CpDnptRB.js";const g=h({id:"pure-app",state:()=>{var e,a,t,i;return{sidebar:{opened:(a=(e=o().getItem(`${r()}layout`))==null?void 0:e.sidebarStatus)!=null?a:p().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:(i=(t=o().getItem(`${r()}layout`))==null?void 0:t.layout)!=null?i:p().Layout,device:f()?"mobile":"desktop",sortSwap:!1}},getters:{getSidebarStatus(e){return e.sidebar.opened},getDevice(e){return e.device}},actions:{TOGGLE_SIDEBAR(e,a){const t=o().getItem(`${r()}layout`);e&&a?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,t.sidebarStatus=!0):!e&&a?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,t.sidebarStatus=!1):!e&&!a&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,t.sidebarStatus=this.sidebar.opened),o().setItem(`${r()}layout`,t)},toggleSideBar(e,a){return l(this,null,function*(){yield this.TOGGLE_SIDEBAR(e,a)})},toggleDevice(e){this.device=e},setLayout(e){this.layout=e},setSortSwap(e){this.sortSwap=e}}});function w(){return g(c)}export{w as u};
