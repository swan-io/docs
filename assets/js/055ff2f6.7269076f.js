"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[10197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),b=a,m=p["".concat(s,".").concat(b)]||p[b]||f[b]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},87468:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(83117),a=r(67294),o=r(3905);const i={id:"sepacredit-transfer-in-debtor",title:"SEPACreditTransferInDebtor",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api/objects/sepacredit-transfer-in-debtor",id:"api/objects/sepacredit-transfer-in-debtor",title:"SEPACreditTransferInDebtor",description:"Sepa Credit Transfer Debtor for Incoming transaction",source:"@site/docs/api/objects/sepacredit-transfer-in-debtor.mdx",sourceDirName:"api/objects",slug:"/api/objects/sepacredit-transfer-in-debtor",permalink:"/docs/api/objects/sepacredit-transfer-in-debtor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/sepacredit-transfer-in-debtor.mdx",tags:[],version:"current",frontMatter:{id:"sepacredit-transfer-in-debtor",title:"SEPACreditTransferInDebtor",hide_table_of_contents:!1}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferInDebtor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransferindebtorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferInDebtor.<b>maskedIBAN</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransferindebtorbmaskedibanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferInDebtor.<b>IBAN</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransferindebtorbibanbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferInDebtor.<b>BIC</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransferindebtorbbicbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferInDebtor.<b>virtualIBANEntryId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransferindebtorbvirtualibanentryidbcodeid-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SEPACreditTransferDebtor</code> <Badge class="secondary" text="interface"/>',id:"sepacredittransferdebtor-",level:4}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:p,SpecifiedBy:f,Badge:b},u="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sepa Credit Transfer Debtor for Incoming transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPACreditTransferInDebtor implements SEPACreditTransferDebtor {\n  name: String!\n  maskedIBAN: String!\n  IBAN: String\n  BIC: String\n  virtualIBANEntryId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransferindebtorbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferInDebtor.",(0,o.kt)("b",null,"name"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"full name of the debtor (max 70 characters)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransferindebtorbmaskedibanbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferInDebtor.",(0,o.kt)("b",null,"maskedIBAN"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"maskedIBAN")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransferindebtorbibanbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferInDebtor.",(0,o.kt)("b",null,"IBAN"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IBAN")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransferindebtorbbicbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferInDebtor.",(0,o.kt)("b",null,"BIC"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"BIC")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransferindebtorbvirtualibanentryidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferInDebtor.",(0,o.kt)("b",null,"virtualIBANEntryId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"identifier of a Virtual IBAN")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"sepacredittransferdebtor-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/sepacredit-transfer-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferDebtor"))," ",(0,o.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sepa Credit Transfer Debtor")))}k.isMDXComponent=!0}}]);