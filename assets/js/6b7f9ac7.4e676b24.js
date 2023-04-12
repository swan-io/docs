"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),y=a,m=u["".concat(c,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(m,d(d({ref:t},s),{},{components:n})):r.createElement(m,d({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,d[1]=i;for(var l=2;l<o;l++)d[l]=n[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},56156:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>s});var r=n(83117),a=n(67294),o=n(3905);const d={id:"schedule-standing-order-payload",title:"ScheduleStandingOrderPayload",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api/unions/schedule-standing-order-payload",id:"api/unions/schedule-standing-order-payload",title:"ScheduleStandingOrderPayload",description:"No description",source:"@site/docs/api/unions/schedule-standing-order-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/schedule-standing-order-payload",permalink:"/docs/api/unions/schedule-standing-order-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/schedule-standing-order-payload.mdx",tags:[],version:"current",frontMatter:{id:"schedule-standing-order-payload",title:"ScheduleStandingOrderPayload",hide_table_of_contents:!1}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>ScheduleStandingOrderSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"schedulestandingordersuccesspayload-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:'<code>InvalidArgumentRejection</code> <Badge class="secondary" text="object"/>',id:"invalidargumentrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:p,Badge:y},g="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union ScheduleStandingOrderPayload = ScheduleStandingOrderSuccessPayload | ForbiddenRejection | InternalErrorRejection | InvalidArgumentRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"schedulestandingordersuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/schedule-standing-order-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ScheduleStandingOrderSuccessPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"forbiddenrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/forbidden-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"internalerrorrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/internal-error-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,o.kt)("h4",{id:"invalidargumentrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/invalid-argument-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"InvalidArgumentRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned on invalid argument error")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/mutations/schedule-standing-order"},(0,o.kt)("inlineCode",{parentName:"a"},"scheduleStandingOrder")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);