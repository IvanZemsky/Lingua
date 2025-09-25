import{a as A}from"./css-CJd3TykV.js";import{J as h}from"./index-C9CaaGqW.js";const f=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,k=A,P=(e,n)=>t=>{var o;if(n?.variants==null)return k(e,t?.class,t?.className);const{variants:l,defaultVariants:a}=n,u=Object.keys(l).map(r=>{const i=t?.[r],c=a?.[r];if(i===null)return null;const s=f(i)||f(c);return l[r][s]}),v=t&&Object.entries(t).reduce((r,i)=>{let[c,s]=i;return s===void 0||(r[c]=s),r},{}),m=n==null||(o=n.compoundVariants)===null||o===void 0?void 0:o.reduce((r,i)=>{let{class:c,className:s,...V}=i;return Object.entries(V).every(x=>{let[C,w]=x;return Array.isArray(w)?w.includes({...a,...v}[C]):{...a,...v}[C]===w})?[...r,c,s]:r},[]);return k(e,u,m,t?.class,t?.className)};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,o)=>o?o.toUpperCase():t.toLowerCase()),j=e=>{const n=N(e);return n.charAt(0).toUpperCase()+n.slice(1)},O=(...e)=>e.filter((n,t,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===t).join(" ").trim(),g=e=>e==="";/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=({name:e,iconNode:n,absoluteStrokeWidth:t,"absolute-stroke-width":o,strokeWidth:l,"stroke-width":a,size:u=d.width,color:v=d.stroke,...m},{slots:r})=>h("svg",{...d,...m,width:u,height:u,stroke:v,"stroke-width":g(t)||g(o)||t===!0||o===!0?Number(l||a||d["stroke-width"])*24/Number(u):l||a||d["stroke-width"],class:O("lucide",m.class,...e?[`lucide-${y(j(e))}-icon`,`lucide-${y(e)}`]:["lucide-icon"])},[...n.map(i=>h(...i)),...r.default?[r.default()]:[]]);/**
 * @license lucide-vue-next v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(e,n)=>(t,{slots:o,attrs:l})=>h($,{...l,...t,iconNode:n,name:e},o);export{P as a,U as c};
