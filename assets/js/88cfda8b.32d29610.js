"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,g=u["".concat(d,".").concat(p)]||u[p]||f[p]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77861:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(83117),a=n(67294),o=n(3905);const s={id:"standing-order-enabled-status-info",title:"StandingOrderEnabledStatusInfo",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/objects/standing-order-enabled-status-info",id:"api-reference/objects/standing-order-enabled-status-info",title:"StandingOrderEnabledStatusInfo",description:"No description",source:"@site/docs/api-reference/objects/standing-order-enabled-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/standing-order-enabled-status-info",permalink:"/docs/api-reference/objects/standing-order-enabled-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/standing-order-enabled-status-info.mdx",tags:[],version:"current",frontMatter:{id:"standing-order-enabled-status-info",title:"StandingOrderEnabledStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StandingOrderEdge",permalink:"/docs/api-reference/objects/standing-order-edge"},next:{title:"StandingOrderNotFoundRejection",permalink:"/docs/api-reference/objects/standing-order-not-found-rejection"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrderEnabledStatusInfo.<b>status</b></code><Bullet /><code>StandingOrderStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-standingorderenabledstatusinfobstatusbcodestandingorderstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>StandingOrderStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"standingorderstatusinfo-",level:4}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:c,Bullet:u,SpecifiedBy:f,Badge:p},b="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StandingOrderEnabledStatusInfo implements StandingOrderStatusInfo {\n  status: StandingOrderStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderenabledstatusinfobstatusbcodestandingorderstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderEnabledStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/standing-order-status"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderStatus!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"standingorderstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/standing-order-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}m.isMDXComponent=!0}}]);