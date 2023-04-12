"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38741],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),i=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31513:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=a(83117),n=a(67294),l=a(3905);const s={id:"card-filters-input",title:"CardFiltersInput",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api/inputs/card-filters-input",id:"api/inputs/card-filters-input",title:"CardFiltersInput",description:"Filters that can be applied when listing cards",source:"@site/docs/api/inputs/card-filters-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/card-filters-input",permalink:"/docs/api/inputs/card-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/card-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"card-filters-input",title:"CardFiltersInput",hide_table_of_contents:!1}},i={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardFiltersInput.<b>status</b></code><Bullet /><code>CardStatus</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardfiltersinputbstatusbcodecardstatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardFiltersInput.<b>statuses</b></code><Bullet /><code>[CardStatus!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardfiltersinputbstatusesbcodecardstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardFiltersInput.<b>type</b></code><Bullet /><code>CardType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardfiltersinputbtypebcodecardtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardFiltersInput.<b>types</b></code><Bullet /><code>[CardType!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-cardfiltersinputbtypesbcodecardtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardFiltersInput.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardfiltersinputbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CardFiltersInput.<b>accountId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardfiltersinputbaccountidbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:p,SpecifiedBy:u,Badge:m},y="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(y,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Filters that can be applied when listing cards"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input CardFiltersInput {\n  status: CardStatus\n  statuses: [CardStatus!]\n  type: CardType\n  types: [CardType!]\n  search: String\n  accountId: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-cardfiltersinputbstatusbcodecardstatus-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CardFiltersInput.",(0,l.kt)("b",null,"status"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/card-status"},(0,l.kt)("inlineCode",{parentName:"a"},"CardStatus"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The status of the card.")),(0,l.kt)("p",null,'@deprecated(reason: "use ',(0,l.kt)("inlineCode",{parentName:"p"},"statuses"),' instead")'),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-cardfiltersinputbstatusesbcodecardstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CardFiltersInput.",(0,l.kt)("b",null,"statuses"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/card-status"},(0,l.kt)("inlineCode",{parentName:"a"},"[CardStatus!]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Statuses of the card.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-cardfiltersinputbtypebcodecardtype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CardFiltersInput.",(0,l.kt)("b",null,"type"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/card-type"},(0,l.kt)("inlineCode",{parentName:"a"},"CardType"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Type of card")),(0,l.kt)("p",null,'@deprecated(reason: "use ',(0,l.kt)("inlineCode",{parentName:"p"},"types"),' instead")'),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-cardfiltersinputbtypesbcodecardtype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CardFiltersInput.",(0,l.kt)("b",null,"types"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/card-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[CardType!]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Types of card")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-cardfiltersinputbsearchbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CardFiltersInput.",(0,l.kt)("b",null,"search"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"String searched")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-cardfiltersinputbaccountidbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CardFiltersInput.",(0,l.kt)("b",null,"accountId"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Account identifier")),(0,l.kt)("p",null,"This filter is only available for User Access Token, for the moment"),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/queries/cards"},(0,l.kt)("inlineCode",{parentName:"a"},"cards")),"  ",(0,l.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);