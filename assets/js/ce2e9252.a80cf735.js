"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[74986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:i,r[1]=d;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38371:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(83117),i=n(67294),o=n(3905);const r={id:"add-funding-limit-settings-change-request-payload",title:"AddFundingLimitSettingsChangeRequestPayload",hide_table_of_contents:!1},d=void 0,c={unversionedId:"api-reference/unions/add-funding-limit-settings-change-request-payload",id:"api-reference/unions/add-funding-limit-settings-change-request-payload",title:"AddFundingLimitSettingsChangeRequestPayload",description:"Payload returned on mutation completion",source:"@site/docs/api-reference/unions/add-funding-limit-settings-change-request-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/add-funding-limit-settings-change-request-payload",permalink:"/api-reference/unions/add-funding-limit-settings-change-request-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/add-funding-limit-settings-change-request-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-funding-limit-settings-change-request-payload",title:"AddFundingLimitSettingsChangeRequestPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddExternalAccountPayload",permalink:"/api-reference/unions/add-external-account-payload"},next:{title:"AddInternalDirectDebitPaymentMandatePayload",permalink:"/api-reference/unions/add-internal-direct-debit-payment-mandate-payload"}},s={},l=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddFundingLimitSettingsChangeRequestSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"addfundinglimitsettingschangerequestsuccesspayload-",level:4},{value:'<code>FundingLimitSettingsChangeRequestBadAmountRejection</code> <Badge class="secondary" text="object"/>',id:"fundinglimitsettingschangerequestbadamountrejection-",level:4},{value:'<code>AccountHolderNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"accountholdernotfoundrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:u,SpecifiedBy:p,Badge:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Payload returned on mutation completion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddFundingLimitSettingsChangeRequestPayload = AddFundingLimitSettingsChangeRequestSuccessPayload | FundingLimitSettingsChangeRequestBadAmountRejection | AccountHolderNotFoundRejection | ForbiddenRejection | ValidationRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"addfundinglimitsettingschangerequestsuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/add-funding-limit-settings-change-request-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddFundingLimitSettingsChangeRequestSuccessPayload"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Add Funding Limit Settings Change Request Success Payload")),(0,o.kt)("h4",{id:"fundinglimitsettingschangerequestbadamountrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/funding-limit-settings-change-request-bad-amount-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestBadAmountRejection"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Funding Limit Settings Change Request Bad Amount Rejection")),(0,o.kt)("h4",{id:"accountholdernotfoundrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-holder-not-found-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountHolderNotFoundRejection"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Holder was not found")),(0,o.kt)("h4",{id:"forbiddenrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"validationrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-funding-limit-settings-change-request"},(0,o.kt)("inlineCode",{parentName:"a"},"addFundingLimitSettingsChangeRequest")),"  ",(0,o.kt)(g,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);