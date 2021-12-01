"use strict";(self.webpackChunkmg_af_docusaurus=self.webpackChunkmg_af_docusaurus||[]).push([[9331],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},242:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_label:"request_dump",title:"operators.extractors.request_dump"},u=void 0,c={unversionedId:"data_detective_airflow_api_reference/operators/extractors/request_dump",id:"data_detective_airflow_api_reference/operators/extractors/request_dump",isDocsHomePage:!1,title:"operators.extractors.request_dump",description:"RequestDump Objects",source:"@site/docs/data_detective_airflow_api_reference/operators/extractors/request_dump.md",sourceDirName:"data_detective_airflow_api_reference/operators/extractors",slug:"/data_detective_airflow_api_reference/operators/extractors/request_dump",permalink:"/data-detective/docs/data_detective_airflow_api_reference/operators/extractors/request_dump",editUrl:"https://github.com/TinkoffCreditSystems/data-detective/edit/master/tools/doc-site/docs/data_detective_airflow_api_reference/operators/extractors/request_dump.md",tags:[],version:"current",frontMatter:{sidebar_label:"request_dump",title:"operators.extractors.request_dump"},sidebar:"tutorialSidebar",previous:{title:"python_dump",permalink:"/data-detective/docs/data_detective_airflow_api_reference/operators/extractors/python_dump"},next:{title:"s3_dump",permalink:"/data-detective/docs/data_detective_airflow_api_reference/operators/extractors/s3_dump"}},p=[{value:"RequestDump Objects",id:"requestdump-objects",children:[],level:2}],l={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"requestdump-objects"},"RequestDump Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class RequestDump(TBaseOperator)\n")),(0,o.kt)("p",null,"The RequestDump operator is used for webapi requests"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Can be a template string.\n    Example: {action}/{subaction}/?format=json\n    Connection id to be used\n    A table that can be used to parameterize queries\n    Example:\n    DataFrame(\n        [\n            [&#x27;main&#x27;, &#x27;delete&#x27;, ],\n            [&#x27;support&#x27;, &#x27;askForDelete&#x27;, ],\n        ],\n        columns=[&#x27;action&#x27;, &#x27;subaction&#x27;, ]\n    ),\n    The operator can use the results of other operators\n    to parameterize their queries.\n    The result of the source operation will be used in the same way as the DataFrame from url_params.\n    Waiting time between requests in seconds.\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": Text"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conn_id"),": Text"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url_params"),": DataFrame"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"source"),": List"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wait_seconds"),": float"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kwargs"),": Additional params for TBaseOperator")))}d.isMDXComponent=!0}}]);