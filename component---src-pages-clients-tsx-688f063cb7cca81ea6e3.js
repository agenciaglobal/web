(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"61uB":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("q1tI"),u=(o=l)&&o.__esModule?o:{default:o};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var o=void 0;return o=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:o},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":r(t))&&(t={default:parseInt(t)||2});var n=1/0,o=t.default||2;for(var a in t){var i=parseInt(a);i>0&&e<=i&&i<n&&(n=i,o=t[a])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),o=0;o<n.length;o++){var a=o%e;t[a]||(t[a]=[]),t[a].push(n[o])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,o=void 0===n?{}:n,r=e.columnClassName,i=this.itemsInColumns(),l=100/i.length+"%",c=r;"string"!=typeof c&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===c&&(c="my-masonry-grid_column"));var s=a({},t,o,{style:a({},o.style,{width:l}),className:c});return i.map((function(e,t){return u.default.createElement("div",a({},s,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),o=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(o="my-masonry-grid")),u.default.createElement("div",a({},n,{className:o}),this.renderColumns())}}]),t}(u.default.Component);s.defaultProps=c,t.default=s},C5Mv:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("ofer"),a=n("R/WZ"),r=n("q1tI"),i=Object(a.a)((function(){return{civ:{fontSize:40,paddingTop:26,paddingBottom:26,fontFamily:"GSTwo","@media (min-width:600px)":{fontSize:50}}}})),l=function(e){var t=e.label,n=i();return r.createElement(o.a,{className:n.civ},t)}},Tzo5:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("WlC/"),i=n("C5Mv"),l=n("e45s"),u=n.n(l),c=n("tGry"),s=n.n(c),m=n("ofer"),d=n("IZOP"),f=Object(d.withSize)()((function(e){var t=e.author_image,n=e.testimonial,r=e.author,i=e.role,l=e.backgroundImage,u=e.size,c=e.title,d=Object(o.useState)(!1),f=s()(d,2),p=f[0],C=f[1],y=Object(o.useState)(!1),v=s()(y,2),h=v[0],b=v[1];return a.a.createElement("div",{onMouseOver:function(){n?b(!0):C(!0)},onMouseLeave:function(){n?b(!1):C(!1)},style:{display:"flex",backgroundSize:"90%, contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",border:"1px solid #CCCCCC",filter:p||h?"grayscale(0%)":"grayscale(100%)",alignItems:"flex-end",backgroundImage:"url(".concat(h?t:l,")"),height:(u.width||150)*(h?2:1)}},h&&a.a.createElement("div",{style:{width:"100%",padding:10,zIndex:12,background:"linear-gradient(180deg, rgba(140, 140, 140, 0) 18.6%, #3C3C3C 100%)",display:"flex",justifyContent:"center"}},a.a.createElement("div",{style:{zIndex:11,filter:"unset",textAlign:"center",paddingTop:200}},a.a.createElement("svg",{width:"35",height:"27",viewBox:"0 0 51 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{paddingBottom:25}},a.a.createElement("path",{d:"M0.452149 32.6C0.652149 32.3 1.20215 31.75 2.10215 30.95C3.00215 30.05 3.70215 29.35 4.20215 28.85C4.70215 28.25 5.25215 27.55 5.85215 26.75C6.55215 25.85 7.05215 25 7.35215 24.2C7.65215 23.4 7.80215 22.65 7.80215 21.95C7.80215 20.85 6.55215 19.15 4.05215 16.85C1.55215 14.45 0.302149 11.85 0.302149 9.04999C0.302149 6.55 1.20215 4.45 3.00215 2.74999C4.80215 0.949994 7.00215 0.049994 9.60215 0.049994C13.1021 0.049994 15.8522 1.3 17.8521 3.8C19.8521 6.3 20.8521 9.3 20.8521 12.8C20.8521 22 15.7521 30.3 5.55215 37.7C3.75215 36.1 2.05215 34.4 0.452149 32.6ZM29.7021 32.6C29.9021 32.3 30.4522 31.75 31.3522 30.95C32.2522 30.05 32.9522 29.35 33.4522 28.85C33.9521 28.25 34.5022 27.55 35.1022 26.75C35.8022 25.85 36.3022 25 36.6021 24.2C36.9021 23.4 37.0521 22.65 37.0521 21.95C37.0521 20.85 35.8021 19.15 33.3022 16.85C30.8022 14.45 29.5522 11.85 29.5522 9.04999C29.5522 6.55 30.4522 4.45 32.2522 2.74999C34.0521 0.949994 36.2521 0.049994 38.8522 0.049994C42.3522 0.049994 45.1022 1.3 47.1022 3.8C49.1022 6.3 50.1022 9.3 50.1022 12.8C50.1022 22 45.0022 30.3 34.8022 37.7C33.0022 36.1 31.3021 34.4 29.7021 32.6Z",fill:"#FFF"})),a.a.createElement(m.a,{style:{color:"white",fontFamily:"Montserrat, sans-serif",fontSize:14,fontWeight:"bold",textAlign:"left",paddingBottom:10}},n),a.a.createElement(m.a,{style:{color:"white",fontFamily:"Montserrat, sans-serif",fontSize:14,fontWeight:"normal",textAlign:"left"}},r," | ",i,", ",c))))})),p=(n("ssXx"),n("61uB")),C=n.n(p),y=u()((function(){return{div:{margin:"20px 0 40px"}}})),v=function(e){var t=e.clients,n=y();return o.createElement("div",{className:n.div},o.createElement(C.a,{breakpointCols:{default:6,600:2,1300:4,1600:5},className:"global-clients-grid",columnClassName:"global-clients-grid-column",style:{marginTop:24,paddingBottom:120}},t.map((function(e,t){return o.createElement(f,{author:e.author,role:e.role,backgroundImage:e.image,author_image:e.author_image,key:t,title:e.name,testimonial:e.testimonial,job:e.description})}))))},h=function(e){var t=e.clients,n=Object(r.useTranslation)().t;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{label:n("client")}),a.a.createElement(v,{clients:t}))};t.default=function(e){return a.a.createElement(h,{clients:e.data.allMdx.edges.map((function(e){return e.node.frontmatter}))})}}}]);
//# sourceMappingURL=component---src-pages-clients-tsx-688f063cb7cca81ea6e3.js.map