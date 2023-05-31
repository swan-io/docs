"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[80169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(a),f=o,y=s["".concat(i,".").concat(f)]||s[f]||u[f]||r;return a?n.createElement(y,c(c({ref:t},p),{},{components:a})):n.createElement(y,c({ref:t},p))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=f;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:o,c[1]=d;for(var l=2;l<r;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},35695:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=a(83117),o=a(67294),r=a(3905);const c={id:"update-card-payload",title:"UpdateCardPayload",hide_table_of_contents:!1},d=void 0,i={unversionedId:"api-reference/unions/update-card-payload",id:"api-reference/unions/update-card-payload",title:"UpdateCardPayload",description:"No description",source:"@site/docs/api-reference/unions/update-card-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/update-card-payload",permalink:"/api-reference/unions/update-card-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/update-card-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-card-payload",title:"UpdateCardPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateAccountPayload",permalink:"/api-reference/unions/update-account-payload"},next:{title:"UpdateCompanyOnboardingPayload",permalink:"/api-reference/unions/update-company-onboarding-payload"}},l={},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>UpdateCardSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"updatecardsuccesspayload-",level:4},{value:'<code>AccountNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"accountnotfoundrejection-",level:4},{value:'<code>CardNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"cardnotfoundrejection-",level:4},{value:'<code>AccountMembershipNotAllowedRejection</code> <Badge class="secondary" text="object"/>',id:"accountmembershipnotallowedrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:s,SpecifiedBy:u,Badge:f},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union UpdateCardPayload = UpdateCardSuccessPayload | AccountNotFoundRejection | CardNotFoundRejection | AccountMembershipNotAllowedRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"updatecardsuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/update-card-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateCardSuccessPayload"))," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"accountnotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountNotFoundRejection"))," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the account was not found or if the user does not have the rights to know that the card exists")),(0,r.kt)("h4",{id:"cardnotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"CardNotFoundRejection"))," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the card was not found or if the user does not have the rights to know that the account exists")),(0,r.kt)("h4",{id:"accountmembershipnotallowedrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-membership-not-allowed-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipNotAllowedRejection"))," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Membership is not allowed to use an operation.")),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/update-card"},(0,r.kt)("inlineCode",{parentName:"a"},"updateCard")),"  ",(0,r.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);