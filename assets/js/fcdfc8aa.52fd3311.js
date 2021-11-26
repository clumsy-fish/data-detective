"use strict";(self.webpackChunkmg_af_docusaurus=self.webpackChunkmg_af_docusaurus||[]).push([[7879],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,f=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5582:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_label:"base_file_work",title:"dag_generator.works.base_file_work"},s=void 0,d={unversionedId:"data_detective_airflow_api_reference/dag_generator/works/base_file_work",id:"data_detective_airflow_api_reference/dag_generator/works/base_file_work",isDocsHomePage:!1,title:"dag_generator.works.base_file_work",description:"TBaseFileWork",source:"@site/docs/data_detective_airflow_api_reference/dag_generator/works/base_file_work.md",sourceDirName:"data_detective_airflow_api_reference/dag_generator/works",slug:"/data_detective_airflow_api_reference/dag_generator/works/base_file_work",permalink:"/data-detective/docs/data_detective_airflow_api_reference/dag_generator/works/base_file_work",editUrl:"https://github.com/TinkoffCreditSystems/data-detective/edit/master/tools/doc-site/docs/data_detective_airflow_api_reference/dag_generator/works/base_file_work.md",tags:[],version:"current",frontMatter:{sidebar_label:"base_file_work",title:"dag_generator.works.base_file_work"},sidebar:"tutorialSidebar",previous:{title:"base_db_work",permalink:"/data-detective/docs/data_detective_airflow_api_reference/dag_generator/works/base_db_work"},next:{title:"base_work",permalink:"/data-detective/docs/data_detective_airflow_api_reference/dag_generator/works/base_work"}},p=[{value:"BaseFileWork Objects",id:"basefilework-objects",children:[{value:"exists",id:"exists",children:[],level:4},{value:"iterdir",id:"iterdir",children:[],level:4},{value:"listdir",id:"listdir",children:[],level:4},{value:"unlink",id:"unlink",children:[],level:4},{value:"mkdir",id:"mkdir",children:[],level:4},{value:"rmdir",id:"rmdir",children:[],level:4},{value:"write_bytes",id:"write_bytes",children:[],level:4},{value:"read_bytes",id:"read_bytes",children:[],level:4},{value:"is_dir",id:"is_dir",children:[],level:4},{value:"is_file",id:"is_file",children:[],level:4}],level:2}],c={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TBaseFileWork"),(0,i.kt)("p",null,"The module contains an abstract base class TBaseFileWork\nDescribes the work interface for file systems (sftp, s3, etc.)"),(0,i.kt)("h2",{id:"basefilework-objects"},"BaseFileWork Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class BaseFileWork(BaseWork)\n")),(0,i.kt)("p",null,"Base class for work on file system (sftp, s3 \u0438 \u0434\u0440.)"),(0,i.kt)("h4",{id:"exists"},"exists"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef exists(path: str) -> bool\n")),(0,i.kt)("p",null,"Check if an object located on path exists\n@param path: The path to the fs object\n@return:"),(0,i.kt)("h4",{id:"iterdir"},"iterdir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef iterdir(path: str) -> Generator[str, None, None]\n")),(0,i.kt)("p",null,"Return the path","'","s generator by the specified filepath\n@param path: The path to the fs object\n@return:"),(0,i.kt)("h4",{id:"listdir"},"listdir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef listdir(path: str) -> List[str]\n")),(0,i.kt)("p",null,"Return the path","'","s list by the provided path\n@param path: The path to the fs object\n@return:"),(0,i.kt)("h4",{id:"unlink"},"unlink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef unlink(path: str)\n")),(0,i.kt)("p",null,"Delete an object by the provided path\n@param path: The path to the fs object\n@return:"),(0,i.kt)("h4",{id:"mkdir"},"mkdir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef mkdir(path: str)\n")),(0,i.kt)("p",null,"Create a directory by the provided path\n@param path: The path to the fs object\n@return:"),(0,i.kt)("h4",{id:"rmdir"},"rmdir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef rmdir(path: str, recursive: bool = False)\n")),(0,i.kt)("p",null,"Delete a directory by the provided path\n@param path: The path to the fs object\n@param recursive: Delete attached files and folders\n@return:"),(0,i.kt)("h4",{id:"write_bytes"},"write","_","bytes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef write_bytes(path: str, bts: bytes)\n")),(0,i.kt)("p",null,"Write bytes to a file using the provided path\n@param path: The path to the fs object\n@param bts: Content to write\n@return:"),(0,i.kt)("h4",{id:"read_bytes"},"read","_","bytes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef read_bytes(path: str) -> bytes\n")),(0,i.kt)("p",null,"Read bytes to a file using the provided path\n@param path: The path to the fs object\n@return:"),(0,i.kt)("h4",{id:"is_dir"},"is","_","dir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef is_dir(path: str) -> bool\n")),(0,i.kt)("p",null,"Check whether an object is a directory by the provided path\n@param path:\n@return:"),(0,i.kt)("h4",{id:"is_file"},"is","_","file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef is_file(path: str) -> bool\n")),(0,i.kt)("p",null,"Check if an object is a file by the provided path\n@param path:\n@return:"))}u.isMDXComponent=!0}}]);