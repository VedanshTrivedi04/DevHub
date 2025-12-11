const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lucide-react.Dl7t23td.js","./chevron-up.Bt2dZ9BF.js","./x.Coh2t7FD.js","./index.CWHCNMHV.js"])))=>i.map(i=>d[i]);
import{b as requireReact,r as reactExports}from"./index.CWHCNMHV.js";var jsxRuntime={exports:{}},reactJsxRuntime_production_min={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactJsxRuntime_production_min;function requireReactJsxRuntime_production_min(){if(hasRequiredReactJsxRuntime_production_min)return reactJsxRuntime_production_min;hasRequiredReactJsxRuntime_production_min=1;var f=requireReact(),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;g!==void 0&&(e=""+g),a.key!==void 0&&(e=""+a.key),a.ref!==void 0&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)d[b]===void 0&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}return reactJsxRuntime_production_min.Fragment=l,reactJsxRuntime_production_min.jsx=q,reactJsxRuntime_production_min.jsxs=q,reactJsxRuntime_production_min}var hasRequiredJsxRuntime;function requireJsxRuntime(){return hasRequiredJsxRuntime||(hasRequiredJsxRuntime=1,jsxRuntime.exports=requireReactJsxRuntime_production_min()),jsxRuntime.exports}var jsxRuntimeExports=requireJsxRuntime();/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const toKebabCase=string=>string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),toCamelCase=string=>string.replace(/^([A-Z])|[\s-_]+(\w)/g,(match,p1,p2)=>p2?p2.toUpperCase():p1.toLowerCase()),toPascalCase=string=>{const camelCase=toCamelCase(string);return camelCase.charAt(0).toUpperCase()+camelCase.slice(1)},mergeClasses=(...classes)=>classes.filter((className,index,array)=>!!className&&className.trim()!==""&&array.indexOf(className)===index).join(" ").trim(),hasA11yProp=props=>{for(const prop in props)if(prop.startsWith("aria-")||prop==="role"||prop==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Icon=reactExports.forwardRef(({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>reactExports.createElement("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?Number(strokeWidth)*24/Number(size):strokeWidth,className:mergeClasses("lucide",className),...!children&&!hasA11yProp(rest)&&{"aria-hidden":"true"},...rest},[...iconNode.map(([tag,attrs])=>reactExports.createElement(tag,attrs)),...Array.isArray(children)?children:[children]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const createLucideIcon=(iconName,iconNode)=>{const Component=reactExports.forwardRef(({className,...props},ref)=>reactExports.createElement(Icon,{ref,iconNode,className:mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`,`lucide-${iconName}`,className),...props}));return Component.displayName=toPascalCase(iconName),Component};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __iconNode=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Circle=createLucideIcon("circle",__iconNode),scriptRel="modulepreload",assetsURL=function(dep,importerUrl){return new URL(dep,importerUrl).href},seen={},__vitePreload=function(baseModule,deps,importerUrl){let promise=Promise.resolve();if(deps&&deps.length>0){let allSettled2=function(promises){return Promise.all(promises.map(p=>Promise.resolve(p).then(value=>({status:"fulfilled",value}),reason=>({status:"rejected",reason}))))};const links=document.getElementsByTagName("link"),cspNonceMeta=document.querySelector("meta[property=csp-nonce]"),cspNonce=cspNonceMeta?.nonce||cspNonceMeta?.getAttribute("nonce");promise=allSettled2(deps.map(dep=>{if(dep=assetsURL(dep,importerUrl),dep in seen)return;seen[dep]=!0;const isCss=dep.endsWith(".css"),cssSelector=isCss?'[rel="stylesheet"]':"";if(!!importerUrl)for(let i=links.length-1;i>=0;i--){const link2=links[i];if(link2.href===dep&&(!isCss||link2.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${dep}"]${cssSelector}`))return;const link=document.createElement("link");if(link.rel=isCss?"stylesheet":scriptRel,isCss||(link.as="script"),link.crossOrigin="",link.href=dep,cspNonce&&link.setAttribute("nonce",cspNonce),document.head.appendChild(link),isCss)return new Promise((res,rej)=>{link.addEventListener("load",res),link.addEventListener("error",()=>rej(new Error(`Unable to preload CSS for ${dep}`)))})}))}function handlePreloadError(err){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=err,window.dispatchEvent(e),!e.defaultPrevented)throw err}return promise.then(res=>{for(const item of res||[])item.status==="rejected"&&handlePreloadError(item.reason);return baseModule().catch(handlePreloadError)})},iconCache=new Map;function SafeIcon({name,...props}){if(!iconCache.has(name))try{const IconComponent2=reactExports.lazy(()=>__vitePreload(()=>import("./lucide-react.Dl7t23td.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(module=>{const icon=module[name];return icon?{default:icon}:(console.warn(`Icon "${name}" not found in lucide-react, using fallback`),{default:Circle})}).catch(()=>(console.warn(`Failed to load icon "${name}", using fallback`),{default:Circle})));iconCache.set(name,IconComponent2)}catch{iconCache.set(name,Circle)}const IconComponent=iconCache.get(name)||Circle;return jsxRuntimeExports.jsx(reactExports.Suspense,{fallback:jsxRuntimeExports.jsx(Circle,{...props}),children:reactExports.createElement(IconComponent,props)})}export{Circle as C,Icon as I,SafeIcon as S,createLucideIcon as c,jsxRuntimeExports as j};
