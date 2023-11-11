"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||o;return n?a.createElement(m,c(c({ref:t},i),{},{components:n})):a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[d]="string"==typeof e?e:r,c[1]=u;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55443:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var a=n(83117),r=n(67294),o=n(3905);const c={id:"update-account",title:"updateAccount",hide_table_of_contents:!1},u=void 0,l={unversionedId:"api-reference/mutations/update-account",id:"api-reference/mutations/update-account",title:"updateAccount",description:"Update an account.",source:"@site/docs/api-reference/mutations/update-account.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/update-account",permalink:"/api-reference/mutations/update-account",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/update-account.mdx",tags:[],version:"current",frontMatter:{id:"update-account",title:"updateAccount",hide_table_of_contents:!1}},p={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateAccount.<b>input</b></code><Bullet /><code>UpdateAccountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateaccountbinputbcodeupdateaccountinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateAccountPayload</code> <Badge class="secondary" text="union"/>',id:"updateaccountpayload-",level:4}],d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:d,SpecifiedBy:s,Badge:f},y="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Update an account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateAccount(\n  input: UpdateAccountInput!\n): UpdateAccountPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateaccountbinputbcodeupdateaccountinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateAccount.",(0,o.kt)("b",null,"input"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/update-account-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAccountInput!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updateaccountpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/update-account-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateAccountPayload"))," ",(0,o.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}g.isMDXComponent=!0}}]);