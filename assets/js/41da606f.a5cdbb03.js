"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84890],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(a),h=r,y=p["".concat(o,".").concat(h)]||p[h]||u[h]||c;return a?n.createElement(y,s(s({ref:t},d),{},{components:a})):n.createElement(y,s({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<c;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},24183:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(83117),r=a(67294),c=a(3905);const s={id:"physical-card-status",title:"PhysicalCardStatus",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/enums/physical-card-status",id:"api-reference/enums/physical-card-status",title:"PhysicalCardStatus",description:"Physical Card Status",source:"@site/docs/api-reference/enums/physical-card-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/physical-card-status",permalink:"/docs/api-reference/enums/physical-card-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/physical-card-status.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-status",title:"PhysicalCardStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PendingDigitalCardStatus",permalink:"/docs/api-reference/enums/pending-digital-card-status"},next:{title:"PreferredNotificationChannel",permalink:"/docs/api-reference/enums/preferred-notification-channel"}},i={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>ConsentPending</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbconsentpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Processing</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbprocessingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Activated</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbactivatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbsuspendedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Canceling</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbcancelingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>ToActivate</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbtoactivatebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Renewed</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbrenewedbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:h},f="wrapper";function m(e){let{components:t,...a}=e;return(0,c.kt)(f,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Physical Card Status"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PhysicalCardStatus {\n  ConsentPending\n  Processing\n  Activated\n  Suspended\n  Canceled\n  Canceling\n  ToActivate\n  Renewed\n}\n")),(0,c.kt)("h3",{id:"values"},"Values"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbconsentpendingbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,c.kt)("b",null,"ConsentPending")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"when the consent to authorize physical card production is pending")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbprocessingbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,c.kt)("b",null,"Processing")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"when the physical card is in the process of being ready to use")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbactivatedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,c.kt)("b",null,"Activated")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"when the physical card is activated")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbsuspendedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,c.kt)("b",null,"Suspended")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"when the physical card is suspended")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbcanceledbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,c.kt)("b",null,"Canceled")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"when the physical card is canceled")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbcancelingbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,c.kt)("b",null,"Canceling")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"when the physical card is about to be canceled")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbtoactivatebcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,c.kt)("b",null,"ToActivate")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"when the physical card is not yet activated")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbrenewedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,c.kt)("b",null,"Renewed")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"when the physical card is renewed")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-activated-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardActivatedStatusInfo")),"  ",(0,c.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-canceled-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardCanceledStatusInfo")),"  ",(0,c.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-canceling-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardCancelingStatusInfo")),"  ",(0,c.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-consent-pending-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardConsentPendingStatusInfo")),"  ",(0,c.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-processing-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardProcessingStatusInfo")),"  ",(0,c.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-renewed-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardRenewedStatusInfo")),"  ",(0,c.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/physical-card-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatusInfo")),"  ",(0,c.kt)(h,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-suspended-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardSuspendedStatusInfo")),"  ",(0,c.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-to-activate-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardToActivateStatusInfo")),"  ",(0,c.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card-wrong-status-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCardWrongStatusRejection")),"  ",(0,c.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);