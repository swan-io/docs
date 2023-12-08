"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[90788],{3905:(e,o,t)=>{t.d(o,{Zo:()=>s,kt:()=>b});var n=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function d(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):c(c({},o),e)),t},s=function(e){var o=i(e.components);return n.createElement(l.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},y=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(t),y=a,b=p["".concat(l,".").concat(y)]||p[y]||u[y]||r;return t?n.createElement(b,c(c({ref:o},s),{},{components:t})):n.createElement(b,c({ref:o},s))}));function b(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=y;var d={};for(var l in o)hasOwnProperty.call(o,l)&&(d[l]=o[l]);d.originalType=e,d[p]="string"==typeof e?e:a,c[1]=d;for(var i=2;i<r;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},46882:(e,o,t)=>{t.r(o),t.d(o,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>y});var n=t(87462),a=t(67294),r=t(3905);const c={id:"onboard-company-account-holder-payload",title:"OnboardCompanyAccountHolderPayload",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/unions/onboard-company-account-holder-payload",id:"api-reference/unions/onboard-company-account-holder-payload",title:"OnboardCompanyAccountHolderPayload",description:"No description",source:"@site/docs/api-reference/unions/onboard-company-account-holder-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/onboard-company-account-holder-payload",permalink:"/api-reference/unions/onboard-company-account-holder-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/onboard-company-account-holder-payload.mdx",tags:[],version:"current",frontMatter:{id:"onboard-company-account-holder-payload",title:"OnboardCompanyAccountHolderPayload",hide_table_of_contents:!1}},i={},s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),y=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderPayload.<b>OnboardCompanyAccountHolderSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderpayloadbonboardcompanyaccountholdersuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderPayload.<b>BadRequestRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderpayloadbbadrequestrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderpayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderpayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:o,dataClose:t,children:c,startOpen:d=!1}=e;const[l,i]=(0,a.useState)(d);return(0,r.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?o:t),l&&c)},m={Bullet:s,SpecifiedBy:p,Badge:u,toc:y,Details:b},f="wrapper";function g(e){let{components:o,...t}=e;return(0,r.kt)(f,(0,n.Z)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union OnboardCompanyAccountHolderPayload = OnboardCompanyAccountHolderSuccessPayload | BadRequestRejection | ForbiddenRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderpayloadbonboardcompanyaccountholdersuccesspayloadbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/onboard-company-account-holder-success-payload"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderPayload.",(0,r.kt)("b",null,"OnboardCompanyAccountHolderSuccessPayload")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderpayloadbbadrequestrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/bad-request-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderPayload.",(0,r.kt)("b",null,"BadRequestRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderpayloadbforbiddenrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderPayload.",(0,r.kt)("b",null,"ForbiddenRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderpayloadbvalidationrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderPayload.",(0,r.kt)("b",null,"ValidationRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/onboard-company-account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"onboardCompanyAccountHolder")),"  ",(0,r.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);