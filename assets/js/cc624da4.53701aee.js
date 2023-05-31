"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19992:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(83117),a=n(67294),i=n(3905);const o={id:"grant-consent-with-server-signature-input",title:"GrantConsentWithServerSignatureInput",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/inputs/grant-consent-with-server-signature-input",id:"api-reference/inputs/grant-consent-with-server-signature-input",title:"GrantConsentWithServerSignatureInput",description:"Input of the grantConsentWithServerSignature mutation",source:"@site/docs/api-reference/inputs/grant-consent-with-server-signature-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/grant-consent-with-server-signature-input",permalink:"/api-reference/inputs/grant-consent-with-server-signature-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/grant-consent-with-server-signature-input.mdx",tags:[],version:"current",frontMatter:{id:"grant-consent-with-server-signature-input",title:"GrantConsentWithServerSignatureInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"GenerateSupportingDocumentUploadUrlInput",permalink:"/api-reference/inputs/generate-supporting-document-upload-url-input"},next:{title:"IbanValidationInput",permalink:"/api-reference/inputs/iban-validation-input"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignatureInput.<b>consentId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-grantconsentwithserversignatureinputbconsentidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignatureInput.<b>signature</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-grantconsentwithserversignatureinputbsignaturebcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:p,SpecifiedBy:d,Badge:g},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input of the ",(0,i.kt)("inlineCode",{parentName:"p"},"grantConsentWithServerSignature")," mutation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input GrantConsentWithServerSignatureInput {\n  consentId: ID!\n  signature: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignatureinputbconsentidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignatureInput.",(0,i.kt)("b",null,"consentId"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"ID of the consent to grant")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignatureinputbsignaturebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignatureInput.",(0,i.kt)("b",null,"signature"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Consent challenge signed with server consent credentials")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/mutations/grant-consent-with-server-signature"},(0,i.kt)("inlineCode",{parentName:"a"},"grantConsentWithServerSignature")),"  ",(0,i.kt)(g,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);