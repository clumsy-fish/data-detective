"use strict";(self.webpackChunkmg_af_docusaurus=self.webpackChunkmg_af_docusaurus||[]).push([[938],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=n,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return t?o.createElement(d,i(i({ref:r},p),{},{components:t})):o.createElement(d,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2682:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:2},c="Basic framework concepts",l={unversionedId:"mg-airflow/concepts",id:"mg-airflow/concepts",isDocsHomePage:!1,title:"Basic framework concepts",description:"operator - standard airflow operator based on airflow.models.BaseOperator.",source:"@site/docs/mg-airflow/concepts.md",sourceDirName:"mg-airflow",slug:"/mg-airflow/concepts",permalink:"/metadata-governance/docs/mg-airflow/concepts",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/mg-airflow/concepts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MG Airflow",permalink:"/metadata-governance/docs/mg-airflow/intro"},next:{title:"Creating a DAG",permalink:"/metadata-governance/docs/mg-airflow/factories"}},p=[],u={toc:p};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-framework-concepts"},"Basic framework concepts"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"operator")," - standard airflow operator based on ",(0,a.kt)("inlineCode",{parentName:"p"},"airflow.models.BaseOperator"),".\nAll operators in mg-airflow are inherited from the base class - ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_airflow.operators.TBaseOperator"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"work")," is a temporary repository of intermediate pipeline results.\nWork in the local file system, sftp file system, s3, postgres are supported.\nThe base class for work is ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_airflow.dag_generator.works.base_work.BaseWork"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"result")," is the result of executing the operator (or the task).\nResult proxies reading and writing to the work. One operator can have only one result.\nThe base class for result is ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_airflow.dag_generator.results.base_result.BaseResult"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pass-through/elt")," is the operator's mode of operation, in which the command is executed on a remote server.\nAt the same time, the result is not uploaded to the airflow-worker.\nIn pass-through operators, reading and writing result is not called.\nThe ETL operator uploads the result from work into the worker's memory, converts it and loads it into postgres, s3 or a file.\nELT operators execute code on a remote server. An example could be PgSQL if work is in pg."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dag-factory")," - automatic creation of DAGs from YAML files.\nTwo types of factory are available: when the DAG structure is set completely in YAML and when only the basic properties of the DAG are set in YAML, and operators are set separately by Python code.\nThe code that is responsible for the operation of the factory is ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_airflow.generator"),"."))}f.isMDXComponent=!0}}]);