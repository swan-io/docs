"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[83695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(n),u=r,y=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(y,c(c({ref:t},d),{},{components:n})):a.createElement(y,c({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34225:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const c={id:"payment-rejected",title:"PaymentRejected",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/objects/payment-rejected",id:"api-reference/objects/payment-rejected",title:"PaymentRejected",description:"Payment status rejected",source:"@site/docs/api-reference/objects/payment-rejected.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/payment-rejected",permalink:"/api-reference/objects/payment-rejected",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/payment-rejected.mdx",tags:[],version:"current",frontMatter:{id:"payment-rejected",title:"PaymentRejected",hide_table_of_contents:!1}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentRejected.<b>status</b></code><Bullet /><code>PaymentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentrejectedbstatusbcodepaymentstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentRejected.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentrejectedbreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"paymentstatusinfo-",level:4}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:m,Badge:u},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Payment status rejected"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentRejected implements PaymentStatusInfo {\n  status: PaymentStatus!\n  reason: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentrejectedbstatusbcodepaymentstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentRejected.",(0,o.kt)("b",null,"status"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/payment-status"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentStatus!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"status of the payment")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentrejectedbreasonbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentRejected.",(0,o.kt)("b",null,"reason"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"rejected reason")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"paymentstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentStatusInfo"))," ",(0,o.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payment Status Information")))}b.isMDXComponent=!0}}]);