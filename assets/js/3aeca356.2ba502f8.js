"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41041],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,c=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(a),y=o,b=u["".concat(d,".").concat(y)]||u[y]||p[y]||c;return a?n.createElement(b,r(r({ref:t},s),{},{components:a})):n.createElement(b,r({ref:t},s))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=a.length,r=new Array(c);r[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var i=2;i<c;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},82134:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=a(83117),o=a(67294),c=a(3905);const r={id:"add-external-account-balance-payload",title:"AddExternalAccountBalancePayload",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api/unions/add-external-account-balance-payload",id:"api/unions/add-external-account-balance-payload",title:"AddExternalAccountBalancePayload",description:"No description",source:"@site/docs/api/unions/add-external-account-balance-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/add-external-account-balance-payload",permalink:"/docs/api/unions/add-external-account-balance-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/add-external-account-balance-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-external-account-balance-payload",title:"AddExternalAccountBalancePayload",hide_table_of_contents:!1}},i={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>AddExternalAccountBalanceSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"addexternalaccountbalancesuccesspayload-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:'<code>ExternalAccountBalanceAlreadyExistsRejection</code> <Badge class="secondary" text="object"/>',id:"externalaccountbalancealreadyexistsrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:u,SpecifiedBy:p,Badge:y},f="wrapper";function m(e){let{components:t,...a}=e;return(0,c.kt)(f,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddExternalAccountBalancePayload = AddExternalAccountBalanceSuccessPayload | ValidationRejection | ExternalAccountBalanceAlreadyExistsRejection | ForbiddenRejection\n")),(0,c.kt)("h3",{id:"possible-types"},"Possible types"),(0,c.kt)("h4",{id:"addexternalaccountbalancesuccesspayload-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/add-external-account-balance-success-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"AddExternalAccountBalanceSuccessPayload"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"validationrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/validation-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,c.kt)("h4",{id:"externalaccountbalancealreadyexistsrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/external-account-balance-already-exists-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccountBalanceAlreadyExistsRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"forbiddenrejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/objects/forbidden-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,c.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"returned-by"},"Returned by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/mutations/add-external-account-balance"},(0,c.kt)("inlineCode",{parentName:"a"},"addExternalAccountBalance")),"  ",(0,c.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);