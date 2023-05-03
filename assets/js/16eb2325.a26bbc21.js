"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[40333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(s,".").concat(m)]||l[m]||u[m]||c;return n?o.createElement(b,a(a({ref:t},d),{},{components:n})):o.createElement(b,a({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89803:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(83117),r=n(67294),c=n(3905);const a={id:"pending-consent-account-membership-update",title:"PendingConsentAccountMembershipUpdate",hide_table_of_contents:!1},i=void 0,s={unversionedId:"api-reference/objects/pending-consent-account-membership-update",id:"api-reference/objects/pending-consent-account-membership-update",title:"PendingConsentAccountMembershipUpdate",description:"Pending Consent when the account membership will be updated",source:"@site/docs/api-reference/objects/pending-consent-account-membership-update.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/pending-consent-account-membership-update",permalink:"/docs/api-reference/objects/pending-consent-account-membership-update",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/pending-consent-account-membership-update.mdx",tags:[],version:"current",frontMatter:{id:"pending-consent-account-membership-update",title:"PendingConsentAccountMembershipUpdate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PdfStatement",permalink:"/docs/api-reference/objects/pdf-statement"},next:{title:"PendingDigitalCard",permalink:"/docs/api-reference/objects/pending-digital-card"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PendingConsentAccountMembershipUpdate.<b>accountMembershipId</b></code><Bullet /><code>AccountMembership!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-pendingconsentaccountmembershipupdatebaccountmembershipidbcodeaccountmembership--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PendingConsentAccountMembershipUpdate.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-pendingconsentaccountmembershipupdatebconsentbcodeconsent--",level:4}],l=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:l,SpecifiedBy:u,Badge:m},f="wrapper";function h(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Pending Consent when the account membership will be updated"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type PendingConsentAccountMembershipUpdate {\n  accountMembershipId: AccountMembership!\n  consent: Consent!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-pendingconsentaccountmembershipupdatebaccountmembershipidbcodeaccountmembership--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PendingConsentAccountMembershipUpdate.",(0,c.kt)("b",null,"accountMembershipId"))),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-membership"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembership!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"new account membership version waiting for consent")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-pendingconsentaccountmembershipupdatebconsentbcodeconsent--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PendingConsentAccountMembershipUpdate.",(0,c.kt)("b",null,"consent"))),(0,c.kt)(l,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent"},(0,c.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The consent required to update the account membership")))}h.isMDXComponent=!0}}]);