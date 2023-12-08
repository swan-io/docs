"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,f=p["".concat(i,".").concat(y)]||p[y]||u[y]||o;return n?a.createElement(f,c(c({ref:t},d),{},{components:n})):a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},37169:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>y});var a=n(87462),r=n(67294),o=n(3905);const c={id:"cancel-transaction-payload",title:"CancelTransactionPayload",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/unions/cancel-transaction-payload",id:"api-reference/unions/cancel-transaction-payload",title:"CancelTransactionPayload",description:"No description",source:"@site/docs/api-reference/unions/cancel-transaction-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/cancel-transaction-payload",permalink:"/api-reference/unions/cancel-transaction-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/cancel-transaction-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-transaction-payload",title:"CancelTransactionPayload",hide_table_of_contents:!1}},s={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),y=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelTransactionPayload.<b>CancelTransactionSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-canceltransactionpayloadbcanceltransactionsuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CancelTransactionPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-canceltransactionpayloadbforbiddenrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[i,s]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},b={Bullet:d,SpecifiedBy:p,Badge:u,toc:y,Details:f},m="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union CancelTransactionPayload = CancelTransactionSuccessPayload | ForbiddenRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceltransactionpayloadbcanceltransactionsuccesspayloadbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/cancel-transaction-success-payload"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CancelTransactionPayload.",(0,o.kt)("b",null,"CancelTransactionSuccessPayload")))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-canceltransactionpayloadbforbiddenrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CancelTransactionPayload.",(0,o.kt)("b",null,"ForbiddenRejection")))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/cancel-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"cancelTransaction")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);