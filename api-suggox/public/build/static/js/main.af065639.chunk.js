(this["webpackJsonpecommerce-front"]=this["webpackJsonpecommerce-front"]||[]).push([[0],{20:function(e,a,t){e.exports=t(30)},30:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(17),l=t.n(c),o=t(2),s=t(6),i=t(8),m=t(10),u="http://localhost:8000/api",d=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},p=function(e,a){return e.location.pathname===a?{color:"#f90"}:{color:"#fff"}},f=Object(s.g)((function(e){var a=e.history;return n.a.createElement("div",null,n.a.createElement("ul",{className:"nav nav-tabs bg-primary"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",style:p(a,"/"),to:"/"},"Home")),d()&&0===d().user.role&&n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",style:p(a,"/user/dashboard"),to:"/user/dashboard"},"Dashboard")),d()&&1===d().user.role&&n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",style:p(a,"/admin/dashboard"),to:"/admin/dashboard"},"Dashboard")),!d()&&n.a.createElement(r.Fragment,null,n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",style:p(a,"/signin"),to:"/signin"},"Signin")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.b,{className:"nav-link",style:p(a,"/signup"),to:"/signup"},"Signup"))),d()&&n.a.createElement("li",{className:"nav-item"},n.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#fff"},onClick:function(){return function(e){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),fetch("".concat(u,"/signout"),{method:"GET"}).then((function(e){console.log("signout",e)})).catch((function(e){return console.log(e)}))}((function(){a.push("/")}))}},"Signout"))))})),E=function(e){var a=e.title,t=void 0===a?"Title":a,r=e.description,c=void 0===r?"Description":r,l=e.className,o=e.children;return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement("div",{className:"jumbotron"},n.a.createElement("h2",null,t),n.a.createElement("p",{className:"lead"},c)),n.a.createElement("div",{className:l},o))};function g(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?g(Object(t),!0).forEach((function(a){Object(i.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var N=function(){var e=Object(r.useState)({name:"",email:"",password:"",error:"",success:!1}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=t.name,s=t.email,d=t.password,p=t.success,f=t.error,g=function(e){return function(a){c(b({},t,Object(i.a)({error:!1},e,a.target.value)))}},N=function(e){var a;e.preventDefault(),c(b({},t,{error:!1})),(a={name:l,email:s,password:d},fetch("".concat(u,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){e.error?c(b({},t,{error:e.error,success:!1})):c(b({},t,{name:"",email:"",password:"",error:"",success:!0}))}))};return n.a.createElement(E,{title:"Signup",description:"Signup to Suggox",className:"container col-md-8 offset-md-2"},n.a.createElement("div",{className:"alert alert-info",style:{display:p?"":"none"}},"New account is created. Please ",n.a.createElement(o.b,{to:"/signin"},"Signin")),n.a.createElement("div",{className:"alert alert-danger",style:{display:f?"":"none"}},f),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-muted"},"Name"),n.a.createElement("input",{onChange:g("name"),type:"text",className:"form-control",value:l})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-muted"},"Email"),n.a.createElement("input",{onChange:g("email"),type:"email",className:"form-control",value:s})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-muted"},"Password"),n.a.createElement("input",{onChange:g("password"),type:"password",className:"form-control",value:d})),n.a.createElement("button",{onClick:N,className:"btn btn-primary"},"Submit")))};function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(Object(t),!0).forEach((function(a){Object(i.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var y=function(){var e=Object(r.useState)({email:"correo@correo.com",password:"123456",error:"",loading:!1,redirectToReferrer:!1}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=t.email,o=t.password,p=t.loading,f=t.error,g=t.redirectToReferrer,b=d().user,N=function(e){return function(a){c(h({},t,Object(i.a)({error:!1},e,a.target.value)))}},v=function(e){e.preventDefault(),c(h({},t,{error:!1,loading:!0})),function(e){return fetch("".concat(u,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}({email:l,password:o}).then((function(e){e.error?c(h({},t,{error:e.error,loading:!1})):function(e,a){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),a())}(e,(function(){c(h({},t,{redirectToReferrer:!0}))}))}))};return n.a.createElement(E,{title:"Signin",description:"Signin to Sugox",className:"container col-md-8 offset-md-2"},p&&n.a.createElement("div",{className:"alert alert-info"},n.a.createElement("h2",null,"Loading...")),n.a.createElement("div",{className:"alert alert-danger",style:{display:f?"":"none"}},f),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-muted"},"Email"),n.a.createElement("input",{onChange:N("email"),type:"email",className:"form-control",value:l})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{className:"text-muted"},"Password"),n.a.createElement("input",{onChange:N("password"),type:"password",className:"form-control",value:o})),n.a.createElement("button",{onClick:v,className:"btn btn-primary"},"Submit")),g?b&&1===b.role?n.a.createElement(s.a,{to:"/admin/dashboard"}):n.a.createElement(s.a,{to:"/user/dashboard"}):d()?n.a.createElement(s.a,{to:"/"}):void 0)},O=function(){return n.a.createElement(E,{title:"Home Page",description:"Suggox"},"...")},j=t(11),w=function(e){var a=e.component,t=Object(j.a)(e,["component"]);return n.a.createElement(s.b,Object.assign({},t,{render:function(e){return d()?n.a.createElement(a,e):n.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},S=function(){var e=d().user,a=(e._id,e.name),t=e.email,r=e.role;return n.a.createElement(E,{title:"Dashboard",description:"Bienvenido a Suggox, ".concat(a,"!"),className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"card"},n.a.createElement("h4",{className:"card-header"},"User Links"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement(o.b,{className:"nav-link",to:"/profile/update"},"Actualizar Informacion"))))),n.a.createElement("div",{className:"col-9"},n.a.createElement("div",{className:"card mb-5"},n.a.createElement("h3",{className:"card-header"},"Informacion de usuario"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},a),n.a.createElement("li",{className:"list-group-item"},t),n.a.createElement("li",{className:"list-group-item"},1===r?"Admin":"Usuario Registrado"))),n.a.createElement("div",{className:"card mb-5"},n.a.createElement("h3",{className:"card-header"},"Historial de respuestas"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},"history"))))))},P=function(e){var a=e.component,t=Object(j.a)(e,["component"]);return n.a.createElement(s.b,Object.assign({},t,{render:function(e){return d()&&1===d().user.role?n.a.createElement(a,e):n.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},k=function(){var e=d().user,a=(e._id,e.name),t=e.email,r=e.role;return n.a.createElement(E,{title:"Dashboard",description:"Bienvenido a Suggox, ".concat(a,"!"),className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("div",{className:"card"},n.a.createElement("h4",{className:"card-header"},"Admin Links"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement(o.b,{className:"nav-link",to:"/create/category"},"Create Survey"))))),n.a.createElement("div",{className:"col-9"},n.a.createElement("div",{className:"card mb-5"},n.a.createElement("h3",{className:"card-header"},"Informacion de usuario"),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},a),n.a.createElement("li",{className:"list-group-item"},t),n.a.createElement("li",{className:"list-group-item"},1===r?"Admin":"Usuario Registrado"))))))},x=function(){return n.a.createElement(o.a,null,n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/",exact:!0,component:O}),n.a.createElement(s.b,{path:"/signin",exact:!0,component:y}),n.a.createElement(s.b,{path:"/signup",exact:!0,component:N}),n.a.createElement(w,{path:"/user/dashboard",exact:!0,component:S}),n.a.createElement(P,{path:"/admin/dashboard",exact:!0,component:k})))};l.a.render(n.a.createElement(x,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.af065639.chunk.js.map