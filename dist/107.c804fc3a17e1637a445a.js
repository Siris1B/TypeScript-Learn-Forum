"use strict";(self.webpackChunktypescript_app=self.webpackChunktypescript_app||[]).push([[107],{107:(e,n,t)=>{t.r(n),t.d(n,{default:()=>P});var r=t(848),a=t(101),o=t(389),l=t(5),s=t(540);var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},i.apply(this,arguments)},c=(0,s.memo)((function(e){var n=e.className,t=e.value,o=e.onChange,l=e.type,c=void 0===l?"text":l,u=e.placeholder,d=e.autoFocus,f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}(e,["className","value","onChange","type","placeholder","autoFocus"]),p=(0,s.useRef)(),v=(0,s.useState)(!1),h=v[0],m=v[1],y=(0,s.useState)(0),g=y[0],x=y[1];return(0,s.useEffect)((function(){var e;d&&(m(!0),null===(e=p.current)||void 0===e||e.focus())}),[d]),(0,r.jsxs)("div",{className:(0,a.x)("LuFDUWoP",{},[n]),children:[u&&(0,r.jsx)("div",{className:"emAQQ85i",children:u+">"}),(0,r.jsxs)("div",{className:"y1GiFC_L",children:[(0,r.jsx)("input",i({ref:p,type:c,value:t,onChange:function(e){null==o||o(e.target.value),x(e.target.value.length)},className:"LVdIPwcx",onFocus:function(){m(!0)},onBlur:function(){m(!1)},onSelect:function(e){var n=e.currentTarget;x(n.selectionStart||0)}},f)),h&&(0,r.jsx)("span",{style:{left:"".concat(9*g,"px")},className:"lqMFGBuL"})]})]})})),u=t(468);const d={title:"ikI7VPeL",text:"uNJeeCm1",primary:"cy4tUHv6",error:"F9oLXAK4"};var f;!function(e){e.PRIMARY="primary",e.ERROR="error"}(f||(f={}));var p=function(e){var n,t=e.className,o=e.title,l=e.text,s=e.theme,i=void 0===s?f.PRIMARY:s;return(0,r.jsxs)("div",{className:(0,a.x)("",(n={},n[d[i]]=!0,n),[t]),children:[o&&(0,r.jsx)("p",{className:d.title,children:o}),l&&(0,r.jsx)("p",{className:d.text,children:l})]})},v=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.username)||""},h=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.password)||""},m=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.isLoading)||!1},y=function(e){var n;return(null===(n=null==e?void 0:e.loginForm)||void 0===n?void 0:n.error)||""},g=t(452),x=t(83),b=t(849),w=t(398),j=(0,g.zD)("login/loginByUsername",(function(e,n){return t=void 0,r=void 0,o=function(){var t,r;return function(e,n){var t,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(i){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(l=0)),l;)try{if(t=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return l.label++,{value:s[1],done:!1};case 5:l.label++,r=s[1],s=[0];continue;case 7:s=l.ops.pop(),l.trys.pop();continue;default:if(!((a=(a=l.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){l=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){l.label=s[1];break}if(6===s[0]&&l.label<a[1]){l.label=a[1],a=s;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(s);break}a[2]&&l.ops.pop(),l.trys.pop();continue}s=n.call(e,l)}catch(e){s=[6,e],r=0}finally{t=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,x.A.post("http://localhost:8000/login",e)];case 1:if(!(t=a.sent()).data)throw new Error;return localStorage.setItem(w.P,JSON.stringify(t.data)),n.dispatch(b.Xp.setAuthData(t.data)),[2,t.data];case 2:return r=a.sent(),console.log(r),[2,n.rejectWithValue("error")];case 3:return[2]}}))},new((a=void 0)||(a=Promise))((function(e,n){function l(e){try{i(o.next(e))}catch(e){n(e)}}function s(e){try{i(o.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}i((o=o.apply(t,r||[])).next())}));var t,r,a,o})),N=(0,g.Z0)({name:"login",initialState:{isLoading:!1,username:"",password:""},reducers:{setUsername:function(e,n){e.username=n.payload},setPassword:function(e,n){e.password=n.payload}},extraReducers:function(e){e.addCase(j.pending,(function(e){e.error=void 0,e.isLoading=!0})).addCase(j.fulfilled,(function(e,n){e.isLoading=!1})).addCase(j.rejected,(function(e,n){e.isLoading=!1,e.error=n.payload}))}}),O=N.actions,C=N.reducer;const F="PQPa1eB5",P=(0,s.memo)((function(e){var n,t=e.className,i=(0,o.Bd)().t,d=(0,u.wA)(),g=(0,u.Pj)(),x=(0,u.d4)(v),b=(0,u.d4)(h),w=(0,u.d4)(m),N=(0,u.d4)(y);(0,s.useEffect)((function(){return g.reducerManager.add("loginForm",C),d({type:"@INIT loginForm reducer"}),function(){g.reducerManager.remove("loginForm"),d({type:"@DESTROY loginForm reducer"})}}),[]);var P=(0,s.useCallback)((function(e){d(O.setUsername(e))}),[d]),k=(0,s.useCallback)((function(e){d(O.setPassword(e))}),[d]),R=(0,s.useCallback)((function(){d(j({username:x,password:b}))}),[d,b,x]);return(0,r.jsxs)("div",{className:(0,a.x)("xYNEfcE9",{},[t]),children:[(0,r.jsx)(p,{title:i("Форма авторизації")}),N&&(0,r.jsx)(p,{text:i("Введено неправильний логін чи пароль"),theme:f.ERROR}),(0,r.jsx)(c,{autoFocus:!0,placeholder:i("Введіть логін"),type:"text",className:F,onChange:P,value:x}),(0,r.jsx)(c,{placeholder:i("Введіть пароль"),type:"text",className:F,onChange:k,value:b}),(0,r.jsx)(l.$n,{onClick:R,theme:l.oy.OUTLINE,className:(0,a.x)("Ok_5amJo",(n={},n.Ds5tjrj_=w,n),[]),disabled:w,children:i("Увійти")})]})}))}}]);