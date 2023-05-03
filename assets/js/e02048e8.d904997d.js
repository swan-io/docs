"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50472],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||c;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[f]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60573:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>d,Bullet:()=>f,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(83117),a=t(67294),c=t(3905);const o={id:"sepa-reference",title:"SepaReference",hide_table_of_contents:!1},i=void 0,s={unversionedId:"api-reference/scalars/sepa-reference",id:"api-reference/scalars/sepa-reference",title:"SepaReference",description:"SEPA Identifier",source:"@site/docs/api-reference/scalars/sepa-reference.mdx",sourceDirName:"api-reference/scalars",slug:"/api-reference/scalars/sepa-reference",permalink:"/docs/api-reference/scalars/sepa-reference",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/scalars/sepa-reference.mdx",tags:[],version:"current",frontMatter:{id:"sepa-reference",title:"SepaReference",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SepaCreditorIdentifier",permalink:"/docs/api-reference/scalars/sepa-creditor-identifier"},next:{title:"String",permalink:"/docs/api-reference/scalars/string"}},l={},p=[],f=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:f,SpecifiedBy:u,Badge:d},y="wrapper";function g(e){let{components:r,...t}=e;return(0,c.kt)(y,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"SEPA Identifier\nmax 35 Latin characters as follow :\na b c d e f g h i j k l m n o p q r s t u v w x y z\nA B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n0 1 2 3 4 5 6 7 8 9\n/ - ? : ( ) . , '  +\nwith some follow extra rules :\nContent must not start or end with a \u2018/\u2019\nContent must not contain \u2018//\u2019s"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar SepaReference\n")))}g.isMDXComponent=!0}}]);