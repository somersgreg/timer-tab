!function(e){function t(t){for(var r,l,u=t[0],i=t[1],c=t[2],d=0,p=[];d<u.length;d++)l=u[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(f&&f(t);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={5:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=i;o.push([433,1,0]),n()}({10:function(e,t,n){},186:function(e,t,n){e.exports=n.p+"romuald_alps.hash_dcb61a0c792cae6a9531fce138ff0807.png"},433:function(e,t,n){n(22),e.exports=n(434)},434:function(e,t,n){"use strict";var r,a=n(17);a.initFunctions={},a.initFunctions=a.initFunctions||{},a.initFunctions.hydratePage=!0===((r=n(23))||{}).__esModule?r.default:r,a.pageConfig=function(){var e=n(496);return!0===(e||{}).__esModule?e.default:e}(),a.router=function(){var e=n(24);return!0===(e||{}).__esModule?e.default:e}(),a.renderPageToDom=function(){var e=n(25);return!0===(e||{}).__esModule?e.default:e}(),a.domRender=function(){var e=n(26);return!0===(e||{}).__esModule?e.default:e}(),function(){var e=n(27);!0===(e||{}).__esModule&&e.default}()},435:function(e,t,n){},496:function(e,t,n){"use strict";n.r(t);var r=n(5),a=function(){document.getElementById("paypal-email").innerHTML="paypal@brillout.com"};var o=n(0),l=n.n(o),u=(n(435),n(186)),i=n.n(u),c=n(4),f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{id:"rom-face",src:i.a}),l.a.createElement("h1",null,"Hello,"),l.a.createElement("p",null,"I'm Romuald, the creator of ",c.h,"."),l.a.createElement("p",null,"For the longest time, I refused to put ads on ",c.h,". I don't like ads."),l.a.createElement("p",null,"But I want to improve ",c.h," and I've got many ideas for new features. Ads and donations allow me to dedicate more time to"," ",c.h,"."),l.a.createElement("p",null,"If you donate, I will give you a hidden code to remove ads."),l.a.createElement("p",null,"You can donate by making a PayPal wire to the following PayPal email:"),l.a.createElement("p",{style:{paddingLeft:20}},l.a.createElement("b",{id:"paypal-email"})),l.a.createElement("p",null,"Any amount you are capable of donating is welcome. You can PayPal me only 0.01$ if you are short on money, it's totally fine."),l.a.createElement("p",null,"You will receive an automatic email containing the ad removal code instantly after your PayPal wire."),l.a.createElement("p",null,"I'm looking forward to a bright ",c.h," future."),l.a.createElement("p",null,"Yours sincerely,"),l.a.createElement("p",null,"Romuald",l.a.createElement("br",null),l.a.createElement("a",{target:"_blank",className:"contact-address"})))};t.default=Object(r.a)(f,"Donate",{onPageLoad:a,noHeader:!0})},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));n(10);var r=n(0),a=n.n(r),o=n(7),l=n(8),u=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null),a.a.createElement("div",{id:"page-wrapper"},t),a.a.createElement(l.a,null))};var i=n(9),c=function(e){e&&e();Object(i.a)()};var f=n(4);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.route,o=void 0===r?null:r,l=n.onPageLoad,i=n.noHeader,d=void 0!==i&&i,s=m(n,["route","onPageLoad","noHeader"]);o=o||"/"+t.toLowerCase().split(" ").join("-");var y=t+" - "+f.h,b=function(){return a.a.createElement(u,null,!d&&a.a.createElement("h1",null,t),a.a.createElement(e,null))};return p({view:b,route:o,title:y,on_page_load:function(){return c(l)},favicon:f.f,renderToDom:!0,renderToHtml:!0},s)}}});
//# sourceMappingURL=index.page.js.hash_dedd3963cc4077346484.js.map