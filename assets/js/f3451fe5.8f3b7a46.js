"use strict";(self.webpackChunkdata_detective_docusaurus=self.webpackChunkdata_detective_docusaurus||[]).push([[1342],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},l),{},{components:a})):n.createElement(f,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5215:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"data-catalogs-overview"},c="OpenSource Data Catalog projects overview",u={unversionedId:"data-catalogs-overview",id:"data-catalogs-overview",isDocsHomePage:!1,title:"OpenSource Data Catalog projects overview",description:"* DataHub. DataHub contains a large number of modules and subprojects. LinkedIn supports this project in opensource.",source:"@site/docs/data-catalogs-overview.md",sourceDirName:".",slug:"/data-catalogs-overview",permalink:"/data-detective/docs/data-catalogs-overview",editUrl:"https://github.com/tinkoff/data-detective/edit/master/tools/doc-site/docs/data-catalogs-overview.md",tags:[],version:"current",frontMatter:{id:"data-catalogs-overview"},sidebar:"tutorialSidebar",previous:{title:"Welcome page",permalink:"/data-detective/docs/welcome"},next:{title:"Data Detective Project",permalink:"/data-detective/docs/data-detective/intro"}},l=[],p={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opensource-data-catalog-projects-overview"},"OpenSource Data Catalog projects overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub"},"DataHub"),". DataHub contains a large number of modules and subprojects. LinkedIn supports this project in opensource.\nDataHub has integrations with systems: Kafka, Airflow, MySQL, SQL Server, Postgres, LDAP, Snowflake, Hive, BigQuery, and many others.\nThe main disadvantage of this solution is its complex and large structure, which can become a problem when deploying for an enterprise.\nEach component from a large set needs its own configuration and stability support.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/MarquezProject/marquez"},"Marquez"),". This project works with basic database entities: schema, table and column. It allows developers to set up the lineage between them.\nApache Airflow add-on also exists in the project. Marquez was released and open sourced by WeWork.\nThe functionality of Marquez is quite basic.\nThis is a simple tool that may be suitable for a small number of user scenarios, most likely Marquez is not suitable for large-scale solutions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/amundsen-io/amundsen"},"Amundsen"),". Amundsen is a data discovery and metadata engine for improving the productivity of data analysts, data scientists and engineers when interacting with data.\nThis project supports working with apache Airflow ETL Orchestrator.\nAmundsen includes metadata service currently uses a Neo4j proxy to interact with Neo4j graph db and serves frontend service's metadata. The metadata is represented as a graph model.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metacat"},"Metacat"),". Metacat is a unified metadata exploration API service developed by Netflix.\nIt can work with Hive, RS, Teradata, Redshift, S3 and Cassandra.\nThe source code of the project is mostly written in Java. Development of Metacat is actively continuing, but documentation is not fully ready at the moment.\nThe project can be used for enterprise, however adding changes to Metacat can be difficult.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage"},"OpenLineage"),". OpenLineage defines the metadata for running jobs and the corresponding events. A configurable backend allows choosing what protocol to send the events to.\nThe main goal of the OpenLineage is to have a unified schema for describing metadata and data lineage across tools to make data lineage collection and analysis easier.\nThe Linux Foundation is supporting this project on OpenSource."))))}d.isMDXComponent=!0}}]);