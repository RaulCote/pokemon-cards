(self.webpackChunkpokemon_cards=self.webpackChunkpokemon_cards||[]).push([[730],{9830:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294),a=n(5697),o=({children:e})=>r.createElement("section",{className:"container"},e);const i=o;o.propTypes={children:n.n(a)().node.isRequired}},9542:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),a=n(5697),o=n.n(a),i=({className:e,name:t})=>r.createElement("div",{className:e},r.createElement("img",{alt:"".concat(t,"-gif"),src:"https://img.pokemondb.net/sprites/black-white/anim/normal/".concat(t,".gif")}));const l=i;i.propTypes={className:o().string,name:o().string.isRequired},i.defaultProps={className:""}},1967:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294),a=n(5977);function o(e,t,n,r,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const s=e=>{var t=i((0,r.useState)(),2),l=t[0],s=t[1],c=i((0,r.useState)(!0),2),u=c[0],m=c[1],p=(0,a.k6)();return(0,r.useEffect)((()=>{!function(){var t,r=(t=regeneratorRuntime.mark((function t(){var r,a,o,i,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.e(373).then(n.bind(n,6373));case 3:return r=t.sent,a=r.default,t.next=7,a.get(e);case 7:o=t.sent,s(o),m(!1),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),404===(null!==(i=null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l?void 0:l.status)&&void 0!==i?i:500)&&p.push("/404"),p.push("/500");case 17:case"end":return t.stop()}}),t,null,[[0,12]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function l(e){o(i,r,a,l,s,"next",e)}function s(e){o(i,r,a,l,s,"throw",e)}l(void 0)}))});return function(){return r.apply(this,arguments)}}()()}),[p,e]),{data:l,isLoading:u}}},5730:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(7294),a=n(5977),o=n(1967),i=n(5697),l=n.n(i),s=({className:e,onClick:t})=>r.createElement("button",{type:"button",className:"closeButton ".concat(e),onClick:t},"X");const c=s;s.propTypes={className:l().string,onClick:l().func.isRequired},s.defaultProps={className:""};var u=n(9542),m=n(2850),p=n(9830),f=({title:e,properties:t})=>1===t.length?r.createElement("div",{className:"pokemonProfileLabel__single"},r.createElement("strong",null,e,":"),r.createElement("p",null,t)):t.length>1?r.createElement("div",{className:"pokemonProfileLabel__list"},r.createElement("strong",null,e),r.createElement("ul",null,t.map((e=>r.createElement("li",{key:"$key-pokemon-prop-".concat(e)},e))))):null;const d=f;f.propTypes={title:l().string.isRequired,properties:l().arrayOf(l().oneOfType([l().string,l().number])).isRequired};const v=()=>{var e=(0,a.UO)().name,t=(0,a.k6)(),n=(0,o.Z)("/pokemon/".concat(e)),i=n.isLoading,l=n.data;return i?r.createElement(m.Z,null):r.createElement(p.Z,null,r.createElement("article",{className:"pokemonProfile"},r.createElement(c,{className:"pokemonProfile__close",onClick:()=>t.push("/pokemon")}),r.createElement(u.Z,{className:"pokemonProfile__image",name:l.name}),r.createElement("h3",{className:"pokemonProfile__name"},l.name),r.createElement(d,{title:"ID",properties:[l.id]}),r.createElement(d,{title:"Type",properties:l.types.map((({type:e})=>e.name))}),r.createElement(d,{title:"Height",properties:[l.height]}),r.createElement(d,{title:"Habilities",properties:l.abilities.map((({ability:e})=>e.name))})))}}}]);