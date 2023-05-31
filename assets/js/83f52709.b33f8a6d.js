"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[10882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),s=r,y=p["".concat(i,".").concat(s)]||p[s]||h[s]||o;return n?a.createElement(y,c(c({ref:t},d),{},{components:n})):a.createElement(y,c({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var m=2;m<o;m++)c[m]=n[m];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},32915:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>p,SpecifiedBy:()=>h,assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const c={id:"merchant-payment-method-type",title:"MerchantPaymentMethodType",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/enums/merchant-payment-method-type",id:"api-reference/enums/merchant-payment-method-type",title:"MerchantPaymentMethodType",description:"The different statuses a MerchantPaymentMethod can have",source:"@site/docs/api-reference/enums/merchant-payment-method-type.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/merchant-payment-method-type",permalink:"/api-reference/enums/merchant-payment-method-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/merchant-payment-method-type.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-method-type",title:"MerchantPaymentMethodType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MerchantPaymentMethodStatus",permalink:"/api-reference/enums/merchant-payment-method-status"},next:{title:"MerchantPaymentProductStatus",permalink:"/api-reference/enums/merchant-payment-product-status"}},m={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentMethodType.<b>InternalDirectDebitStandard</b></code>",id:"code-style-fontweight-normal-merchantpaymentmethodtypebinternaldirectdebitstandardbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentMethodType.<b>InternalDirectDebitB2B</b></code>",id:"code-style-fontweight-normal-merchantpaymentmethodtypebinternaldirectdebitb2bbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentMethodType.<b>Check</b></code>",id:"code-style-fontweight-normal-merchantpaymentmethodtypebcheckbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:h,Badge:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The different statuses a MerchantPaymentMethod can have"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MerchantPaymentMethodType {\n  InternalDirectDebitStandard\n  InternalDirectDebitB2B\n  Check\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodtypebinternaldirectdebitstandardbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodType.",(0,o.kt)("b",null,"InternalDirectDebitStandard")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodtypebinternaldirectdebitb2bbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodType.",(0,o.kt)("b",null,"InternalDirectDebitB2B")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodtypebcheckbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodType.",(0,o.kt)("b",null,"Check")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/check-merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckMerchantPaymentMethod")),"  ",(0,o.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-b2-bmerchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitB2BMerchantPaymentMethod")),"  ",(0,o.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-standard-merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitStandardMerchantPaymentMethod")),"  ",(0,o.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/interfaces/merchant-payment-method"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethod")),"  ",(0,o.kt)(s,{class:"secondary",text:"interface",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);