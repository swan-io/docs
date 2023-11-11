"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[22319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={title:"Card payments"},s="Card payments",c={unversionedId:"topics/payments/card-payments/about",id:"topics/payments/card-payments/about",title:"Card payments",description:"Transaction statuses for cards",source:"@site/docs/topics/payments/card-payments/about.mdx",sourceDirName:"topics/payments/card-payments",slug:"/topics/payments/card-payments/about",permalink:"/topics/payments/card-payments/about",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/payments/card-payments/about.mdx",tags:[],version:"current",frontMatter:{title:"Card payments"}},i={},p=[{value:"Transaction statuses for cards",id:"transaction-statuses-for-cards",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"card-payments"},"Card payments"),(0,a.kt)("h2",{id:"transaction-statuses-for-cards"},"Transaction statuses for cards"),(0,a.kt)("p",null,"\u26a0\ufe0f MERMAID DIAGRAM IS NOT UPDATED FOR CARDS ONLY \u26a0\ufe0f"),(0,a.kt)("mermaid",{value:"%%{ init: { 'flowchart': { 'curve': 'linear' } } }%%\nflowchart LR\n    T --\x3e B2[Booked*]\n    T --\x3e RJ2[Rejected*]\n    T([Transaction<br/>initiated]) -.-> U\n    T -.-> P\n    subgraph I[Intermediary status]\n        direction TB\n        U[Upcoming] -.-> P[Pending]\n    end\n    subgraph F[Final status]\n        U --\x3e C[Canceled]\n        P --\x3e RL[Released]\n        P --\x3e B[Booked*]\n        P --\x3e RJ[Rejected*]\n    end\n    style I fill:#FDF7F6,stroke:#AE4E41,stroke-width:2px\n    style F fill:#fffdf4,stroke:#cca922,stroke-width:2px"}))}d.isMDXComponent=!0}}]);