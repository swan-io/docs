"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,g=u["".concat(d,".").concat(p)]||u[p]||f[p]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6828:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=n(83117),r=n(67294),i=n(3905);const l={id:"digital-card-declined-status-info",title:"DigitalCardDeclinedStatusInfo",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api-reference/objects/digital-card-declined-status-info",id:"api-reference/objects/digital-card-declined-status-info",title:"DigitalCardDeclinedStatusInfo",description:"Digital Card Declined Status Information",source:"@site/docs/api-reference/objects/digital-card-declined-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/digital-card-declined-status-info",permalink:"/api-reference/objects/digital-card-declined-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/digital-card-declined-status-info.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-declined-status-info",title:"DigitalCardDeclinedStatusInfo",hide_table_of_contents:!1}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardDeclinedStatusInfo.<b>status</b></code><Bullet /><code>PendingDigitalCardStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-digitalcarddeclinedstatusinfobstatusbcodependingdigitalcardstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PendingDigitalCardStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"pendingdigitalcardstatusinfo-",level:4}],u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:u,SpecifiedBy:f,Badge:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Digital Card Declined Status Information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DigitalCardDeclinedStatusInfo implements PendingDigitalCardStatusInfo {\n  status: PendingDigitalCardStatus!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-digitalcarddeclinedstatusinfobstatusbcodependingdigitalcardstatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardDeclinedStatusInfo.",(0,i.kt)("b",null,"status"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/pending-digital-card-status"},(0,i.kt)("inlineCode",{parentName:"a"},"PendingDigitalCardStatus!"))," ",(0,i.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Digital Card status (always Declined for type DigitalCardDeclinedStatusInfo).")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"pendingdigitalcardstatusinfo-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/pending-digital-card-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PendingDigitalCardStatusInfo"))," ",(0,i.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pending Digital Card Status Information")))}y.isMDXComponent=!0}}]);