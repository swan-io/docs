"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[33031],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>y});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),i=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=i(e.components);return o.createElement(d.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(t),f=a,y=s["".concat(d,".").concat(f)]||s[f]||p[f]||r;return t?o.createElement(y,c(c({ref:n},u),{},{components:t})):o.createElement(y,c({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<r;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},43850:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var o=t(87462),a=t(67294),r=t(3905);const c={id:"cancel-funding-source-payload",title:"CancelFundingSourcePayload",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/unions/cancel-funding-source-payload",id:"api-reference/unions/cancel-funding-source-payload",title:"CancelFundingSourcePayload",description:"Cancel Funding Source Payload",source:"@site/docs/api-reference/unions/cancel-funding-source-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/cancel-funding-source-payload",permalink:"/api-reference/unions/cancel-funding-source-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/cancel-funding-source-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-funding-source-payload",title:"CancelFundingSourcePayload",hide_table_of_contents:!1}},i={},u=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),f=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelFundingSourcePayload.<b>CancelFundingSourceSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-cancelfundingsourcepayloadbcancelfundingsourcesuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CancelFundingSourcePayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-cancelfundingsourcepayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CancelFundingSourcePayload.<b>NotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-cancelfundingsourcepayloadbnotfoundrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],y=e=>{let{dataOpen:n,dataClose:t,children:c,startOpen:l=!1}=e;const[d,i]=(0,a.useState)(l);return(0,r.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?n:t),d&&c)},g={Bullet:u,SpecifiedBy:s,Badge:p,toc:f,Details:y},b="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(b,(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cancel Funding Source Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union CancelFundingSourcePayload = CancelFundingSourceSuccessPayload | ForbiddenRejection | NotFoundRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cancelfundingsourcepayloadbcancelfundingsourcesuccesspayloadbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/cancel-funding-source-success-payload"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CancelFundingSourcePayload.",(0,r.kt)("b",null,"CancelFundingSourceSuccessPayload")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cancel Funding Source Success Payload")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cancelfundingsourcepayloadbforbiddenrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CancelFundingSourcePayload.",(0,r.kt)("b",null,"ForbiddenRejection")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cancelfundingsourcepayloadbnotfoundrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/not-found-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CancelFundingSourcePayload.",(0,r.kt)("b",null,"NotFoundRejection")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/cancel-funding-source"},(0,r.kt)("inlineCode",{parentName:"a"},"cancelFundingSource")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);