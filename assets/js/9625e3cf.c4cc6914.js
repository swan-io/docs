"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=i(n),y=o,f=p["".concat(l,".").concat(y)]||p[y]||s[y]||r;return n?a.createElement(f,c(c({ref:t},u),{},{components:n})):a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=y;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:o,c[1]=d;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},16764:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var a=n(83117),o=n(67294),r=n(3905);const c={id:"update-account-holder-payload",title:"UpdateAccountHolderPayload",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/unions/update-account-holder-payload",id:"api-reference/unions/update-account-holder-payload",title:"UpdateAccountHolderPayload",description:"No description",source:"@site/docs/api-reference/unions/update-account-holder-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/update-account-holder-payload",permalink:"/docs/api-reference/unions/update-account-holder-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/update-account-holder-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-account-holder-payload",title:"UpdateAccountHolderPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SuspendReceivedDirectDebitMandatePayload",permalink:"/docs/api-reference/unions/suspend-received-direct-debit-mandate-payload"},next:{title:"UpdateAccountMembershipPayload",permalink:"/docs/api-reference/unions/update-account-membership-payload"}},i={},u=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>UpdateAccountHolderSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"updateaccountholdersuccesspayload-",level:4},{value:'<code>AccountHolderNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"accountholdernotfoundrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:p,SpecifiedBy:s,Badge:y},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union UpdateAccountHolderPayload = UpdateAccountHolderSuccessPayload | AccountHolderNotFoundRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"updateaccountholdersuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/update-account-holder-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateAccountHolderSuccessPayload"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"accountholdernotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-holder-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolderNotFoundRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Holder was not found")),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/update-account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"updateAccountHolder")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);