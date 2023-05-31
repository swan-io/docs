"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[11796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),p=a,f=s["".concat(o,".").concat(p)]||s[p]||y[p]||i;return n?r.createElement(f,d(d({ref:t},c),{},{components:n})):r.createElement(f,d({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:a,d[1]=l;for(var u=2;u<i;u++)d[u]=n[u];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36898:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,SpecifiedBy:()=>y,assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var r=n(83117),a=n(67294),i=n(3905);const d={id:"deny-sdd-virtual-iban-entry",title:"denySddVirtualIbanEntry",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/mutations/deny-sdd-virtual-iban-entry",id:"api-reference/mutations/deny-sdd-virtual-iban-entry",title:"denySddVirtualIbanEntry",description:"Allows to refuse all Sepa Direct Debit received on a Virtual IBAN.",source:"@site/docs/api-reference/mutations/deny-sdd-virtual-iban-entry.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/deny-sdd-virtual-iban-entry",permalink:"/api-reference/mutations/deny-sdd-virtual-iban-entry",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/deny-sdd-virtual-iban-entry.mdx",tags:[],version:"current",frontMatter:{id:"deny-sdd-virtual-iban-entry",title:"denySddVirtualIbanEntry",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"deleteSupportingDocument",permalink:"/api-reference/mutations/delete-supporting-document"},next:{title:"denySdd",permalink:"/api-reference/mutations/deny-sdd"}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>denySddVirtualIbanEntry.<b>input</b></code><Bullet /><code>DenySddVirtualIbanEntryInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-denysddvirtualibanentrybinputbcodedenysddvirtualibanentryinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DenySddVirtualIbanEntryPayload</code> <Badge class="secondary" text="union"/>',id:"denysddvirtualibanentrypayload-",level:4}],s=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:s,SpecifiedBy:y,Badge:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Allows to refuse all Sepa Direct Debit received on a Virtual IBAN."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"denySddVirtualIbanEntry(\n  input: DenySddVirtualIbanEntryInput!\n): DenySddVirtualIbanEntryPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-denysddvirtualibanentrybinputbcodedenysddvirtualibanentryinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"denySddVirtualIbanEntry.",(0,i.kt)("b",null,"input"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/deny-sdd-virtual-iban-entry-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DenySddVirtualIbanEntryInput!"))," ",(0,i.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"denysddvirtualibanentrypayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/unions/deny-sdd-virtual-iban-entry-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"DenySddVirtualIbanEntryPayload"))," ",(0,i.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}b.isMDXComponent=!0}}]);