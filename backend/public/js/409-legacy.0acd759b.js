"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[409],{409:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",[t._m(0),t._l(t.memo,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.id))]),n("td",{on:{click:function(n){return t.$router.push("/list/"+e.id)}}},[t._v(t._s(e.title))])])}))],2)])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("번호")]),n("td",[t._v("제목")])])}],l={data(){return{memo:[]}},created(){this.$http.get("/api/memo").then((t=>{console.log(t.data),this.memo=t.data}))}},i=l,o=n(1),a=(0,o.Z)(i,r,u,!1,null,null,null),c=a.exports}}]);
//# sourceMappingURL=409-legacy.0acd759b.js.map