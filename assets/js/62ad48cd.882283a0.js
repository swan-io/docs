"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[10814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||s;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93401:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=n(83117),r=n(67294),s=n(3905);const c={id:"partnership-canceling-status-info",title:"PartnershipCancelingStatusInfo",hide_table_of_contents:!1},o=void 0,i={unversionedId:"api-reference/objects/partnership-canceling-status-info",id:"api-reference/objects/partnership-canceling-status-info",title:"PartnershipCancelingStatusInfo",description:"Partnership Status currently cancelling",source:"@site/docs/api-reference/objects/partnership-canceling-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/partnership-canceling-status-info",permalink:"/api-reference/objects/partnership-canceling-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/partnership-canceling-status-info.mdx",tags:[],version:"current",frontMatter:{id:"partnership-canceling-status-info",title:"PartnershipCancelingStatusInfo",hide_table_of_contents:!1}},l={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PartnershipCancelingStatusInfo.<b>status</b></code><Bullet /><code>PartnershipStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-partnershipcancelingstatusinfobstatusbcodepartnershipstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PartnershipCancelingStatusInfo.<b>acceptedDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-partnershipcancelingstatusinfobaccepteddatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PartnershipCancelingStatusInfo.<b>canceledAfter</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-partnershipcancelingstatusinfobcanceledafterbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PartnershipStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"partnershipstatusinfo-",level:4}],d=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:u,Badge:f},h="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Partnership Status currently cancelling"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type PartnershipCancelingStatusInfo implements PartnershipStatusInfo {\n  status: PartnershipStatus!\n  acceptedDate: DateTime!\n  canceledAfter: DateTime!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-partnershipcancelingstatusinfobstatusbcodepartnershipstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PartnershipCancelingStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/enums/partnership-status"},(0,s.kt)("inlineCode",{parentName:"a"},"PartnershipStatus!"))," ",(0,s.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Partnership status (always Canceling for type PartnershipCancelingStatusInfo)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-partnershipcancelingstatusinfobaccepteddatebcodedatetime--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PartnershipCancelingStatusInfo.",(0,s.kt)("b",null,"acceptedDate"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,s.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,s.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Accepted date of the partnership for this account")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-partnershipcancelingstatusinfobcanceledafterbcodedatetime--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PartnershipCancelingStatusInfo.",(0,s.kt)("b",null,"canceledAfter"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,s.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,s.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Canceled date of the partnership for this account")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"partnershipstatusinfo-"},(0,s.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/partnership-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PartnershipStatusInfo"))," ",(0,s.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Partnership Status information")))}g.isMDXComponent=!0}}]);