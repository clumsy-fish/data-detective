"use strict";(self.webpackChunkmg_af_docusaurus=self.webpackChunkmg_af_docusaurus||[]).push([[5296],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},20:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_label:"python_dump",title:"operators.extractors.python_dump"},p=void 0,l={unversionedId:"data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/python_dump",id:"data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/python_dump",isDocsHomePage:!1,title:"operators.extractors.python_dump",description:"PythonDump Objects",source:"@site/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/python_dump.md",sourceDirName:"data-detective-airflow/data_detective_airflow_api_reference/operators/extractors",slug:"/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/python_dump",permalink:"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/python_dump",editUrl:"https://github.com/TinkoffCreditSystems/data-detective/edit/master/tools/doc-site/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/python_dump.md",tags:[],version:"current",frontMatter:{sidebar_label:"python_dump",title:"operators.extractors.python_dump"},sidebar:"tutorialSidebar",previous:{title:"db_dump",permalink:"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/db_dump"},next:{title:"request_dump",permalink:"/data-detective/docs/data-detective-airflow/data_detective_airflow_api_reference/operators/extractors/request_dump"}},d=[{value:"PythonDump Objects",id:"pythondump-objects",children:[],level:2}],u={toc:d};function s(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pythondump-objects"},"PythonDump Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class PythonDump(TBaseOperator)\n")),(0,o.kt)("p",null,"Download data using python code"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"python_callable"),": Python function"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"op_kwargs"),": Additional params for python_callable"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kwargs"),": Additional params for TBaseOperator")))}s.isMDXComponent=!0}}]);