var $t=Object.defineProperty;var Et=Object.getOwnPropertySymbols;var Qt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable;var Bt=(t,e,r)=>e in t?$t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,bt=(t,e)=>{for(var r in e||(e={}))Qt.call(e,r)&&Bt(t,r,e[r]);if(Et)for(var r of Et(e))Gt.call(e,r)&&Bt(t,r,e[r]);return t};var nt=(t,e,r)=>new Promise((i,o)=>{var n=a=>{try{c(r.next(a))}catch(u){o(u)}},s=a=>{try{c(r.throw(a))}catch(u){o(u)}},c=a=>a.done?i(a.value):Promise.resolve(a.value).then(n,s);c((r=r.apply(t,e)).next())});import{p as Q}from"./propTypes-DnNFEbDH.js";import{d as qt,r as pt,V as At,a7 as Wt,i as L,m as Xt,j as Zt,u as U,b as xt,F as te,n as ee,a8 as ne,av as Tt,M as oe}from"./index-pkOKtQ3P.js";import{d as re}from"./refresh-right-Du3ZsAuC.js";var Y={},ie=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Mt={},M={};let dt;const se=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};M.getSymbolTotalCodewords=function(e){return se[e]};M.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};M.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');dt=e};M.isKanjiModeEnabled=function(){return typeof dt!="undefined"};M.toSJIS=function(e){return dt(e)};var Z={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+r)}}t.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},t.from=function(i,o){if(t.isValid(i))return i;try{return e(i)}catch(n){return o}}})(Z);function Pt(){this.buffer=[],this.length=0}Pt.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var ae=Pt;function j(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}j.prototype.set=function(t,e,r,i){const o=t*this.size+e;this.data[o]=r,i&&(this.reservedBit[o]=!0)};j.prototype.get=function(t,e){return this.data[t*this.size+e]};j.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r};j.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var ce=j,Rt={};(function(t){const e=M.getSymbolSize;t.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,n=e(i),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,c=[n-7];for(let a=1;a<o-1;a++)c[a]=c[a-1]-s;return c.push(6),c.reverse()},t.getPositions=function(i){const o=[],n=t.getRowColCoords(i),s=n.length;for(let c=0;c<s;c++)for(let a=0;a<s;a++)c===0&&a===0||c===0&&a===s-1||c===s-1&&a===0||o.push([n[c],n[a]]);return o}})(Rt);var Lt={};const ue=M.getSymbolSize,It=7;Lt.getPositions=function(e){const r=ue(e);return[[0,0],[r-It,0],[0,r-It]]};var vt={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const n=o.size;let s=0,c=0,a=0,u=null,d=null;for(let b=0;b<n;b++){c=a=0,u=d=null;for(let C=0;C<n;C++){let w=o.get(b,C);w===u?c++:(c>=5&&(s+=e.N1+(c-5)),u=w,c=1),w=o.get(C,b),w===d?a++:(a>=5&&(s+=e.N1+(a-5)),d=w,a=1)}c>=5&&(s+=e.N1+(c-5)),a>=5&&(s+=e.N1+(a-5))}return s},t.getPenaltyN2=function(o){const n=o.size;let s=0;for(let c=0;c<n-1;c++)for(let a=0;a<n-1;a++){const u=o.get(c,a)+o.get(c,a+1)+o.get(c+1,a)+o.get(c+1,a+1);(u===4||u===0)&&s++}return s*e.N2},t.getPenaltyN3=function(o){const n=o.size;let s=0,c=0,a=0;for(let u=0;u<n;u++){c=a=0;for(let d=0;d<n;d++)c=c<<1&2047|o.get(u,d),d>=10&&(c===1488||c===93)&&s++,a=a<<1&2047|o.get(d,u),d>=10&&(a===1488||a===93)&&s++}return s*e.N3},t.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let a=0;a<s;a++)n+=o.data[a];return Math.abs(Math.ceil(n*100/s/5)-10)*e.N4};function r(i,o,n){switch(i){case t.Patterns.PATTERN000:return(o+n)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return n%3===0;case t.Patterns.PATTERN011:return(o+n)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case t.Patterns.PATTERN101:return o*n%2+o*n%3===0;case t.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case t.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}t.applyMask=function(o,n){const s=n.size;for(let c=0;c<s;c++)for(let a=0;a<s;a++)n.isReserved(a,c)||n.xor(a,c,r(o,a,c))},t.getBestMask=function(o,n){const s=Object.keys(t.Patterns).length;let c=0,a=1/0;for(let u=0;u<s;u++){n(u),t.applyMask(u,o);const d=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(u,o),d<a&&(a=d,c=u)}return c}})(vt);var x={};const v=Z,G=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],q=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];x.getBlocksCount=function(e,r){switch(r){case v.L:return G[(e-1)*4+0];case v.M:return G[(e-1)*4+1];case v.Q:return G[(e-1)*4+2];case v.H:return G[(e-1)*4+3];default:return}};x.getTotalCodewordsCount=function(e,r){switch(r){case v.L:return q[(e-1)*4+0];case v.M:return q[(e-1)*4+1];case v.Q:return q[(e-1)*4+2];case v.H:return q[(e-1)*4+3];default:return}};var Dt={},tt={};const K=new Uint8Array(512),W=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)K[r]=e,W[e]=r,e<<=1,e&256&&(e^=285);for(let r=255;r<512;r++)K[r]=K[r-255]})();tt.log=function(e){if(e<1)throw new Error("log("+e+")");return W[e]};tt.exp=function(e){return K[e]};tt.mul=function(e,r){return e===0||r===0?0:K[W[e]+W[r]]};(function(t){const e=tt;t.mul=function(i,o){const n=new Uint8Array(i.length+o.length-1);for(let s=0;s<i.length;s++)for(let c=0;c<o.length;c++)n[s+c]^=e.mul(i[s],o[c]);return n},t.mod=function(i,o){let n=new Uint8Array(i);for(;n.length-o.length>=0;){const s=n[0];for(let a=0;a<o.length;a++)n[a]^=e.mul(o[a],s);let c=0;for(;c<n.length&&n[c]===0;)c++;n=n.slice(c)}return n},t.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let n=0;n<i;n++)o=t.mul(o,new Uint8Array([1,e.exp(n)]));return o}})(Dt);const Ut=Dt;function gt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}gt.prototype.initialize=function(e){this.degree=e,this.genPoly=Ut.generateECPolynomial(this.degree)};gt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(e.length+this.degree);r.set(e);const i=Ut.mod(r,this.genPoly),o=this.degree-i.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(i,o),n}return i};var le=gt,_t={},D={},ht={};ht.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var P={};const Ft="[0-9]+",fe="[A-Z $%*+\\-./:]+";let J="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";J=J.replace(/u/g,"\\u");const de="(?:(?![A-Z0-9 $%*+\\-./:]|"+J+`)(?:.|[\r
]))+`;P.KANJI=new RegExp(J,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(de,"g");P.NUMERIC=new RegExp(Ft,"g");P.ALPHANUMERIC=new RegExp(fe,"g");const ge=new RegExp("^"+J+"$"),he=new RegExp("^"+Ft+"$"),we=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(e){return ge.test(e)};P.testNumeric=function(e){return he.test(e)};P.testAlphanumeric=function(e){return we.test(e)};(function(t){const e=ht,r=P;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return r.testNumeric(n)?t.NUMERIC:r.testAlphanumeric(n)?t.ALPHANUMERIC:r.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(n,s){if(t.isValid(n))return n;try{return i(n)}catch(c){return s}}})(D);(function(t){const e=M,r=x,i=Z,o=D,n=ht,s=7973,c=e.getBCHDigit(s);function a(C,w,y){for(let l=1;l<=40;l++)if(w<=t.getCapacity(l,y,C))return l}function u(C,w){return o.getCharCountIndicator(C,w)+4}function d(C,w){let y=0;return C.forEach(function(l){const E=u(l.mode,w);y+=E+l.getBitsLength()}),y}function b(C,w){for(let y=1;y<=40;y++)if(d(C,y)<=t.getCapacity(y,w,o.MIXED))return y}t.from=function(w,y){return n.isValid(w)?parseInt(w,10):y},t.getCapacity=function(w,y,l){if(!n.isValid(w))throw new Error("Invalid QR Code version");typeof l=="undefined"&&(l=o.BYTE);const E=e.getSymbolTotalCodewords(w),f=r.getTotalCodewordsCount(w,y),m=(E-f)*8;if(l===o.MIXED)return m;const h=m-u(l,w);switch(l){case o.NUMERIC:return Math.floor(h/10*3);case o.ALPHANUMERIC:return Math.floor(h/11*2);case o.KANJI:return Math.floor(h/13);case o.BYTE:default:return Math.floor(h/8)}},t.getBestVersionForData=function(w,y){let l;const E=i.from(y,i.M);if(Array.isArray(w)){if(w.length>1)return b(w,E);if(w.length===0)return 1;l=w[0]}else l=w;return a(l.mode,l.getLength(),E)},t.getEncodedBits=function(w){if(!n.isValid(w)||w<7)throw new Error("Invalid QR Code version");let y=w<<12;for(;e.getBCHDigit(y)-c>=0;)y^=s<<e.getBCHDigit(y)-c;return w<<12|y}})(_t);var kt={};const ct=M,zt=1335,me=21522,St=ct.getBCHDigit(zt);kt.getEncodedBits=function(e,r){const i=e.bit<<3|r;let o=i<<10;for(;ct.getBCHDigit(o)-St>=0;)o^=zt<<ct.getBCHDigit(o)-St;return(i<<10|o)^me};var Vt={};const Ce=D;function F(t){this.mode=Ce.NUMERIC,this.data=t.toString()}F.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(e){let r,i,o;for(r=0;r+3<=this.data.length;r+=3)i=this.data.substr(r,3),o=parseInt(i,10),e.put(o,10);const n=this.data.length-r;n>0&&(i=this.data.substr(r),o=parseInt(i,10),e.put(o,n*3+1))};var ye=F;const Ee=D,ot=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function k(t){this.mode=Ee.ALPHANUMERIC,this.data=t}k.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(e){let r;for(r=0;r+2<=this.data.length;r+=2){let i=ot.indexOf(this.data[r])*45;i+=ot.indexOf(this.data[r+1]),e.put(i,11)}this.data.length%2&&e.put(ot.indexOf(this.data[r]),6)};var Be=k,be=function(e){for(var r=[],i=e.length,o=0;o<i;o++){var n=e.charCodeAt(o);if(n>=55296&&n<=56319&&i>o+1){var s=e.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){r.push(n);continue}if(n<2048){r.push(n>>6|192),r.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){r.push(n>>12|224),r.push(n>>6&63|128),r.push(n&63|128);continue}if(n>=65536&&n<=1114111){r.push(n>>18|240),r.push(n>>12&63|128),r.push(n>>6&63|128),r.push(n&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer};const pe=be,Ae=D;function z(t){this.mode=Ae.BYTE,typeof t=="string"&&(t=pe(t)),this.data=new Uint8Array(t)}z.getBitsLength=function(e){return e*8};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var Te=z;const Ie=D,Se=M;function V(t){this.mode=Ie.KANJI,this.data=t}V.getBitsLength=function(e){return e*13};V.prototype.getLength=function(){return this.data.length};V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)};V.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=Se.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),t.put(r,13)}};var Ne=V,Ht={exports:{}};(function(t){var e={single_source_shortest_paths:function(r,i,o){var n={},s={};s[i]=0;var c=e.PriorityQueue.make();c.push(i,0);for(var a,u,d,b,C,w,y,l,E;!c.empty();){a=c.pop(),u=a.value,b=a.cost,C=r[u]||{};for(d in C)C.hasOwnProperty(d)&&(w=C[d],y=b+w,l=s[d],E=typeof s[d]=="undefined",(E||l>y)&&(s[d]=y,c.push(d,y),n[d]=u))}if(typeof o!="undefined"&&typeof s[o]=="undefined"){var f=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(f)}return n},extract_shortest_path_from_predecessor_list:function(r,i){for(var o=[],n=i;n;)o.push(n),r[n],n=r[n];return o.reverse(),o},find_path:function(r,i,o){var n=e.single_source_shortest_paths(r,i,o);return e.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(r){var i=e.PriorityQueue,o={},n;r=r||{};for(n in i)i.hasOwnProperty(n)&&(o[n]=i[n]);return o.queue=[],o.sorter=r.sorter||i.default_sorter,o},default_sorter:function(r,i){return r.cost-i.cost},push:function(r,i){var o={value:r,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Ht);var Me=Ht.exports;(function(t){const e=D,r=ye,i=Be,o=Te,n=Ne,s=P,c=M,a=Me;function u(f){return unescape(encodeURIComponent(f)).length}function d(f,m,h){const g=[];let B;for(;(B=f.exec(h))!==null;)g.push({data:B[0],index:B.index,mode:m,length:B[0].length});return g}function b(f){const m=d(s.NUMERIC,e.NUMERIC,f),h=d(s.ALPHANUMERIC,e.ALPHANUMERIC,f);let g,B;return c.isKanjiModeEnabled()?(g=d(s.BYTE,e.BYTE,f),B=d(s.KANJI,e.KANJI,f)):(g=d(s.BYTE_KANJI,e.BYTE,f),B=[]),m.concat(h,g,B).sort(function(A,N){return A.index-N.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function C(f,m){switch(m){case e.NUMERIC:return r.getBitsLength(f);case e.ALPHANUMERIC:return i.getBitsLength(f);case e.KANJI:return n.getBitsLength(f);case e.BYTE:return o.getBitsLength(f)}}function w(f){return f.reduce(function(m,h){const g=m.length-1>=0?m[m.length-1]:null;return g&&g.mode===h.mode?(m[m.length-1].data+=h.data,m):(m.push(h),m)},[])}function y(f){const m=[];for(let h=0;h<f.length;h++){const g=f[h];switch(g.mode){case e.NUMERIC:m.push([g,{data:g.data,mode:e.ALPHANUMERIC,length:g.length},{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.ALPHANUMERIC:m.push([g,{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.KANJI:m.push([g,{data:g.data,mode:e.BYTE,length:u(g.data)}]);break;case e.BYTE:m.push([{data:g.data,mode:e.BYTE,length:u(g.data)}])}}return m}function l(f,m){const h={},g={start:{}};let B=["start"];for(let p=0;p<f.length;p++){const A=f[p],N=[];for(let S=0;S<A.length;S++){const I=A[S],R=""+p+S;N.push(R),h[R]={node:I,lastCount:0},g[R]={};for(let _=0;_<B.length;_++){const T=B[_];h[T]&&h[T].node.mode===I.mode?(g[T][R]=C(h[T].lastCount+I.length,I.mode)-C(h[T].lastCount,I.mode),h[T].lastCount+=I.length):(h[T]&&(h[T].lastCount=I.length),g[T][R]=C(I.length,I.mode)+4+e.getCharCountIndicator(I.mode,m))}}B=N}for(let p=0;p<B.length;p++)g[B[p]].end=0;return{map:g,table:h}}function E(f,m){let h;const g=e.getBestModeForData(f);if(h=e.from(m,g),h!==e.BYTE&&h.bit<g.bit)throw new Error('"'+f+'" cannot be encoded with mode '+e.toString(h)+`.
 Suggested mode is: `+e.toString(g));switch(h===e.KANJI&&!c.isKanjiModeEnabled()&&(h=e.BYTE),h){case e.NUMERIC:return new r(f);case e.ALPHANUMERIC:return new i(f);case e.KANJI:return new n(f);case e.BYTE:return new o(f)}}t.fromArray=function(m){return m.reduce(function(h,g){return typeof g=="string"?h.push(E(g,null)):g.data&&h.push(E(g.data,g.mode)),h},[])},t.fromString=function(m,h){const g=b(m,c.isKanjiModeEnabled()),B=y(g),p=l(B,h),A=a.find_path(p.map,"start","end"),N=[];for(let S=1;S<A.length-1;S++)N.push(p.table[A[S]].node);return t.fromArray(w(N))},t.rawSplit=function(m){return t.fromArray(b(m,c.isKanjiModeEnabled()))}})(Vt);const et=M,rt=Z,Pe=ae,Re=ce,Le=Rt,ve=Lt,ut=vt,lt=x,De=le,X=_t,Ue=kt,_e=D,it=Vt;function Fe(t,e){const r=t.size,i=ve.getPositions(e);for(let o=0;o<i.length;o++){const n=i[o][0],s=i[o][1];for(let c=-1;c<=7;c++)if(!(n+c<=-1||r<=n+c))for(let a=-1;a<=7;a++)s+a<=-1||r<=s+a||(c>=0&&c<=6&&(a===0||a===6)||a>=0&&a<=6&&(c===0||c===6)||c>=2&&c<=4&&a>=2&&a<=4?t.set(n+c,s+a,!0,!0):t.set(n+c,s+a,!1,!0))}}function ke(t){const e=t.size;for(let r=8;r<e-8;r++){const i=r%2===0;t.set(r,6,i,!0),t.set(6,r,i,!0)}}function ze(t,e){const r=Le.getPositions(e);for(let i=0;i<r.length;i++){const o=r[i][0],n=r[i][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?t.set(o+s,n+c,!0,!0):t.set(o+s,n+c,!1,!0)}}function Ve(t,e){const r=t.size,i=X.getEncodedBits(e);let o,n,s;for(let c=0;c<18;c++)o=Math.floor(c/3),n=c%3+r-8-3,s=(i>>c&1)===1,t.set(o,n,s,!0),t.set(n,o,s,!0)}function st(t,e,r){const i=t.size,o=Ue.getEncodedBits(e,r);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?t.set(n,8,s,!0):n<8?t.set(n+1,8,s,!0):t.set(i-15+n,8,s,!0),n<8?t.set(8,i-n-1,s,!0):n<9?t.set(8,15-n-1+1,s,!0):t.set(8,15-n-1,s,!0);t.set(i-8,8,1,!0)}function He(t,e){const r=t.size;let i=-1,o=r-1,n=7,s=0;for(let c=r-1;c>0;c-=2)for(c===6&&c--;;){for(let a=0;a<2;a++)if(!t.isReserved(o,c-a)){let u=!1;s<e.length&&(u=(e[s]>>>n&1)===1),t.set(o,c-a,u),n--,n===-1&&(s++,n=7)}if(o+=i,o<0||r<=o){o-=i,i=-i;break}}}function Oe(t,e,r){const i=new Pe;r.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),_e.getCharCountIndicator(a.mode,t)),a.write(i)});const o=et.getSymbolTotalCodewords(t),n=lt.getTotalCodewordsCount(t,e),s=(o-n)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const c=(s-i.getLengthInBits())/8;for(let a=0;a<c;a++)i.put(a%2?17:236,8);return Ke(i,t,e)}function Ke(t,e,r){const i=et.getSymbolTotalCodewords(e),o=lt.getTotalCodewordsCount(e,r),n=i-o,s=lt.getBlocksCount(e,r),c=i%s,a=s-c,u=Math.floor(i/s),d=Math.floor(n/s),b=d+1,C=u-d,w=new De(C);let y=0;const l=new Array(s),E=new Array(s);let f=0;const m=new Uint8Array(t.buffer);for(let A=0;A<s;A++){const N=A<a?d:b;l[A]=m.slice(y,y+N),E[A]=w.encode(l[A]),y+=N,f=Math.max(f,N)}const h=new Uint8Array(i);let g=0,B,p;for(B=0;B<f;B++)for(p=0;p<s;p++)B<l[p].length&&(h[g++]=l[p][B]);for(B=0;B<C;B++)for(p=0;p<s;p++)h[g++]=E[p][B];return h}function Je(t,e,r,i){let o;if(Array.isArray(t))o=it.fromArray(t);else if(typeof t=="string"){let u=e;if(!u){const d=it.rawSplit(t);u=X.getBestVersionForData(d,r)}o=it.fromString(t,u||40)}else throw new Error("Invalid data");const n=X.getBestVersionForData(o,r);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=n;else if(e<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Oe(e,r,o),c=et.getSymbolSize(e),a=new Re(c);return Fe(a,e),ke(a),ze(a,e),st(a,r,0),e>=7&&Ve(a,e),He(a,s),isNaN(i)&&(i=ut.getBestMask(a,st.bind(null,a,r))),ut.applyMask(i,a),st(a,r,i),{modules:a,version:e,errorCorrectionLevel:r,maskPattern:i,segments:o}}Mt.create=function(e,r){if(typeof e=="undefined"||e==="")throw new Error("No input text");let i=rt.M,o,n;return typeof r!="undefined"&&(i=rt.from(r.errorCorrectionLevel,rt.M),o=X.from(r.version),n=ut.from(r.maskPattern),r.toSJISFunc&&et.setToSJISFunction(r.toSJISFunc)),Je(e,o,i,n)};var Ot={},wt={};(function(t){function e(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let i=r.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+r);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(n){return[n,n]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}t.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,n=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},t.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},t.getImageWidth=function(i,o){const n=t.getScale(i,o);return Math.floor((i+o.margin*2)*n)},t.qrToImageData=function(i,o,n){const s=o.modules.size,c=o.modules.data,a=t.getScale(s,n),u=Math.floor((s+n.margin*2)*a),d=n.margin*a,b=[n.color.light,n.color.dark];for(let C=0;C<u;C++)for(let w=0;w<u;w++){let y=(C*u+w)*4,l=n.color.light;if(C>=d&&w>=d&&C<u-d&&w<u-d){const E=Math.floor((C-d)/a),f=Math.floor((w-d)/a);l=b[c[E*s+f]?1:0]}i[y++]=l.r,i[y++]=l.g,i[y++]=l.b,i[y]=l.a}}})(wt);(function(t){const e=wt;function r(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch(o){throw new Error("You need to specify a canvas element")}}t.render=function(n,s,c){let a=c,u=s;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(u=i()),a=e.getOptions(a);const d=e.getImageWidth(n.modules.size,a),b=u.getContext("2d"),C=b.createImageData(d,d);return e.qrToImageData(C.data,n,a),r(b,u,d),b.putImageData(C,0,0),u},t.renderToDataURL=function(n,s,c){let a=c;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const u=t.render(n,s,a),d=a.type||"image/png",b=a.rendererOpts||{};return u.toDataURL(d,b.quality)}})(Ot);var Kt={};const Ye=wt;function Nt(t,e){const r=t.a/255,i=e+'="'+t.hex+'"';return r<1?i+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function at(t,e,r){let i=t+e;return typeof r!="undefined"&&(i+=" "+r),i}function je(t,e,r){let i="",o=0,n=!1,s=0;for(let c=0;c<t.length;c++){const a=Math.floor(c%e),u=Math.floor(c/e);!a&&!n&&(n=!0),t[c]?(s++,c>0&&a>0&&t[c-1]||(i+=n?at("M",a+r,.5+u+r):at("m",o,0),o=0,n=!1),a+1<e&&t[c+1]||(i+=at("h",s),s=0)):o++}return i}Kt.render=function(e,r,i){const o=Ye.getOptions(r),n=e.modules.size,s=e.modules.data,c=n+o.margin*2,a=o.color.light.a?"<path "+Nt(o.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+Nt(o.color.dark,"stroke")+' d="'+je(s,n,o.margin)+'"/>',d='viewBox="0 0 '+c+" "+c+'"',C='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+a+u+`</svg>
`;return typeof i=="function"&&i(null,C),C};const $e=ie,ft=Mt,Jt=Ot,Qe=Kt;function mt(t,e,r,i,o){const n=[].slice.call(arguments,1),s=n.length,c=typeof n[s-1]=="function";if(!c&&!$e())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(o=r,r=e,e=i=void 0):s===3&&(e.getContext&&typeof o=="undefined"?(o=i,i=void 0):(o=i,i=r,r=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(r=e,e=i=void 0):s===2&&!e.getContext&&(i=r,r=e,e=void 0),new Promise(function(a,u){try{const d=ft.create(r,i);a(t(d,e,i))}catch(d){u(d)}})}try{const a=ft.create(r,i);o(null,t(a,e,i))}catch(a){o(a)}}Y.create=ft.create;Y.toCanvas=mt.bind(null,Jt.render);Y.toDataURL=mt.bind(null,Jt.renderToDataURL);Y.toString=mt.bind(null,function(t,e,r){return Qe.render(t,r)});const Ge={tag:Q.string.validate(t=>["canvas","img"].includes(t)).def("canvas"),text:{type:[String,Array],default:null},options:{type:Object,default:()=>({})},width:Q.number.def(200),logo:{type:[String,Object],default:()=>""},disabled:Q.bool.def(!1),disabledText:Q.string.def("")},qe=qt({name:"ReQrcode",props:Ge,emits:["done","click","disabled-click"],setup(t,{emit:e}){const{toCanvas:r,toDataURL:i}=Y,o=pt(!0),n=pt(null),s=At(()=>String(t.text)),c=At(()=>({width:t.width+"px",height:t.width+"px"})),a=()=>nt(this,null,function*(){yield ee();const l=ne(t.options||{});if(t.tag==="canvas"){l.errorCorrectionLevel=l.errorCorrectionLevel||b(U(s));const E=yield d(U(s),l);l.scale=t.width===0?void 0:t.width/E*4;const f=yield r(U(n),U(s),l);if(t.logo){const m=yield u(f);e("done",m),o.value=!1}else e("done",f.toDataURL()),o.value=!1}else{const E=yield i(s.value,bt({errorCorrectionLevel:"H",width:t.width},l));U(n).src=E,e("done",E),o.value=!1}});Wt(()=>s.value,l=>{l&&a()},{deep:!0,immediate:!0});const u=l=>{const E=l.width,f=Object.assign({logoSize:.15,bgColor:"#ffffff",borderSize:.05,crossOrigin:"anonymous",borderRadius:8,logoRadius:0},Tt(t.logo)?{}:t.logo),{logoSize:m=.15,bgColor:h="#ffffff",borderSize:g=.05,crossOrigin:B="anonymous",borderRadius:p=8,logoRadius:A=0}=f,N=Tt(t.logo)?t.logo:t.logo.src,S=E*m,I=E*(1-m)/2,R=E*(m+g),_=E*(1-m-g)/2,T=l.getContext("2d");if(!T)return;C(T)(_,_,R,R,p),T.fillStyle=h,T.fill();const H=new Image;(B||A)&&H.setAttribute("crossOrigin",B),H.src=N;const Yt=O=>{T.drawImage(O,I,I,S,S)},jt=O=>{const $=document.createElement("canvas");$.width=I+S,$.height=I+S;const Ct=$.getContext("2d");if(!Ct||!T||(Ct.drawImage(O,I,I,S,S),C(T)(I,I,S,S,A),!T))return;const yt=T.createPattern($,"no-repeat");yt&&(T.fillStyle=yt,T.fill())};return new Promise(O=>{H.onload=()=>{A?jt(H):Yt(H),O(l.toDataURL())}})},d=(l,E)=>nt(this,null,function*(){const f=document.createElement("canvas");return yield r(f,l,E),f.width}),b=l=>l.length>36?"M":l.length>16?"Q":"H",C=l=>(E,f,m,h,g)=>{const B=Math.min(m,h);return g>B/2&&(g=B/2),l.beginPath(),l.moveTo(E+g,f),l.arcTo(E+m,f,E+m,f+h,g),l.arcTo(E+m,f+h,E,f+h,g),l.arcTo(E,f+h,E,f,g),l.arcTo(E,f,E+m,f,g),l.closePath(),l},w=()=>{e("click")},y=()=>{e("disabled-click")};return()=>L(te,null,[Xt(L("div",{class:"qrcode relative inline-block",style:U(c)},[t.tag==="canvas"?L("canvas",{ref:n,onClick:w},null):L("img",{ref:n,onClick:w},null),t.disabled&&L("div",{class:"qrcode--disabled absolute top-0 left-0 flex w-full h-full items-center justify-center",onClick:y},[L("div",{class:"absolute top-[50%] left-[50%] font-bold"},[L(xt("iconify-icon-offline"),{class:"cursor-pointer",icon:re,width:"30",color:"var(--el-color-primary)"},null),L("div",null,[t.disabledText])])])]),[[Zt("loading"),U(o)]])])}}),tn=oe(qe);export{tn as R};
