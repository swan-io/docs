"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,c=m["".concat(p,".").concat(d)]||m[d]||g[d]||o;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const o={title:"Get payment information"},i="Get payment information",l={unversionedId:"topics/payments/overview/guide-get-payment-info",id:"topics/payments/overview/guide-get-payment-info",title:"Get payment information",description:"You can query information about multiple payments using the API.",source:"@site/docs/topics/payments/overview/guide-get-payment-info.mdx",sourceDirName:"topics/payments/overview",slug:"/topics/payments/overview/guide-get-payment-info",permalink:"/topics/payments/overview/guide-get-payment-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/payments/overview/guide-get-payment-info.mdx",tags:[],version:"current",frontMatter:{title:"Get payment information"},sidebar:"docSidebar",previous:{title:"Payments overview",permalink:"/topics/payments/about"},next:{title:"Retrieve a payment ID",permalink:"/topics/payments/overview/guide-retrieve-payment-id"}},p={},s=[{value:"Multiple payments",id:"multiple-payments",level:2},{value:"Query",id:"query",level:3},{value:"Payload",id:"payload",level:3},{value:"Single payment",id:"single-payment",level:2},{value:"Query",id:"query-1",level:3},{value:"Payload",id:"payload-1",level:3}],u={toc:s},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-payment-information"},"Get payment information"),(0,r.kt)("p",null,"You can query information about multiple payments ",(0,r.kt)("strong",{parentName:"p"},"using the API"),".\nYou might also query information about a single payment."),(0,r.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You need a ",(0,r.kt)("strong",{parentName:"p"},"project access token")," run these queries.")),(0,r.kt)("h2",{id:"multiple-payments"},"Multiple payments"),(0,r.kt)("p",null,"Get information about multiple payments using the API.\nThis sample queries the project's ",(0,r.kt)("inlineCode",{parentName:"p"},"Rejected")," payments."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the API Explorer, add the ",(0,r.kt)("inlineCode",{parentName:"li"},"payments")," query."),(0,r.kt)("li",{parentName:"ol"},"Add all the information you'd like to review.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The sample query uses several ",(0,r.kt)("inlineCode",{parentName:"li"},"payments")," query options, including filtering for only ",(0,r.kt)("inlineCode",{parentName:"li"},"Rejected")," payments."))),(0,r.kt)("li",{parentName:"ol"},"Add optional messages to the success payload, either for validation or in case of rejection.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The sample query adds a more thorough ",(0,r.kt)("inlineCode",{parentName:"li"},"Rejected")," payload."))),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u25b6 Run"),".")),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"\ud83d\udd0e ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.swan.io?query=cXVlcnkgUmVqZWN0ZWRQYXltZW50cyB7CiAgcGF5bWVudHMoZmlsdGVyczogeyBzdGF0dXM6IFJlamVjdGVkIH0pIHsKICAgIGVkZ2VzIHsKICAgICAgbm9kZSB7CiAgICAgICAgY3JlYXRlZEF0CiAgICAgICAgaWQKICAgICAgICBzdGF0dXNJbmZvIHsKICAgICAgICAgIHN0YXR1cwogICAgICAgICAgLi4uIG9uIFBheW1lbnRSZWplY3RlZCB7CiAgICAgICAgICAgIF9fdHlwZW5hbWUKICAgICAgICAgICAgcmVhc29uCiAgICAgICAgICAgIHN0YXR1cwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICB1cGRhdGVkQXQKICAgICAgfQogICAgfQogICAgdG90YWxDb3VudAogIH0KfQo%3D&tab=api"},"Open the query in API Explorer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{2,9-12} showLineNumbers","{2,9-12}":!0,showLineNumbers:!0},"query RejectedPayments {\n  payments(filters: { status: Rejected }) {\n    edges {\n      node {\n        createdAt\n        id\n        statusInfo {\n          status\n          ... on PaymentRejected {\n            __typename\n            reason\n            status\n          }\n        }\n        updatedAt\n      }\n    }\n    totalCount\n  }\n}\n")),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("p",null,"Review all ",(0,r.kt)("inlineCode",{parentName:"p"},"Rejected")," payments for your project and the reason for rejection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{7-8,10-12,14,19-20,22-24,26,30} showLineNumbers","{7-8,10-12,14,19-20,22-24,26,30}":!0,showLineNumbers:!0},'{\n  "data": {\n    "payments": {\n      "edges": [\n        {\n          "node": {\n            "createdAt": "2023-03-30T14:12:18.874Z",\n            "id": "$PAYMENT_ID",\n            "statusInfo": {\n              "status": "Rejected",\n              "__typename": "PaymentRejected",\n              "reason": "InsufficientFunds"\n            },\n            "updatedAt": "2023-03-30T14:12:18.989Z"\n          }\n        },\n        {\n          "node": {\n            "createdAt": "2023-03-30T14:12:18.874Z",\n            "id": "$PAYMENT_ID",\n            "statusInfo": {\n              "status": "Rejected",\n              "__typename": "PaymentRejected",\n              "reason": "AccountNotFound"\n            },\n            "updatedAt": "2023-03-30T14:12:18.989Z"\n          }\n        },\n      ],\n      "totalCount": 2\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"single-payment"},"Single payment"),(0,r.kt)("p",null,"Get information about a single payment using the API."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, ",(0,r.kt)("a",{parentName:"li",href:"/topics/payments/overview/guide-retrieve-payment-id"},"retrieve the ID")," for the payment you're querying."),(0,r.kt)("li",{parentName:"ol"},"In the API Explorer, add the ",(0,r.kt)("inlineCode",{parentName:"li"},"payment")," query."),(0,r.kt)("li",{parentName:"ol"},"Enter the payment ID retrieved in step 1."),(0,r.kt)("li",{parentName:"ol"},"Add all the information you'd like to review.\nThe sample query uses several ",(0,r.kt)("inlineCode",{parentName:"li"},"payment")," query options."),(0,r.kt)("li",{parentName:"ol"},"Add optional messages to the success payload, either for validation or in case of rejection."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u25b6 Run"),".")),(0,r.kt)("h3",{id:"query-1"},"Query"),(0,r.kt)("p",null,"\ud83d\udd0e ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.swan.io?query=cXVlcnkgUGF5bWVudEluZm8gewogIHBheW1lbnQoaWQ6ICIkUEFZTUVOVF9JRCIpIHsKICAgIGNyZWF0ZWRBdAogICAgaWQKICAgIHN0YXR1c0luZm8gewogICAgICBzdGF0dXMKICAgICAgLi4uIG9uIFBheW1lbnRSZWplY3RlZCB7CiAgICAgICAgX190eXBlbmFtZQogICAgICAgIHJlYXNvbgogICAgICAgIHN0YXR1cwogICAgICB9CiAgICB9CiAgICB0cmFuc2FjdGlvbnMgewogICAgICB0b3RhbENvdW50CiAgICAgIGVkZ2VzIHsKICAgICAgICBub2RlIHsKICAgICAgICAgIGFtb3VudCB7CiAgICAgICAgICAgIGN1cnJlbmN5CiAgICAgICAgICAgIHZhbHVlCiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CiAgICB9CiAgICB1cGRhdGVkQXQKICB9Cn0K&tab=api"},"Open the query in API Explorer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{2-7,13-14,17-19,24} showLineNumbers","{2-7,13-14,17-19,24}":!0,showLineNumbers:!0},'query PaymentInfo {\n  payment(id: "$PAYMENT_ID") {\n    createdAt\n    id\n    statusInfo {\n      status\n      ... on PaymentRejected {\n        __typename\n        reason\n        status\n      }\n    }\n    transactions {\n      totalCount\n      edges {\n        node {\n          amount {\n            currency\n            value\n          }\n        }\n      }\n    }\n    updatedAt\n  }\n}\n\n')),(0,r.kt)("h3",{id:"payload-1"},"Payload"),(0,r.kt)("p",null,"View all the requested information about the single payment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{4-5,7,10,15-16,22} showLineNumbers","{4-5,7,10,15-16,22}":!0,showLineNumbers:!0},'{\n  "data": {\n    "payment": {\n      "createdAt": "2023-05-03T12:34:05.227Z",\n      "id": "$PAYMENT_ID",\n      "statusInfo": {\n        "status": "Initiated"\n      },\n      "transactions": {\n        "totalCount": 1,\n        "edges": [\n          {\n            "node": {\n              "amount": {\n                "currency": "EUR",\n                "value": "250.00"\n              }\n            }\n          }\n        ]\n      },\n      "updatedAt": "2023-05-03T12:34:05.227Z"\n    }\n  }\n}\n')))}g.isMDXComponent=!0}}]);