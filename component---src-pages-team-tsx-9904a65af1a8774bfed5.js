(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"61uB":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("q1tI"),u=(o=i)&&o.__esModule?o:{default:o};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var o=void 0;return o=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:o},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":a(t))&&(t={default:parseInt(t)||2});var n=1/0,o=t.default||2;for(var r in t){var l=parseInt(r);l>0&&e<=l&&l<n&&(n=l,o=t[r])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),o=0;o<n.length;o++){var r=o%e;t[r]||(t[r]=[]),t[r].push(n[o])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,o=void 0===n?{}:n,a=e.columnClassName,l=this.itemsInColumns(),i=100/l.length+"%",c=a;"string"!=typeof c&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===c&&(c="my-masonry-grid_column"));var s=r({},t,o,{style:r({},o.style,{width:i}),className:c});return l.map((function(e,t){return u.default.createElement("div",r({},s,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),o=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(o="my-masonry-grid")),u.default.createElement("div",r({},n,{className:o}),this.renderColumns())}}]),t}(u.default.Component);s.defaultProps=c,t.default=s},C5Mv:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("ofer"),r=n("R/WZ"),a=n("q1tI"),l=Object(r.a)((function(){return{civ:{fontSize:40,paddingTop:26,paddingBottom:26,fontFamily:"GSTwo","@media (min-width:600px)":{fontSize:50}}}})),i=function(e){var t=e.label,n=l();return a.createElement(o.a,{className:n.civ},t)}},Kxv3:function(e,t,n){"use strict";n.r(t);var o=n("GGlz"),r=n("q1tI"),a=n.n(r),l=n("WlC/"),i=n("C5Mv"),u=n("e45s"),c=n.n(u),s=n("tGry"),m=n.n(s),d=n("ofer"),p=n("IZOP"),f=Object(p.withSize)()((function(e){var t=e.size,n=e.blackBackgroundImage,o=e.backgroundImage,l=e.job,i=e.title,u=Object(r.useState)(!1),c=m()(u,2),s=c[0],p=c[1],f=o||"",v=n||"";return a.a.createElement("div",{onMouseLeave:function(){return p(!1)},onMouseOver:function(){return p(!0)},style:{display:"flex",filter:s?"grayscale(0%)":"grayscale(100%)",alignItems:"flex-end",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(s?f:v,")"),height:t.width||150}},a.a.createElement("div",{style:{width:"100%",backgroundColor:s?"rgba(255, 204, 0, 0.7)":"transparent",padding:10,display:"flex",justifyContent:"center"}},a.a.createElement("div",{style:{zIndex:3,filter:"unset"}},a.a.createElement(d.a,{style:{fontFamily:"GSTwo",fontSize:20,color:s?"#000":"transparent",textAlign:"center"}},i),a.a.createElement(d.a,{style:{fontFamily:"GSThree",fontSize:14,color:s?"#000":"transparent",textAlign:"center"}},l))))})),v=n("61uB"),y=n.n(v),b=c()((function(){return{div:{paddingTop:50,paddingBottom:300}}})),C=function(e){var t=e.employees,n=b();return r.createElement("div",{className:n.div},r.createElement(y.a,{breakpointCols:{default:6,600:2,1300:4,1600:5},className:"global-team-grid",columnClassName:"global-team-grid-column",style:{marginTop:24,paddingBottom:120}},t.map((function(e,t){var n,o,a,l,i=e.node;return r.createElement(f,{backgroundImage:(null===(n=i.frontmatter)||void 0===n?void 0:n.image)||"",blackBackgroundImage:(null===(o=i.frontmatter)||void 0===o?void 0:o.black_image)||"",key:t,title:(null===(a=i.frontmatter)||void 0===a?void 0:a.name)||"",job:(null===(l=i.frontmatter)||void 0===l?void 0:l.job)||""})}))))},h=(n("NrY9"),function(e){var t=e.employees,n=Object(l.useTranslation)().t;return r.createElement(r.Fragment,null,r.createElement(i.a,{label:n("team")}),r.createElement(C,{employees:t}))}),g=Object(o.a)()((function(e){var t;return r.createElement(h,{employees:(null===(t=e.data)||void 0===t?void 0:t.allMdx.edges)||[]})}));t.default=g}}]);
//# sourceMappingURL=component---src-pages-team-tsx-9904a65af1a8774bfed5.js.map