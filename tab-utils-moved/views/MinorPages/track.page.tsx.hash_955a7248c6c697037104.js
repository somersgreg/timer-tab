!function(e){function t(t){for(var r,u,l=t[0],c=t[1],i=t[2],p=0,d=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);d.length;)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={18:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var f=c;a.push([473,1,0]),n()}({10:function(e,t,n){},473:function(e,t,n){n(22),e.exports=n(474)},474:function(e,t,n){"use strict";var r,o=n(17);o.initFunctions={},o.initFunctions=o.initFunctions||{},o.initFunctions.hydratePage=!0===((r=n(23))||{}).__esModule?r.default:r,o.pageConfig=function(){var e=n(475);return!0===(e||{}).__esModule?e.default:e}(),o.router=function(){var e=n(24);return!0===(e||{}).__esModule?e.default:e}(),o.renderPageToDom=function(){var e=n(25);return!0===(e||{}).__esModule?e.default:e}(),o.domRender=function(){var e=n(26);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=n(27);!0===(e||{}).__esModule&&e.default}()},475:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(5),u=n(82),l=n(45),c=n(4);function i(e,t){return f("eventLabel",t,e)}function f(e,t,n){return"https://analytics.google.com/analytics/web/#/report/content-event-events/"+c.d+"/"+"_u.date00=".concat(p(t),"&")+"_u.date01=".concat(p(0),"&")+"explorer-segmentExplorer.segmentId=analytics.".concat(e,"&")+"explorer-table.filter=".concat(n,"&")+"explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=5000/"}function p(e){var t=new Date,n=new Date(t.getTime()-24*e*60*60*1e3);return[n.getFullYear(),n.getMonth()+1,n.getDate()].map((function(e){return(e<=9?"0":"")+e})).join("")}t.default=Object(a.a)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,o.a.createElement("a",{id:"errors",target:"_blank"},"Errors"),o.a.createElement("br",null),o.a.createElement("a",{id:"events",target:"_blank"},"Events")),o.a.createElement("h3",null,"User"),o.a.createElement("form",null,"User ID: ",o.a.createElement("input",{placeholder:"User ID",type:"text"}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Today"),o.a.createElement("button",{id:"user-last-7-days",type:"button"},"Last 7 days")),o.a.createElement("h3",null,"Track Data"),"Depoy ID: ",o.a.createElement("b",{id:"deploy-id"}),o.a.createElement("br",null),"User ID: ",o.a.createElement("b",{id:"my-id"}))}),"Track",{onPageLoad:function(){var e=Object(u.a)(),t=Object(l.a)();document.querySelector("#deploy-id").textContent=e,document.querySelector("#my-id").textContent=t,document.querySelector("a#errors").href=function(e){return f("eventCategory",30,e+"%5D%5Berror")}(e),document.querySelector("a#events").href=function(e){return f("eventCategory",30,e)}(e);var n="123456789";document.querySelector("input").onchange=function(e){return n=e.target.value},document.querySelector("form").onsubmit=function(e){e.preventDefault(),window.open(i(n,1),"_blank")},document.querySelector("button#user-last-7-days").onclick=function(e){window.open(i(n,7),"_blank")}}})},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));n(10);var r=n(0),o=n.n(r),a=n(7),u=n(8),l=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null),o.a.createElement("div",{id:"page-wrapper"},t),o.a.createElement(u.a,null))};var c=n(9),i=function(e){e&&e();Object(c.a)()};var f=n(4);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.route,a=void 0===r?null:r,u=n.onPageLoad,c=n.noHeader,p=void 0!==c&&c,s=b(n,["route","onPageLoad","noHeader"]);a=a||"/"+t.toLowerCase().split(" ").join("-");var y=t+" - "+f.h,m=function(){return o.a.createElement(l,null,!p&&o.a.createElement("h1",null,t),o.a.createElement(e,null))};return d({view:m,route:a,title:y,on_page_load:function(){return i(u)},favicon:f.f,renderToDom:!0,renderToHtml:!0},s)}}});
//# sourceMappingURL=track.page.tsx.hash_955a7248c6c697037104.js.map