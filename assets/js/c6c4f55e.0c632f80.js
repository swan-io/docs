"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,b=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73653:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=n(83117),r=n(67294),i=n(3905);const o={id:"sepa-direct-debit-b2-bpayment-method-input",title:"SepaDirectDebitB2BPaymentMethodInput",hide_table_of_contents:!1},p=void 0,d={unversionedId:"api-reference/inputs/sepa-direct-debit-b2-bpayment-method-input",id:"api-reference/inputs/sepa-direct-debit-b2-bpayment-method-input",title:"SepaDirectDebitB2BPaymentMethodInput",description:"No description",source:"@site/docs/api-reference/inputs/sepa-direct-debit-b2-bpayment-method-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/sepa-direct-debit-b2-bpayment-method-input",permalink:"/api-reference/inputs/sepa-direct-debit-b2-bpayment-method-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/sepa-direct-debit-b2-bpayment-method-input.mdx",tags:[],version:"current",frontMatter:{id:"sepa-direct-debit-b2-bpayment-method-input",title:"SepaDirectDebitB2BPaymentMethodInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SepaBeneficiaryInput",permalink:"/api-reference/inputs/sepa-beneficiary-input"},next:{title:"SepaDirectDebitCorePaymentMethodInput",permalink:"/api-reference/inputs/sepa-direct-debit-core-payment-method-input"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BPaymentMethodInput.<b>activate</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bpaymentmethodinputbactivatebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BPaymentMethodInput.<b>useSwanSepaCreditorIdentifier</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bpaymentmethodinputbuseswansepacreditoridentifierbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SepaDirectDebitB2BPaymentMethodInput.<b>sepaCreditorIdentifier</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitb2bpaymentmethodinputbsepacreditoridentifierbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:c,Bullet:s,SpecifiedBy:u,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SepaDirectDebitB2BPaymentMethodInput {\n  activate: Boolean\n  useSwanSepaCreditorIdentifier: Boolean!\n  sepaCreditorIdentifier: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bpaymentmethodinputbactivatebcodeboolean-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BPaymentMethodInput.",(0,i.kt)("b",null,"activate"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the Payment Method will be Enabled")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bpaymentmethodinputbuseswansepacreditoridentifierbcodeboolean--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BPaymentMethodInput.",(0,i.kt)("b",null,"useSwanSepaCreditorIdentifier"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the transaction will be created with the Swan Creditor Identifier")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitb2bpaymentmethodinputbsepacreditoridentifierbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SepaDirectDebitB2BPaymentMethodInput.",(0,i.kt)("b",null,"sepaCreditorIdentifier"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Your own SCI - Mandatory if the useSwanCreditorIdentifier is set to false, otherwise Swan does not take this input into account (even if not empty)")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/inputs/request-merchant-payment-methods-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentMethodsInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);