"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48935:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>f});var r=n(87462),a=n(67294),o=n(3905);const c={id:"authenticator-type",title:"AuthenticatorType",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/enums/authenticator-type",id:"api-reference/enums/authenticator-type",title:"AuthenticatorType",description:"No description",source:"@site/docs/api-reference/enums/authenticator-type.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/authenticator-type",permalink:"/api-reference/enums/authenticator-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/authenticator-type.mdx",tags:[],version:"current",frontMatter:{id:"authenticator-type",title:"AuthenticatorType",hide_table_of_contents:!1}},u={},p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AuthenticatorType.<b>Swan</b></code>",id:"code-style-fontweight-normal-authenticatortypebswanbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AuthenticatorType.<b>SwanWeb</b></code>",id:"code-style-fontweight-normal-authenticatortypebswanwebbcode",level:4},{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[i,u]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},y={Bullet:p,SpecifiedBy:s,Badge:d,toc:f,Details:m},b="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AuthenticatorType {\n  Swan\n  SwanWeb\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authenticatortypebswanbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AuthenticatorType.",(0,o.kt)("b",null,"Swan")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Swan app")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authenticatortypebswanwebbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AuthenticatorType.",(0,o.kt)("b",null,"SwanWeb")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A Swan web authenticator")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/authenticator"},(0,o.kt)("inlineCode",{parentName:"a"},"Authenticator")),"  ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);