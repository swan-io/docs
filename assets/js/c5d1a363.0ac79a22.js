"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[3600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=c(n),m=o,g=l["".concat(i,".").concat(m)]||l[m]||s[m]||a;return n?r.createElement(g,p(p({ref:t},d),{},{components:n})):r.createElement(g,p({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[l]="string"==typeof e?e:o,p[1]=u;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73533:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var r=n(83117),o=n(67294),a=n(3905);const p={id:"update-supporting-document",title:"updateSupportingDocument",hide_table_of_contents:!1},u=void 0,i={unversionedId:"api-reference/mutations/update-supporting-document",id:"api-reference/mutations/update-supporting-document",title:"updateSupportingDocument",description:"No description",source:"@site/docs/api-reference/mutations/update-supporting-document.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/update-supporting-document",permalink:"/api-reference/mutations/update-supporting-document",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/update-supporting-document.mdx",tags:[],version:"current",frontMatter:{id:"update-supporting-document",title:"updateSupportingDocument",hide_table_of_contents:!1}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateSupportingDocument.<b>input</b></code><Bullet /><code>UpdateSupportingDocumentInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatesupportingdocumentbinputbcodeupdatesupportingdocumentinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateSupportingDocumentPayload</code> <Badge class="secondary" text="union"/>',id:"updatesupportingdocumentpayload-",level:4}],l=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:l,SpecifiedBy:s,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSupportingDocument(\n  input: UpdateSupportingDocumentInput!\n): UpdateSupportingDocumentPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updatesupportingdocumentbinputbcodeupdatesupportingdocumentinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"updateSupportingDocument.",(0,a.kt)("b",null,"input"))),(0,a.kt)(l,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/inputs/update-supporting-document-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateSupportingDocumentInput!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"updatesupportingdocumentpayload-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/unions/update-supporting-document-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateSupportingDocumentPayload"))," ",(0,a.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}y.isMDXComponent=!0}}]);