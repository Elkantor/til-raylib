(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.pageQuery=t.default=void 0;var r=n(a(0)),l=n(a(141)),u=n(a(218)),i=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return{node:e.node,key:e.node.fields.slug}});return r.default.createElement(l.default,null,r.default.createElement(u.default,{pages:t}))};t.default=i;t.pageQuery="1623555389"},140:function(e,t,a){"use strict";var n=a(26),r=a(1);a(17),t.__esModule=!0,t.graphql=function(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")},t.StaticQuery=t.StaticQueryContext=void 0;var l=r(a(0)),u=r(a(8)),i=n(a(150));t.Link=i.default,t.withPrefix=i.withPrefix,t.navigate=i.navigate,t.push=i.push,t.replace=i.replace,t.navigateTo=i.navigateTo;var d=r(a(143));t.PageRenderer=d.default;var o=r(a(66));t.parsePath=o.default;var s=l.default.createContext({});t.StaticQueryContext=s;var c=function(e){return l.default.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.default.createElement("div",null,"Loading (StaticQuery)")})};t.StaticQuery=c,c.propTypes={data:u.default.object,query:u.default.string.isRequired,render:u.default.func,children:u.default.func}},141:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r=n(a(142)),l=n(a(0)),u=n(a(147)),i=a(140);a(151),a(145);var d=function(e){var t=e.children;return l.default.createElement(i.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return l.default.createElement(l.default.Fragment,null,l.default.createElement(u.default,{title:a,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.default.createElement("html",{lang:"en"})),l.default.createElement("div",null,t))},data:r.default})};t.default=d},142:function(e){e.exports={data:{site:{siteMetadata:{title:"TIL"}}}}},143:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},144:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0,a(27);var r=n(a(0)),l=n(a(8)),u=n(a(67)),i=n(a(11)),d=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.default.createElement(u.default,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:l.default.shape({pathname:l.default.string.isRequired}).isRequired};var o=d;t.default=o},145:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.PostTitleSnip=void 0;var r=n(a(149)),l=n(a(0));a(153);t.PostTitleSnip=function(e){var t=e.slug,a=e.title,n=e.variant||"";return l.default.createElement("span",{className:"post-title-snip-c "+n},l.default.createElement(r.default,{id:"post-"+t},l.default.createElement("strong",{className:"post-title-snip "+n},a)))}},153:function(e,t,a){},218:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r=n(a(219)),l=n(a(0));a(221);var u=function(e){var t=e.pages;return l.default.createElement("div",{className:"page-list"},t.map(function(e){var t=e.node,a=e.key;return l.default.createElement(r.default,{node:t,key:a})}))};t.default=u},219:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r=a(140),l=n(a(0)),u=a(152);a(220);var i=function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter,i=n.title,d=n.date;return l.default.createElement("article",{className:"post-link"},l.default.createElement(r.Link,{to:a,className:"link"},l.default.createElement(u.PostTitleSnip,{slug:a,title:i}),l.default.createElement("small",{className:"date"},d)))};t.default=i},220:function(e,t,a){},221:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-ae4378606152153b4e03.js.map