"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[16759],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>u});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},g=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,i=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=c(a),b=d,u=s["".concat(o,".").concat(b)]||s[b]||p[b]||i;return a?n.createElement(u,r(r({ref:t},g),{},{components:a})):n.createElement(u,r({ref:t},g))}));function u(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var i=a.length,r=new Array(i);r[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:d,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},97106:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>g,Details:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>b});var n=a(87462),d=a(67294),i=a(3905);const r={id:"pending-digital-card",title:"PendingDigitalCard",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/objects/pending-digital-card",id:"api-reference/objects/pending-digital-card",title:"PendingDigitalCard",description:"Pending Digital Card used for ApplePay or GooglePay",source:"@site/docs/api-reference/objects/pending-digital-card.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/pending-digital-card",permalink:"/api-reference/objects/pending-digital-card",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/pending-digital-card.mdx",tags:[],version:"current",frontMatter:{id:"pending-digital-card",title:"PendingDigitalCard",hide_table_of_contents:!1}},c={},g=()=>(0,i.kt)(d.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(d.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(d.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PendingDigitalCard.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pendingdigitalcardbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PendingDigitalCard.<b>type</b></code><Bullet /><code>DigitalizationType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-pendingdigitalcardbtypebcodedigitalizationtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PendingDigitalCard.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pendingdigitalcardbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PendingDigitalCard.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pendingdigitalcardbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PendingDigitalCard.<b>walletProvider</b></code><Bullet /><code>WalletProvider!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-pendingdigitalcardbwalletproviderbcodewalletprovider--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PendingDigitalCard.<b>statusInfo</b></code><Bullet /><code>PendingDigitalCardStatusInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-pendingdigitalcardbstatusinfobcodependingdigitalcardstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PendingDigitalCard.<b>inAppProvisioningData</b></code><Bullet /><code>InAppProvisioningData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-pendingdigitalcardbinappprovisioningdatabcodeinappprovisioningdata-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>DigitalCard</code> <Badge class="badge badge--secondary" text="interface"/>',id:"digitalcard-",level:4},{value:"Member Of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:l=!1}=e;const[o,c]=(0,d.useState)(l);return(0,i.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&r)},m={Bullet:g,SpecifiedBy:s,Badge:p,toc:b,Details:u},f="wrapper";function y(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pending Digital Card used for ApplePay or GooglePay"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PendingDigitalCard implements DigitalCard {\n  id: ID!\n  type: DigitalizationType!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  walletProvider: WalletProvider!\n  statusInfo: PendingDigitalCardStatusInfo!\n  inAppProvisioningData(\n    signatureData: SignatureData\n  ): InAppProvisioningData\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardbidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCard.",(0,i.kt)("b",null,"id"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unique identifier of a digital card")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardbtypebcodedigitalizationtype--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCard.",(0,i.kt)("b",null,"type"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/digitalization-type"},(0,i.kt)("inlineCode",{parentName:"a"},"DigitalizationType!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The type of digitalization that created this digital card.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardbcreatedatbcodedatetime--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCard.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Created date")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardbupdatedatbcodedatetime--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCard.",(0,i.kt)("b",null,"updatedAt"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Updated date")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardbwalletproviderbcodewalletprovider--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCard.",(0,i.kt)("b",null,"walletProvider"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/wallet-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"WalletProvider!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Wallet Provider (ApplePay, GooglePay ...)")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardbstatusinfobcodependingdigitalcardstatusinfo--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCard.",(0,i.kt)("b",null,"statusInfo"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/pending-digital-card-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PendingDigitalCardStatusInfo!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Digital Card status information"),(0,i.kt)("p",{parentName:"blockquote"},"In this type the status will be either ConsentPending or Pending")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardbinappprovisioningdatabcodeinappprovisioningdata-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCard.",(0,i.kt)("b",null,"inAppProvisioningData"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/in-app-provisioning-data"},(0,i.kt)("inlineCode",{parentName:"a"},"InAppProvisioningData"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Data to provide to the wallet during InApp Provisioning"),(0,i.kt)("p",{parentName:"blockquote"},"Signature Data is mandatory for ApplePay"),(0,i.kt)("p",{parentName:"blockquote"},"This data is only available for a digital card in"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"status: Pending"),(0,i.kt)("li",{parentName:"ul"},"type: InApp")),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-pendingdigitalcardinappprovisioningdatabsignaturedatabcodesignaturedata-"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCard.inAppProvisioningData.",(0,i.kt)("b",null,"signatureData"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api-reference/inputs/signature-data"},(0,i.kt)("inlineCode",{parentName:"a"},"SignatureData"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"digitalcard-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/digital-card"},(0,i.kt)("inlineCode",{parentName:"a"},"DigitalCard"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Digital Card used for ApplePay or GooglePay")),(0,i.kt)("h3",{id:"member-of"},"Member Of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/add-digital-card-success-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"AddDigitalCardSuccessPayload")),"  ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);