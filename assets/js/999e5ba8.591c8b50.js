"use strict";(self.webpackChunkmg_af_docusaurus=self.webpackChunkmg_af_docusaurus||[]).push([[7394],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||n;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8477:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var o=r(7462),a=r(3366),n=(r(7294),r(3905)),i=["components"],p={sidebar_label:"tsftpoperator",title:"operators.extractors.tsftpoperator"},c=void 0,s={unversionedId:"data_detective_airflow_api_reference/operators/extractors/tsftpoperator",id:"data_detective_airflow_api_reference/operators/extractors/tsftpoperator",isDocsHomePage:!1,title:"operators.extractors.tsftpoperator",description:"TSFTPOperator Objects",source:"@site/docs/data_detective_airflow_api_reference/operators/extractors/tsftpoperator.md",sourceDirName:"data_detective_airflow_api_reference/operators/extractors",slug:"/data_detective_airflow_api_reference/operators/extractors/tsftpoperator",permalink:"/data-detective/docs/data_detective_airflow_api_reference/operators/extractors/tsftpoperator",editUrl:"https://github.com/TinkoffCreditSystems/data-detective/edit/master/tools/doc-site/docs/data_detective_airflow_api_reference/operators/extractors/tsftpoperator.md",tags:[],version:"current",frontMatter:{sidebar_label:"tsftpoperator",title:"operators.extractors.tsftpoperator"},sidebar:"tutorialSidebar",previous:{title:"s3_list_bucket",permalink:"/data-detective/docs/data_detective_airflow_api_reference/operators/extractors/s3_list_bucket"},next:{title:"pg_loader",permalink:"/data-detective/docs/data_detective_airflow_api_reference/operators/sinks/pg_loader"}},l=[{value:"TSFTPOperator Objects",id:"tsftpoperator-objects",children:[],level:2}],f={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"tsftpoperator-objects"},"TSFTPOperator Objects"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class TSFTPOperator(TBaseOperator)\n")),(0,n.kt)("p",null,"Get the file ",(0,n.kt)("inlineCode",{parentName:"p"},"remote_filepath")," from the server with ",(0,n.kt)("inlineCode",{parentName:"p"},"conn_id")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"conn_id"),": Name of the Airflow ",(0,n.kt)("inlineCode",{parentName:"li"},"Connection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"remote_filepath"),": Path to the file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"kwargs"),": Additional params for TBaseOperator")))}u.isMDXComponent=!0}}]);