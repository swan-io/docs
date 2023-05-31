"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5186:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(83117),a=n(67294),o=n(3905);const i={id:"refund-input",title:"RefundInput",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/inputs/refund-input",id:"api-reference/inputs/refund-input",title:"RefundInput",description:"Input to select the beneficiary and the originator to perform a refund",source:"@site/docs/api-reference/inputs/refund-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/refund-input",permalink:"/api-reference/inputs/refund-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/refund-input.mdx",tags:[],version:"current",frontMatter:{id:"refund-input",title:"RefundInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ReasonInput",permalink:"/api-reference/inputs/reason-input"},next:{title:"RefundTransaction",permalink:"/api-reference/inputs/refund-transaction"}},u={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RefundInput.<b>refundTransactions</b></code><Bullet /><code>[RefundTransaction!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-refundinputbrefundtransactionsbcoderefundtransaction--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RefundInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-refundinputbconsentredirecturlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:d,SpecifiedBy:p,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input to select the beneficiary and the originator to perform a refund"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input RefundInput {\n  refundTransactions: [RefundTransaction!]!\n  consentRedirectUrl: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-refundinputbrefundtransactionsbcoderefundtransaction--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RefundInput.",(0,o.kt)("b",null,"refundTransactions"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/refund-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"[RefundTransaction!]!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"transactions to refund")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-refundinputbconsentredirecturlbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RefundInput.",(0,o.kt)("b",null,"consentRedirectUrl"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"url the user is redirected to after consent has been given")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/refund"},(0,o.kt)("inlineCode",{parentName:"a"},"refund")),"  ",(0,o.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);