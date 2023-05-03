"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62530],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,g=s["".concat(l,".").concat(f)]||s[f]||p[f]||c;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94400:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(83117),a=t(67294),c=t(3905);const o={id:"cancel-funding-source",title:"cancelFundingSource",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/mutations/cancel-funding-source",id:"api-reference/mutations/cancel-funding-source",title:"cancelFundingSource",description:"Cancel a funding source",source:"@site/docs/api-reference/mutations/cancel-funding-source.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/cancel-funding-source",permalink:"/docs/api-reference/mutations/cancel-funding-source",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/cancel-funding-source.mdx",tags:[],version:"current",frontMatter:{id:"cancel-funding-source",title:"cancelFundingSource",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"cancelDigitalCard",permalink:"/docs/api-reference/mutations/cancel-digital-card"},next:{title:"cancelPhysicalCard",permalink:"/docs/api-reference/mutations/cancel-physical-card"}},u={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>cancelFundingSource.<b>input</b></code><Bullet /><code>CancelFundingSourceInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-cancelfundingsourcebinputbcodecancelfundingsourceinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CancelFundingSourcePayload</code> <Badge class="secondary" text="union"/>',id:"cancelfundingsourcepayload-",level:4}],s=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:s,SpecifiedBy:p,Badge:f},m="wrapper";function y(e){let{components:n,...t}=e;return(0,c.kt)(m,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Cancel a funding source"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"cancelFundingSource(\n  input: CancelFundingSourceInput!\n): CancelFundingSourcePayload\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-cancelfundingsourcebinputbcodecancelfundingsourceinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"cancelFundingSource.",(0,c.kt)("b",null,"input"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/inputs/cancel-funding-source-input"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelFundingSourceInput!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"cancelfundingsourcepayload-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/unions/cancel-funding-source-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelFundingSourcePayload"))," ",(0,c.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Cancel Funding Source Payload")))}y.isMDXComponent=!0}}]);