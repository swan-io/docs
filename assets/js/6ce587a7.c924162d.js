"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[5826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(a),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||d;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,i=new Array(d);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<d;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},83557:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(83117),r=a(67294),d=a(3905);const i={id:"digital-card-suspended-status-info",title:"DigitalCardSuspendedStatusInfo",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/digital-card-suspended-status-info",id:"api-reference/objects/digital-card-suspended-status-info",title:"DigitalCardSuspendedStatusInfo",description:"Digital Card Suspended Status Information",source:"@site/docs/api-reference/objects/digital-card-suspended-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/digital-card-suspended-status-info",permalink:"/api-reference/objects/digital-card-suspended-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/digital-card-suspended-status-info.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-suspended-status-info",title:"DigitalCardSuspendedStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DigitalCardPendingStatusInfo",permalink:"/api-reference/objects/digital-card-pending-status-info"},next:{title:"DirectDebitAccountVerification",permalink:"/api-reference/objects/direct-debit-account-verification"}},o={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardSuspendedStatusInfo.<b>status</b></code><Bullet /><code>CompleteDigitalCardStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-digitalcardsuspendedstatusinfobstatusbcodecompletedigitalcardstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardSuspendedStatusInfo.<b>enabledAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-digitalcardsuspendedstatusinfobenabledatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DigitalCardSuspendedStatusInfo.<b>suspendedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-digitalcardsuspendedstatusinfobsuspendedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>CompleteDigitalCardStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"completedigitalcardstatusinfo-",level:4}],u=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:u,SpecifiedBy:p,Badge:f},g="wrapper";function b(e){let{components:t,...a}=e;return(0,d.kt)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Digital Card Suspended Status Information"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type DigitalCardSuspendedStatusInfo implements CompleteDigitalCardStatusInfo {\n  status: CompleteDigitalCardStatus!\n  enabledAt: DateTime!\n  suspendedAt: DateTime!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-digitalcardsuspendedstatusinfobstatusbcodecompletedigitalcardstatus--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardSuspendedStatusInfo.",(0,d.kt)("b",null,"status"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/enums/complete-digital-card-status"},(0,d.kt)("inlineCode",{parentName:"a"},"CompleteDigitalCardStatus!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Digital Card status (always Suspended for type DigitalCardSuspendedStatusInfo).")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-digitalcardsuspendedstatusinfobenabledatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardSuspendedStatusInfo.",(0,d.kt)("b",null,"enabledAt"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Enable Date")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-digitalcardsuspendedstatusinfobsuspendedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardSuspendedStatusInfo.",(0,d.kt)("b",null,"suspendedAt"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Suspend Date")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"completedigitalcardstatusinfo-"},(0,d.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/complete-digital-card-status-info"},(0,d.kt)("inlineCode",{parentName:"a"},"CompleteDigitalCardStatusInfo"))," ",(0,d.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Complete Digital Card Status Information")))}b.isMDXComponent=!0}}]);