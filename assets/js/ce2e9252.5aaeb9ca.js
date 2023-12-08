"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[74986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,p=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(p,d(d({ref:t},c),{},{components:n})):a.createElement(p,d({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,d=new Array(o);d[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,d[1]=r;for(var l=2;l<o;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38371:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=n(87462),i=n(67294),o=n(3905);const d={id:"add-funding-limit-settings-change-request-payload",title:"AddFundingLimitSettingsChangeRequestPayload",hide_table_of_contents:!1},r=void 0,s={unversionedId:"api-reference/unions/add-funding-limit-settings-change-request-payload",id:"api-reference/unions/add-funding-limit-settings-change-request-payload",title:"AddFundingLimitSettingsChangeRequestPayload",description:"Payload returned on mutation completion",source:"@site/docs/api-reference/unions/add-funding-limit-settings-change-request-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/add-funding-limit-settings-change-request-payload",permalink:"/api-reference/unions/add-funding-limit-settings-change-request-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/add-funding-limit-settings-change-request-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-funding-limit-settings-change-request-payload",title:"AddFundingLimitSettingsChangeRequestPayload",hide_table_of_contents:!1}},l={},c=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestPayload.<b>AddFundingLimitSettingsChangeRequestSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbaddfundinglimitsettingschangerequestsuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestPayload.<b>FundingLimitSettingsChangeRequestBadAmountRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbfundinglimitsettingschangerequestbadamountrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestPayload.<b>AccountHolderNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbaccountholdernotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:d,startOpen:r=!1}=e;const[s,l]=(0,i.useState)(r);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&d)},b={Bullet:c,SpecifiedBy:u,Badge:g,toc:m,Details:p},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Payload returned on mutation completion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddFundingLimitSettingsChangeRequestPayload = AddFundingLimitSettingsChangeRequestSuccessPayload | FundingLimitSettingsChangeRequestBadAmountRejection | AccountHolderNotFoundRejection | ForbiddenRejection | ValidationRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbaddfundinglimitsettingschangerequestsuccesspayloadbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/add-funding-limit-settings-change-request-success-payload"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestPayload.",(0,o.kt)("b",null,"AddFundingLimitSettingsChangeRequestSuccessPayload")))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Add Funding Limit Settings Change Request Success Payload")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbfundinglimitsettingschangerequestbadamountrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/funding-limit-settings-change-request-bad-amount-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestPayload.",(0,o.kt)("b",null,"FundingLimitSettingsChangeRequestBadAmountRejection")))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Funding Limit Settings Change Request Bad Amount Rejection")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbaccountholdernotfoundrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-holder-not-found-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestPayload.",(0,o.kt)("b",null,"AccountHolderNotFoundRejection")))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Holder was not found")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbforbiddenrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestPayload.",(0,o.kt)("b",null,"ForbiddenRejection")))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestpayloadbvalidationrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestPayload.",(0,o.kt)("b",null,"ValidationRejection")))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-funding-limit-settings-change-request"},(0,o.kt)("inlineCode",{parentName:"a"},"addFundingLimitSettingsChangeRequest")),"  ",(0,o.kt)(g,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);