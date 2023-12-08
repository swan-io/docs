"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(b,c(c({ref:t},l),{},{components:n})):a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65824:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905);const c={id:"add-account-membership",title:"addAccountMembership",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/mutations/add-account-membership",id:"api-reference/mutations/add-account-membership",title:"addAccountMembership",description:"Add a new account membership to an account.",source:"@site/docs/api-reference/mutations/add-account-membership.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/add-account-membership",permalink:"/api-reference/mutations/add-account-membership",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/add-account-membership.mdx",tags:[],version:"current",frontMatter:{id:"add-account-membership",title:"addAccountMembership",hide_table_of_contents:!1}},s={},l=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addAccountMembership.<b>input</b></code><Bullet /><code>AddAccountMembershipInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addaccountmembershipbinputbcodeaddaccountmembershipinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddAccountMembershipPayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"addaccountmembershippayload-",level:4}],b=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:i=!1}=e;const[d,s]=(0,r.useState)(i);return(0,o.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&c)},f={Bullet:l,SpecifiedBy:u,Badge:p,toc:m,Details:b},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add a new account membership to an account."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This mutation is restricted to an User access token (",(0,o.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The user must have an account membership for this account with the attribute ",(0,o.kt)("inlineCode",{parentName:"em"},"canManageAccountMembership=true"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"addAccountMembership(\n  input: AddAccountMembershipInput!\n): AddAccountMembershipPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipbinputbcodeaddaccountmembershipinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"addAccountMembership.",(0,o.kt)("b",null,"input"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/add-account-membership-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipInput!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"addaccountmembershippayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/add-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipPayload"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}y.isMDXComponent=!0}}]);