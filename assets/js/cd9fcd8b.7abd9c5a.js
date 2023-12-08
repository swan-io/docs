"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[55470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(i,".").concat(m)]||p[m]||u[m]||d;return n?a.createElement(y,s(s({ref:t},l),{},{components:n})):a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,s=new Array(d);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<d;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27017:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=n(87462),r=n(67294),d=n(3905);const s={id:"residency-address-input",title:"ResidencyAddressInput",hide_table_of_contents:!1},o=void 0,i={unversionedId:"api-reference/inputs/residency-address-input",id:"api-reference/inputs/residency-address-input",title:"ResidencyAddressInput",description:"No description",source:"@site/docs/api-reference/inputs/residency-address-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/residency-address-input",permalink:"/api-reference/inputs/residency-address-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/residency-address-input.mdx",tags:[],version:"current",frontMatter:{id:"residency-address-input",title:"ResidencyAddressInput",hide_table_of_contents:!1}},c={},l=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencyAddressInput.<b>addressLine1</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencyaddressinputbaddressline1bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencyAddressInput.<b>addressLine2</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencyaddressinputbaddressline2bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencyAddressInput.<b>city</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencyaddressinputbcitybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencyAddressInput.<b>postalCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencyaddressinputbpostalcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencyAddressInput.<b>state</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencyaddressinputbstatebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResidencyAddressInput.<b>country</b></code><Bullet /><code>CCA3</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-residencyaddressinputbcountrybcodecca3-",level:4},{value:"Member Of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:o=!1}=e;const[i,c]=(0,r.useState)(o);return(0,d.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&s)},g={Bullet:l,SpecifiedBy:p,Badge:u,toc:m,Details:y},b="wrapper";function f(e){let{components:t,...n}=e;return(0,d.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input ResidencyAddressInput {\n  addressLine1: String\n  addressLine2: String\n  city: String\n  postalCode: String\n  state: String\n  country: CCA3\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-residencyaddressinputbaddressline1bcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ResidencyAddressInput.",(0,d.kt)("b",null,"addressLine1"))),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Address line 1. Length must be from 0 to 255 characters")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-residencyaddressinputbaddressline2bcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ResidencyAddressInput.",(0,d.kt)("b",null,"addressLine2"))),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"AddressLine2. Length must be from 0 to 255 characters")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-residencyaddressinputbcitybcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ResidencyAddressInput.",(0,d.kt)("b",null,"city"))),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"City. Length must be from 0 to 100 characters")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-residencyaddressinputbpostalcodebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ResidencyAddressInput.",(0,d.kt)("b",null,"postalCode"))),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Postal code. Length must be from 0 to 50 characters")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-residencyaddressinputbstatebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ResidencyAddressInput.",(0,d.kt)("b",null,"state"))),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"State of residency. Length must be from 0 to 100 characters")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-residencyaddressinputbcountrybcodecca3-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ResidencyAddressInput.",(0,d.kt)("b",null,"country"))),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/cca3"},(0,d.kt)("inlineCode",{parentName:"a"},"CCA3"))," ",(0,d.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Country")),(0,d.kt)("h3",{id:"member-of"},"Member Of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-account-membership-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipInput")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/membership-info-input"},(0,d.kt)("inlineCode",{parentName:"a"},"MembershipInfoInput")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboard-company-account-holder-input"},(0,d.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderInput")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboard-individual-account-holder-input"},(0,d.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolderInput")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/update-account-membership-input"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateAccountMembershipInput")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/update-company-onboarding-input"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateCompanyOnboardingInput")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,d.kt)(l,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/inputs/update-individual-onboarding-input"},(0,d.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingInput")),"  ",(0,d.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);