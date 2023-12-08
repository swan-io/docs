"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[93093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,m=p["".concat(i,".").concat(g)]||p[g]||u[g]||r;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90945:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=n(87462),o=n(67294),r=n(3905);const l={id:"card-config-input",title:"CardConfigInput",hide_table_of_contents:!1},d=void 0,i={unversionedId:"api-reference/inputs/card-config-input",id:"api-reference/inputs/card-config-input",title:"CardConfigInput",description:"No description",source:"@site/docs/api-reference/inputs/card-config-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/card-config-input",permalink:"/api-reference/inputs/card-config-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/card-config-input.mdx",tags:[],version:"current",frontMatter:{id:"card-config-input",title:"CardConfigInput",hide_table_of_contents:!1}},c={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardConfigInput.<b>accountMembershipId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardconfiginputbaccountmembershipidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConfigInput.<b>cardContractExpiryDate</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardconfiginputbcardcontractexpirydatebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConfigInput.<b>withdrawal</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardconfiginputbwithdrawalbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConfigInput.<b>international</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardconfiginputbinternationalbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConfigInput.<b>nonMainCurrencyTransactions</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardconfiginputbnonmaincurrencytransactionsbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConfigInput.<b>eCommerce</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardconfiginputbecommercebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConfigInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardconfiginputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConfigInput.<b>spendingLimit</b></code><Bullet /><code>SpendingLimitInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-cardconfiginputbspendinglimitbcodespendinglimitinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardConfigInput.<b>physicalCard</b></code><Bullet /><code>PhysicalCardConfigInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-cardconfiginputbphysicalcardbcodephysicalcardconfiginput-",level:4},{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:d=!1}=e;const[i,c]=(0,o.useState)(d);return(0,r.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},f={Bullet:s,SpecifiedBy:p,Badge:u,toc:g,Details:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input CardConfigInput {\n  accountMembershipId: ID!\n  cardContractExpiryDate: DateTime\n  withdrawal: Boolean!\n  international: Boolean!\n  nonMainCurrencyTransactions: Boolean!\n  eCommerce: Boolean!\n  name: String\n  spendingLimit: SpendingLimitInput!\n  physicalCard: PhysicalCardConfigInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconfiginputbaccountmembershipidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConfigInput.",(0,r.kt)("b",null,"accountMembershipId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique identifier of a given account membership")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconfiginputbcardcontractexpirydatebcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConfigInput.",(0,r.kt)("b",null,"cardContractExpiryDate"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Card expiration date  if ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," it does not have an expiration date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconfiginputbwithdrawalbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConfigInput.",(0,r.kt)("b",null,"withdrawal"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this card allows cash withdrawals")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconfiginputbinternationalbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConfigInput.",(0,r.kt)("b",null,"international"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this card allows payments outside of the country")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconfiginputbnonmaincurrencytransactionsbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConfigInput.",(0,r.kt)("b",null,"nonMainCurrencyTransactions"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this card allows transactions outside of the card's main currency")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconfiginputbecommercebcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConfigInput.",(0,r.kt)("b",null,"eCommerce"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"true")," if this card allows transactions at eCommerce sites")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconfiginputbnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConfigInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Card name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconfiginputbspendinglimitbcodespendinglimitinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConfigInput.",(0,r.kt)("b",null,"spendingLimit"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/spending-limit-input"},(0,r.kt)("inlineCode",{parentName:"a"},"SpendingLimitInput!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Spending limit")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-cardconfiginputbphysicalcardbcodephysicalcardconfiginput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CardConfigInput.",(0,r.kt)("b",null,"physicalCard"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/physical-card-config-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PhysicalCardConfigInput"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If used a physical card will be printed and sent to the given address")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-cards-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AddCardsInput")),"  ",(0,r.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);