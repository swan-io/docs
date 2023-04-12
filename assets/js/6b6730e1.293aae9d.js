"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[3236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(n),g=a,m=l["".concat(u,".").concat(g)]||l[g]||d[g]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79385:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>l,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(83117),a=n(67294),s=n(3905);const o={id:"update-user-consent-settings",title:"updateUserConsentSettings",hide_table_of_contents:!1},i=void 0,u={unversionedId:"api/mutations/update-user-consent-settings",id:"api/mutations/update-user-consent-settings",title:"updateUserConsentSettings",description:"Updates user preferred consent notification channel.",source:"@site/docs/api/mutations/update-user-consent-settings.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/update-user-consent-settings",permalink:"/docs/api/mutations/update-user-consent-settings",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/mutations/update-user-consent-settings.mdx",tags:[],version:"current",frontMatter:{id:"update-user-consent-settings",title:"updateUserConsentSettings",hide_table_of_contents:!1}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateUserConsentSettings.<b>input</b></code><Bullet /><code>UpdateUserConsentSettingsInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateuserconsentsettingsbinputbcodeupdateuserconsentsettingsinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateUserConsentSettingsPayload</code> <Badge class="secondary" text="union"/>',id:"updateuserconsentsettingspayload-",level:4}],l=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:l,SpecifiedBy:d,Badge:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Updates user preferred consent notification channel."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"This mutation is restricted to a Project access token (",(0,s.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),")")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"updateUserConsentSettings(\n  input: UpdateUserConsentSettingsInput!\n): UpdateUserConsentSettingsPayload!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-updateuserconsentsettingsbinputbcodeupdateuserconsentsettingsinput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"updateUserConsentSettings.",(0,s.kt)("b",null,"input"))),(0,s.kt)(l,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/inputs/update-user-consent-settings-input"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateUserConsentSettingsInput!"))," ",(0,s.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"updateuserconsentsettingspayload-"},(0,s.kt)("a",{parentName:"h4",href:"/api/unions/update-user-consent-settings-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateUserConsentSettingsPayload"))," ",(0,s.kt)(g,{class:"secondary",text:"union",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}y.isMDXComponent=!0}}]);