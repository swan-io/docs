"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43739:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(83117),r=n(67294),s=n(3905);const o={id:"address-input",title:"AddressInput",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api/inputs/address-input",id:"api/inputs/address-input",title:"AddressInput",description:"Address Information",source:"@site/docs/api/inputs/address-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/address-input",permalink:"/docs/api/inputs/address-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/address-input.mdx",tags:[],version:"current",frontMatter:{id:"address-input",title:"AddressInput",hide_table_of_contents:!1}},i={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInput.<b>addressLine1</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinputbaddressline1bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInput.<b>addressLine2</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinputbaddressline2bcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInput.<b>city</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinputbcitybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInput.<b>postalCode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinputbpostalcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInput.<b>state</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinputbstatebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddressInput.<b>country</b></code><Bullet /><code>CCA3!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addressinputbcountrybcodecca3--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Address Information"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddressInput {\n  addressLine1: String\n  addressLine2: String\n  city: String\n  postalCode: String\n  state: String\n  country: CCA3!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addressinputbaddressline1bcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddressInput.",(0,s.kt)("b",null,"addressLine1"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"address line 1 (max 100 characters)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addressinputbaddressline2bcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddressInput.",(0,s.kt)("b",null,"addressLine2"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"address line 2 (max 100 characters)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addressinputbcitybcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddressInput.",(0,s.kt)("b",null,"city"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"city (max 100 characters)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addressinputbpostalcodebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddressInput.",(0,s.kt)("b",null,"postalCode"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"postal code (max 10 characters)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addressinputbstatebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddressInput.",(0,s.kt)("b",null,"state"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"state (max 100 characters)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addressinputbcountrybcodecca3--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddressInput.",(0,s.kt)("b",null,"country"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/cca3"},(0,s.kt)("inlineCode",{parentName:"a"},"CCA3!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"country code")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api/inputs/sepa-beneficiary-input"},(0,s.kt)("inlineCode",{parentName:"a"},"SepaBeneficiaryInput")),"  ",(0,s.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);