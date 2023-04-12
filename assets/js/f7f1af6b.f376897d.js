"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=l(n),y=o,m=p["".concat(s,".").concat(y)]||p[y]||u[y]||c;return n?a.createElement(m,r(r({ref:t},i),{},{components:n})):a.createElement(m,r({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=y;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:o,r[1]=d;for(var l=2;l<c;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},92893:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var a=n(83117),o=n(67294),c=n(3905);const r={id:"deny-sdd-success-payload",title:"DenySddSuccessPayload",hide_table_of_contents:!1},d=void 0,s={unversionedId:"api/objects/deny-sdd-success-payload",id:"api/objects/deny-sdd-success-payload",title:"DenySddSuccessPayload",description:"No description",source:"@site/docs/api/objects/deny-sdd-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/deny-sdd-success-payload",permalink:"/docs/api/objects/deny-sdd-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/deny-sdd-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"deny-sdd-success-payload",title:"DenySddSuccessPayload",hide_table_of_contents:!1}},l={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DenySddSuccessPayload.<b>account</b></code><Bullet /><code>Account!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-denysddsuccesspayloadbaccountbcodeaccount--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:p,SpecifiedBy:u,Badge:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type DenySddSuccessPayload {\n  account: Account!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-denysddsuccesspayloadbaccountbcodeaccount--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"DenySddSuccessPayload.",(0,c.kt)("b",null,"account"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account!"))," ",(0,c.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/unions/deny-sdd-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"DenySddPayload")),"  ",(0,c.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);