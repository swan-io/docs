"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[12340],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88496:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(83117),n=r(67294),o=r(3905);const l={id:"sepacredit-transfer-debtor",title:"SEPACreditTransferDebtor",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api/interfaces/sepacredit-transfer-debtor",id:"api/interfaces/sepacredit-transfer-debtor",title:"SEPACreditTransferDebtor",description:"Sepa Credit Transfer Debtor",source:"@site/docs/api/interfaces/sepacredit-transfer-debtor.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/sepacredit-transfer-debtor",permalink:"/docs/api/interfaces/sepacredit-transfer-debtor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/sepacredit-transfer-debtor.mdx",tags:[],version:"current",frontMatter:{id:"sepacredit-transfer-debtor",title:"SEPACreditTransferDebtor",hide_table_of_contents:!1}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferDebtor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransferdebtorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferDebtor.<b>maskedIBAN</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransferdebtorbmaskedibanbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferDebtor.<b>IBAN</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransferdebtorbibanbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferDebtor.<b>BIC</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransferdebtorbbicbcodestring-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:c,Bullet:p,SpecifiedBy:f,Badge:m},u="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sepa Credit Transfer Debtor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface SEPACreditTransferDebtor {\n  name: String!\n  maskedIBAN: String!\n  IBAN: String\n  BIC: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransferdebtorbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferDebtor.",(0,o.kt)("b",null,"name"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"full name of the debtor")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransferdebtorbmaskedibanbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferDebtor.",(0,o.kt)("b",null,"maskedIBAN"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"maskedIBAN")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransferdebtorbibanbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferDebtor.",(0,o.kt)("b",null,"IBAN"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"IBAN")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransferdebtorbbicbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferDebtor.",(0,o.kt)("b",null,"BIC"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"BIC")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/sepacredit-transfer-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferTransaction")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/sepacredit-transfer-in-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferInDebtor")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/sepacredit-transfer-internal-in-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferInternalInDebtor")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/sepacredit-transfer-out-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferOutDebtor")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);