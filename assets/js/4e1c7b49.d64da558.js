"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[23022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(b,d(d({ref:t},s),{},{components:a})):n.createElement(b,d({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,d[1]=l;for(var p=2;p<o;p++)d[p]=a[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49e3:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>c,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>i,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905);const d={id:"sepa-payment-mandate-debtor-input",title:"SepaPaymentMandateDebtorInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/inputs/sepa-payment-mandate-debtor-input",id:"api-reference/inputs/sepa-payment-mandate-debtor-input",title:"SepaPaymentMandateDebtorInput",description:"No description",source:"@site/docs/api-reference/inputs/sepa-payment-mandate-debtor-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/sepa-payment-mandate-debtor-input",permalink:"/api-reference/inputs/sepa-payment-mandate-debtor-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/sepa-payment-mandate-debtor-input.mdx",tags:[],version:"current",frontMatter:{id:"sepa-payment-mandate-debtor-input",title:"SepaPaymentMandateDebtorInput",hide_table_of_contents:!1}},p={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SepaPaymentMandateDebtorInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentmandatedebtorinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaPaymentMandateDebtorInput.<b>IBAN</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentmandatedebtorinputbibanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaPaymentMandateDebtorInput.<b>address</b></code><Bullet /><code>AddressInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-sepapaymentmandatedebtorinputbaddressbcodeaddressinput--",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[i,p]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&d)},y={Bullet:s,SpecifiedBy:c,Badge:u,toc:m,Details:b},g="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input SepaPaymentMandateDebtorInput {\n  name: String!\n  IBAN: String!\n  address: AddressInput!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatedebtorinputbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaPaymentMandateDebtorInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate debtor name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatedebtorinputbibanbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaPaymentMandateDebtorInput.",(0,o.kt)("b",null,"IBAN"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate debtor IBAN")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatedebtorinputbaddressbcodeaddressinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SepaPaymentMandateDebtorInput.",(0,o.kt)("b",null,"address"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/address-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddressInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-sepa-direct-debit-payment-mandate-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddSepaDirectDebitPaymentMandateInput")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);