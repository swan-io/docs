"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,y=u["".concat(s,".").concat(g)]||u[g]||p[g]||d;return n?r.createElement(y,o(o({ref:t},i),{},{components:n})):r.createElement(y,o({ref:t},i))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,o=new Array(d);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<d;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},30992:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var r=n(87462),a=n(67294),d=n(3905);const o={id:"schedule-standing-order-success-payload",title:"ScheduleStandingOrderSuccessPayload",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api-reference/objects/schedule-standing-order-success-payload",id:"api-reference/objects/schedule-standing-order-success-payload",title:"ScheduleStandingOrderSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/schedule-standing-order-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/schedule-standing-order-success-payload",permalink:"/api-reference/objects/schedule-standing-order-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/schedule-standing-order-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"schedule-standing-order-success-payload",title:"ScheduleStandingOrderSuccessPayload",hide_table_of_contents:!1}},l={},i=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ScheduleStandingOrderSuccessPayload.<b>standingOrder</b></code><Bullet /><code>StandingOrder!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-schedulestandingordersuccesspayloadbstandingorderbcodestandingorder--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:c=!1}=e;const[s,l]=(0,a.useState)(c);return(0,d.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&o)},f={Bullet:i,SpecifiedBy:u,Badge:p,toc:g,Details:y},m="wrapper";function b(e){let{components:t,...n}=e;return(0,d.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type ScheduleStandingOrderSuccessPayload {\n  standingOrder: StandingOrder!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-schedulestandingordersuccesspayloadbstandingorderbcodestandingorder--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"ScheduleStandingOrderSuccessPayload.",(0,d.kt)("b",null,"standingOrder"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/objects/standing-order"},(0,d.kt)("inlineCode",{parentName:"a"},"StandingOrder!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/schedule-standing-order-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"ScheduleStandingOrderPayload")),"  ",(0,d.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);