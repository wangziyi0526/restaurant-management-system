import{p as n}from"./propTypes-DnNFEbDH.js";import{d as T,K as D,V as C,a7 as v,aO as A,o as z,i as l,F as x,u as g,r as y,N as R,a as w,h as r,M as F}from"./index-BmVpTjm9.js";const M={startVal:n.number.def(0),endVal:n.number.def(2020),duration:n.number.def(1300),autoplay:n.bool.def(!0),decimals:{type:Number,required:!1,default:0,validator(a){return a>=0}},color:n.string.def(),fontSize:n.string.def(),decimal:n.string.def("."),separator:n.string.def(","),prefix:n.string.def(""),suffix:n.string.def(""),useEasing:n.bool.def(!0),easingFn:{type:Function,default(a,s,t,u){return t*(-Math.pow(2,-10*a/u)+1)*1024/1023+s}}},q=T({name:"ReNormalCountTo",props:M,emits:["mounted","callback"],setup(a,{emit:s}){const t=D({localStartVal:a.startVal,displayValue:m(a.startVal),printVal:null,paused:!1,localDuration:a.duration,startTime:null,timestamp:null,remaining:null,rAF:null,color:null,fontSize:"16px"}),u=C(()=>a.startVal>a.endVal);v([()=>a.startVal,()=>a.endVal],()=>{a.autoplay&&f()});function f(){const{startVal:o,duration:d,color:c,fontSize:e}=a;t.localStartVal=o,t.startTime=null,t.localDuration=d,t.paused=!1,t.color=c,t.fontSize=e,t.rAF=requestAnimationFrame(b)}function b(o){const{useEasing:d,easingFn:c,endVal:e}=a;t.startTime||(t.startTime=o),t.timestamp=o;const i=o-t.startTime;t.remaining=t.localDuration-i,d?g(u)?t.printVal=t.localStartVal-c(i,0,t.localStartVal-e,t.localDuration):t.printVal=c(i,t.localStartVal,e-t.localStartVal,t.localDuration):g(u)?t.printVal=t.localStartVal-(t.localStartVal-e)*(i/t.localDuration):t.printVal=t.localStartVal+(e-t.localStartVal)*(i/t.localDuration),g(u)?t.printVal=t.printVal<e?e:t.printVal:t.printVal=t.printVal>e?e:t.printVal,t.displayValue=m(t.printVal),i<t.localDuration?t.rAF=requestAnimationFrame(b):s("callback")}function m(o){const{decimals:d,decimal:c,separator:e,suffix:i,prefix:N}=a;o=Number(o).toFixed(d),o+="";const p=o.split(".");let V=p[0];const h=p.length>1?c+p[1]:"",S=/(\d+)(\d{3})/;if(e&&!A(e))for(;S.test(V);)V=V.replace(S,"$1"+e+"$2");return N+V+h+i}return z(()=>{a.autoplay&&f(),s("mounted")}),()=>l(x,null,[l("span",{style:{color:a.color,fontSize:a.fontSize}},[t.displayValue])])}}),B={delay:n.number.def(1),blur:n.number.def(2),i:{type:Number,required:!1,default:0,validator(a){return a<10&&a>=0&&Number.isInteger(a)}}},$=T({name:"ReboundCountTo",props:B,setup(a){const s=y(),t=y(null);return R(()=>{const u=navigator.userAgent.toLowerCase(),f=m=>m.test(u);f(/safari/g)&&!f(/chrome/g)&&(t.value=setTimeout(()=>{s.value.setAttribute("style",`
        animation: none;
        transform: translateY(calc(var(--i) * -9.09%))
      `)},a.delay*1e3))}),w(()=>{clearTimeout(g(t))}),()=>l(x,null,[l("div",{class:"scroll-num",style:{"--i":a.i,"--delay":a.delay}},[l("ul",{ref:"ulRef",style:{fontSize:"32px"}},[l("li",null,[r("0")]),l("li",null,[r("1")]),l("li",null,[r("2")]),l("li",null,[r("3")]),l("li",null,[r("4")]),l("li",null,[r("5")]),l("li",null,[r("6")]),l("li",null,[r("7")]),l("li",null,[r("8")]),l("li",null,[r("9")]),l("li",null,[r("0")])]),l("svg",{width:"0",height:"0"},[l("filter",{id:"blur"},[l("feGaussianBlur",{in:"SourceGraphic",stdDeviation:`0 ${a.blur}`},null)])])])])}}),G=F(q),P=F($);export{G as R,P as a};
