"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50858],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),f=r,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},89963:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(83117),r=a(67294),o=a(3905);const s={id:"card-status-info",title:"CardStatusInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api/interfaces/card-status-info",id:"api/interfaces/card-status-info",title:"CardStatusInfo",description:"Card Status Information",source:"@site/docs/api/interfaces/card-status-info.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/card-status-info",permalink:"/docs/api/interfaces/card-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/card-status-info.mdx",tags:[],version:"current",frontMatter:{id:"card-status-info",title:"CardStatusInfo",hide_table_of_contents:!1}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardStatusInfo.<b>status</b></code><Bullet /><code>CardStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardstatusinfobstatusbcodecardstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},y="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Card Status Information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface CardStatusInfo {\n  status: CardStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardstatusinfobstatusbcodecardstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/card-status"},(0,o.kt)("inlineCode",{parentName:"a"},"CardStatus!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status of the card.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/card"},(0,o.kt)("inlineCode",{parentName:"a"},"Card")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/card-canceled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardCanceledStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/card-canceling-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardCancelingStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/card-consent-pending-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardConsentPendingStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/card-enabled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardEnabledStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/card-processing-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CardProcessingStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);