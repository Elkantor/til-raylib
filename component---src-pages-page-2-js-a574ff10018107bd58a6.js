(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r=n(a(0)),u=a(140),l=n(a(141)),i=function(){return r.default.createElement(l.default,null,r.default.createElement("h1",null,"Hi from the second page"),r.default.createElement("p",null,"Welcome to page 2"),r.default.createElement(u.Link,{to:"/"},"Go back to the homepage"))};t.default=i},140:function(e,t,a){"use strict";var n=a(26),r=a(1);a(17),t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var u=r(a(0)),l=r(a(8)),i=n(a(150));t.Link=i.default,t.withPrefix=i.withPrefix,t.navigate=i.navigate,t.push=i.push,t.replace=i.replace,t.navigateTo=i.navigateTo;var d=r(a(143));t.PageRenderer=d.default;var o=r(a(66));t.parsePath=o.default;var c=u.default.createContext({});t.StaticQueryContext=c;var s=function(e){return u.default.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):u.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=s,s.propTypes={data:l.default.object,query:l.default.string.isRequired,render:l.default.func,children:l.default.func}},141:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r=n(a(142)),u=n(a(0)),l=n(a(147)),i=a(140);a(151),a(145);var d=function(e){var t=e.children;return u.default.createElement(i.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return u.default.createElement(u.default.Fragment,null,u.default.createElement(l.default,{title:a,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},u.default.createElement("html",{lang:"en"})),u.default.createElement("div",null,t))},data:r.default})};t.default=d},142:function(e){e.exports={data:{site:{siteMetadata:{title:"TIL"}}}}},143:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},144:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0,a(27);var r=n(a(0)),u=n(a(8)),l=n(a(67)),i=n(a(11)),d=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.default.createElement(l.default,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:u.default.shape({pathname:u.default.string.isRequired}).isRequired};var o=d;t.default=o},145:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-page-2-js-a574ff10018107bd58a6.js.map