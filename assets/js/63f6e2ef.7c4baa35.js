"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[58188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,d=function(e,t){if(null==e)return{};var n,o,d={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,d=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),y=d,p=s["".concat(i,".").concat(y)]||s[y]||b[y]||a;return n?o.createElement(p,r(r({ref:t},u),{},{components:n})):o.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var a=n.length,r=new Array(a);r[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:d,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},89793:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>u,Details:()=>p,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var o=n(87462),d=n(67294),a=n(3905);const r={id:"add-direct-debit-funding-source-payload",title:"AddDirectDebitFundingSourcePayload",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/unions/add-direct-debit-funding-source-payload",id:"api-reference/unions/add-direct-debit-funding-source-payload",title:"AddDirectDebitFundingSourcePayload",description:"Add Direct Debit Funding Source Payload",source:"@site/docs/api-reference/unions/add-direct-debit-funding-source-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/add-direct-debit-funding-source-payload",permalink:"/api-reference/unions/add-direct-debit-funding-source-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/add-direct-debit-funding-source-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-direct-debit-funding-source-payload",title:"AddDirectDebitFundingSourcePayload",hide_table_of_contents:!1}},l={},u=()=>(0,a.kt)(d.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(d.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,a.kt)(d.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),y=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourcePayload.<b>AddDirectDebitFundingSourceSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbadddirectdebitfundingsourcesuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourcePayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourcePayload.<b>NotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourcePayload.<b>AccountVerificationAlreadyRejectedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbaccountverificationalreadyrejectedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourcePayload.<b>IBANNotReachableRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbibannotreachablerejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourcePayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:c=!1}=e;const[i,l]=(0,d.useState)(c);return(0,a.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&r)},f={Bullet:u,SpecifiedBy:s,Badge:b,toc:y,Details:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Add Direct Debit Funding Source Payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddDirectDebitFundingSourcePayload = AddDirectDebitFundingSourceSuccessPayload | ForbiddenRejection | NotFoundRejection | AccountVerificationAlreadyRejectedRejection | IBANNotReachableRejection | ValidationRejection\n")),(0,a.kt)("h3",{id:"possible-types"},"Possible types"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbadddirectdebitfundingsourcesuccesspayloadbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/add-direct-debit-funding-source-success-payload"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourcePayload.",(0,a.kt)("b",null,"AddDirectDebitFundingSourceSuccessPayload")))," ",(0,a.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Add Direct Debit Funding Source Success Payload")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbforbiddenrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourcePayload.",(0,a.kt)("b",null,"ForbiddenRejection")))," ",(0,a.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbnotfoundrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/not-found-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourcePayload.",(0,a.kt)("b",null,"NotFoundRejection")))," ",(0,a.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbaccountverificationalreadyrejectedrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-verification-already-rejected-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourcePayload.",(0,a.kt)("b",null,"AccountVerificationAlreadyRejectedRejection")))," ",(0,a.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the external account has already been rejected."),(0,a.kt)("p",{parentName:"blockquote"},"In such a case, contact Swan directly to resolve the situation for this specific account holder.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbibannotreachablerejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/ibannot-reachable-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourcePayload.",(0,a.kt)("b",null,"IBANNotReachableRejection")))," ",(0,a.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the IBAN is not reachable")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourcepayloadbvalidationrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourcePayload.",(0,a.kt)("b",null,"ValidationRejection")))," ",(0,a.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-direct-debit-funding-source"},(0,a.kt)("inlineCode",{parentName:"a"},"addDirectDebitFundingSource")),"  ",(0,a.kt)(b,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);