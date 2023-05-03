"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[80906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=i(n),k=r,m=b["".concat(s,".").concat(k)]||b[k]||p[k]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[b]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},49547:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const l={id:"bank",title:"Bank",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api-reference/objects/bank",id:"api-reference/objects/bank",title:"Bank",description:"Information about the banking institution",source:"@site/docs/api-reference/objects/bank.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/bank",permalink:"/docs/api-reference/objects/bank",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/bank.mdx",tags:[],version:"current",frontMatter:{id:"bank",title:"Bank",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Balance",permalink:"/docs/api-reference/objects/balance"},next:{title:"BindAccountMembershipSuccessPayload",permalink:"/docs/api-reference/objects/bind-account-membership-success-payload"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Bank.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-bankbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Bank.<b>branch</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-bankbbranchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Bank.<b>nationalId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-bankbnationalidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Bank.<b>bic</b></code><Bullet /><code>BIC!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-bankbbicbcodebic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Bank.<b>address</b></code><Bullet /><code>Address!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-bankbaddressbcodeaddress--",level:4},{value:"Member of",id:"member-of",level:3}],b=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:b,SpecifiedBy:p,Badge:k},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Information about the banking institution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Bank {\n  name: String!\n  branch: String\n  nationalId: String!\n  bic: BIC!\n  address: Address!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-bankbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Bank.",(0,o.kt)("b",null,"name"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Bank name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-bankbbranchbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Bank.",(0,o.kt)("b",null,"branch"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Bank Branch Code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-bankbnationalidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Bank.",(0,o.kt)("b",null,"nationalId"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Bank local identifier (unique by country)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-bankbbicbcodebic--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Bank.",(0,o.kt)("b",null,"bic"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/bic"},(0,o.kt)("inlineCode",{parentName:"a"},"BIC!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Bank BIC code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-bankbaddressbcodeaddress--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Bank.",(0,o.kt)("b",null,"address"))),(0,o.kt)(b,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Bank address (We might only be able to fill in the country)")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/valid-iban"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidIban")),"  ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);