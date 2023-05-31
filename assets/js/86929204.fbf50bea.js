"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,d=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=n,g=s["".concat(o,".").concat(f)]||s[f]||u[f]||d;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=r.length,i=new Array(d);i[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<d;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35343:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(83117),n=r(67294),d=r(3905);const i={id:"add-digital-card-input",title:"AddDigitalCardInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/inputs/add-digital-card-input",id:"api-reference/inputs/add-digital-card-input",title:"AddDigitalCardInput",description:"Inputs to add a new digital card",source:"@site/docs/api-reference/inputs/add-digital-card-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-digital-card-input",permalink:"/api-reference/inputs/add-digital-card-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-digital-card-input.mdx",tags:[],version:"current",frontMatter:{id:"add-digital-card-input",title:"AddDigitalCardInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddCardsWithGroupDeliveryInput",permalink:"/api-reference/inputs/add-cards-with-group-delivery-input"},next:{title:"AddDirectDebitFundingSourceInput",permalink:"/api-reference/inputs/add-direct-debit-funding-source-input"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddDigitalCardInput.<b>cardId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-adddigitalcardinputbcardidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDigitalCardInput.<b>walletProvider</b></code><Bullet /><code>WalletProviderType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-adddigitalcardinputbwalletproviderbcodewalletprovidertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddDigitalCardInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-adddigitalcardinputbconsentredirecturlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:s,SpecifiedBy:u,Badge:f},m="wrapper";function y(e){let{components:t,...r}=e;return(0,d.kt)(m,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Inputs to add a new digital card"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddDigitalCardInput {\n  cardId: ID!\n  walletProvider: WalletProviderType!\n  consentRedirectUrl: String!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-adddigitalcardinputbcardidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddDigitalCardInput.",(0,d.kt)("b",null,"cardId"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Unique identifier of a card")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-adddigitalcardinputbwalletproviderbcodewalletprovidertype--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddDigitalCardInput.",(0,d.kt)("b",null,"walletProvider"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/enums/wallet-provider-type"},(0,d.kt)("inlineCode",{parentName:"a"},"WalletProviderType!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Provider for which to generate a digitalCard")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-adddigitalcardinputbconsentredirecturlbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddDigitalCardInput.",(0,d.kt)("b",null,"consentRedirectUrl"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-digital-card"},(0,d.kt)("inlineCode",{parentName:"a"},"addDigitalCard")),"  ",(0,d.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);