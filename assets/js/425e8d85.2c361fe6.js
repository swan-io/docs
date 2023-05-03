"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25398],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(g,c(c({ref:t},d),{},{components:a})):n.createElement(g,c({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62826:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=a(83117),r=a(67294),o=a(3905);const c={id:"authenticator",title:"Authenticator",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/objects/authenticator",id:"api-reference/objects/authenticator",title:"Authenticator",description:"A method used to authenticate a user",source:"@site/docs/api-reference/objects/authenticator.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/authenticator",permalink:"/docs/api-reference/objects/authenticator",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/authenticator.mdx",tags:[],version:"current",frontMatter:{id:"authenticator",title:"Authenticator",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ApprovedFundingLimit",permalink:"/docs/api-reference/objects/approved-funding-limit"},next:{title:"BadAccountStatusRejection",permalink:"/docs/api-reference/objects/bad-account-status-rejection"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Authenticator.<b>os</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-authenticatorbosbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Authenticator.<b>brand</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-authenticatorbbrandbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Authenticator.<b>model</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-authenticatorbmodelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Authenticator.<b>type</b></code><Bullet /><code>AuthenticatorType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-authenticatorbtypebcodeauthenticatortype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Authenticator.<b>userAgent</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-authenticatorbuseragentbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Authenticator.<b>acceptLanguage</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-authenticatorbacceptlanguagebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:u,SpecifiedBy:p,Badge:m},h="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A method used to authenticate a user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Authenticator {\n  os: String\n  brand: String\n  model: String\n  type: AuthenticatorType!\n  userAgent: String\n  acceptLanguage: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authenticatorbosbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Authenticator.",(0,o.kt)("b",null,"os"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Operating System (Apple, Android, ...)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authenticatorbbrandbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Authenticator.",(0,o.kt)("b",null,"brand"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Device Brand (Apple, Samsung, ...)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authenticatorbmodelbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Authenticator.",(0,o.kt)("b",null,"model"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Device Model (iPhone XS, Samsung S3, ...)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authenticatorbtypebcodeauthenticatortype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Authenticator.",(0,o.kt)("b",null,"type"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/authenticator-type"},(0,o.kt)("inlineCode",{parentName:"a"},"AuthenticatorType!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Type of authenticator")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authenticatorbuseragentbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Authenticator.",(0,o.kt)("b",null,"userAgent"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"User agent, if it's a web authenticator")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-authenticatorbacceptlanguagebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Authenticator.",(0,o.kt)("b",null,"acceptLanguage"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Accept-Language header used during registration, if it's a web authenticator")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);