"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),g=l(n),b=r,p=g["".concat(i,".").concat(b)]||g[b]||u[b]||a;return n?o.createElement(p,s(s({ref:t},d),{},{components:n})):o.createElement(p,s({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[g]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},259:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>i,toc:()=>b});var o=n(87462),r=n(67294),a=n(3905);const s={id:"grant-consent-with-server-signature-payload",title:"GrantConsentWithServerSignaturePayload",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/unions/grant-consent-with-server-signature-payload",id:"api-reference/unions/grant-consent-with-server-signature-payload",title:"GrantConsentWithServerSignaturePayload",description:"Payload of the grantConsentWithServerSignature mutation",source:"@site/docs/api-reference/unions/grant-consent-with-server-signature-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/grant-consent-with-server-signature-payload",permalink:"/api-reference/unions/grant-consent-with-server-signature-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/grant-consent-with-server-signature-payload.mdx",tags:[],version:"current",frontMatter:{id:"grant-consent-with-server-signature-payload",title:"GrantConsentWithServerSignaturePayload",hide_table_of_contents:!1}},l={},d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),b=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>GrantConsentWithServerSignatureSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbgrantconsentwithserversignaturesuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ConsentNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbconsentnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>NotReachableConsentStatusRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbnotreachableconsentstatusrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ConsentTypeNotSupportedByServerConsentRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbconsenttypenotsupportedbyserverconsentrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ServerConsentNotAllowedForConsentOperationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentnotallowedforconsentoperationrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ProjectNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbprojectnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ServerConsentNotAllowedForProjectRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentnotallowedforprojectrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ServerConsentProjectSettingsNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentprojectsettingsnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ServerConsentProjectCredentialMissingRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentprojectcredentialmissingrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ServerConsentProjectCredentialNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentprojectcredentialnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ServerConsentCredentialsNotValidOrOutdatedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentcredentialsnotvalidoroutdatedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GrantConsentWithServerSignaturePayload.<b>ServerConsentSignatureNotValidRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentsignaturenotvalidrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:c=!1}=e;const[i,l]=(0,r.useState)(c);return(0,a.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&s)},y={Bullet:d,SpecifiedBy:g,Badge:u,toc:b,Details:p},h="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Payload of the ",(0,a.kt)("inlineCode",{parentName:"p"},"grantConsentWithServerSignature")," mutation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"union GrantConsentWithServerSignaturePayload = GrantConsentWithServerSignatureSuccessPayload | ConsentNotFoundRejection | NotReachableConsentStatusRejection | ForbiddenRejection | ConsentTypeNotSupportedByServerConsentRejection | ServerConsentNotAllowedForConsentOperationRejection | ProjectNotFoundRejection | ServerConsentNotAllowedForProjectRejection | ServerConsentProjectSettingsNotFoundRejection | ServerConsentProjectCredentialMissingRejection | ServerConsentProjectCredentialNotFoundRejection | ServerConsentCredentialsNotValidOrOutdatedRejection | ServerConsentSignatureNotValidRejection\n")),(0,a.kt)("h3",{id:"possible-types"},"Possible types"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbgrantconsentwithserversignaturesuccesspayloadbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/grant-consent-with-server-signature-success-payload"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"GrantConsentWithServerSignatureSuccessPayload")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Success payload of the ",(0,a.kt)("inlineCode",{parentName:"p"},"grantConsentWithServerSignature")," mutation")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbconsentnotfoundrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent-not-found-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ConsentNotFoundRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned if a consent was not found")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbnotreachableconsentstatusrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/not-reachable-consent-status-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"NotReachableConsentStatusRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when consent status couldn't change")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbforbiddenrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ForbiddenRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbconsenttypenotsupportedbyserverconsentrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent-type-not-supported-by-server-consent-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ConsentTypeNotSupportedByServerConsentRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentnotallowedforconsentoperationrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/server-consent-not-allowed-for-consent-operation-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ServerConsentNotAllowedForConsentOperationRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when server consent is not allowed on the consent")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbprojectnotfoundrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/project-not-found-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ProjectNotFoundRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the project is not found")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentnotallowedforprojectrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/server-consent-not-allowed-for-project-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ServerConsentNotAllowedForProjectRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when server consent is not allowed for the project associated with the consent")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentprojectsettingsnotfoundrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/server-consent-project-settings-not-found-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ServerConsentProjectSettingsNotFoundRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the server consent project settings are not found")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentprojectcredentialmissingrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/server-consent-project-credential-missing-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ServerConsentProjectCredentialMissingRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when there are no server consent credentials for the project")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentprojectcredentialnotfoundrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/server-consent-project-credential-not-found-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ServerConsentProjectCredentialNotFoundRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the server consent project credentials are not found")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentcredentialsnotvalidoroutdatedrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/server-consent-credentials-not-valid-or-outdated-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ServerConsentCredentialsNotValidOrOutdatedRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when signature is not valid or remote IP address is not allowed")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-grantconsentwithserversignaturepayloadbserverconsentsignaturenotvalidrejectionbcode-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/server-consent-signature-not-valid-rejection"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GrantConsentWithServerSignaturePayload.",(0,a.kt)("b",null,"ServerConsentSignatureNotValidRejection")))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the signature is not valid\n@Deprecated")),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/mutations/grant-consent-with-server-signature"},(0,a.kt)("inlineCode",{parentName:"a"},"grantConsentWithServerSignature")),"  ",(0,a.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);