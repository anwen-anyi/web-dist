import{a as v,b as $,aP as l,b2 as r,bX as C,cj as w,d as I,h as t,ck as R,ar as L,b3 as o,n as p,a2 as T,B as u,V as _}from"./index.929d4512.js";import{n as x}from"./index.0dab88c3.js";import{I as B}from"./SettingItem.4c50d0fc.js";import{R as P}from"./ResponsiveGrid.28f2fa87.js";import"./index.b5f3eddf.js";import"./index.ce493061.js";import"./index.8846b397.js";import"./item_type.be442da4.js";const z=d=>{const s=v(),{pathname:m}=$();x(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${d.group}`)),[i,c]=C([]),a=async()=>{const e=await f();o(e,c)};a();const[k,S]=l(()=>r.post("/admin/setting/save",w(i))),[b,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(P,{get children(){return t(R,{each:i,children:(e,V)=>t(B,L(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||b()},get children(){return s("global.refresh")}}),t(u,{get loading(){return k()},onClick:async()=>{const e=await S();o(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{z as default};
