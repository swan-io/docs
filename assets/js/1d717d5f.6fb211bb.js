"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[81884],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(t),y=o,f=p["".concat(s,".").concat(y)]||p[y]||u[y]||c;return t?a.createElement(f,r(r({ref:n},d),{},{components:t})):a.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,r=new Array(c);r[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var i=2;i<c;i++)r[i]=t[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},30198:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(83117),o=t(67294),c=t(3905);const r={id:"cancel-consent-payload",title:"CancelConsentPayload",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/unions/cancel-consent-payload",id:"api-reference/unions/cancel-consent-payload",title:"CancelConsentPayload",description:"Payload of the cancelConsent mutation",source:"@site/docs/api-reference/unions/cancel-consent-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/cancel-consent-payload",permalink:"/docs/api-reference/unions/cancel-consent-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/cancel-consent-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-consent-payload",title:"CancelConsentPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelCardPayload",permalink:"/docs/api-reference/unions/cancel-card-payload"},next:{title:"CancelDigitalCardPayload",permalink:"/docs/api-reference/unions/cancel-digital-card-payload"}},i={},d=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>CancelConsentSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"cancelconsentsuccesspayload-",level:4},{value:'<code>ConsentNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"consentnotfoundrejection-",level:4},{value:'<code>NotReachableConsentStatusRejection</code> <Badge class="secondary" text="object"/>',id:"notreachableconsentstatusrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:u,Badge:y},m="wrapper";function b(e){let{components:n,...t}=e;return(0,c.kt)(m,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Payload of the ",(0,c.kt)("inlineCode",{parentName:"p"},"cancelConsent")," mutation"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"union CancelConsentPayload = CancelConsentSuccessPayload | ConsentNotFoundRejection | NotReachableConsentStatusRejection\n")),(0,c.kt)("h3",{id:"possible-types"},"Possible types"),(0,c.kt)("h4",{id:"cancelconsentsuccesspayload-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/cancel-consent-success-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelConsentSuccessPayload"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Success payload of the ",(0,c.kt)("inlineCode",{parentName:"p"},"cancelConsent")," mutation")),(0,c.kt)("h4",{id:"consentnotfoundrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent-not-found-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ConsentNotFoundRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Rejection returned if a consent was not found")),(0,c.kt)("h4",{id:"notreachableconsentstatusrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/not-reachable-consent-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"NotReachableConsentStatusRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Rejection returned when consent status couldn't change")),(0,c.kt)("h3",{id:"returned-by"},"Returned by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/mutations/cancel-consent"},(0,c.kt)("inlineCode",{parentName:"a"},"cancelConsent")),"  ",(0,c.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);