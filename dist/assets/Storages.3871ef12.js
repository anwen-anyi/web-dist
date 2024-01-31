import{a as h,h as e,H as R,a9 as V,a2 as o,a_ as v,bY as A,ak as F,Y as x,V as p,cz as l,cw as D,b as O,aP as _,b2 as c,B as i,aR as G,b3 as u,n as B,d as k,r as W,bU as X,S as Y,bi as j,bj as q,bk as z,bl as N,bm as U,bn as E,bo as J,t as d,bp as K,bq as Q,br as Z,cc as ee,O as re,P as C,ck as te,cu as ne,cv as ae,cx as T,cy as se}from"./index.a26962e2.js";import{n as le}from"./index.5aa57b39.js";import{D as oe}from"./DeletePopover.c3e8f10f.js";function L(r){const n=h(),{to:g}=O(),[m,b]=_(()=>c.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,a]=_(()=>c.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(i,{onClick:()=>{g(`/@manage/storages/edit/${r.storage.id}`)},get children(){return n("global.edit")}}),e(i,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await a();G(s,()=>{r.refresh()})},get children(){return n(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return m()},onClick:async()=>{const s=await b();u(s,()=>{B.success(n("global.delete_success")),r.refresh()})}})]}function ce(r){const n=h();return e(p,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return R("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${V()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(A,{colorScheme:"info",get children(){return n(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[F(()=>n("storages.common.status")),":\xA0"]}}),e(x,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(L,r)}})]}})}function ie(r){const n=h();return e(D,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return n(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(L,r)}})}})]}})}const me=()=>{const r=h();le("manage.sidemenu.storages");const{to:n}=O(),[g,m]=_(()=>c.get("/admin/storage/list")),[b,S]=k([]),a=async()=>{const t=await m();u(t,w=>S(w.content))},[s,M]=k([]),[f,I]=k([]);(async()=>{const t=await c.get("/admin/driver/names");u(t,w=>M(w))})(),a();const H=async()=>{const t=await c.post("/admin/storage/load_all");u(t,()=>{B.success(r("storages.other.start_load_success"))})},y=W(()=>b().filter(t=>f().length===0?!0:f().includes(t.driver))),[$,P]=X("storages-layout","grid");return e(p,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(i,{colorScheme:"accent",get loading(){return g()},onClick:a,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{n("/@manage/storages/add")},get children(){return r("global.add")}}),e(i,{colorScheme:"warning",get loading(){return g()},onClick:H,get children(){return r("storages.other.load_all")}}),e(Y,{get when(){return s().length>0},get children(){return e(j,{multiple:!0,get value(){return f()},onChange:I,get children(){return[e(q,{get children(){return[e(z,{get children(){return r("storages.other.filter_by_driver")}}),e(N,{}),e(U,{})]}}),e(E,{get children(){return e(J,{get children(){return e(d,{get each(){return s()},children:t=>e(K,{value:t,get children(){return[e(Q,{get children(){return r(`drivers.drivers.${t}`)}}),e(Z,{})]}})})}})}})]}})}}),e(ee,{get checked(){return $()==="table"},onChange:t=>{P(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(C,{get when(){return $()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(d,{get each(){return y()},children:t=>e(ce,{storage:t,refresh:a})})}})}}),e(C,{get when(){return $()==="table"},get children(){return e(x,{w:"$full",overflowX:"auto",get children(){return e(ne,{highlightOnHover:!0,dense:!0,get children(){return[e(ae,{get children(){return e(D,{get children(){return[e(d,{each:["mount_path","driver","order","status","remark"],children:t=>e(T,{get children(){return r(`storages.common.${t}`)}})}),e(T,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(d,{get each(){return y()},children:t=>e(ie,{storage:t,refresh:a})})}})]}})}})}})]}})]}})};export{me as default};
