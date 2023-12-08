"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[4261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,d=function(e,t){if(null==e)return{};var n,a,d={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,d=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),b=d,g=s["".concat(o,".").concat(b)]||s[b]||p[b]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:d,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},14578:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>g,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>b});var a=n(87462),d=n(67294),r=n(3905);const i={id:"add-direct-debit-funding-source-input",title:"AddDirectDebitFundingSourceInput",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api-reference/inputs/add-direct-debit-funding-source-input",id:"api-reference/inputs/add-direct-debit-funding-source-input",title:"AddDirectDebitFundingSourceInput",description:"Input to add a Direct Debit Funding Source",source:"@site/docs/api-reference/inputs/add-direct-debit-funding-source-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-direct-debit-funding-source-input",permalink:"/api-reference/inputs/add-direct-debit-funding-source-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-direct-debit-funding-source-input.mdx",tags:[],version:"current",frontMatter:{id:"add-direct-debit-funding-source-input",title:"AddDirectDebitFundingSourceInput",hide_table_of_contents:!1}},l={},u=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourceInput.<b>scheme</b></code><Bullet /><code>SEPADirectDebitScheme!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbschemebcodesepadirectdebitscheme--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourceInput.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourceInput.<b>iban</b></code><Bullet /><code>IBAN!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbibanbcodeiban--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourceInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbconsentredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDirectDebitFundingSourceInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbnamebcodestring-",level:4},{value:"Member Of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:c=!1}=e;const[o,l]=(0,d.useState)(c);return(0,r.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&i)},m={Bullet:u,SpecifiedBy:s,Badge:p,toc:b,Details:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Input to add a Direct Debit Funding Source"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddDirectDebitFundingSourceInput {\n  scheme: SEPADirectDebitScheme!\n  accountId: ID!\n  iban: IBAN!\n  consentRedirectUrl: String!\n  name: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbschemebcodesepadirectdebitscheme--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourceInput.",(0,r.kt)("b",null,"scheme"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/sepadirect-debit-scheme"},(0,r.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitScheme!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Scheme of the underlying payment mandate")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbaccountidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourceInput.",(0,r.kt)("b",null,"accountId"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Id of the account on which to create a funding source.\nMoney will be funded to this account when an ",(0,r.kt)("inlineCode",{parentName:"p"},"initiateFundingRequest")," is done using this funding source")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbibanbcodeiban--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourceInput.",(0,r.kt)("b",null,"iban"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/iban"},(0,r.kt)("inlineCode",{parentName:"a"},"IBAN!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"IBAN to use in the direct debit transaction that will be triggered when funding the account.\nMoney will be debited from this IBAN when an ",(0,r.kt)("inlineCode",{parentName:"p"},"initiateFundingRequest")," is done using this funding source")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbconsentredirecturlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourceInput.",(0,r.kt)("b",null,"consentRedirectUrl"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-adddirectdebitfundingsourceinputbnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddDirectDebitFundingSourceInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Name to give to this funding source")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-direct-debit-funding-source"},(0,r.kt)("inlineCode",{parentName:"a"},"addDirectDebitFundingSource")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);