"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,f=d["".concat(c,".").concat(p)]||d[p]||s[p]||r;return n?o.createElement(f,a(a({ref:t},m),{},{components:n})):o.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53452:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var o=n(83117),i=n(67294),r=n(3905);const a={id:"funding-limit-amount",title:"FundingLimitAmount",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api/objects/funding-limit-amount",id:"api/objects/funding-limit-amount",title:"FundingLimitAmount",description:"Funding Limit Amount",source:"@site/docs/api/objects/funding-limit-amount.mdx",sourceDirName:"api/objects",slug:"/api/objects/funding-limit-amount",permalink:"/docs/api/objects/funding-limit-amount",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/funding-limit-amount.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-amount",title:"FundingLimitAmount",hide_table_of_contents:!1}},u={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitAmount.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-fundinglimitamountbamountbcodeamount--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:d,SpecifiedBy:s,Badge:p},g="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Funding Limit Amount"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type FundingLimitAmount {\n  amount: Amount!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitamountbamountbcodeamount--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitAmount.",(0,r.kt)("b",null,"amount"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,r.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The amount settings")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/approved-funding-limit"},(0,r.kt)("inlineCode",{parentName:"a"},"ApprovedFundingLimit")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/funding-limit-settings-change-request"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequest")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);