import{ao as p,ap as o,aq as r,ar as h,as as a}from"./index-BmVpTjm9.js";const T=p({id:"pure-epTheme",state:()=>{var e,t,m,s;return{epThemeColor:(t=(e=o().getItem(`${r()}layout`))==null?void 0:e.epThemeColor)!=null?t:h().EpThemeColor,epTheme:(s=(m=o().getItem(`${r()}layout`))==null?void 0:m.theme)!=null?s:h().Theme}},getters:{getEpThemeColor(e){return e.epThemeColor},fill(e){return e.epTheme==="light"?"#409eff":"#fff"}},actions:{setEpThemeColor(e){const t=o().getItem(`${r()}layout`);this.epTheme=t==null?void 0:t.theme,this.epThemeColor=e,t&&(t.epThemeColor=e,o().setItem(`${r()}layout`,t))}}});function i(){return T(a)}export{i as u};
