"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,m=p["".concat(d,".").concat(u)]||p[u]||b[u]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66660:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>o,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var n=r(83117),a=r(67294),i=r(3905);const c={id:"sepadirect-debit-in-creditor",title:"SEPADirectDebitInCreditor",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api-reference/objects/sepadirect-debit-in-creditor",id:"api-reference/objects/sepadirect-debit-in-creditor",title:"SEPADirectDebitInCreditor",description:"Sepa Direct Debit Creditor for Input transaction",source:"@site/docs/api-reference/objects/sepadirect-debit-in-creditor.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/sepadirect-debit-in-creditor",permalink:"/api-reference/objects/sepadirect-debit-in-creditor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/sepadirect-debit-in-creditor.mdx",tags:[],version:"current",frontMatter:{id:"sepadirect-debit-in-creditor",title:"SEPADirectDebitInCreditor",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SEPACreditTransferTransaction",permalink:"/api-reference/objects/sepacredit-transfer-transaction"},next:{title:"SEPADirectDebitInDebtor",permalink:"/api-reference/objects/sepadirect-debit-in-debtor"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitInCreditor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitincreditorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitInCreditor.<b>maskedIBAN</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitincreditorbmaskedibanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitInCreditor.<b>IBAN</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitincreditorbibanbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitInCreditor.<b>BIC</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitincreditorbbicbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitInCreditor.<b>virtualIBANEntryId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitincreditorbvirtualibanentryidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitInCreditor.<b>accountNumber</b></code><Bullet /><code>AccountNumber!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitincreditorbaccountnumberbcodeaccountnumber--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SEPADirectDebitCreditor</code> <Badge class="secondary" text="interface"/>',id:"sepadirectdebitcreditor-",level:4}],p=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:b,Badge:u},f="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sepa Direct Debit Creditor for Input transaction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPADirectDebitInCreditor implements SEPADirectDebitCreditor {\n  name: String!\n  maskedIBAN: String!\n  IBAN: String\n  BIC: String\n  virtualIBANEntryId: ID\n  accountNumber: AccountNumber!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitincreditorbnamebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitInCreditor.",(0,i.kt)("b",null,"name"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"full name of the creditor")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitincreditorbmaskedibanbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitInCreditor.",(0,i.kt)("b",null,"maskedIBAN"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"maskedIBAN")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitincreditorbibanbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitInCreditor.",(0,i.kt)("b",null,"IBAN"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IBAN")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitincreditorbbicbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitInCreditor.",(0,i.kt)("b",null,"BIC"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"BIC")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitincreditorbvirtualibanentryidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitInCreditor.",(0,i.kt)("b",null,"virtualIBANEntryId"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"identifier of a Virtual IBAN")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitincreditorbaccountnumberbcodeaccountnumber--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitInCreditor.",(0,i.kt)("b",null,"accountNumber"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/account-number"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountNumber!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"account number")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"sepadirectdebitcreditor-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/sepadirect-debit-creditor"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitCreditor"))," ",(0,i.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sepa Direct Debit Creditor")))}k.isMDXComponent=!0}}]);