"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71707:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var r=n(87462),a=n(67294),i=n(3905);const o={id:"initiate-credit-transfers",title:"initiateCreditTransfers",hide_table_of_contents:!1},s=void 0,c={unversionedId:"api-reference/mutations/initiate-credit-transfers",id:"api-reference/mutations/initiate-credit-transfers",title:"initiateCreditTransfers",description:"Initiates a credit transfer to an other Swan account or to an IBAN",source:"@site/docs/api-reference/mutations/initiate-credit-transfers.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/initiate-credit-transfers",permalink:"/api-reference/mutations/initiate-credit-transfers",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/initiate-credit-transfers.mdx",tags:[],version:"current",frontMatter:{id:"initiate-credit-transfers",title:"initiateCreditTransfers",hide_table_of_contents:!1}},l={},d=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),f=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>initiateCreditTransfers.<b>input</b></code><Bullet /><code>InitiateCreditTransfersInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-initiatecredittransfersbinputbcodeinitiatecredittransfersinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>InitiateCreditTransfersPayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"initiatecredittransferspayload-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:s=!1}=e;const[c,l]=(0,a.useState)(s);return(0,i.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},y={Bullet:d,SpecifiedBy:u,Badge:p,toc:f,Details:m},g="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Initiates a credit transfer to an other Swan account or to an IBAN"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This mutation is restricted to an User access token (",(0,i.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and if necessary ask the user to consent to this request.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The user must have an account membership for this account with the attribute ",(0,i.kt)("inlineCode",{parentName:"em"},"canInitiatePayments=true"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"initiateCreditTransfers(\n  input: InitiateCreditTransfersInput!\n): InitiateCreditTransfersPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-initiatecredittransfersbinputbcodeinitiatecredittransfersinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"initiateCreditTransfers.",(0,i.kt)("b",null,"input"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/initiate-credit-transfers-input"},(0,i.kt)("inlineCode",{parentName:"a"},"InitiateCreditTransfersInput!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"initiatecredittransferspayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/unions/initiate-credit-transfers-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"InitiateCreditTransfersPayload"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}b.isMDXComponent=!0}}]);