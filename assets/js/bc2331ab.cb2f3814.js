"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),b=r,p=u["".concat(c,".").concat(b)]||u[b]||y[b]||l;return a?n.createElement(p,o(o({ref:t},s),{},{components:a})):n.createElement(p,o({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},36380:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>y,assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(83117),r=a(67294),l=a(3905);const o={id:"virtual-ibanentry",title:"VirtualIBANEntry",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api/objects/virtual-ibanentry",id:"api/objects/virtual-ibanentry",title:"VirtualIBANEntry",description:"Virtual IBAN can be used by the account holder to receive SCT (Sepa Credit Transfer) or to be debited by SDD (Sepa Direct Debit).",source:"@site/docs/api/objects/virtual-ibanentry.mdx",sourceDirName:"api/objects",slug:"/api/objects/virtual-ibanentry",permalink:"/docs/api/objects/virtual-ibanentry",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/virtual-ibanentry.mdx",tags:[],version:"current",frontMatter:{id:"virtual-ibanentry",title:"VirtualIBANEntry",hide_table_of_contents:!1}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>VirtualIBANEntry.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-virtualibanentrybidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VirtualIBANEntry.<b>IBAN</b></code><Bullet /><code>IBAN!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-virtualibanentrybibanbcodeiban--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VirtualIBANEntry.<b>BIC</b></code><Bullet /><code>BIC!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-virtualibanentrybbicbcodebic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VirtualIBANEntry.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-virtualibanentryblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VirtualIBANEntry.<b>status</b></code><Bullet /><code>IBANStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-virtualibanentrybstatusbcodeibanstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VirtualIBANEntry.<b>blockSDD</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-virtualibanentrybblocksddbcodeboolean--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:u,SpecifiedBy:y,Badge:b},m="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Virtual IBAN can be used by the account holder to receive SCT (Sepa Credit Transfer) or to be debited by SDD (Sepa Direct Debit)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type VirtualIBANEntry {\n  id: ID!\n  IBAN: IBAN!\n  BIC: BIC!\n  label: String\n  status: IBANStatus!\n  blockSDD: Boolean!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-virtualibanentrybidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VirtualIBANEntry.",(0,l.kt)("b",null,"id"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unique identifier of a Virtual IBAN entry")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-virtualibanentrybibanbcodeiban--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VirtualIBANEntry.",(0,l.kt)("b",null,"IBAN"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/iban"},(0,l.kt)("inlineCode",{parentName:"a"},"IBAN!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"International Bank Account Number")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-virtualibanentrybbicbcodebic--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VirtualIBANEntry.",(0,l.kt)("b",null,"BIC"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/bic"},(0,l.kt)("inlineCode",{parentName:"a"},"BIC!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Bank Identifier Code")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-virtualibanentryblabelbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VirtualIBANEntry.",(0,l.kt)("b",null,"label"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Label (could be used to identify)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-virtualibanentrybstatusbcodeibanstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VirtualIBANEntry.",(0,l.kt)("b",null,"status"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/ibanstatus"},(0,l.kt)("inlineCode",{parentName:"a"},"IBANStatus!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status of the Iban")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-virtualibanentrybblocksddbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VirtualIBANEntry.",(0,l.kt)("b",null,"blockSDD"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the Virtual IBAN refuses all Sepa Direct Debit received")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/add-virtual-iban-entry-success-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AddVirtualIbanEntrySuccessPayload")),"  ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/allow-sdd-virtual-iban-entry-success-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AllowSddVirtualIbanEntrySuccessPayload")),"  ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/cancel-virtual-iban-entry-success-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CancelVirtualIbanEntrySuccessPayload")),"  ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/deny-sdd-virtual-iban-entry-success-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"DenySddVirtualIbanEntrySuccessPayload")),"  ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/virtual-ibanentry-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"VirtualIBANEntryEdge")),"  ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);