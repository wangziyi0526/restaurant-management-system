import{d as D,r,b as v,j as I,m as u,e as l,k as d,i as m,w as _,f as t,u as f,R as N,c as V,C as h,B as i,aE as j}from"./index-pkOKtQ3P.js";import{R as z}from"./index-CB5pQLO-.js";const E={"element-loading-background":"transparent"},P={class:"w-[18vw]"},A={class:"mt-1 text-center"},J={class:"flex flex-wrap justify-center items-center text-center"},$={key:1,class:"mt-1"},H=D({__name:"upload",props:{imgSrc:String},emits:["cropper"],setup(g,{expose:w,emit:C}){const k=g,x=C,e=r(),p=r(),y=r(),o=r(!1),s=r("");function R({base64:c,blob:n,info:a}){e.value=a,s.value=c,x("cropper",{base64:c,blob:n,info:a})}function B(){p.value.hide()}return w({hidePopover:B}),(c,n)=>{const a=v("el-image"),S=v("el-popover"),b=I("loading");return u((l(),d("div",E,[m(S,{ref_key:"popoverRef",ref:p,visible:o.value,placement:"right",width:"18vw"},{reference:_(()=>[t("div",P,[m(f(z),{ref_key:"refCropper",ref:y,src:k.imgSrc,circled:"",onCropper:R,onReadied:n[0]||(n[0]=q=>o.value=!0)},null,8,["src"]),u(t("p",A," 温馨提示：右键上方裁剪区可开启功能菜单 ",512),[[N,o.value]])])]),default:_(()=>[t("div",J,[s.value?(l(),V(a,{key:0,src:s.value,"preview-src-list":Array.of(s.value),fit:"cover"},null,8,["src","preview-src-list"])):h("",!0),e.value?(l(),d("div",$,[t("p",null," 图像大小："+i(parseInt(e.value.width))+" × "+i(parseInt(e.value.height))+"像素 ",1),t("p",null," 文件大小："+i(f(j)(e.value.size))+"（"+i(e.value.size)+" 字节） ",1)])):h("",!0)])]),_:1},8,["visible"])])),[[b,!o.value]])}}});export{H as _};
