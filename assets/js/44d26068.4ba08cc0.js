"use strict";(self.webpackChunkmg_af_docusaurus=self.webpackChunkmg_af_docusaurus||[]).push([[540],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1260:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:7},c="Production",s={unversionedId:"mg-airflow/production",id:"mg-airflow/production",isDocsHomePage:!1,title:"Production",description:"The start point for generating DAGs is a file in the airflow.settings.DATA_FOLDER with the following contents:",source:"@site/docs/mg-airflow/production.md",sourceDirName:"mg-airflow",slug:"/mg-airflow/production",permalink:"/metadata-governance/docs/mg-airflow/production",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/mg-airflow/production.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"DAG testing",permalink:"/metadata-governance/docs/mg-airflow/testing"},next:{title:"Comparison with other frameworks",permalink:"/metadata-governance/docs/mg-airflow/comparison"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"production"},"Production"),(0,a.kt)("p",null,"The start point for generating DAGs is a file in the airflow.settings.DATA_FOLDER with the following contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import sys\n\nimport argcomplete\nfrom airflow.cli.cli_parser import get_parser\n\nfrom mg_af.constants import DAG_ID_KEY\nfrom mg_af.dag_generator import dag_generator\n\ndag_id = None\nif sys.argv[0].endswith('airflow'):\n    parser = get_parser()\n    argcomplete.autocomplete(parser)\n    args = parser.parse_args()\n    dag_id = getattr(args, DAG_ID_KEY, None)\n\nwhitelist = [dag_id] if dag_id else []\nfor dag in dag_generator(dag_id_whitelist=whitelist):\n    if not dag:\n        continue\n    globals()['dag_' + dag.dag_id] = dag\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Next to the file ",(0,a.kt)("inlineCode",{parentName:"li"},"dags/dag_generator.py ")," it is worth placing the file ",(0,a.kt)("inlineCode",{parentName:"li"},".airflowignore")," with the contents of ",(0,a.kt)("inlineCode",{parentName:"li"},"dags"),".\nThis will prevent scanning of py files in the dags folder."),(0,a.kt)("li",{parentName:"ul"},"dags/dag_generator.py - the only one entry point to the DAGs. Therefore, it does not make sense to parallelize the process of scanning DAGs."),(0,a.kt)("li",{parentName:"ul"},"At the end of the TDag operation (successful or unsuccessful), the cleanup of all work is called. This process is logged in scheduler.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat dag_generator.py.log | grep callback\n>2021-05-08 07:23:30,865|INFO|logging_mixin.py:104|>2021-05-08 07:23:30,864|INFO|dag.py:853|Executing dag callback function: <bound method clear_all_works of <DAG: dummy_s3>>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The launch of ",(0,a.kt)("inlineCode",{parentName:"li"},"airflow worker")," should not occur from the root user, for this the ",(0,a.kt)("inlineCode",{parentName:"li"},"airflow")," user is added to the image."),(0,a.kt)("li",{parentName:"ul"},"Python modules are installed in ",(0,a.kt)("inlineCode",{parentName:"li"},"${AIRFLOW_USER_HOME}/.local/bin")),(0,a.kt)("li",{parentName:"ul"},"AIR FLOW_HOME can be moved to the /app folder")))}d.isMDXComponent=!0}}]);