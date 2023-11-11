"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[56124],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(a),y=r,f=u["".concat(d,".").concat(y)]||u[y]||p[y]||s;return a?n.createElement(f,o(o({ref:t},i),{},{components:a})):n.createElement(f,o({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},8807:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var n=a(83117),r=a(67294),s=a(3905);const o={id:"physical-card-renewed-status-info",title:"PhysicalCardRenewedStatusInfo",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/physical-card-renewed-status-info",id:"api-reference/objects/physical-card-renewed-status-info",title:"PhysicalCardRenewedStatusInfo",description:"Physical Card Renewed Status Information",source:"@site/docs/api-reference/objects/physical-card-renewed-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/physical-card-renewed-status-info",permalink:"/api-reference/objects/physical-card-renewed-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/physical-card-renewed-status-info.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-renewed-status-info",title:"PhysicalCardRenewedStatusInfo",hide_table_of_contents:!1}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardRenewedStatusInfo.<b>status</b></code><Bullet /><code>PhysicalCardStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobstatusbcodephysicalcardstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardRenewedStatusInfo.<b>address</b></code><Bullet /><code>Address!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobaddressbcodeaddress--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardRenewedStatusInfo.<b>estimatedDeliveryDate</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobestimateddeliverydatebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardRenewedStatusInfo.<b>trackingNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobtrackingnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardRenewedStatusInfo.<b>shippingProvider</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobshippingproviderbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardRenewedStatusInfo.<b>isPINReady</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobispinreadybcodeboolean--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PhysicalCardStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"physicalcardstatusinfo-",level:4}],u=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:u,SpecifiedBy:p,Badge:y},m="wrapper";function h(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Physical Card Renewed Status Information"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type PhysicalCardRenewedStatusInfo implements PhysicalCardStatusInfo {\n  status: PhysicalCardStatus!\n  address: Address!\n  estimatedDeliveryDate: DateTime\n  trackingNumber: String\n  shippingProvider: String\n  isPINReady: Boolean!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobstatusbcodephysicalcardstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardRenewedStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/enums/physical-card-status"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatus!"))," ",(0,s.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Physical Card status (always Renewed for type PhysicalCardRenewedStatusInfo).")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobaddressbcodeaddress--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardRenewedStatusInfo.",(0,s.kt)("b",null,"address"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/objects/address"},(0,s.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,s.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"address to deliver the physical card")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobestimateddeliverydatebcodedatetime-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardRenewedStatusInfo.",(0,s.kt)("b",null,"estimatedDeliveryDate"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,s.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Estimated delivery date")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobtrackingnumberbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardRenewedStatusInfo.",(0,s.kt)("b",null,"trackingNumber"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Shipping tracking number")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobshippingproviderbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardRenewedStatusInfo.",(0,s.kt)("b",null,"shippingProvider"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Name of the shipping provider (Ex: LaPoste, DHL ...)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-physicalcardrenewedstatusinfobispinreadybcodeboolean--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardRenewedStatusInfo.",(0,s.kt)("b",null,"isPINReady"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,s.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"true")," if PIN Code is available.")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"physicalcardstatusinfo-"},(0,s.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/physical-card-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PhysicalCardStatusInfo"))," ",(0,s.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Physical Card Status Information")))}h.isMDXComponent=!0}}]);