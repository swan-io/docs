"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[10963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||l[d]||o;return n?r.createElement(h,c(c({ref:t},m),{},{components:n})):r.createElement(h,c({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10614:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,SpecifiedBy:()=>l,assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var r=n(83117),a=n(67294),o=n(3905);const c={id:"resume-account-membership",title:"resumeAccountMembership",hide_table_of_contents:!1},i=void 0,s={unversionedId:"api-reference/mutations/resume-account-membership",id:"api-reference/mutations/resume-account-membership",title:"resumeAccountMembership",description:"Resumes an account membership already suspended.",source:"@site/docs/api-reference/mutations/resume-account-membership.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/resume-account-membership",permalink:"/api-reference/mutations/resume-account-membership",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/resume-account-membership.mdx",tags:[],version:"current",frontMatter:{id:"resume-account-membership",title:"resumeAccountMembership",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"requestSupportingDocumentCollectionReview",permalink:"/api-reference/mutations/request-supporting-document-collection-review"},next:{title:"resumePhysicalCard",permalink:"/api-reference/mutations/resume-physical-card"}},u={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>resumeAccountMembership.<b>input</b></code><Bullet /><code>ResumeAccountMembershipInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-resumeaccountmembershipbinputbcoderesumeaccountmembershipinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ResumeAccountMembershipPayload</code> <Badge class="secondary" text="union"/>',id:"resumeaccountmembershippayload-",level:4}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:m,Bullet:p,SpecifiedBy:l,Badge:d},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Resumes an account membership already suspended."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This mutation is restricted to an User access token (",(0,o.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The user must have an account membership for this account with the attribute ",(0,o.kt)("inlineCode",{parentName:"em"},"canManageAccountMembership=true"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"resumeAccountMembership(\n  input: ResumeAccountMembershipInput\n): ResumeAccountMembershipPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-resumeaccountmembershipbinputbcoderesumeaccountmembershipinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"resumeAccountMembership.",(0,o.kt)("b",null,"input"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/resume-account-membership-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ResumeAccountMembershipInput"))," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"resumeaccountmembershippayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/resume-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ResumeAccountMembershipPayload"))," ",(0,o.kt)(d,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}b.isMDXComponent=!0}}]);