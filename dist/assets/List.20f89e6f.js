import{cs as $,h as t,a2 as l,y as k,aG as h,aJ as b,cJ as m,S as f,aH as w,bV as j,aj as y,a9 as A,ai as p,a_ as a,bZ as C,cd as S,a as v,d,e as M,cK as O,cL as P,cM as z,ar as u,t as I,Q as L,V as B}from"./index.a26962e2.js";import{b as E}from"./Folder.0f87549c.js";import{u as H}from"./index.74b25228.js";import{o as T}from"./index.e6a3561b.js";import{g as V,O as _}from"./icon.ab0065bb.js";import{M as D}from"./Layout.88ce21c8.js";import"./video_box.249843f2.js";import"./index.5aa57b39.js";import"./Paginator.12f13804.js";import"./index.d221bfe9.js";import"./FolderTree.230bc3ec.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],F=e=>{const{isHide:o}=$();if(o(e.obj))return null;const{setPathAs:c}=H(),{show:s}=E({id:1});return t(D.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:k()}},as:T,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),m(e.index,!0,!0)}),s(r,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{m(e.index,r.target.checked)}})}}),t(y,{class:"icon",boxSize:"$6",get color(){return A()},get as(){return V(e.obj)},mr:"$1","on:click":r=>{e.obj.type===_.IMAGE&&(r.stopPropagation(),r.preventDefault(),p.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return C(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return S(e.obj.modified)}})]}})}})},Y=()=>{const e=v(),[o,c]=d(),[s,r]=d(!1);M(()=>{o()&&O(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?r(!s()):h(()=>{c(i.name),r(!1)})}});return t(B,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return n[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return P()},get indeterminate(){return z()},onChange:i=>{b(i.target.checked)}})}}),t(a,u(()=>g(n[0]),{get children(){return e(`home.obj.${n[0].name}`)}}))]}}),t(a,u({get w(){return n[1].w}},()=>g(n[1]),{get children(){return e(`home.obj.${n[1].name}`)}})),t(a,u({get w(){return n[2].w}},()=>g(n[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${n[2].name}`)}}))]}}),t(I,{get each(){return L.objs},children:(i,x)=>t(F,{obj:i,get index(){return x()}})})]}})};export{Y as default};
