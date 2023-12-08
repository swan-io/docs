"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[34173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_label:"Welcome",slug:"/"},i="Welcome",s={unversionedId:"index",id:"index",title:"Welcome",description:"Welcome to Swan's product, partnership, and developer documentation.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/index.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Welcome",slug:"/"},sidebar:"docSidebar",next:{title:"Glossary",permalink:"/glossary"}},l={},c=[{value:"Where to start?",id:"where-to-start",level:2},{value:"Swan snapshot",id:"swan-snapshot",level:2},{value:"About Swan documentation",id:"about-swan-documentation",level:2},{value:"Site anatomy",id:"site-anatomy",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome"},"Welcome"),(0,a.kt)("p",null,"Welcome to Swan's product, partnership, and developer documentation."),(0,a.kt)("h2",{id:"where-to-start"},"Where to start?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Read this page")," to understand more about Swan"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Browse the navigation")," to find your topic"),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("strong",{parentName:"li"},"global search")," to find what you need")),(0,a.kt)("h2",{id:"swan-snapshot"},"Swan snapshot"),(0,a.kt)("p",null,"Swan is an ",(0,a.kt)("strong",{parentName:"p"},"API-first e-money institution")," that ",(0,a.kt)("strong",{parentName:"p"},"integrates directly into other products"),", providing financial services for partners and their clients.\nUse cases vary widely, from buy-now/pay-later setups to employee benefits cards to rental management."),(0,a.kt)("h2",{id:"about-swan-documentation"},"About Swan documentation"),(0,a.kt)("p",null,"This primary section of Swan's documentation covers two main themes: ",(0,a.kt)("strong",{parentName:"p"},"concepts"),", or explanatory content, and ",(0,a.kt)("strong",{parentName:"p"},"guides"),", providing steps to complete a task."),(0,a.kt)("admonition",{title:"More to come",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Swan is in a full documentation migration.\nOver the coming weeks, you'll see more content in this main section.\nDeveloper and Partnership sections are coming soon.")),(0,a.kt)("h3",{id:"site-anatomy"},"Site anatomy"),(0,a.kt)("p",null,"The anatomy of the Swan documentation site has five main sections:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Top navigation"),": Swan's different types of partner documentation, including the main docs (where you are now), information about partnerships with Swan ",(0,a.kt)("em",{parentName:"li"},"(coming soon)"),", and a section just for developers ",(0,a.kt)("em",{parentName:"li"},"(also coming soon)"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Sidebar navigation"),": links to all content for this top navigation section."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Changelog")," & ",(0,a.kt)("strong",{parentName:"li"},"Search"),": link to Swan's product changelog ",(0,a.kt)("em",{parentName:"li"},"(coming soon)"),", plus the invaluable global search that unifies all sections in the top navigation (powered by Algolia)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Page navigation"),": table of contents for this page only, generated using the page's headings."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Edit link"),": if you find errors or would like to contribute something you've discovered, follow this link to the Swan documentation GitHub repository and start a discussion or create a pull request.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"callouts of homepage",src:n(9141).Z,width:"2351",height:"1289"})))}u.isMDXComponent=!0},9141:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/docs-anatomy-c79c5f46241d107903924aa8439c5354.png"}}]);