"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[32845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,g=u["".concat(d,".").concat(p)]||u[p]||f[p]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12982:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(87462),r=n(67294),o=n(3905);const i={id:"international-credit-transfer-quote",title:"internationalCreditTransferQuote",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/queries/international-credit-transfer-quote",id:"api-reference/queries/international-credit-transfer-quote",title:"internationalCreditTransferQuote",description:"Request an international credit transfer quote.",source:"@site/docs/api-reference/queries/international-credit-transfer-quote.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/international-credit-transfer-quote",permalink:"/api-reference/queries/international-credit-transfer-quote",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/international-credit-transfer-quote.mdx",tags:[],version:"current",frontMatter:{id:"international-credit-transfer-quote",title:"internationalCreditTransferQuote",hide_table_of_contents:!1}},c={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>internationalCreditTransferQuote.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internationalcredittransferquotebaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>internationalCreditTransferQuote.<b>targetAmount</b></code><Bullet /><code>AmountInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-internationalcredittransferquotebtargetamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>internationalCreditTransferQuote.<b>language</b></code><Bullet /><code>InternationalCreditTransferDisplayLanguage</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-internationalcredittransferquoteblanguagebcodeinternationalcredittransferdisplaylanguage-",level:4},{value:"Type",id:"type",level:3},{value:'<code>InternationalCreditTransferQuote</code> <Badge class="badge badge--secondary" text="object"/>',id:"internationalcredittransferquote-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[d,c]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&i)},m={Bullet:s,SpecifiedBy:u,Badge:f,toc:p,Details:g},b="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Request an international credit transfer quote."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"internationalCreditTransferQuote(\n  accountId: ID!\n  targetAmount: AmountInput!\n  language: InternationalCreditTransferDisplayLanguage\n): InternationalCreditTransferQuote\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransferquotebaccountidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"internationalCreditTransferQuote.",(0,o.kt)("b",null,"accountId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransferquotebtargetamountbcodeamountinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"internationalCreditTransferQuote.",(0,o.kt)("b",null,"targetAmount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internationalcredittransferquoteblanguagebcodeinternationalcredittransferdisplaylanguage-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"internationalCreditTransferQuote.",(0,o.kt)("b",null,"language"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/international-credit-transfer-display-language"},(0,o.kt)("inlineCode",{parentName:"a"},"InternationalCreditTransferDisplayLanguage"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"internationalcredittransferquote-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/international-credit-transfer-quote"},(0,o.kt)("inlineCode",{parentName:"a"},"InternationalCreditTransferQuote"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"COMING SOON"),"\nInternational Quote")))}y.isMDXComponent=!0}}]);