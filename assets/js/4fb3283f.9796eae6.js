"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(b,c(c({ref:t},l),{},{components:n})):a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15627:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var a=n(83117),o=n(67294),r=n(3905);const c={id:"add-account-memberships-payload",title:"AddAccountMembershipsPayload",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api/unions/add-account-memberships-payload",id:"api/unions/add-account-memberships-payload",title:"AddAccountMembershipsPayload",description:"No description",source:"@site/docs/api/unions/add-account-memberships-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/add-account-memberships-payload",permalink:"/docs/api/unions/add-account-memberships-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/add-account-memberships-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-account-memberships-payload",title:"AddAccountMembershipsPayload",hide_table_of_contents:!1}},s={},l=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddAccountMembershipsSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"addaccountmembershipssuccesspayload-",level:4},{value:'<code>BadAccountStatusRejection</code> <Badge class="secondary" text="object"/>',id:"badaccountstatusrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>InvalidPhoneNumberRejection</code> <Badge class="secondary" text="object"/>',id:"invalidphonenumberrejection-",level:4},{value:'<code>PermissionCannotBeGrantedRejection</code> <Badge class="secondary" text="object"/>',id:"permissioncannotbegrantedrejection-",level:4},{value:'<code>TooManyItemsRejection</code> <Badge class="secondary" text="object"/>',id:"toomanyitemsrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:l,Bullet:p,SpecifiedBy:u,Badge:m},y="wrapper";function j(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddAccountMembershipsPayload = AddAccountMembershipsSuccessPayload | BadAccountStatusRejection | ForbiddenRejection | InvalidPhoneNumberRejection | PermissionCannotBeGrantedRejection | TooManyItemsRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"addaccountmembershipssuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/add-account-memberships-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipsSuccessPayload"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"badaccountstatusrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/bad-account-status-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"BadAccountStatusRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,r.kt)("h4",{id:"forbiddenrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/forbidden-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"invalidphonenumberrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/invalid-phone-number-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"InvalidPhoneNumberRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if phone number is not well formatted")),(0,r.kt)("h4",{id:"permissioncannotbegrantedrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/permission-cannot-be-granted-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"PermissionCannotBeGrantedRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"toomanyitemsrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/too-many-items-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"TooManyItemsRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if too many items are given")),(0,r.kt)("h4",{id:"validationrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/add-account-memberships"},(0,r.kt)("inlineCode",{parentName:"a"},"addAccountMemberships")),"  ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}j.isMDXComponent=!0}}]);