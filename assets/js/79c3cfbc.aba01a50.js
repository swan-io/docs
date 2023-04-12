"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[12744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,b=u["".concat(i,".").concat(g)]||u[g]||p[g]||o;return n?r.createElement(b,c(c({ref:t},d),{},{components:n})):r.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46457:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(83117),a=n(67294),o=n(3905);const c={id:"card-settings-background-type",title:"CardSettingsBackgroundType",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api/enums/card-settings-background-type",id:"api/enums/card-settings-background-type",title:"CardSettingsBackgroundType",description:"Card Settings Background Type",source:"@site/docs/api/enums/card-settings-background-type.mdx",sourceDirName:"api/enums",slug:"/api/enums/card-settings-background-type",permalink:"/docs/api/enums/card-settings-background-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/card-settings-background-type.mdx",tags:[],version:"current",frontMatter:{id:"card-settings-background-type",title:"CardSettingsBackgroundType",hide_table_of_contents:!1}},s={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CardSettingsBackgroundType.<b>Black</b></code>",id:"code-style-fontweight-normal-cardsettingsbackgroundtypebblackbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CardSettingsBackgroundType.<b>Silver</b></code>",id:"code-style-fontweight-normal-cardsettingsbackgroundtypebsilverbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CardSettingsBackgroundType.<b>Custom</b></code>",id:"code-style-fontweight-normal-cardsettingsbackgroundtypebcustombcode",level:4}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:u,SpecifiedBy:p,Badge:g},k="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Card Settings Background Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CardSettingsBackgroundType {\n  Black\n  Silver\n  Custom\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbackgroundtypebblackbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardSettingsBackgroundType.",(0,o.kt)("b",null,"Black")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when Card background is black")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbackgroundtypebsilverbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardSettingsBackgroundType.",(0,o.kt)("b",null,"Silver")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when Card background is light")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cardsettingsbackgroundtypebcustombcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CardSettingsBackgroundType.",(0,o.kt)("b",null,"Custom")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"when Card background is customized")))}m.isMDXComponent=!0}}]);