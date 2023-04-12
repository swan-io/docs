"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6009],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=i,m=p["".concat(d,".").concat(u)]||p[u]||b[u]||n;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40874:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=r(83117),i=r(67294),n=r(3905);const o={id:"sepadirect-debit-out-creditor",title:"SEPADirectDebitOutCreditor",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api/objects/sepadirect-debit-out-creditor",id:"api/objects/sepadirect-debit-out-creditor",title:"SEPADirectDebitOutCreditor",description:"Sepa Direct Debit Creditor for Outgoing transaction",source:"@site/docs/api/objects/sepadirect-debit-out-creditor.mdx",sourceDirName:"api/objects",slug:"/api/objects/sepadirect-debit-out-creditor",permalink:"/docs/api/objects/sepadirect-debit-out-creditor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/sepadirect-debit-out-creditor.mdx",tags:[],version:"current",frontMatter:{id:"sepadirect-debit-out-creditor",title:"SEPADirectDebitOutCreditor",hide_table_of_contents:!1}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutCreditor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutCreditor.<b>maskedIBAN</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbmaskedibanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutCreditor.<b>IBAN</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbibanbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutCreditor.<b>BIC</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbbicbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutCreditor.<b>beneficiary</b></code><Bullet /><code>SEPABeneficiary</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbbeneficiarybcodesepabeneficiary-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitOutCreditor.<b>virtualIBANEntryId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbvirtualibanentryidbcodeid-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SEPADirectDebitCreditor</code> <Badge class="secondary" text="interface"/>',id:"sepadirectdebitcreditor-",level:4}],p=()=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,n.kt)(i.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:b,Badge:u},f="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Sepa Direct Debit Creditor for Outgoing transaction"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPADirectDebitOutCreditor implements SEPADirectDebitCreditor {\n  name: String!\n  maskedIBAN: String!\n  IBAN: String\n  BIC: String\n  beneficiary: SEPABeneficiary\n  virtualIBANEntryId: ID\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbnamebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutCreditor.",(0,n.kt)("b",null,"name"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"full name of the creditor (max 70 characters)")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbmaskedibanbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutCreditor.",(0,n.kt)("b",null,"maskedIBAN"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"maskedIBAN")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbibanbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutCreditor.",(0,n.kt)("b",null,"IBAN"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"IBAN")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbbicbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutCreditor.",(0,n.kt)("b",null,"BIC"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"BIC")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbbeneficiarybcodesepabeneficiary-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutCreditor.",(0,n.kt)("b",null,"beneficiary"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/sepabeneficiary"},(0,n.kt)("inlineCode",{parentName:"a"},"SEPABeneficiary"))," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"beneficiary if the beneficiary is already saved")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitoutcreditorbvirtualibanentryidbcodeid-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitOutCreditor.",(0,n.kt)("b",null,"virtualIBANEntryId"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"identifier of a Virtual IBAN")),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"sepadirectdebitcreditor-"},(0,n.kt)("a",{parentName:"h4",href:"/api/interfaces/sepadirect-debit-creditor"},(0,n.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitCreditor"))," ",(0,n.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sepa Direct Debit Creditor")))}y.isMDXComponent=!0}}]);