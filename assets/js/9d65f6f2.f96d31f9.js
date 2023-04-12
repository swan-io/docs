"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20941],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(a),u=r,m=s["".concat(o,".").concat(u)]||s[u]||b[u]||d;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,i=new Array(d);i[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<d;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84525:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(83117),r=a(67294),d=a(3905);const i={id:"update-received-sepa-direct-debit-b2-b-mandate-input",title:"UpdateReceivedSepaDirectDebitB2bMandateInput",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api/inputs/update-received-sepa-direct-debit-b2-b-mandate-input",id:"api/inputs/update-received-sepa-direct-debit-b2-b-mandate-input",title:"UpdateReceivedSepaDirectDebitB2bMandateInput",description:"Inputs to update a received sepa direct debit mandate B2b.",source:"@site/docs/api/inputs/update-received-sepa-direct-debit-b2-b-mandate-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/update-received-sepa-direct-debit-b2-b-mandate-input",permalink:"/docs/api/inputs/update-received-sepa-direct-debit-b2-b-mandate-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/update-received-sepa-direct-debit-b2-b-mandate-input.mdx",tags:[],version:"current",frontMatter:{id:"update-received-sepa-direct-debit-b2-b-mandate-input",title:"UpdateReceivedSepaDirectDebitB2bMandateInput",hide_table_of_contents:!1}},l={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateReceivedSepaDirectDebitB2bMandateInput.<b>receivedDirectDebitMandateId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbreceiveddirectdebitmandateidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateReceivedSepaDirectDebitB2bMandateInput.<b>mandateReference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbmandatereferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateReceivedSepaDirectDebitB2bMandateInput.<b>creditorIdentifier</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbcreditoridentifierbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateReceivedSepaDirectDebitB2bMandateInput.<b>creditorName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbcreditornamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateReceivedSepaDirectDebitB2bMandateInput.<b>iban</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbibanbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateReceivedSepaDirectDebitB2bMandateInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateReceivedSepaDirectDebitB2bMandateInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbconsentredirecturlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:s,SpecifiedBy:b,Badge:u},f="wrapper";function g(e){let{components:t,...a}=e;return(0,d.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Inputs to update a received sepa direct debit mandate B2b."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateReceivedSepaDirectDebitB2bMandateInput {\n  receivedDirectDebitMandateId: ID!\n  mandateReference: String\n  creditorIdentifier: String\n  creditorName: String\n  iban: String\n  name: String\n  consentRedirectUrl: String!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbreceiveddirectdebitmandateidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateReceivedSepaDirectDebitB2bMandateInput.",(0,d.kt)("b",null,"receivedDirectDebitMandateId"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The unique mandate id")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbmandatereferencebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateReceivedSepaDirectDebitB2bMandateInput.",(0,d.kt)("b",null,"mandateReference"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The unique identifier of the received direct debit mandate")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbcreditoridentifierbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateReceivedSepaDirectDebitB2bMandateInput.",(0,d.kt)("b",null,"creditorIdentifier"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The Sepa Creditor Identifier of the creditor")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbcreditornamebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateReceivedSepaDirectDebitB2bMandateInput.",(0,d.kt)("b",null,"creditorName"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The name of the creditor")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbibanbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateReceivedSepaDirectDebitB2bMandateInput.",(0,d.kt)("b",null,"iban"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The Swan Iban of the debtor")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbnamebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateReceivedSepaDirectDebitB2bMandateInput.",(0,d.kt)("b",null,"name"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Label that will be displayed along with this received direct debit mandate in the web banking")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updatereceivedsepadirectdebitb2bmandateinputbconsentredirecturlbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"UpdateReceivedSepaDirectDebitB2bMandateInput.",(0,d.kt)("b",null,"consentRedirectUrl"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/mutations/update-received-sepa-direct-debit-b2-b-mandate"},(0,d.kt)("inlineCode",{parentName:"a"},"updateReceivedSepaDirectDebitB2bMandate")),"  ",(0,d.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);