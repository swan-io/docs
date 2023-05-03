"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[29698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,g=u["".concat(i,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54363:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(83117),a=n(67294),o=n(3905);const s={id:"grant-consent-with-server-signature-success-payload",title:"GrantConsentWithServerSignatureSuccessPayload",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/grant-consent-with-server-signature-success-payload",id:"api-reference/objects/grant-consent-with-server-signature-success-payload",title:"GrantConsentWithServerSignatureSuccessPayload",description:"Success payload of the grantConsentWithServerSignature mutation",source:"@site/docs/api-reference/objects/grant-consent-with-server-signature-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/grant-consent-with-server-signature-success-payload",permalink:"/docs/api-reference/objects/grant-consent-with-server-signature-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/grant-consent-with-server-signature-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"grant-consent-with-server-signature-success-payload",title:"GrantConsentWithServerSignatureSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"GlobalInstantFundingLimitExceededRejection",permalink:"/docs/api-reference/objects/global-instant-funding-limit-exceeded-rejection"},next:{title:"Headquarters",permalink:"/docs/api-reference/objects/headquarters"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignatureSuccessPayload.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturesuccesspayloadbconsentbcodeconsent--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:u,SpecifiedBy:p,Badge:f},y="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Success payload of the ",(0,o.kt)("inlineCode",{parentName:"p"},"grantConsentWithServerSignature")," mutation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type GrantConsentWithServerSignatureSuccessPayload {\n  consent: Consent!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturesuccesspayloadbconsentbcodeconsent--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignatureSuccessPayload.",(0,o.kt)("b",null,"consent"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent"},(0,o.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/grant-consent-with-server-signature-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"GrantConsentWithServerSignaturePayload")),"  ",(0,o.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);