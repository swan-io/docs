"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19346],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(a),y=n,k=p["".concat(l,".").concat(y)]||p[y]||m[y]||d;return a?r.createElement(k,o(o({ref:t},i),{},{components:a})):r.createElement(k,o({ref:t},i))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,o=new Array(d);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<d;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},95809:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=a(83117),n=a(67294),d=a(3905);const o={id:"address",title:"Address",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api/objects/address",id:"api/objects/address",title:"Address",description:"Address Information",source:"@site/docs/api/objects/address.mdx",sourceDirName:"api/objects",slug:"/api/objects/address",permalink:"/docs/api/objects/address",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/address.mdx",tags:[],version:"current",frontMatter:{id:"address",title:"Address",hide_table_of_contents:!1}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Address.<b>addressLine1</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressbaddressline1bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Address.<b>addressLine2</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressbaddressline2bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Address.<b>city</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressbcitybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Address.<b>postalCode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressbpostalcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Address.<b>state</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressbstatebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Address.<b>country</b></code><Bullet /><code>CCA3</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressbcountrybcodecca3-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:p,SpecifiedBy:m,Badge:y},u="wrapper";function b(e){let{components:t,...a}=e;return(0,d.kt)(u,(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Address Information"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type Address {\n  addressLine1: String\n  addressLine2: String\n  city: String\n  postalCode: String\n  state: String\n  country: CCA3\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addressbaddressline1bcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Address.",(0,d.kt)("b",null,"addressLine1"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"address line 1")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addressbaddressline2bcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Address.",(0,d.kt)("b",null,"addressLine2"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"addressLine2")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addressbcitybcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Address.",(0,d.kt)("b",null,"city"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"city")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addressbpostalcodebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Address.",(0,d.kt)("b",null,"postalCode"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"postal code (max 10 characters)")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addressbstatebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Address.",(0,d.kt)("b",null,"state"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"state")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addressbcountrybcodecca3-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Address.",(0,d.kt)("b",null,"country"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/cca3"},(0,d.kt)("inlineCode",{parentName:"a"},"CCA3"))," ",(0,d.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"country")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/objects/bank"},(0,d.kt)("inlineCode",{parentName:"a"},"Bank")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/internal-payment-mandate-creditor"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalPaymentMandateCreditor")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/internal-payment-mandate-debtor"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalPaymentMandateDebtor")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/internal-received-direct-debit-mandate-creditor"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalReceivedDirectDebitMandateCreditor")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/interfaces/payment-mandate-creditor"},(0,d.kt)("inlineCode",{parentName:"a"},"PaymentMandateCreditor")),"  ",(0,d.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/physical-card-renewed-status-info"},(0,d.kt)("inlineCode",{parentName:"a"},"PhysicalCardRenewedStatusInfo")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/physical-card-to-activate-status-info"},(0,d.kt)("inlineCode",{parentName:"a"},"PhysicalCardToActivateStatusInfo")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/sepabeneficiary"},(0,d.kt)("inlineCode",{parentName:"a"},"SEPABeneficiary")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/sepapayment-mandate-creditor"},(0,d.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateCreditor")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/sepapayment-mandate-debtor"},(0,d.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateDebtor")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/separeceived-direct-debit-mandate-creditor"},(0,d.kt)("inlineCode",{parentName:"a"},"SEPAReceivedDirectDebitMandateCreditor")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);