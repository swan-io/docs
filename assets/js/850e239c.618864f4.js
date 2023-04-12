"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[92116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},j=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),j=r,v=u["".concat(i,".").concat(j)]||u[j]||p[j]||a;return n?o.createElement(v,c(c({ref:t},l),{},{components:n})):o.createElement(v,c({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=j;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,c[1]=s;for(var d=2;d<a;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}j.displayName="MDXCreateElement"},91320:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>j,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=n(83117),r=n(67294),a=n(3905);const c={id:"grant-consent-with-server-signature-payload",title:"GrantConsentWithServerSignaturePayload",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api/unions/grant-consent-with-server-signature-payload",id:"api/unions/grant-consent-with-server-signature-payload",title:"GrantConsentWithServerSignaturePayload",description:"Payload of the grantConsentWithServerSignature mutation",source:"@site/docs/api/unions/grant-consent-with-server-signature-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/grant-consent-with-server-signature-payload",permalink:"/docs/api/unions/grant-consent-with-server-signature-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/grant-consent-with-server-signature-payload.mdx",tags:[],version:"current",frontMatter:{id:"grant-consent-with-server-signature-payload",title:"GrantConsentWithServerSignaturePayload",hide_table_of_contents:!1}},d={},l=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>GrantConsentWithServerSignatureSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"grantconsentwithserversignaturesuccesspayload-",level:4},{value:'<code>ConsentNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"consentnotfoundrejection-",level:4},{value:'<code>NotReachableConsentStatusRejection</code> <Badge class="secondary" text="object"/>',id:"notreachableconsentstatusrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>ConsentTypeNotSupportedByServerConsentRejection</code> <Badge class="secondary" text="object"/>',id:"consenttypenotsupportedbyserverconsentrejection-",level:4},{value:'<code>ServerConsentNotAllowedForConsentOperationRejection</code> <Badge class="secondary" text="object"/>',id:"serverconsentnotallowedforconsentoperationrejection-",level:4},{value:'<code>ProjectNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"projectnotfoundrejection-",level:4},{value:'<code>ServerConsentNotAllowedForProjectRejection</code> <Badge class="secondary" text="object"/>',id:"serverconsentnotallowedforprojectrejection-",level:4},{value:'<code>ServerConsentProjectSettingsNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"serverconsentprojectsettingsnotfoundrejection-",level:4},{value:'<code>ServerConsentProjectCredentialMissingRejection</code> <Badge class="secondary" text="object"/>',id:"serverconsentprojectcredentialmissingrejection-",level:4},{value:'<code>ServerConsentProjectCredentialNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"serverconsentprojectcredentialnotfoundrejection-",level:4},{value:'<code>ServerConsentCredentialsNotValidOrOutdatedRejection</code> <Badge class="secondary" text="object"/>',id:"serverconsentcredentialsnotvalidoroutdatedrejection-",level:4},{value:'<code>ServerConsentSignatureNotValidRejection</code> <Badge class="secondary" text="object"/>',id:"serverconsentsignaturenotvalidrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),j=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),v={toc:l,Bullet:u,SpecifiedBy:p,Badge:j},k="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Payload of the ",(0,a.kt)("inlineCode",{parentName:"p"},"grantConsentWithServerSignature")," mutation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"union GrantConsentWithServerSignaturePayload = GrantConsentWithServerSignatureSuccessPayload | ConsentNotFoundRejection | NotReachableConsentStatusRejection | ForbiddenRejection | ConsentTypeNotSupportedByServerConsentRejection | ServerConsentNotAllowedForConsentOperationRejection | ProjectNotFoundRejection | ServerConsentNotAllowedForProjectRejection | ServerConsentProjectSettingsNotFoundRejection | ServerConsentProjectCredentialMissingRejection | ServerConsentProjectCredentialNotFoundRejection | ServerConsentCredentialsNotValidOrOutdatedRejection | ServerConsentSignatureNotValidRejection\n")),(0,a.kt)("h3",{id:"possible-types"},"Possible types"),(0,a.kt)("h4",{id:"grantconsentwithserversignaturesuccesspayload-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/grant-consent-with-server-signature-success-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"GrantConsentWithServerSignatureSuccessPayload"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Success payload of the ",(0,a.kt)("inlineCode",{parentName:"p"},"grantConsentWithServerSignature")," mutation")),(0,a.kt)("h4",{id:"consentnotfoundrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/consent-not-found-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsentNotFoundRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned if a consent was not found")),(0,a.kt)("h4",{id:"notreachableconsentstatusrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/not-reachable-consent-status-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"NotReachableConsentStatusRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when consent status couldn't change")),(0,a.kt)("h4",{id:"forbiddenrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/forbidden-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"consenttypenotsupportedbyserverconsentrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/consent-type-not-supported-by-server-consent-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsentTypeNotSupportedByServerConsentRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"serverconsentnotallowedforconsentoperationrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/server-consent-not-allowed-for-consent-operation-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerConsentNotAllowedForConsentOperationRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when server consent is not allowed on the consent")),(0,a.kt)("h4",{id:"projectnotfoundrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/project-not-found-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ProjectNotFoundRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the project is not found")),(0,a.kt)("h4",{id:"serverconsentnotallowedforprojectrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/server-consent-not-allowed-for-project-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerConsentNotAllowedForProjectRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when server consent is not allowed for the project associated with the consent")),(0,a.kt)("h4",{id:"serverconsentprojectsettingsnotfoundrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/server-consent-project-settings-not-found-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerConsentProjectSettingsNotFoundRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the server consent project settings are not found")),(0,a.kt)("h4",{id:"serverconsentprojectcredentialmissingrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/server-consent-project-credential-missing-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerConsentProjectCredentialMissingRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when there are no server consent credentials for the project")),(0,a.kt)("h4",{id:"serverconsentprojectcredentialnotfoundrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/server-consent-project-credential-not-found-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerConsentProjectCredentialNotFoundRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the server consent project credentials are not found")),(0,a.kt)("h4",{id:"serverconsentcredentialsnotvalidoroutdatedrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/server-consent-credentials-not-valid-or-outdated-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerConsentCredentialsNotValidOrOutdatedRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when signature is not valid or remote IP address is not allowed")),(0,a.kt)("h4",{id:"serverconsentsignaturenotvalidrejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api/objects/server-consent-signature-not-valid-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerConsentSignatureNotValidRejection"))," ",(0,a.kt)(j,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Rejection returned when the signature is not valid\n@Deprecated")),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/mutations/grant-consent-with-server-signature"},(0,a.kt)("inlineCode",{parentName:"a"},"grantConsentWithServerSignature")),"  ",(0,a.kt)(j,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);