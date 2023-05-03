"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[85688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(t),b=r,y=s["".concat(l,".").concat(b)]||s[b]||u[b]||i;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[s]="string"==typeof e?e:r,o[1]=d;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3479:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>b,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(83117),r=t(67294),i=t(3905);const o={id:"update-individual-onboarding-payload",title:"UpdateIndividualOnboardingPayload",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/unions/update-individual-onboarding-payload",id:"api-reference/unions/update-individual-onboarding-payload",title:"UpdateIndividualOnboardingPayload",description:"Possible result types for updateIndividualOnboarding",source:"@site/docs/api-reference/unions/update-individual-onboarding-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/update-individual-onboarding-payload",permalink:"/docs/api-reference/unions/update-individual-onboarding-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/update-individual-onboarding-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-individual-onboarding-payload",title:"UpdateIndividualOnboardingPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateCompanyOnboardingPayload",permalink:"/docs/api-reference/unions/update-company-onboarding-payload"},next:{title:"UpdateReceivedSepaDirectDebitB2bMandatePayload",permalink:"/docs/api-reference/unions/update-received-sepa-direct-debit-b2-b-mandate-payload"}},c={},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:'<code>UpdateIndividualOnboardingSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"updateindividualonboardingsuccesspayload-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:s,SpecifiedBy:u,Badge:b},f="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(f,(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Possible result types for ",(0,i.kt)("inlineCode",{parentName:"p"},"updateIndividualOnboarding")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"union UpdateIndividualOnboardingPayload = ForbiddenRejection | InternalErrorRejection | UpdateIndividualOnboardingSuccessPayload | ValidationRejection\n")),(0,i.kt)("h3",{id:"possible-types"},"Possible types"),(0,i.kt)("h4",{id:"forbiddenrejection-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,i.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,i.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"internalerrorrejection-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-error-rejection"},(0,i.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,i.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,i.kt)("h4",{id:"updateindividualonboardingsuccesspayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/update-individual-onboarding-success-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingSuccessPayload"))," ",(0,i.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Type of result when updateIndividualOnboarding is a success")),(0,i.kt)("h4",{id:"validationrejection-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,i.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,i.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/mutations/update-individual-onboarding"},(0,i.kt)("inlineCode",{parentName:"a"},"updateIndividualOnboarding")),"  ",(0,i.kt)(b,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);