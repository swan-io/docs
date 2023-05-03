"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[55133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,d(d({ref:t},l),{},{components:n})):r.createElement(h,d({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,d[1]=i;for(var c=2;c<o;c++)d[c]=n[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10786:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var r=n(83117),a=n(67294),o=n(3905);const d={id:"schedule-standing-order",title:"scheduleStandingOrder",hide_table_of_contents:!1},i=void 0,s={unversionedId:"api-reference/mutations/schedule-standing-order",id:"api-reference/mutations/schedule-standing-order",title:"scheduleStandingOrder",description:"Schedule a standing Order",source:"@site/docs/api-reference/mutations/schedule-standing-order.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/schedule-standing-order",permalink:"/docs/api-reference/mutations/schedule-standing-order",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/schedule-standing-order.mdx",tags:[],version:"current",frontMatter:{id:"schedule-standing-order",title:"scheduleStandingOrder",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"resumePhysicalCard",permalink:"/docs/api-reference/mutations/resume-physical-card"},next:{title:"suspendAccountMembership",permalink:"/docs/api-reference/mutations/suspend-account-membership"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>scheduleStandingOrder.<b>input</b></code><Bullet /><code>ScheduleStandingOrderInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-schedulestandingorderbinputbcodeschedulestandingorderinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ScheduleStandingOrderPayload</code> <Badge class="secondary" text="union"/>',id:"schedulestandingorderpayload-",level:4}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:l,Bullet:u,SpecifiedBy:p,Badge:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Schedule a standing Order"),(0,o.kt)("p",null,"This mutation is restricted to an User access token (",(0,o.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,o.kt)("p",null,"The user must have an account membership to the account and the permission to initiate credit transfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scheduleStandingOrder(\n  input: ScheduleStandingOrderInput!\n): ScheduleStandingOrderPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-schedulestandingorderbinputbcodeschedulestandingorderinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"scheduleStandingOrder.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/schedule-standing-order-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ScheduleStandingOrderInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"schedulestandingorderpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/schedule-standing-order-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ScheduleStandingOrderPayload"))," ",(0,o.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}g.isMDXComponent=!0}}]);