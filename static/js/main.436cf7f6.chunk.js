(this.webpackJsonpTrust_Global=this.webpackJsonpTrust_Global||[]).push([[0],{28:function(e,t,a){e.exports=a(52)},38:function(e,t,a){e.exports=a.p+"static/media/logo.d0d00de5.png"},39:function(e,t,a){e.exports=a.p+"static/media/d.c06ed8d8.png"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},41:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},42:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},43:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},44:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},45:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},46:function(e,t,a){e.exports=a.p+"static/media/landingv4.999b3293.png"},47:function(e,t,a){e.exports=a.p+"static/media/asset-5.03aa1bfa.png"},48:function(e,t,a){e.exports=a.p+"static/media/qu.9b5b59ce.png"},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(17),i=a.n(l),o=a(12),s=a(7),c=a(2),m=function(e){var t=e.component,a=e.layout,r=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(o.a,Object.assign({},r,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(11),u=a(3),v=a.n(u),h=a(20),b=n.a.forwardRef((function(e,t){var a=Object(r.useState)(window.innerHeight),l=Object(d.a)(a,2),i=l[0],o=l[1],s=Object(r.useState)([]),c=Object(d.a)(s,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),r=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=i-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,r)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(r.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(r.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",E),window.addEventListener("resize",f)),b())}),[m]);var p=function(){v()&&(window.removeEventListener("scroll",E),window.removeEventListener("resize",f))},E=Object(h.throttle)((function(){p(),b()}),30),f=Object(h.throttle)((function(){o(window.innerHeight)}),30);return Object(r.useEffect)((function(){p(),b()}),[i]),n.a.createElement(n.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var p=b,E=a(15),f=a(1),g=a.n(f),N=a(6),w=function(e){var t=e.className,a=e.src,l=e.width,i=e.height,o=e.alt,s=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(r.useState)(!1),u=Object(d.a)(m,2),v=u[0],h=u[1],b=Object(r.useRef)(null);Object(r.useEffect)((function(){p(b.current)}),[]);var p=function(e){var t,a,r=document.createElement("img");v||(e.style.display="none",e.before(r),r.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),r.width=e.getAttribute("width"),r.height=e.getAttribute("height"),r.style.opacity="0",e.className&&r.classList.add(e.className),r.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},s,{ref:b,className:t,src:a,width:l,height:i,alt:o,onLoad:function(){h(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=w,O=function(e){var t=e.className,r=Object(c.a)(e,["className"]),l=g()("brand",t);return n.a.createElement("div",Object.assign({},r,{className:l}),n.a.createElement("div",{className:"m-0"},n.a.createElement(N.a,{to:"/"},n.a.createElement("center",null,n.a.createElement(y,{src:a(38),alt:"Open",width:32,height:32})),n.a.createElement("center",null,n.a.createElement("b",null,n.a.createElement("span",{className:"container-sm"}," ",n.a.createElement("span",{style:{color:"#109c76"}},"Trust ")," ",n.a.createElement("span",{style:{color:"#ff5900"}},"Global")))))))},j=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,i=e.hideSignin,o=e.bottomOuterDivider,s=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(r.useState)(!1),v=Object(d.a)(u,2),h=v[0],b=v[1],p=Object(r.useRef)(null),E=Object(r.useRef)(null);Object(r.useEffect)((function(){return h&&f(),document.addEventListener("keydown",y),document.addEventListener("click",j),function(){document.removeEventListener("keydown",y),document.removeEventListener("click",j),w()}}));var f=function(){document.body.classList.add("off-nav-is-active"),p.current.style.maxHeight=p.current.scrollHeight+"px",b(!0)},w=function(){document.body.classList.remove("off-nav-is-active"),p.current&&(p.current.style.maxHeight=null),b(!1)},y=function(e){h&&27===e.keyCode&&w()},j=function(e){p.current&&h&&!p.current.contains(e.target)&&e.target!==E.current&&w()},x=g()("site-header",o&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},m,{className:x}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-header-inner",s&&"has-bottom-divider")},n.a.createElement(O,null),!l&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{style:{color:"#ff5900"},ref:E,className:"header-nav-toggle",onClick:h?w:f},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:p,className:g()("header-nav",h&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(N.a,{to:"#0",className:"button button-wide-mobile button-sm",style:{backgroundColor:"#109c76",color:"white"},onClick:w},"Success Storys"))),!i&&n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement(N.a,{to:"/contact",className:"button button-wide-mobile button-sm",style:{backgroundColor:"#ff5900",color:"white"},onClick:w},"Get In Touch")))))))))};j.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=j,D=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=g()("footer-nav",t);return n.a.createElement("nav",Object.assign({},a,{className:r}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement(N.a,{to:"/contact"},"Contact")),n.a.createElement("li",null,n.a.createElement(N.a,{to:"#0"},"About us")),n.a.createElement("li",null,n.a.createElement(N.a,{to:"#0"},"FAQ's")),n.a.createElement("li",null,n.a.createElement(N.a,{to:"#0"},"Support"))))},C=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=g()("footer-social",t);return n.a.createElement("div",Object.assign({},a,{className:r}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.facebook.com/realtrustglobal/",target:"_blank"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Facebook"),n.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"http://instagram.com/thetrustglobal/",target:"_blank"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Twitter"),n.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"http://instagram.com/thetrustglobal/",target:"_blank"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Instagram"),n.a.createElement("g",null,n.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),n.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),n.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},k=function(e){var t=e.className,a=e.topOuterDivider,r=e.topDivider,l=Object(c.a)(e,["className","topOuterDivider","topDivider"]),i=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},l,{className:i}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-footer-inner",r&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(O,null),n.a.createElement(C,null)),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement(D,null),n.a.createElement("div",{className:"footer-copyright"},"Developed by ",n.a.createElement("a",{href:"https://mahirtanjim.tech",target:"_blank"},"Mahir Tanjim"),". All right reserved")))))};k.defaultProps={topOuterDivider:!1,topDivider:!1};var T=k,S=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(T,null))},L=a(5),B={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},M={types:Object(L.a)({},B.types),defaults:Object(L.a)({},B.defaults)},F={types:Object(L.a)({},B.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(L.a)({},B.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},P={types:Object(L.a)({},B.types,{pushLeft:v.a.bool}),defaults:Object(L.a)({},B.defaults,{pushLeft:!1})},A=function(e){var t=e.className,a=Object(c.a)(e,["className"]),r=g()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:r}))},H=function(e){var t=e.className,a=e.tag,r=e.color,l=e.size,i=e.loading,o=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",r&&"button-".concat(r),l&&"button-".concat(l),i&&"is-loading",o&&"button-block",s&&"button-wide-mobile",t),v=a;return n.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};H.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var I=H,W=function(e){var t=e.className,a=e.children,l=e.handleClose,i=e.show,o=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(r.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",h),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",h)}})),Object(r.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&l(e)},h=function(e){e.stopPropagation()},b=g()("modal",i&&"is-active",s&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement("div",Object.assign({},d,{className:b,onClick:l}),n.a.createElement("div",{className:"modal-inner",onClick:h},s?n.a.createElement("div",{className:"responsive-video"},"iframe"===m?n.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:s})):n.a.createElement(n.a.Fragment,null,!o&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:l}),n.a.createElement("div",{className:"modal-content"},a)))))};W.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var G=W,_=a(10),R=a.n(_),z=Object(L.a)({},M.defaults),q=function(e){var t=e.className,l=e.topOuterDivider,i=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),h=Object(r.useState)(!1),b=Object(d.a)(h,2),p=b[0],E=b[1],f=g()("hero section center-content",l&&"has-top-divider",i&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),w=g()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:f}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:w},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Inovation in the sector of",n.a.createElement(R.a,null,n.a.createElement("span",{style:{color:"#ff5900"}}," Import"),n.a.createElement(R.a.Backspace,{count:6,delay:500}),n.a.createElement("span",{style:{color:"#109c76"}}," Sourcing"),n.a.createElement(R.a.Backspace,{count:8,delay:500}),n.a.createElement("span",{style:{color:"#EA4335"}},"Logistics"),n.a.createElement(R.a.Backspace,{count:9,delay:500}),n.a.createElement("span",{style:{color:"#4285F4"}}," Supply Chain"))),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Our Job is to find and bring anything you want from anywhere, we give the best of ours to our coustomers"),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(A,null,n.a.createElement(N.a,{to:"/contact"},n.a.createElement(I,{style:{backgroundColor:"#ff5900",color:"white"},tag:"a",color:"primary",wideMobile:!0},"Contact Us")),n.a.createElement(I,{tag:"a",style:{backgroundColor:"#109c76",color:"white"},wideMobile:!0,href:"mailto:info@trustglobal.com.bd"},"Write a Mail"))))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement("a",{"data-video":"https://player.vimeo.com/video/271261812",href:"#0","aria-controls":"video-modal"},n.a.createElement(y,{className:"has-shadow",src:a(39),alt:"Hero",width:896,height:504}))),n.a.createElement(G,{id:"video-modal",show:p,handleClose:function(e){e.preventDefault(),E(!1)},video:"https://player.vimeo.com/video/271261812",videoTag:"iframe"})),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h2",{style:{color:"#ff5900"}},"Get In Touch"),n.a.createElement("p",null,"Email:info@trustglobal.com.bd",n.a.createElement("br",null),"Phone:+8801938775447")))))};q.defaultProps=z;var J=q,V=function(e){var t=e.className,a=e.data,r=e.children,l=e.tag,i=Object(c.a)(e,["className","data","children","tag"]),o=g()("section-header",t),s=l;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},i,{className:o}),n.a.createElement("div",{className:"container-xs"},r,a.title&&n.a.createElement(s,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};V.defaultProps={children:null,tag:"h2"};var U=V,K=Object(L.a)({},P.defaults),Y=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,i=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",r&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),h=g()("features-tiles-inner section-inner pt-0",i&&"has-top-divider",o&&"has-bottom-divider"),b=g()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},u,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:h},n.a.createElement(U,{data:{title:"Build up the Whole Picture",paragraph:"Get to Know how we work, and get the exceptional idea of your business with our help and grow your business to next level"},className:"center-content"}),n.a.createElement("div",{className:b},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(40),alt:"Features tile icon 01",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Industrial Manufacturing"),n.a.createElement("p",{className:"m-0 text-sm"},"Precision castings and machining, plastic-injection molded natural rubber/elastomer components and assemblies.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(41),alt:"Features tile icon 02",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Consumer Products"),n.a.createElement("p",{className:"m-0 text-sm"},"Trust Global selects the factory best suited for your product from our list of fully vetted, top-caliber factories.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(42),alt:"Features tile icon 03",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Services"),n.a.createElement("p",{className:"m-0 text-sm"},"Sourcing your products to streamline production costs and time while maintaining product quality.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(43),alt:"Features tile icon 04",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Work Smart"),n.a.createElement("p",{className:"m-0 text-sm"},"working smart essentially means figuring out what your strengths are and building a network around you to build upon those in order to reach goals in the quickest and most efficient way possible.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(44),alt:"Features tile icon 05",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Best Feedback"),n.a.createElement("p",{className:"m-0 text-sm"},"We will give you the knowledge that you need to know, we will keep you reported on the ongoing process of the service you need.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(45),alt:"Features tile icon 06",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Communication"),n.a.createElement("p",{className:"m-0 text-sm"},"We have four major components in our communication strategy, they are communication goals, target audience, communication plan and channels.                    "))))))))};Y.defaultProps=K;var Q=Y,$=Object(L.a)({},F.defaults),X=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,i=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),p=g()("features-split section",r&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),E=g()("features-split-inner section-inner",i&&"has-top-divider",o&&"has-bottom-divider"),f=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({},b,{className:p}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E},n.a.createElement(U,{data:{title:"Workflow that just works",paragraph:"The sourcing process includes every activity that revolves around identifying and assessing potential suppliers as well as selecting and engaging with an appropriate supplier who offers the best value."},className:"center-content"}),n.a.createElement("div",{className:f},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast Sourcing"),n.a.createElement("h3",{className:"mt-0 mb-12"},"THE FASTEST WAY TO SOURCE ALL"),n.a.createElement("p",{className:"m-0"},"Modernized Seamless Sourcing Experience Competitive Production Pricing In-hours Quality Control Start to finish, Manufacturing to Logistics One Project Requires Multiple Factories? We've Got It Covered.  Effortless.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(46),alt:"Features split 01",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"SAVE YOUR MONEY"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Want to help You!"),n.a.createElement("p",{className:"m-0"},"Culture plays a huge part in negotiation. We are on your side, from MOQs to unit pricing. Our aim is to ensure you can grow your business without being let down by overwhelming costs.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(47),alt:"Features split 02",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"World Class Manufacturer"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Connect With High-End Manufacturer"),n.a.createElement("p",{className:"m-0"},"With the help of our highly qualified agents you will get in touch with the best of the best suppliers around the world. We will connect you with them, help you with finding the product you want to get manufactured or want it ready now.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(48),alt:"Features split 03",width:528,height:396})))))))};X.defaultProps=$;var Z=X,ee=Object(L.a)({},P.defaults),te=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("testimonial-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider"),h=g()("tiles-wrap",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement(U,{data:{title:"Customer testimonials"},className:"center-content"}),n.a.createElement("div",{className:h},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u201cTrust Global always give me the most competitive prices. I don't look at other places anymore. The prices may be cheap but the quality is always top-notch.\u201d")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Shafait Alam"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"Janata Hardware"))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u201cWe had a requirement that had 50+ different products and parts, different size and shape sets. It all required customisation. They sourced everything independently, found the multiple factories required and got such a competative price. My team was shocked!, they brought the product from USA only by 16 days.\u201d")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Abdur, CEO"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"Mamun Brothers"))))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u201cProduct sourcing has never been better! Trust Global provides easy and streamlined process, as advertised. I never had a single issue working with them.\u201d")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Riyadh, Chairman"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"Riyadh Tradesrs")))))))))};te.defaultProps=ee;var ae=te,re=a(14),ne=a.n(re),le=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ne.a,null,n.a.createElement("title",null,"Trust Global"),n.a.createElement("meta",{name:"description",content:"Some description."}),n.a.createElement("meta",{property:"og:title",content:"Trust Global"}),n.a.createElement("meta",{name:"description",content:"Our Job is to find and bring anything you want from anywhere with seamless sourcing all around the world,Email:info@trustglobal.com.bd"}),n.a.createElement("meta",{name:"keywords",content:"The Trust Global, Trust Global, Import, Bandladesh, BD, trustglobal.com.bd, Sourcing, Export, trustglobal, bd, Best, Importer, Dhaka"}),n.a.createElement("meta",{name:"author",content:"Mahir Tanjim"})),n.a.createElement(J,{className:"illustration-section-01"}),n.a.createElement(Q,null),n.a.createElement(Z,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),n.a.createElement(ae,{topDivider:!0}))},ie=Object(L.a)({},M.defaults),oe=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,i=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),d=g()("hero section center-content",a&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),u=g()("hero-inner section-inner",l&&"has-top-divider",i&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},m,{className:d}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:u},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Inovation in the sector of",n.a.createElement(R.a,null,n.a.createElement("span",{style:{color:"#ff5900"}}," Import"),n.a.createElement(R.a.Backspace,{count:6,delay:500}),n.a.createElement("span",{style:{color:"#109c76"}}," Sourcing"),n.a.createElement(R.a.Backspace,{count:8,delay:500}),n.a.createElement("span",{style:{color:"#EA4335"}},"Logistics"),n.a.createElement(R.a.Backspace,{count:9,delay:500}),n.a.createElement("span",{style:{color:"#4285F4"}}," Supply Chain"))),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Our Job is to find and bring anything you want from anywhere, we give the best of ours to our coustomers"),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(A,null,n.a.createElement(I,{tag:"a",style:{backgroundColor:"#109c76",color:"white"},wideMobile:!0,href:"mailto:info@trustglobal.com.bd"},"Write a Mail"))))),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("h2",{style:{color:"#ff5900"}},"Get In Touch"),n.a.createElement("p",null,"Email:info@trustglobal.com.bd",n.a.createElement("br",null),"Phone:+8801938775447"))))))};oe.defaultProps=ie;var se=oe,ce=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(ne.a,null,n.a.createElement("title",null,"Trust Global"),n.a.createElement("meta",{name:"description",content:"Some description."}),n.a.createElement("meta",{property:"og:title",content:"Trust Global"}),n.a.createElement("meta",{name:"description",content:"Our Job is to find and bring anything you want from anywhere with seamless sourcing all around the world,Email:info@trustglobal.com.bd"}),n.a.createElement("meta",{name:"keywords",content:"Contact, Trust Global, Import, Bandladesh, BD, trustglobal.com.bd, Sourcing, Export, trustglobal, .bd, Best, Importer, Dhaka"}),n.a.createElement("meta",{name:"author",content:"Mahir Tanjim"})),n.a.createElement(se,{className:"illustration-section-01"}))};E.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var me=function(){var e=Object(r.useRef)(),t=Object(o.f)();return Object(r.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){E.a.set({page:e}),E.a.pageview(e)}(a)}),[t]),n.a.createElement(p,{ref:e,children:function(){return n.a.createElement(o.c,null,n.a.createElement(m,{exact:!0,path:"/",component:le,layout:S}),n.a.createElement(m,{exact:!0,path:"/contact",component:ce,layout:S}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);var de=Object(s.a)();i.a.render(n.a.createElement(o.b,{history:de},n.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.436cf7f6.chunk.js.map