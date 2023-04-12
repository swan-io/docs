"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[32900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,l(l({ref:t},i),{},{components:n})):a.createElement(h,l({ref:t},i))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93242:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(83117),o=n(67294),r=n(3905);const l={id:"complete-address-with-contact-input",title:"CompleteAddressWithContactInput",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api/inputs/complete-address-with-contact-input",id:"api/inputs/complete-address-with-contact-input",title:"CompleteAddressWithContactInput",description:"Complete Address Information with a contact",source:"@site/docs/api/inputs/complete-address-with-contact-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/complete-address-with-contact-input",permalink:"/docs/api/inputs/complete-address-with-contact-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/complete-address-with-contact-input.mdx",tags:[],version:"current",frontMatter:{id:"complete-address-with-contact-input",title:"CompleteAddressWithContactInput",hide_table_of_contents:!1}},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>addressLine1</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputbaddressline1bcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>addressLine2</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputbaddressline2bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>city</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputbcitybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>postalCode</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputbpostalcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>state</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputbstatebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>country</b></code><Bullet /><code>CCA3!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputbcountrybcodecca3--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>firstName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputbfirstnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>lastName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputblastnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>phoneNumber</b></code><Bullet /><code>PhoneNumber!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputbphonenumberbcodephonenumber--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompleteAddressWithContactInput.<b>companyName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-completeaddresswithcontactinputbcompanynamebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:i,Bullet:p,SpecifiedBy:m,Badge:u},y="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Complete Address Information with a contact"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input CompleteAddressWithContactInput {\n  addressLine1: String!\n  addressLine2: String\n  city: String!\n  postalCode: String!\n  state: String\n  country: CCA3!\n  firstName: String!\n  lastName: String!\n  phoneNumber: PhoneNumber!\n  companyName: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputbaddressline1bcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"addressLine1"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"address line 1 (max 38 characters)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputbaddressline2bcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"addressLine2"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"address line 2 (max 38 characters)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputbcitybcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"city"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"city (max 30 characters)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputbpostalcodebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"postalCode"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"postal code (max 10 characters)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputbstatebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"state"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"state (max 30 characters)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputbcountrybcodecca3--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"country"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/cca3"},(0,r.kt)("inlineCode",{parentName:"a"},"CCA3!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"country code")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputbfirstnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"firstName"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"contact first name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputblastnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"lastName"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"contact last name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputbphonenumberbcodephonenumber--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"phoneNumber"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/phone-number"},(0,r.kt)("inlineCode",{parentName:"a"},"PhoneNumber!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"contact phone number")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-completeaddresswithcontactinputbcompanynamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompleteAddressWithContactInput.",(0,r.kt)("b",null,"companyName"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"contact company name (max 38 characters)")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/add-cards-with-group-delivery-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AddCardsWithGroupDeliveryInput")),"  ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);