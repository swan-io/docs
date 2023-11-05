"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const i={title:"Retrieve a transaction ID"},o="Retrieve a transaction ID",l={unversionedId:"topics/payments/overview/guide-retrieve-transaction-id",id:"topics/payments/overview/guide-retrieve-transaction-id",title:"Retrieve a transaction ID",description:"There are two methods you can use to retrieve a transaction ID.",source:"@site/docs/topics/payments/overview/guide-retrieve-transaction-id.mdx",sourceDirName:"topics/payments/overview",slug:"/topics/payments/overview/guide-retrieve-transaction-id",permalink:"/topics/payments/overview/guide-retrieve-transaction-id",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/payments/overview/guide-retrieve-transaction-id.mdx",tags:[],version:"current",frontMatter:{title:"Retrieve a transaction ID"},sidebar:"docSidebar",previous:{title:"Get transaction information",permalink:"/topics/payments/overview/guide-get-transaction-info"},next:{title:"Support for payments",permalink:"/topics/payments/support"}},s={},c=[{value:"Dashboard",id:"dashboard",level:2},{value:"API guide",id:"api-guide",level:2},{value:"Query",id:"query",level:3},{value:"Payload",id:"payload",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"retrieve-a-transaction-id"},"Retrieve a transaction ID"),(0,r.kt)("p",null,"There are two methods you can use to retrieve a transaction ID."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Locate transaction IDs on your ",(0,r.kt)("strong",{parentName:"li"},"Dashboard"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Run an API query")," to get the ID.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This documentation typically explains using the API first.\nHowever, it's easier to find a precise transaction ID on the Dashboard.")),(0,r.kt)("h2",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,"All transaction IDs for your project are on your Dashboard."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On your Dashboard, go to ",(0,r.kt)("strong",{parentName:"li"},"Data")," > ",(0,r.kt)("strong",{parentName:"li"},"Transactions"),"."),(0,r.kt)("li",{parentName:"ol"},"Find the transaction you need."),(0,r.kt)("li",{parentName:"ol"},"Scroll horizontally to locate the transaction ID, then click to copy.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of Swan Dashboard transactions page with a callout of a single transaction ID",src:n(76881).Z,width:"1447",height:"453"})),(0,r.kt)("h2",{id:"api-guide"},"API guide"),(0,r.kt)("p",null,"Queries are highly customizable.\nThis guide focuses solely on using the ",(0,r.kt)("inlineCode",{parentName:"p"},"transactions")," query to retrieve transaction IDs.\nLearn more about this query in the guide to ",(0,r.kt)("a",{parentName:"p",href:"/topics/payments/overview/guide-get-transaction-info"},"get transaction information"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"transactions")," query."),(0,r.kt)("li",{parentName:"ol"},"Check the boxes for ",(0,r.kt)("inlineCode",{parentName:"li"},"edges")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),", check the boxes for ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"createdAt"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"label"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"label")," often contains a name, which might be helpful."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createdAt")," could help you identity the payment ID you're searching for if you know when the payment was initiated."),(0,r.kt)("li",{parentName:"ul"},"Additionally, you might choose to retrieve only the ",(0,r.kt)("inlineCode",{parentName:"li"},"first")," 10 IDs on the list, use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.swan.io/api/pagination"},"pagination")," to filter further, or add a ",(0,r.kt)("inlineCode",{parentName:"li"},"totalCount"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u25b6 Run")," your query.")),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"\ud83d\udd0e ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.swan.io?query=cXVlcnkgUmV0cmlldmVUcmFuc2FjdGlvbklkIHsKICB0cmFuc2FjdGlvbnMgewogICAgZWRnZXMgewogICAgICBub2RlIHsKICAgICAgICBpZAogICAgICAgIGNyZWF0ZWRBdAogICAgICAgIGxhYmVsCiAgICAgIH0KICAgIH0KICAgIHRvdGFsQ291bnQKICB9Cn0K&tab=api"},"Open the query in API Explorer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{2,5-7,10} showLineNumbers","{2,5-7,10}":!0,showLineNumbers:!0},"query RetrieveTransactionId {\n  transactions {\n    edges {\n      node {\n        id\n        createdAt\n        label\n      }\n    }\n    totalCount\n  }\n}\n\n")),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3,7-9,14-16,20} showLineNumbers","{3,7-9,14-16,20}":!0,showLineNumbers:!0},'{\n  "data": {\n    "transactions": {\n      "edges": [\n        {\n          "node": {\n            "id": "bosco_05582b065b10c5ca8aa03342bb1cf389",\n            "createdAt": "2023-05-15T11:34:10.101Z",\n            "label": "Transfer to Matilde Rana"\n          }\n        },\n        {\n          "node": {\n            "id": "bosci_00d62797731fb95ee2f91ca32f4165e9",\n            "createdAt": "2023-03-30T13:24:39.477Z",\n            "label": "Transfer from Sasha Oliveira"\n          }\n        },\n      ],\n      "totalCount": 2\n    }\n  }\n}\n')))}u.isMDXComponent=!0},76881:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/retrieve-transaction-id-c7d14fe9921f2005aa783e420eaf92ca.png"}}]);