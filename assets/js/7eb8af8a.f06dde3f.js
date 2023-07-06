"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18150:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(83117),a=r(67294),o=r(3905);const i={id:"updated-restricted-to-input",title:"UpdatedRestrictedToInput",hide_table_of_contents:!1},d=void 0,c={unversionedId:"api-reference/inputs/updated-restricted-to-input",id:"api-reference/inputs/updated-restricted-to-input",title:"UpdatedRestrictedToInput",description:"Input when the account membership is restricted to a verified user",source:"@site/docs/api-reference/inputs/updated-restricted-to-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/updated-restricted-to-input",permalink:"/api-reference/inputs/updated-restricted-to-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/updated-restricted-to-input.mdx",tags:[],version:"current",frontMatter:{id:"updated-restricted-to-input",title:"UpdatedRestrictedToInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateUserConsentSettingsInput",permalink:"/api-reference/inputs/update-user-consent-settings-input"},next:{title:"UserFilterInput",permalink:"/api-reference/inputs/user-filter-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdatedRestrictedToInput.<b>firstName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatedrestrictedtoinputbfirstnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdatedRestrictedToInput.<b>lastName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatedrestrictedtoinputblastnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdatedRestrictedToInput.<b>birthDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatedrestrictedtoinputbbirthdatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdatedRestrictedToInput.<b>phoneNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatedrestrictedtoinputbphonenumberbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:u,Badge:m},b="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input when the account membership is restricted to a verified user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdatedRestrictedToInput {\n  firstName: String\n  lastName: String\n  birthDate: Date\n  phoneNumber: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatedrestrictedtoinputbfirstnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdatedRestrictedToInput.",(0,o.kt)("b",null,"firstName"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account member first name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatedrestrictedtoinputblastnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdatedRestrictedToInput.",(0,o.kt)("b",null,"lastName"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account member last name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatedrestrictedtoinputbbirthdatebcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdatedRestrictedToInput.",(0,o.kt)("b",null,"birthDate"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account member birth date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatedrestrictedtoinputbphonenumberbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdatedRestrictedToInput.",(0,o.kt)("b",null,"phoneNumber"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account member phone number")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/update-account-membership-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAccountMembershipInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);