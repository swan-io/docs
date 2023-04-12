"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9936],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var r=n.createContext({}),i=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(r.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,s=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(a),h=c,y=p["".concat(r,".").concat(h)]||p[h]||u[h]||s;return a?n.createElement(y,l(l({ref:t},d),{},{components:a})):n.createElement(y,l({ref:t},d))}));function y(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=a.length,l=new Array(s);l[0]=h;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[p]="string"==typeof e?e:c,l[1]=o;for(var i=2;i<s;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},56484:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=a(83117),c=a(67294),s=a(3905);const l={id:"physical-card-status",title:"PhysicalCardStatus",hide_table_of_contents:!1},o=void 0,r={unversionedId:"api/enums/physical-card-status",id:"api/enums/physical-card-status",title:"PhysicalCardStatus",description:"Physical Card Status",source:"@site/docs/api/enums/physical-card-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/physical-card-status",permalink:"/docs/api/enums/physical-card-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/physical-card-status.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-status",title:"PhysicalCardStatus",hide_table_of_contents:!1}},i={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>ConsentPending</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbconsentpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Processing</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbprocessingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Activated</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbactivatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbsuspendedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Canceling</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbcancelingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>ToActivate</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbtoactivatebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PhysicalCardStatus.<b>Renewed</b></code>",id:"code-style-fontweight-normal-physicalcardstatusbrenewedbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,s.kt)(c.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(c.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,s.kt)(c.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:h},m="wrapper";function f(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Physical Card Status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PhysicalCardStatus {\n  ConsentPending\n  Processing\n  Activated\n  Suspended\n  Canceled\n  Canceling\n  ToActivate\n  Renewed\n}\n")),(0,s.kt)("h3",{id:"values"},"Values"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbconsentpendingbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,s.kt)("b",null,"ConsentPending")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"when the consent to authorize physical card production is pending")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbprocessingbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,s.kt)("b",null,"Processing")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"when the physical card is in the process of being ready to use")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbactivatedbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,s.kt)("b",null,"Activated")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"when the physical card is activated")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbsuspendedbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,s.kt)("b",null,"Suspended")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"when the physical card is suspended")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbcanceledbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,s.kt)("b",null,"Canceled")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"when the physical card is canceled")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbcancelingbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,s.kt)("b",null,"Canceling")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"when the physical card is about to be canceled")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbtoactivatebcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,s.kt)("b",null,"ToActivate")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"when the physical card is not yet activated")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardstatusbrenewedbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardStatus.",(0,s.kt)("b",null,"Renewed")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"when the physical card is renewed")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api/objects/physical-card-activated-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardActivatedStatusInfo")),"  ",(0,s.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/physical-card-canceled-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardCanceledStatusInfo")),"  ",(0,s.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/physical-card-canceling-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardCancelingStatusInfo")),"  ",(0,s.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/physical-card-consent-pending-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardConsentPendingStatusInfo")),"  ",(0,s.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/physical-card-processing-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardProcessingStatusInfo")),"  ",(0,s.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/physical-card-renewed-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardRenewedStatusInfo")),"  ",(0,s.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/interfaces/physical-card-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatusInfo")),"  ",(0,s.kt)(h,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/physical-card-suspended-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardSuspendedStatusInfo")),"  ",(0,s.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/physical-card-to-activate-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardToActivateStatusInfo")),"  ",(0,s.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/physical-card-wrong-status-rejection"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardWrongStatusRejection")),"  ",(0,s.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);