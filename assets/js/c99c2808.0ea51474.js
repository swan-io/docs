"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70247],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(a),y=r,m=p["".concat(i,".").concat(y)]||p[y]||u[y]||o;return a?n.createElement(m,d(d({ref:t},s),{},{components:a})):n.createElement(m,d({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,d[1]=c;for(var l=2;l<o;l++)d[l]=a[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},44693:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var n=a(83117),r=a(67294),o=a(3905);const d={id:"bad-account-status-rejection",title:"BadAccountStatusRejection",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/bad-account-status-rejection",id:"api-reference/objects/bad-account-status-rejection",title:"BadAccountStatusRejection",description:"Rejection returned if the status account is not valid",source:"@site/docs/api-reference/objects/bad-account-status-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/bad-account-status-rejection",permalink:"/docs/api-reference/objects/bad-account-status-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/bad-account-status-rejection.mdx",tags:[],version:"current",frontMatter:{id:"bad-account-status-rejection",title:"BadAccountStatusRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Authenticator",permalink:"/docs/api-reference/objects/authenticator"},next:{title:"BadRequestRejection",permalink:"/docs/api-reference/objects/bad-request-rejection"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>BadAccountStatusRejection.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-badaccountstatusrejectionbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BadAccountStatusRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-badaccountstatusrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:u,Badge:y},f="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rejection returned if the status account is not valid"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type BadAccountStatusRejection implements Rejection {\n  id: String!\n  message: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-badaccountstatusrejectionbidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BadAccountStatusRejection.",(0,o.kt)("b",null,"id"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-badaccountstatusrejectionbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BadAccountStatusRejection.",(0,o.kt)("b",null,"message"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"rejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/activate-physical-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivatePhysicalCardPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-account-memberships-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipsPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddCardPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-cards-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddCardsPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-cards-with-group-delivery-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddCardsWithGroupDeliveryPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-digital-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddDigitalCardPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-single-use-virtual-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-single-use-virtual-cards-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardsPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/add-virtual-iban-entry-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddVirtualIbanEntryPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/allow-sdd-virtual-iban-entry-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AllowSddVirtualIbanEntryPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/bind-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"BindAccountMembershipPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/cancel-virtual-iban-entry-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CancelVirtualIbanEntryPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/close-account-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CloseAccountPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/deny-sdd-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DenySddPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/deny-sdd-virtual-iban-entry-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DenySddVirtualIbanEntryPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/print-physical-card-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"PrintPhysicalCardPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/update-account-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAccountPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);