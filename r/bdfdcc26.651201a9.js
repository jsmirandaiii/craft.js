(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(6),i=(t(0),t(116)),s=t(117),o={id:"utilities",title:"Helpers",sidebar_label:"Helpers"},l={id:"api/utilities",title:"Helpers",description:'import {API, Badge} from "./API";',source:"@site/docs/api/Utilities.md",permalink:"/craft.js/r/docs/api/utilities",sidebar_label:"Helpers",sidebar:"docs",previous:{title:"useNode()",permalink:"/craft.js/r/docs/api/useNode"},next:{title:"Layers",permalink:"/craft.js/r/docs/additional/layers"}},c=[{value:"isRoot",id:"isroot",children:[]},{value:"isCanvas",id:"iscanvas",children:[]},{value:"isDeletable",id:"isdeletable",children:[]},{value:"isMoveable",id:"ismoveable",children:[]},{value:"isTopLevelCanvas",id:"istoplevelcanvas",children:[]},{value:"hasTopLevelCanvases",id:"hastoplevelcanvases",children:[]}],d={rightToc:c},b="wrapper";function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"isroot"},"isRoot"),Object(i.b)(s.b,{type:"function",mdxType:"Badge"}),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if a given Node is the Root Node"),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)(s.a,{items:[["node","Node | NodeId","The Node object or Node id to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns"},"Returns"),Object(i.b)(s.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5}","{5}":!0}),"const App  = () => {\n  return (\n    <Editor>\n      <Frame>\n        <Canvas> // true\n          <div>Yo</div> // false\n          <h2>It's me</h2> // false\n          <Canvas> // false \n            <h3>Child</h3> // false\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n")),Object(i.b)("h3",{id:"iscanvas"},"isCanvas"),Object(i.b)(s.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"Check if a given Node is a Canvas"),Object(i.b)("h4",{id:"parameters-1"},"Parameters"),Object(i.b)(s.a,{items:[["node","Node | NodeId","The Node object or Node id to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-1"},"Returns"),Object(i.b)(s.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,8}","{5,8}":!0}),"const App  = () => {\n  return (\n    <Editor>\n      <Frame>\n        <Canvas> // true\n          <div>Yo</div> // false\n          <h2>It's me</h2> // false\n          <Canvas> // true \n            <h3>Child</h3> // false\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n")),Object(i.b)("h3",{id:"isdeletable"},"isDeletable"),Object(i.b)(s.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"A Node may be deleted as long as it is ",Object(i.b)("strong",{parentName:"p"},"not")," one of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Root Node"),Object(i.b)("li",{parentName:"ul"},"Top-level Canvas Nodes")),Object(i.b)("h4",{id:"parameters-2"},"Parameters"),Object(i.b)(s.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-2"},"Returns"),Object(i.b)(s.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,21}","{5,21}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Canvas> // false\n          <div>Yo</div> // true\n          <h2>It\'s me</h2> // true\n          <Canvas> // true \n            <h3>Child</h3> // true\n            <Container /> // true\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Canvas id="main"> // false\n        <h2>Hi</h2> // true\n      </Canvas>\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"ismoveable"},"isMoveable"),Object(i.b)(s.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"A Node may be moved if it satisfies both of the following conditions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Node is an immediate child of a Canvas Node, hence it's draggable"),Object(i.b)("li",{parentName:"ul"},"The Node's ",Object(i.b)("inlineCode",{parentName:"li"},"canDrag")," rule allows it to be moved ")),Object(i.b)("h4",{id:"parameters-3"},"Parameters"),Object(i.b)(s.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-3"},"Returns"),Object(i.b)(s.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("h3",{id:"istoplevelcanvas"},"isTopLevelCanvas"),Object(i.b)(s.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"A Canvas Node is considered top-level if it is defined inside a User Component and it is not rendered as an immediate child of another Node."),Object(i.b)("h4",{id:"parameters-4"},"Parameters"),Object(i.b)(s.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-4"},"Returns"),Object(i.b)(s.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{21,27}","{21,27}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Canvas> // false\n          <div>Yo</div> // false\n          <h2>It\'s me</h2> // false\n          <Canvas> // false \n            <h3>Child</h3> // false\n            <Container /> // false\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Canvas id="main"> // true\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n      <Canvas id="secondary"> // true\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n    </div>\n  )\n}\n')),Object(i.b)("h3",{id:"hastoplevelcanvases"},"hasTopLevelCanvases"),Object(i.b)(s.b,{type:"function",noMargin:!0,mdxType:"Badge"}),Object(i.b)("p",null,"This returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if a Node's User Component defines a ",Object(i.b)("inlineCode",{parentName:"p"},"<Canvas />")," in its render method."),Object(i.b)("h4",{id:"parameters-5"},"Parameters"),Object(i.b)(s.a,{items:[["node","Node","The Node object to check"]],mdxType:"API"}),Object(i.b)("h4",{id:"returns-5"},"Returns"),Object(i.b)(s.a,{items:[["boolean"]],mdxType:"API"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{10}","{10}":!0}),'const App  = () => {\n  return (\n    <Editor resolves={{Container}}>\n      <Frame>\n        <Canvas> // false\n          <div>Yo</div> // false\n          <h2>It\'s me</h2> // false\n          <Canvas> // false \n            <h3>Child</h3> // false\n            <Container /> // true\n          </Canvas>\n        </Canvas>\n      </Frame>\n    </Editor>\n  )\n}\n\nconst Container = () => {\n  return (\n    <div>\n      <Canvas id="main"> // false\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n      <Canvas id="seconday"> // false\n        <h2>Hi</h2> // false\n        <Canvas> // false\n          <h2>Hi</h2> // false\n        </Canvas>\n      </Canvas>\n    </div>\n  )\n}\n')))}p.isMDXComponent=!0},116:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return v}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},b=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(t),p=a,u=b["".concat(s,".").concat(p)]||b[p]||m[p]||i;return t?r.a.createElement(u,o({ref:n},c,{components:t})):r.a.createElement(u,o({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},117:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return o}));var a=t(0),r=t.n(a);const i=({item:e})=>{const n=e[0],t=e.length>1&&"string"==typeof e[1]&&e[1],a=3==e.length?"string"==typeof e[2]&&e[2]:4==e.length&&"string"==typeof e[3]&&e[3],i=e.length>1&&Array.isArray(e[e.length-1])&&e[e.length-1];return r.a.createElement("li",{className:"api-item"},r.a.createElement("div",null,n&&r.a.createElement("code",{className:"api-title"},n),t&&r.a.createElement("strong",{className:"api-type"},t)),a&&r.a.createElement("div",{className:"api-description"},a),i&&r.a.createElement(s,{items:i}))},s=({items:e})=>r.a.createElement("ul",null,e&&e.map((e,n)=>r.a.createElement(i,{item:e,key:n}))),o=({type:e,title:n=!0,noMargin:t=!0})=>{let a;switch(e){case"hoc":a="Higher-Order Component";break;default:a=e[0].toUpperCase()+e.substring(1)}return r.a.createElement("div",{className:"badge-wrapper"},r.a.createElement("span",{className:"badge badge-"+e+" "+(n?"badge-title":"")+" "+(t?"badge-no-margin":"")},a))}}}]);