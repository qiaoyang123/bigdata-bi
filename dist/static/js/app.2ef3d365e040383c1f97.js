webpackJsonp([4],{"0jG4":function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__=__webpack_require__("//Fk"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__),__WEBPACK_IMPORTED_MODULE_1_axios__=__webpack_require__("mtWM"),__WEBPACK_IMPORTED_MODULE_1_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__),__WEBPACK_IMPORTED_MODULE_2__store_types__=__webpack_require__("5reh"),__WEBPACK_IMPORTED_MODULE_3__interceptors_cancelFetch__=__webpack_require__("Daia"),fetch=function fetch(commit,opts,fn){return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function(resolve){__WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(REQUEST_URL+opts.url,opts.data).then(function(response){"[object String]"==Object.prototype.toString.call(response.data)&&-1!=response.data.indexOf("window.location.href")?eval(response.data.replace("<script>","").replace("<\/script>","")):0==response.data.code?(fn&&commit(fn,response.data),resolve&&resolve(response.data.data)):errCatch(commit,resolve,response.data.message)}).catch(function(e){errCatch(commit,resolve,"服务器异常请稍后重试")})})},errCatch=function(e,t,n){e(__WEBPACK_IMPORTED_MODULE_2__store_types__.a.SET_TOAST,{isShow:!0,msg:n,type:"error"}),t&&t()},environmentPath=function(){return location.href.indexOf("data-center.test.gegejia.com")>-1?"http://118.178.33.6":location.href.indexOf("120.55.23.233")>-1?"http://120.55.23.233:8080":""};__webpack_exports__.a={fetch:fetch,method:{environmentPath:function(){return location.href.indexOf("data-center.test.gegejia.com")>-1?"http://118.178.33.6":location.href.indexOf("120.55.23.233")>-1?"http://120.55.23.233:8080":""}}}},"5reh":function(e,t,n){"use strict";t.a={SET_LOADING:"SET_LOADING",SET_TOAST:"SET_TOAST",SET_SEARCH_PARAMS:"SET_SEARCH_PARAMS",SET_SEARCH_CONFIG:"SET_SEARCH_CONFIG",SET_VIEW_IMAGE:"SET_VIEW_IMAGE"}},"7XQ6":function(e,t){},BZUo:function(e,t){},Daia:function(e,t,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("mtWM"),i=n.n(a),_={},c=i.a.CancelToken,s=function(e,t){var n=e.url;_[n]?t?t():delete _[n]:t&&(_[n]=!0)};i.a.interceptors.request.use(function(e){return e.cancelToken=new c(function(t){s(e,t)}),e},function(e){return o.a.reject(e)}),i.a.interceptors.response.use(function(e){return s(e.config),e},function(e){return o.a.reject(e)})},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"app"},o,!1,function(e){n("BZUo")},null,null).exports,i=n("Gu7T"),_=n.n(i),c=n("/ocq"),s=[{path:"/product/list",name:"ProductList",component:function(e){return n.e(1).then(function(){var t=[n("If12")];e.apply(null,t)}.bind(this)).catch(n.oe)}}];r.default.use(c.a);var u=[{path:"/",name:"Home",component:function(e){return n.e(0).then(function(){var t=[n("j7e0")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[].concat(_()(s))}];u.push({path:"*",component:function(e){return n.e(2).then(function(){var t=[n("16SZ")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:"notfound"});var p,f=new c.a({routes:u}),l=n("NYxO"),d=n("bOdI"),E=n.n(d),m=n("5reh"),h=(p={},E()(p,m.a.SET_LOADING,function(e,t){t?e.loadingConfig.loadList.push("1"):e.loadingConfig.loadList.pop()}),E()(p,m.a.SET_TOAST,function(e,t){e.toastConfig=t}),E()(p,m.a.SET_SEARCH_PARAMS,function(e,t){e.searchParams=t}),E()(p,m.a.SET_SEARCH_CONFIG,function(e,t){e.searchConfig=t}),E()(p,m.a.SET_VIEW_IMAGE,function(e,t){e.viewImageConfig=t}),p),g={setLoading:function(e,t){(0,e.commit)(m.a.SET_LOADING,t)},setToast:function(e,t){(0,e.commit)(m.a.SET_TOAST,t)},setSearchConfig:function(e,t){(0,e.commit)("SET_SEARCH_CONFIG",t)},setSearchParams:function(e,t){(0,e.commit)("SET_SEARCH_PARAMS",UtilTool.deepCopy(t))},setViewImage:function(e,t){(0,e.commit)("SET_VIEW_IMAGE",t)}},S=n("0jG4"),A=function(e,t){var n={method:"post",url:"/api/order/getGross",data:t};return S.a.fetch(e,n)},T=function(e,t){var n={method:"post",url:"/api/order/getGroups",data:t};return S.a.fetch(e,n)},O=function(e,t){var n={method:"post",type:"json",url:"/api/order/getSaleProductVcharts",data:t};return S.a.fetch(e,n)},v={namespaced:!1,state:{},getters:{},actions:{getProductList:function(e,t){var n=e.commit;return A(n,t)},changeState:function(e,t){var n=e.commit;return T(n,t)},changeSaleProductVcharts:function(e,t){var n=e.commit;return O(n,t)}},mutations:{}};r.default.use(l.a);var C={state:{loadingConfig:{loadList:[]},toastConfig:{isShow:!1,type:"",msg:""},searchConfig:{},searchParams:{},viewImageConfig:{isShow:!1,url:""}},mutations:h,actions:g,modules:{product:v}},w=new l.a.Store(C),M=n("zL8q"),P=n.n(M),R=(n("7XQ6"),n("fZjL")),I=n.n(R),b=n("woOf"),D=n.n(b),L=n("mvHQ"),y=n.n(L),x=n("pFYg"),j=n.n(x),U={deepCopy:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){var t=e.constructor===Array?[]:{};if("object"!==(void 0===e?"undefined":j()(e)))t=e;else if(window.JSON)t=JSON.parse(y()(e));else for(var n in e)t[n]="object"===j()(e[n])?e[n].constructor===Array?e[n].slice():deepCopy(e[n]):e[n];return t}),stringifyQuery:function(e){var t={};for(var n in e){var r=e[n];"[object Array]"===Object.prototype.toString.call(r)?r.length&&(t[n]=1==r.length?r.join("Asp,Asp")+"Asp,Asp":r.join("Asp,Asp")):r&&(t[n]=r)}return t},parseQuery:function(e){var t={};for(var n in e){var r=e[n];r&&(t[n]=(r+"").indexOf("Asp,Asp")>-1?(r+"").split("Asp,Asp").filter(function(e){return e}):r)}return t},parseCheck:function(e){var t={};for(var n in e)e[n].regType&&(t[e[n].key]=e[n].regType);return t},paramsAssign:function(e,t,n){var r=D()({},t),o=I()(r);for(var a in e)o.indexOf(a)>-1&&(r[a]=e[a]);return n&&(r=D()({},r,n)),r},formatDate:function(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in n){var o=n[r]+"";new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?o:U.padLeftZero(o)))}return t},padLeftZero:function(e){return("00"+e).substr(e.length)}};window.REQUEST_URL=location.href.indexOf("data-center.test.gegejia.com")>-1?(console.log("hello world"),""):(location.href.indexOf("120.55.23.233"),""),window.UtilTool=U,window.RegExpType={Num:/^[1-9]{1}[0-9]*$/g,Price:/^[0-9]{1}[0-9]*(\.[0-9]{1,2})?$/g,Qq:/^\d{6,}$/g,Tel:/^1(3|4|5|7|8)\d{9}$/g,Email:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g};var W=n("mtWM"),G=n.n(W),k=n("OAwv"),N=n.n(k),B=n("vO7p"),H=n.n(B);r.default.use(P.a),r.default.use(H.a),r.default.config.productionTip=!1,window.axios=G.a,window.qs=N.a,new r.default({el:"#app",router:f,store:w,components:{App:a},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.2ef3d365e040383c1f97.js.map