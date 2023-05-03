"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),y=r,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||s;return n?a.createElement(m,i(i({ref:t},o),{},{components:n})):a.createElement(m,i({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},27543:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(83117),r=n(67294),s=n(3905);const i={id:"suspend-physical-card",title:"suspendPhysicalCard",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/mutations/suspend-physical-card",id:"api-reference/mutations/suspend-physical-card",title:"suspendPhysicalCard",description:"Suspend a Physical Card.",source:"@site/docs/api-reference/mutations/suspend-physical-card.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/suspend-physical-card",permalink:"/docs/api-reference/mutations/suspend-physical-card",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/suspend-physical-card.mdx",tags:[],version:"current",frontMatter:{id:"suspend-physical-card",title:"suspendPhysicalCard",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"suspendAccountMembership",permalink:"/docs/api-reference/mutations/suspend-account-membership"},next:{title:"suspendReceivedDirectDebitMandate",permalink:"/docs/api-reference/mutations/suspend-received-direct-debit-mandate"}},d={},o=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>suspendPhysicalCard.<b>input</b></code><Bullet /><code>SuspendPhysicalCardInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-suspendphysicalcardbinputbcodesuspendphysicalcardinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>SuspendPhysicalCardPayload</code> <Badge class="secondary" text="union"/>',id:"suspendphysicalcardpayload-",level:4}],p=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:o,Bullet:p,SpecifiedBy:u,Badge:y},f="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Suspend a Physical Card."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"suspendPhysicalCard(\n  input: SuspendPhysicalCardInput\n): SuspendPhysicalCardPayload!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-suspendphysicalcardbinputbcodesuspendphysicalcardinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"suspendPhysicalCard.",(0,s.kt)("b",null,"input"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/inputs/suspend-physical-card-input"},(0,s.kt)("inlineCode",{parentName:"a"},"SuspendPhysicalCardInput"))," ",(0,s.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"suspendphysicalcardpayload-"},(0,s.kt)("a",{parentName:"h4",href:"/api-reference/unions/suspend-physical-card-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"SuspendPhysicalCardPayload"))," ",(0,s.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}h.isMDXComponent=!0}}]);