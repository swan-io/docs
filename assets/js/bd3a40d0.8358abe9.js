"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(d,".").concat(m)]||u[m]||l[m]||c;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65824:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>l,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(83117),r=n(67294),c=n(3905);const o={id:"add-account-membership",title:"addAccountMembership",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/mutations/add-account-membership",id:"api-reference/mutations/add-account-membership",title:"addAccountMembership",description:"Add a new account membership to an account.",source:"@site/docs/api-reference/mutations/add-account-membership.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/add-account-membership",permalink:"/api-reference/mutations/add-account-membership",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/add-account-membership.mdx",tags:[],version:"current",frontMatter:{id:"add-account-membership",title:"addAccountMembership",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"activatePhysicalCard",permalink:"/api-reference/mutations/activate-physical-card"},next:{title:"addAccountMemberships",permalink:"/api-reference/mutations/add-account-memberships"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addAccountMembership.<b>input</b></code><Bullet /><code>AddAccountMembershipInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addaccountmembershipbinputbcodeaddaccountmembershipinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddAccountMembershipPayload</code> <Badge class="secondary" text="union"/>',id:"addaccountmembershippayload-",level:4}],u=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:p,Bullet:u,SpecifiedBy:l,Badge:m},b="wrapper";function f(e){let{components:t,...n}=e;return(0,c.kt)(b,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Add a new account membership to an account."),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"This mutation is restricted to an User access token (",(0,c.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request.")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"The user must have an account membership for this account with the attribute ",(0,c.kt)("inlineCode",{parentName:"em"},"canManageAccountMembership=true"),".")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"addAccountMembership(\n  input: AddAccountMembershipInput!\n): AddAccountMembershipPayload!\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipbinputbcodeaddaccountmembershipinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"addAccountMembership.",(0,c.kt)("b",null,"input"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/inputs/add-account-membership-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipInput!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"addaccountmembershippayload-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/unions/add-account-membership-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipPayload"))," ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}f.isMDXComponent=!0}}]);