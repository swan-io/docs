"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[90757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||b[u]||r;return n?a.createElement(m,c(c({ref:t},d),{},{components:n})):a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30183:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>b,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var a=n(83117),o=n(67294),r=n(3905);const c={id:"disable-account-membership-payload",title:"DisableAccountMembershipPayload",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/unions/disable-account-membership-payload",id:"api-reference/unions/disable-account-membership-payload",title:"DisableAccountMembershipPayload",description:"No description",source:"@site/docs/api-reference/unions/disable-account-membership-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/disable-account-membership-payload",permalink:"/api-reference/unions/disable-account-membership-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/disable-account-membership-payload.mdx",tags:[],version:"current",frontMatter:{id:"disable-account-membership-payload",title:"DisableAccountMembershipPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DenySddVirtualIbanEntryPayload",permalink:"/api-reference/unions/deny-sdd-virtual-iban-entry-payload"},next:{title:"EnableReceivedDirectDebitMandatePayload",permalink:"/api-reference/unions/enable-received-direct-debit-mandate-payload"}},s={},d=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>DisableAccountMembershipSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"disableaccountmembershipsuccesspayload-",level:4},{value:'<code>AccountMembershipCannotBeDisabledRejection</code> <Badge class="secondary" text="object"/>',id:"accountmembershipcannotbedisabledrejection-",level:4},{value:'<code>AccountMembershipNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"accountmembershipnotfoundrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:'<code>LegalRepresentativeAccountMembershipCannotBeDisabledRejection</code> <Badge class="secondary" text="object"/>',id:"legalrepresentativeaccountmembershipcannotbedisabledrejection-",level:4},{value:'<code>UserNotAllowedToDisableItsOwnAccountMembershipRejection</code> <Badge class="secondary" text="object"/>',id:"usernotallowedtodisableitsownaccountmembershiprejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:b,Badge:u},y="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union DisableAccountMembershipPayload = DisableAccountMembershipSuccessPayload | AccountMembershipCannotBeDisabledRejection | AccountMembershipNotFoundRejection | ForbiddenRejection | InternalErrorRejection | LegalRepresentativeAccountMembershipCannotBeDisabledRejection | UserNotAllowedToDisableItsOwnAccountMembershipRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"disableaccountmembershipsuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/disable-account-membership-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"DisableAccountMembershipSuccessPayload"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"accountmembershipcannotbedisabledrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-membership-cannot-be-disabled-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipCannotBeDisabledRejection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"accountmembershipnotfoundrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-membership-not-found-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipNotFoundRejection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"forbiddenrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"internalerrorrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-error-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,r.kt)("h4",{id:"legalrepresentativeaccountmembershipcannotbedisabledrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/legal-representative-account-membership-cannot-be-disabled-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"LegalRepresentativeAccountMembershipCannotBeDisabledRejection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"usernotallowedtodisableitsownaccountmembershiprejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/user-not-allowed-to-disable-its-own-account-membership-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"UserNotAllowedToDisableItsOwnAccountMembershipRejection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/disable-account-membership"},(0,r.kt)("inlineCode",{parentName:"a"},"disableAccountMembership")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);