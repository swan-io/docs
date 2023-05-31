"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,y=m["".concat(o,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(y,d(d({ref:t},p),{},{components:n})):a.createElement(y,d({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,d[1]=l;for(var c=2;c<i;c++)d[c]=n[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46106:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var a=n(83117),r=n(67294),i=n(3905);const d={id:"add-internal-direct-debit-payment-mandate",title:"addInternalDirectDebitPaymentMandate",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/mutations/add-internal-direct-debit-payment-mandate",id:"api-reference/mutations/add-internal-direct-debit-payment-mandate",title:"addInternalDirectDebitPaymentMandate",description:"Allows to add an internal direct debit payment mandate.",source:"@site/docs/api-reference/mutations/add-internal-direct-debit-payment-mandate.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/add-internal-direct-debit-payment-mandate",permalink:"/api-reference/mutations/add-internal-direct-debit-payment-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/add-internal-direct-debit-payment-mandate.mdx",tags:[],version:"current",frontMatter:{id:"add-internal-direct-debit-payment-mandate",title:"addInternalDirectDebitPaymentMandate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"addFundingLimitSettingsChangeRequest",permalink:"/api-reference/mutations/add-funding-limit-settings-change-request"},next:{title:"addMerchantProfile",permalink:"/api-reference/mutations/add-merchant-profile"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addInternalDirectDebitPaymentMandate.<b>input</b></code><Bullet /><code>AddInternalDirectDebitPaymentMandateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatebinputbcodeaddinternaldirectdebitpaymentmandateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddInternalDirectDebitPaymentMandatePayload</code> <Badge class="secondary" text="union"/>',id:"addinternaldirectdebitpaymentmandatepayload-",level:4}],m=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:m,SpecifiedBy:s,Badge:u},f="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Allows to add an internal direct debit payment mandate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"addInternalDirectDebitPaymentMandate(\n  input: AddInternalDirectDebitPaymentMandateInput!\n): AddInternalDirectDebitPaymentMandatePayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatebinputbcodeaddinternaldirectdebitpaymentmandateinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"addInternalDirectDebitPaymentMandate.",(0,i.kt)("b",null,"input"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/add-internal-direct-debit-payment-mandate-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandateInput!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"addinternaldirectdebitpaymentmandatepayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/unions/add-internal-direct-debit-payment-mandate-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandatePayload"))," ",(0,i.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Union type return by the addInternalDirectDebitPaymentMandate mutation")))}b.isMDXComponent=!0}}]);