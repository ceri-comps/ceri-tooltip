!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,i,o){for(var s,u,l=0,a=[];l<e.length;l++)u=e[l],r[u]&&a.push(r[u][0]),r[u]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);for(n&&n(e,i,o);a.length;)a.shift()()};var i={},r={1:0};e.e=function(t){function n(){o.onerror=o.onload=null,clearTimeout(s);var e=r[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),r[t]=void 0)}if(0===r[t])return Promise.resolve();if(r[t])return r[t][2];var i=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.timeout=12e4,e.nc&&o.setAttribute("nonce",e.nc),o.src=e.p+""+t+"_bundle.js";var s=setTimeout(n,12e4);o.onerror=o.onload=n;var u=new Promise(function(e,n){r[t]=[e,n]});return r[t][2]=u,i.appendChild(o),u},e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e.oe=function(t){throw console.error(t),t},e(e.s=30)}([function(t,e){var n,i,r,o=[].slice,s={}.hasOwnProperty;r=Array.isArray,n=/([^-])([A-Z])/g,i=0,t.exports={getID:function(){return i++},noop:function(){},assign:Object.assign||function(){var t,e,n,i,r,u,l;if(u=arguments[0],r=2<=arguments.length?o.call(arguments,1):[],u=Object(u),null!=r)for(t=0,n=r.length;t<n;t++){i=r[t];for(e in i)s.call(i,e)&&(l=i[e],u[e]=l)}return u},merge:function(){var t,e,n,i,r,u,l,a;if(l=arguments[0],u=2<=arguments.length?o.call(arguments,1):[],l=Object(l),null!=u){for(i=[],t=0,n=u.length;t<n;t++)r=u[t],i.push(function(){var t;t=[];for(e in r)s.call(r,e)&&(a=r[e],t.push(null!=l[e]?l[e]:l[e]=a));return t}());return i}},identity:function(t){return t},arrayize:function(t){return r(t)?t:null==t?[]:[t]},isString:function(t){return"string"==typeof t||t instanceof String},isArray:r,isObject:function(t){return"object"==typeof t},isFunction:function(t){return"function"==typeof t},isElement:function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:null!=t&&null!=t.nodeType===1&&"string"==typeof(null!=t.nodeName)},camelize:function(t){return t.replace(/-(\w)/g,function(t,e){return e?e.toUpperCase():""})},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},hyphenate:function(t){return t.replace(n,"$1-$2").toLowerCase()},clone:function(t){var e,n,i;e={};for(n in t)s.call(t,n)&&(i=t[n],e[n]=i);return e}}},function(t,e,n){var i;i=n(0).arrayize,t.exports={apply:function(t,e,n){var r,o,s,u,l,a,c,h,p,f,d,v,m;for(n=i(n),p={},h=[],r=0,l=n.length;r<l;r++)f=n[r],p[f.source]=f.setup(t.prototype),null!=f.finisher&&h.push(f.finisher);for(v=e.sort(function(t,e){return(e._prio||0)-(t._prio||0)}),o=0,a=v.length;o<a;o++){d=v[o];for(s in p)m=p[s],null!=d[s]&&m.iterate(d[s])}for(s in p)m=p[s],"function"==typeof m.end&&m.end();for(u=0,c=h.length;u<c;u++)(0,h[u])(t);return t},copy:function(t){return null==t.target&&(t.target=t.source),t.setup=function(e){var n,i,r,o,s;if(t.target)null==e[i=t.target]&&(e[i]={}),o=e[t.target];else if(o=e,null!=e[t.source]){r=e[t.source];for(n in r)s=r[n],null==e[n]&&(e[n]=s)}return{iterate:function(t){var e;e=[];for(n in t)s=t[n],e.push(null!=o[n]?o[n]:o[n]=s);return e}}},t},concat:function(t){return null==t.target&&(t.target=t.source),t.setup=function(e){var n;return n=[],{iterate:function(t){return n=n.concat(i(t))},end:function(){return t.last?e[t.target]=n.concat(i(e[t.source])):e[t.target]=i(e[t.source]).concat(n)}}},t}}},function(t,e,n){var i,r,o,s,u,l;l=n(0),u=l.noop,s=l.isString,o=l.isObject,l.isFunction,i=l.clone,r=l.getID,window.__ceriDeps=null,t.exports={_name:"computed",_prio:900,_v:1,_mergers:n(1).copy({source:"computed"}),_rebind:"$computed",mixins:[n(8)],methods:{$computed:{__deferredInits:[],init:function(t){var e;return t.path||(t.id=r(),t.path="__computed."+t.id,t.parent=this.__computed,t.name=t.id),this.$watch.parse(t),t=this.$watch.init(t),t.__init__||(t.__init__=!0,null==t.id&&(t.id=r()),t.deps=function(e){return t.deps[e]=!0,t},t.cDeps=[],t.notify=function(){var e,n,i,r,o,s,u,l,a,c;if(t.dirty=!0,t.cbs.length>0)for(u=t.value,s=t.parent[t.name],l=t.cbs,n=0,r=l.length;n<r;n++)(0,l[n])(s,u);for(a=t.cDeps,c=[],i=0,o=a.length;i<o;i++)e=a[i],e.dirty?c.push(void 0):c.push(e.notify());return c},null!=t.set?t.set=t.set.bind(this):t.set=u,t.get=t.get.bind(this),t.oldValue=null,t.getter=function(){var e,n,i,r,s;if(t.dirty&&(t.dirty=!1,s=window.__ceriDeps,window.__ceriDeps=t.deps,t.oldValue=t.value,t.value=t.get(),this.$watch.processNewValue(t),window.__ceriDeps=s,!o(t.value)&&t.oldValue!==t.value))for(r=t.cDeps,n=0,i=r.length;n<i;n++)e=r[n],e.dirty||null==t.deps[e.id]||e.notify();return null!=window.__ceriDeps&&null==window.__ceriDeps[t.id]&&t.cDeps.push(window.__ceriDeps(t.id)),t.value},t.getter=t.getter.bind(this),e=function(){return t.dirty=!0,Object.defineProperty(t.parent,t.name,{get:t.getter,set:t.set}),t.cbs.length>0?this.$nextTick(t.notify):this.$nextTick(function(){var e,n,i,r,o;for(r=Object.keys(this.$watch.__w),o=[],e=0,i=r.length;e<i;e++){if(n=r[e],n.indexOf(t.path)>-1&&n!==t.path){t.parent[t.name];break}o.push(void 0)}return o})},this.$computed.__deferredInits&&!t.noWait?this.$computed.__deferredInits.push(e):e.call(this)),t},getNotifyCb:function(t){return null!=(t=this.$watch.getObj(t))&&null!=t.notify?t.notify:u},orWatch:function(t,e){return s(t)?this.$watch.path({path:t,cbs:e}):this.$computed.init({get:t,cbs:e})}}},created:function(){var t,e,n,r;this.__computed={},e=this.computed,n=[];for(t in e)r=e[t],r=o(r)?i(r):{get:r},r.parent=this,r.name=t,r.path=t,n.push(this.$computed.init(r));return n},connectedCallback:function(){return this.$nextTick(function(){var t,e,n,i,r;for(t=this.$computed.__deferredInits,this.$computed.__deferredInits=!1,r=[],n=0,i=t.length;n<i;n++)e=t[n],r.push(e.call(this));return r})}}},function(t,e,n){(function(){var e;e=n(9),t.exports=function(t){return null==t.mixins&&(t.mixins=[]),t.mixins.push(n(27)),t.mixins.push(n(29)),e(t)}}).call(this)},function(t,e,n){var i,r,o=[].slice;r=n(0),r.isString,i=r.clone,t.exports={_name:"directives",_v:1,_prio:800,_mergers:[n(1).concat({source:"directives"}),n(1).copy({source:"_attrLookup"})],mixins:[n(7),n(6),n(5),n(2)],_attrLookup:{text:{":":function(t){return this.$computed.orWatch(t.value,function(e){return t.el.innerText=e})},"#":function(t){return t.el.textContent=t.value}},ref:{"#":function(t){return this[t.value]=t.el}}},methods:{$directive:function(t){var e,n;if(this.$parseElement.byObj(t),null!=(n=this._attrLookup[t.name])&&null!=n[t.type])return n[t.type].call(this,t);switch(t.type){case"$":return e=function(t,e,n){return t[e]=n}.bind(this,t.el,t.name),this.$computed.orWatch(t.value,[e]);case":":return e=this.$setAttribute.bind(this,t.el,t.name),this.$computed.orWatch(t.value,[e]);case"@":return null==t.cbs&&(t.cbs=[t.value]),null==t.event&&(t.event=t.name),this.$on(t);case"~":return null==this[t.name]&&(this[t.name]=function(n){return function(){var i,r,o,s;for(o=n[t.name]._cbs,s=[],i=0,r=o.length;i<r;i++)e=o[i],s.push(e.apply(null,arguments));return s}}(this)),e=t.event?function(t,e,n){return t.dispatchEvent(e,n)}.bind(null,t.el,t.value):function(){var t,e,n;return e=arguments[0],n=arguments[1],t=3<=arguments.length?o.call(arguments,2):[],e[n].apply(null,t)}.bind(null,t.el,t.value),this[t.name]._cbs.push(e);default:return this.$setAttribute(t.el,t.name,t.value)}}},connectedCallback:function(){var t,e,n,r,o,s,u,l;if(this._isFirstConnect){for(s=this.directives,u=[],e=0,r=s.length;e<r;e++)t=s[e],u.push(function(){var e;e=[];for(n in t)l=t[n],o=i(l),null==o.el&&(o.el=n),null!=o.activate?(o.activated=!1,e.push(this.$computed.orWatch(o.activate,function(t){if(t&&!o.activated)return this.$directive(o),o.activated=!0}))):e.push(this.$directive(o));return e}.call(this));return u}}}},function(t,e,n){var i,r,o,s,u,l,a,c,h,p;h=n(0),l=h.isString,u=h.isFunction,s=h.isArray,i=h.arrayize,h.noop,o=h.clone,c=requestAnimationFrame,r=cancelAnimationFrame,a=function(t,e){return r(t.lastRequest),t.lastRequest=c(function(){var n,i,r,o,s;for(o=t.cbs,s=[],i=0,r=o.length;i<r;i++)n=o[i],s.push(n(e));return s})},p=function(t,e,n){var i,r;return null==(i=null!=(r=t.__ceriEventListener)?r[e]:void 0)?(null==t.__ceriEventListener&&(t.__ceriEventListener={}),i=t.__ceriEventListener[e]={},i.lastRequest=null,i.cbs=[n],i.listener=a.bind(null,i)):i.cbs.push(n),1===i.cbs.length&&t.addEventListener(e,i.listener),function(){var r;if((r=i.cbs.indexOf(n))>-1&&(i.cbs.splice(r,1),0===i.cbs.length))return t.removeEventListener(e,i.listener)}},t.exports={_name:"events",_v:1,_prio:700,_mergers:[n(1).concat({source:"events"}),n(1).copy({source:"_evLookup"})],mixins:[n(2),n(6),n(24)],_evLookup:{},methods:{$once:function(t){return t.once=!0,this.$on(t)},$on:function(t){var e,n,r,o,s,u,a;for(n=[],a=i(t.cbs),o=0,s=a.length;o<s;o++)r=a[o],l(r)&&(r=this[r]),n.push(r);return t._cbs=n,null!=this._evLookup[t.event]?t=this._evLookup[t.event].call(this,t):(t.toggle?(l(t.toggle)||(t.toggle=t.value),u=this.$path.toNameAndParent({path:t.toggle}),e=function(){return u.parent[u.name]=!u.parent[u.name]}):e=function(e,n){var r,o,s,u,a,c,h,p,f,d,v;if(!(t.self&&n.target!==e||t.notPrevented&&n.defaultPrevented||t.keyCode&&t.keyCode.indexOf(n.keyCode)===-1)){if(t.outside)for(v=n.target;null!=v;){if(v===this)return;v=v.parentElement}if(null!=(p=t.defer)?p.delay:void 0){if(t.defer.canceled&&(clearTimeout(t.defer.timeout),t.defer.canceled=!1),(r=l(t.defer.delay)&&this.$path.getValue(t.defer.delay)||t.defer.delay)>1){if(t.defer.cancel)for(t.defer.canceler=[],f=i(t.defer.cancel),s=0,u=f.length;s<u;s++)o=f[s],t.defer.canceler.push(this.$once({el:t.el,event:o,cbs:function(){return t.defer.canceled=!0}}));t.defer.timeout=setTimeout(function(e){return function(){var i,r,o,s,u,l,a;if(t.defer.canceler){for(l=t.defer.canceler,o=0,i=l.length;o<i;o++)(0,l[o])();t.defer.canceler=null}if(!t.defer.canceled)for(a=t._cbs,s=0,r=a.length;s<r;s++)u=a[s],u.call(e,n);return t.defer.canceled=!1}}(this),r)}}else for(d=t._cbs,c=0,a=d.length;c<a;c++)h=d[c],h.call(this,n);return t.prevent&&n.preventDefault(),t.stop&&n.stopPropagation(),t.once?t.deactivate():void 0}},t.activate=function(){var n,i;return i=this.$parseElement.byString(t.el),n=e.bind(this,i),t.throttled?t.deactivate=p(i,t.event,n):(i.addEventListener(t.event,n,t.capture),t.deactivate=function(){return i.removeEventListener(t.event,n)})}),this.$parseActive(t)},$emit:function(t){var e;return null==t.el&&(t.el=this),e=document.createEvent("CustomEvent"),e.initCustomEvent(t.name,!1,!1,t.detail),t.el.dispatchEvent(e)}},connectedCallback:function(){var t,e,n,i,r,a,c,h,p,f;if(this._isFirstConnect){for(c=this.events,h=[],n=0,r=c.length;n<r;n++)e=c[n],h.push(function(){var n;n=[];for(i in e)p=e[i],null!=p.cbs?(a=o(p),a.event=i,n.push(this.$on(a))):l(p)||u(p)||s(p)?n.push(this.$on({cbs:p,event:i})):n.push(function(){var e;e=[];for(t in p)f=p[t],a=o(f),null==a.el&&(a.el=t),a.event=i,e.push(this.$on(a));return e}.call(this));return n}.call(this));return h}}}},function(t,e,n){var i;i=n(0).isString,t.exports={_name:"parseElement",_v:1,_rebind:"$parseElement",methods:{$parseElement:{byObj:function(t){return t.el=this.$parseElement.byString(t.el)},byString:function(t){return i(t)?"this"===t?this:this[t]:null!=t?t:this}}}}},function(t,e,n){var i;i=n(0).isString,t.exports={_name:"$setAttribute",_v:1,methods:{$setAttribute:function(t,e,n){return i(t)&&(n=e,e=t,t=this),null==n||n===!1||!i(n)&&isNaN(n)?t.removeAttribute(e):n===!0?t.setAttribute(e,""):t.setAttribute(e,n),{then:this.$nextTick}}}}},function(t,e,n){var i,r,o,s,u,l,a,c,h,p,f,d,v,m,_={}.hasOwnProperty;for(d=n(0),r=d.arrayize,c=d.isString,l=d.isArray,a=d.isObject,o=d.clone,s=d.getID,p=n(1),i=Object.create(Array.prototype),m="__watch__",v=["push","pop","shift","unshift","splice","sort","reverse"],u=0,h=v.length;u<h;u++)f=v[u],i[f]=function(){return this[m].notify(),Array.prototype[f].apply(this,arguments)};t.exports={_name:"watch",_prio:1e3,_v:1,_mergers:[p.copy({source:"watch"}),p.concat({source:"data"})],_rebind:"$watch",mixins:[n(25)],methods:{$watch:{__w:{},getObj:function(t){var e,n;return null!=(e=null!=(n=t.value)?n[m]:void 0)?(this.$watch.setObj(e),e):null!=t.path&&null!=(e=this.$watch.__w[t.path])?e:null},setObj:function(t){return this.$watch.__w[t.path]=t},processNewValue:function(t){var e,n,r,o,s;if(e=t.value,null!=e?e.__proto__:void 0){if(r={},r[m]={value:t},l(e))o=i;else if(o=e.__proto__,a(e)&&!e._isCeri)for(n in e)_.call(e,n)&&(s=e[n],this.$watch.path({parent:e,name:n,value:s,parentPath:t.path}));return e.__proto__=Object.create(o,r)}},path:function(t){var e,n,i,r,o,u,l,a;if(null!=t.parentPath&&null!=t.name&&(t.path=t.parentPath+"."+t.name),this.$path.toNameAndParent(t),this.$watch.parse(t),t.parent)t=this.$watch.init(t),t.__init__||(t.__init__=!0,t.id=s(),t.notify=function(n,i){var r,o,s;for(s=t.cbs,r=0,o=s.length;r<o;r++)(e=s[r])(n,i)},n=function(){return null!=window.__ceriDeps&&null==window.__ceriDeps[t.id]&&t.cbs.push(window.__ceriDeps(t.id).notify),t.value},a=function(e){var n;return n=t.value,t.value=e,this.$watch.processNewValue(t),t.notify(e,n)},t.initial?null!=t.value?(i=t.value,delete t.value):i=t.parent[t.name]:null==t.value&&(t.value=t.parent[t.name]),Object.defineProperty(t.parent,t.name,{get:n.bind(this),set:a.bind(this)}),t.initial&&(t.parent[t.name]=i));else{if(null!=(u=this.$watch.getObj(t))){for(l=t.cbs,r=0,o=l.length;r<o;r++)e=l[r],u.cbs.push(e);return}this.$watch.setObj(t)}return t},parse:function(t,e){return a(t)?e&&(t=o(t)):t={cbs:t},t.__parsed__||(t.cbs=r(t.cbs).map(function(t){return function(e){return c(e)?t[e].bind(t):e.bind(t)}}(this)),null==t.initial&&(t.initial=!0),t.__parsed__=!0),t},init:function(t){var e,n,i,r,o,s,u,l,c,h;if(s=this.$watch.getObj(t),null!=s?s.__init__:void 0){for(u=t.cbs,n=0,r=u.length;n<r;n++)e=u[n],s.cbs.push(e);if(null!=t.value)t.parent[t.name]!==t.value&&(t.parent[t.name]=t.value);else if(t.initial)for(c=t.parent[t.name],l=t.cbs,i=0,o=l.length;i<o;i++)(e=l[i])(c);return s}return s&&(t.cbs=s.cbs.concat(t.cbs)),a(this.watch)&&(h=this.$watch.parse(this.watch[t.path],!0),t.cbs=t.cbs.concat(h.cbs)),this.$watch.setObj(t),t}}},created:function(){var t,e,n,i,r,o,s,u;for(o=this.data,s=[],e=0,i=o.length;e<i;e++)t=o[e],r=t.call(this),s.push(function(){var t;t=[];for(n in r)u=r[n],t.push(this.$watch.path({parent:this,name:n,value:u,path:n}));return t}.call(this));return s}}},function(t,e,n){var i;i=n(20),t.exports=function(t,e){var n,r,o;null==e&&(e=t,t=HTMLElement);try{if("define"!==window.customElements.define.name)throw new Error("polyfill detected - fallback to ES5 class");n=class e extends t{constructor(){return super(),this._crCb&&this._crCb.forEach(t=>{t.call(this)}),this}}}catch(i){i,n=e.constructor=function(e){var n,i,r,o;if(e=t.call(e||this),e._crCb)for(o=e._crCb,i=0,r=o.length;i<r;i++)n=o[i],n.call(e);return e}}n.prototype=Object.create(t.prototype);for(r in e)o=e[r],n.prototype[r]=o;return i(n)}},function(t,e,n){(function(){var t,e,i;t=document.getElementById("container"),i=function(){var e,i,r,o,s,u,l,a,c,h;r=function(){var t;return t=window.location.href.match(/#(.*)$/),t?t[1]:i},e="",o=function(){var t;if(t=r(),e!==t)return e=t,u(),document.title=e+" - ceri-dev-server"},setInterval(o,50),a={},c=null,h={},a={"/basic":n(13),"/materialize":n(14)},i=1===Object.keys(a).length?Object.keys(a)[0]:"/",u=function(){var n;return null==a[e]&&(e=i,window.location.href=window.location.href.replace(/#(.*)$/,"")+"#"+i),null!=c&&t.removeChild(c),null!=h[e]?c=h[e]:(c=a[e],n="ce"+e.replace("/","-").replace(/([^-])([A-Z])/g,"$1-$2").toLowerCase(),window.customElements.define(n,c),c=document.createElement(n),h[e]=c),t.appendChild(c)},s=document.createElement("ul");for(l in a)a[l],s.innerHTML+="<li><a href='#"+l+"'>"+l+"</a></li>";return h["/"]=s,a["/"]=!0,o()},e=function(){return n.e(0).then(function(t){return n(31),i()}.bind(null,n)).catch(n.oe)},null==window.customElements?e():i()}).call(this)},function(t,e){},function(t,e){},function(t,e,n){var i;n(11),window.customElements.define("ceri-tooltip",n(15)),i=n(3),t.exports=i({mixins:[n(16),n(2)],structure:function(){return[this.el("button",{class:{"":"absolute"},style:{"":"top:10px;left:10px;"},ref:{"#":"topleft"},text:{"#":"responsive anchor"}},[]),this.el("ceri-tooltip",{ref:{"#":"toplefttt"},"on-body":{":":"onBody"},text:{"#":"Content"}},[]),this.el("button",{class:{"":"absolute"},style:{"":"top:10px;right:10px;"},ref:{"#":"topright"},text:{"#":"responsive anchor"}},[]),this.el("ceri-tooltip",{ref:{"#":"toprighttt"},"on-body":{":":"onBody"},text:{"#":"Content"}},[]),this.el("button",{class:{"":"absolute"},style:{"":"bottom:10px;left:10px;"},ref:{"#":"bottomleft"},text:{"#":"responsive anchor"}},[]),this.el("ceri-tooltip",{ref:{"#":"bottomlefttt"},"on-body":{":":"onBody"},text:{"#":"Content"}},[]),this.el("button",{class:{"":"absolute"},style:{"":"bottom:10px;right:10px;"},ref:{"#":"bottomright"},text:{"#":"responsive anchor"}},[]),this.el("ceri-tooltip",{ref:{"#":"bottomrighttt"},"on-body":{":":"onBody"},text:{"#":"Content"}},[]),this.el("br",null,[]),this.el("br",null,[]),this.el("p",{text:{"#":"hover or touch-hold button"}},[]),this.el("button",{class:{"":"margin"},ref:{"#":"south"},text:{"#":"south"}},[]),this.el("ceri-tooltip",{anchor:{"":"s"},ref:{"#":"southtt"},"on-body":{":":"onBody"},text:{"#":"so much Content. wow"}},[]),this.el("button",{class:{"":"margin"},ref:{"#":"east"},text:{"#":"east"}},[]),this.el("ceri-tooltip",{anchor:{"":"e"},ref:{"#":"easttt"},"on-body":{":":"onBody"},text:{"#":"so much Content. wow"}},[]),this.el("button",{class:{"":"margin"},ref:{"#":"west"},text:{"#":"west"}},[]),this.el("ceri-tooltip",{anchor:{"":"w"},ref:{"#":"westtt"},"on-body":{":":"onBody"},text:{"#":"so much Content. wow"}},[]),this.el("br",null,[]),this.el("br",null,[]),this.el("br",null,[]),this.el("a",{href:{"":"https://github.com/ceri-comps/ceri-tooltip/blob/master/dev/basic.coffee"},text:{"#":"source"}},[]),this.el("div",{style:{"":"height:2000px;"}},[])]},data:function(){return{onBody:!1}},computed:{onBodyText:function(){return"onBody: "+this.onBody}}})},function(t,e,n){var i;n(12),i=n(3),t.exports=i({structure:function(){return[this.el("br",null,[]),this.el("p",{text:{"#":"hover or touch-hold button"}},[]),this.el("br",null,[]),this.el("button",{class:{"":"btn"},text:{"#":"south"}},[]),this.el("ceri-tooltip",{class:{"":"materialize"},anchor:{"":"s"},text:{"#":"Content"}},[]),this.el("button",{style:{"":"margin-left: 30px"},class:{"":"btn"},text:{"#":"north"}},[]),this.el("ceri-tooltip",{class:{"":"materialize"},anchor:{"":"n"},text:{"#":"Content"}},[]),this.el("br",null,[]),this.el("br",null,[]),this.el("br",null,[]),this.el("button",{class:{"":"btn"},text:{"#":"east"}},[]),this.el("ceri-tooltip",{class:{"":"materialize"},anchor:{"":"e"},text:{"#":"Content"}},[]),this.el("button",{style:{"":"margin-left: 30px"},class:{"":"btn"},text:{"#":"west"}},[]),this.el("ceri-tooltip",{class:{"":"materialize"},anchor:{"":"w"},text:{"#":"Content"}},[])]},tests:function(t){return describe("dropdown",function(){return describe("materialize",function(){return it("works",function(){})})})}})},function(t,e,n){var i;i=n(9),t.exports=i({mixins:[n(26),n(2),n(28),n(19),n(23),n(22),n(21)],props:{anchor:{type:String},delayHover:{type:Number,default:400},delayTouch:{type:Number,default:200},onBody:{type:Boolean}},initStyle:{position:"absolute",display:"block"},events:{mouseover:{target:{active:function(){return!this.openingOrOpen},cbs:"show",defer:{cancel:["mouseleave","click"],delay:"delayHover"},destroy:!0}},click:{target:{active:"openingOrOpen",cbs:"hide",destroy:!0}},mouseleave:{target:{active:"openingOrOpen",cbs:"hide",destroy:!0}},touchstart:{target:{active:function(){return!this.openingOrOpen},cbs:function(){return this.touched=setTimeout(this.show.bind(this),this.delayTouch)},destroy:!0}},touchmove:{body:{el:document.body,active:"touched",cbs:function(){return clearTimeout(this.touched),this.touched=!1},stop:!0,destroy:!0}},touchend:{body:{el:document.body,active:function(){return this.touched||this.openingOrOpen},cbs:function(){return clearTimeout(this.touched),this.touched=!1,this.hide()},destroy:!0}}},data:function(){return{touched:!1}},computed:{target:function(){return this.__placeholder.previousElementSibling?this.__placeholder.previousElementSibling:this.__parentElement},cAnchor:function(){var t;return this.anchor?this.anchor:(t=this.getViewportSize(),t.width<992?"wnse":"senw")}},methods:{enter:function(t){switch(t.preserve=["overflow"],t.init={overflow:"hidden",top:this.top+"px",left:this.left+"px"},t.duration=150,t.style={opacity:[0,1]},this.direction){case"s":t.style.translateY=[-this.offsetTop,0,"px"];break;case"n":t.style.translateY=[this.offsetTop,0,"px"];break;case"e":t.style.translateX=[-this.offsetLeft,0,"px"];break;case"w":t.style.translateX=[this.offsetLeft,0,"px"]}return this.$animate(t)},leave:function(t){return t.preserve=["overflow"],t.init={overflow:"hidden"},t.duration=150,t.style={opacity:[1,0]},this.$animate(t)},onShow:function(){var t,e,n,i,r,o,s,u,l,a,c,h,p,f,d,v;for(p=this.target.getBoundingClientRect(),v=this.getViewportSize(),this.style.top=0,this.style.left=0,e=this.offsetHeight+this.offsetTop,d=this.offsetWidth+this.offsetLeft,a=null,c=this.cAnchor,n=0,o=c.length;n<o&&(t=c[n],a=t,!("w"===t&&p.left-d>=0))&&!("n"===t&&p.top-e>=0)&&!("s"===t&&p.bottom+e<=v.height)&&!("e"===t&&p.right+d<=v.width);n++);return this.direction=a,s=p.height,l=p.width,d+=this.offsetLeft,e+=this.offsetTop,"s"===a?(f=s,r=l/2-d/2):"n"===a?(f=-e,r=l/2-d/2):"w"===a?(f=s/2-e/2,r=-d):"e"===a&&(f=s/2-e/2,r=l),this.onBody?(h=this.getScrollPos(),f+=h.top+p.top,r+=h.left+p.left):(u=getComputedStyle(this.parentElement),i=/relative|absolute|fixed/.test(u.getPropertyValue("position")),this.parentElement===this.target&&i?(r-=parseInt(u.getPropertyValue("border-left-width")),f-=parseInt(u.getPropertyValue("border-top-width"))):(f+=this.target.offsetTop,r+=this.target.offsetLeft)),this.top=f,this.left=r}}})},function(t,e,n){t.exports={_name:"#model",_v:1,mixins:[n(4)],_attrLookup:{model:{"#":function(t){var e;return e=function(){switch(t.el.type){case"checkbox":case"radio":case"select-one":case"select-multiple":return"change";default:return"input"}}(),t.path=t.value,this.$path.toNameAndParent(t),t.el.addEventListener(e,function(e){return function(e){if(t.parent[t.name]!==e.target.value)return t.parent[t.name]=e.target.value}}(this)),this.$watch.path({path:t.value,cbs:function(e){if(t.el.value!==e)return t.el.value=e}})}}}}},function(t,e,n){var i;n(0).noop,i=[],window.onpopstate=function(t){var e,n,r,o,s;for(s=[],n=0,r=i.length;n<r;n++)o=i[n],s.push(function(){var n,i,r,s;for(r=o._cbs,s=[],n=0,i=r.length;n<i;n++)e=r[n],s.push(e.call(o.this,t));return s}());return s},t.exports={_name:"@popstate",_v:1,_evLookup:{popstate:function(t){return t.this=this,t.activate=function(){return i.push(t),function(){return i.splice(i.indexOf(t),1)}},t}}}},function(t,e){var n,i,r,o,s;"undefined"!=typeof MessageChannel&&null!==MessageChannel?(r=new MessageChannel,s={},o=0,n=function(t){return s[++o]=t,o},i=function(t){return s[t](),delete s[t]},r.port1.onmessage=function(t){var e;return e=t.data,i(e)},t.exports=function(t){return r.port2.postMessage(n(t.bind(this)))}):t.exports=function(t){return setTimeout(t.bind(this),0)}},function(t,e,n){var i,r,o,s;n(0).isArray,i={linear:function(){return function(t){return t}},pow:function(t){return null==t&&(t=2),function(e){return Math.pow(e,t)}},sin:function(){return function(t){return Math.sin((t+3)*Math.PI/2)+1}},exp:function(){return function(t){return Math.exp(t)}},circ:function(){return function(t){return 1-Math.sqrt(1-Math.pow(t,2))}},back:function(t){return null==t&&(t=1.70158),function(e){return Math.pow(e,2)*((t+1)*e-t)}}},o=function(t,e,n,i){var r,o,s,u;s=[];for(r in e)u=e[r],null!=i&&i.indexOf(r)>-1||(o=u[0]+n*(u[1]-u[0]),u[2]&&(o+=u[2]),null!=t[r]?t[r]=o:s.push(r+"("+o+")"));if(s.length>0)return t.transform=s.join(" ")},r=function(t,e){var n,i,r;if(e){i=[];for(n in e)r=e[n],i.push(t[n]=r);return i}},s=function(t){return function(e){var n,i,r,s,u,l,a,c,h,p;if(!t.stopped){if(c=t.el.style,null==t.start)if(t._percent)t.start=e-t._percent*t.duration;else{if(t.start=e,t.preserve){for(h={},l=t.preserve,i=0,s=l.length;i<s;i++)r=l[i],h[r]=c[r];t.preserve=h}if(t.init){a=t.init;for(r in a)p=a[r],c[r]=p}}return u=(e-t.start)/t.duration,n=u>1?1:u>0?t.easing(u):0,o(c,t.style,n),1!==n?requestAnimationFrame(t.next):("function"==typeof t.stop&&t.stop({reset:!0}),"function"==typeof t.done?t.done(t):void 0)}}},t.exports={_name:"animate",_v:1,methods:{$cancelAnimation:function(t,e){return null==e&&(e={}),null!=(null!=t?t.stop:void 0)?t.stop(e):e},$animate:function(t){var e,n,i,u,l,a,c;if(null!=t.done&&(t.done=t.done.bind(this)),null==t.el&&(t.el=this),t.animate===!1){if([],l=t.el.style,t.init){i=t.init;for(n in i)c=i[n],l[n]=c}return o(l,t.style,1,t.preserve),"function"==typeof t.done?t.done():void 0}if(t.style){if(e=s(t),null==t.duration&&(t.duration=300),null==t.easing&&(t.easing=this.$ease("in","linear")),t.next=requestAnimationFrame.bind(null,e),t._percent&&null!=t._preserve&&(t.preserve=t._preserve),null!=t._style){u=t._style;for(n in u)c=u[n],a=c.slice(0).reverse(),3===a.length&&a.push(a.shift()),t.style[n]=a}t.stop=function(e){return function(n){var i;return t.stopped||(t.stopped=!0,e.$animations.splice(e.$animations.indexOf(t),1),null!=n&&(n.reset?r(t.el.style,t.preserve):(i=Math.min(1,(performance.now()-t.start)/t.duration),n._preserve=t.preserve,n._percent=1-i,n._value=t.easing(i),n._style=t.style))),n}}(this),t.toEnd=function(){if(!t.stopped)return t.start=-1e9},t.delay?setTimeout(t.next,t.delay):e(performance.now()),this.$animations.push(t)}return t},$ease:function(t,e,n){var r;switch(r=i[e](n),t){case"in":return r;case"inOut":return function(t){return t<.5?.5*r(2*t):1-r(1-2*(t-.5))+.5};case"out":return function(t){return 1-r(1-t)}}}},created:function(){return this.$animations=[]},destroy:function(){var t,e,n,i,r;for(i=this.$animations,r=[],e=0,n=i.length;e<n;e++)t=i[e],r.push(t.stop());return r}}},function(t,e,n){var i,r,o,s;s=n(0),o=s.isObject,r=s.isFunction,i=s.isArray,t.exports=function(t){var e,s,u,l,a;return u=t.prototype,u.$nextTick=n(18),null!=u.mixins&&(l=function(t){var e,n,i,r,o,s;for(e=[],n=0,r=t.length;n<r;n++)s=t[n],null!=s.mixins&&(e=l(s.mixins).concat(e));for(i=0,o=e.length;i<o;i++)s=e[i],t.indexOf(s)===-1&&t.push(s);return t},l(u.mixins),e=n(1),e.apply(t,u.mixins,e.concat({source:"_mergers",target:"mergers"})),a=u.mergers,delete u.mergers,a.push(e.copy({source:"methods",target:!1})),a.push(e.concat({source:"_rebind"})),s=function(t,n){var i;return i=e.concat({source:t,target:n,last:!0}),i.finisher=function(e){return e.prototype[t]=function(){var t,e,i,r,o;for(r=this[n],o=[],e=0,i=r.length;e<i;e++)t=r[e],o.push(t.apply(this,arguments));return o}},a.push(i)},s("disconnectedCallback","_dCb"),s("attributeChangedCallback","_acCb"),s("adoptedCallback","_aCb"),a.push(e.concat({source:"connectedCallback",target:"_cCb",last:!0,finisher:function(t){return t.prototype.connectedCallback=function(){var t,e,n,i;for(i=this._cCb,e=0,n=i.length;e<n;e++)t=i[e],t.apply(this,arguments);return this._isFirstConnect=!1}}})),s("destroy","_deCb"),a.push({source:"created",setup:function(t){return t._crCb=[function(){var t,e,n,s,u,l,a,c,h,p,f,d;for(this._isCeri=!0,this._isFirstConnect=!0,c=Object.getPrototypeOf(this),h=this._rebind,p=[],t=0,u=h.length;t<u;t++)s=h[t],l=c[s],a={},Object.defineProperty(this,s,{__proto__:null,value:a}),p.push(function(){var t;t=[];for(e in l)f=l[e],r(f)?t.push(a[e]=f.bind(this)):i(f)?t.push(a[e]=f.slice()):o(f)&&null!=f?(a[e]={},t.push(function(){var t;t=[];for(n in f)d=f[n],t.push(a[n]=d);return t}())):t.push(a[e]=f);return t}.call(this));return p}],{iterate:function(e){return t._crCb.push(e)},end:function(){if(null!=t.created)return t._crCb.push(t.created)}}}}),e.apply(t,u.mixins,a)),t}},function(t,e){var n,i;n=document.body,i=document.documentElement,t.exports={methods:{getScrollPos:function(){return{top:window.pageYOffset||i.scrollTop||n.scrollTop,left:window.pageXOffset||i.scrollLeft||n.scrollLeft}}}}},function(t,e){t.exports={methods:{getViewportSize:function(){var t,e;return null!=window.innerWidth?(e=window,t="inner"):(t="client",e=document.documentElement||document.body),{width:e[t+"Width"],height:e[t+"Height"]}}}}},function(t,e,n){t.exports={_name:"open",_v:1,mixins:[n(2),n(5),n(17)],events:{popstate:{active:function(){return this.onBody&&this.openingOrOpen},cbs:function(){return this.hide(!1)}},click:{el:document.documentElement,outside:!0,cbs:"hide",active:function(){return this.openingOrOpen&&!this.keepOpen},delay:!0,destroy:!0},keyup:{el:document.documentElement,notPrevented:!0,destroy:!0,keyCode:[27],active:function(){return this.openingOrOpen&&!this.keepOpen},cbs:"hide"}},props:{open:{type:Boolean},keepOpen:{type:Boolean}},data:function(){return{isOpen:null,opening:!1,closing:!1,openingOrOpen:!1,toggleAnimate:!0}},methods:{_attach:function(){if(!this.parentElement)if(this.onBody){if(this.parentElement!==document.body)return document.body.appendChild(this)}else if(this.parentElement!==this.__parentElement)return this.__parentElement.replaceChild(this,this.__placeholder)},_detach:function(){if(this.parentElement)if(this.onBody){if(this.parentElement===document.body)return this.remove()}else if(this.parentElement===this.__parentElement)return this.__parentElement.replaceChild(this.__placeholder,this)},_setOpen:function(){return this.closing=!1,this.opening=!1,this.isOpen=!0,this.open=!0,this.openingOrOpen=!0,this.$emit({name:"toggle",detail:!0}),"function"==typeof this.onOpen?this.onOpen():void 0},_setClose:function(){return this.closing=!1,this.opening=!1,this.isOpen=!1,this.open=!1,this.openingOrOpen=!1,this.$emit({name:"toggle",detail:!1}),"function"==typeof this.onClose?this.onClose():void 0},show:function(t){if(!this.openingOrOpen)return this._attach(),this.toggleAnimate=t=t!==!1,this.opening=!0,this.openingOrOpen=!0,this.closing=!1,"function"==typeof this.onShow&&this.onShow(t),this.$animate&&null!=this.enter?this.animation=this.enter(this.$cancelAnimation(this.animation,{animate:t,done:this._setOpen})):this.setOpen(this)},hide:function(t){var e;if(!this.closing&&this.openingOrOpen)return this.toggleAnimate=t=t!==!1,this.closing=!0,this.openingOrOpen=!1,"function"==typeof this.onHide&&this.onHide(t),e=function(){return this._setClose(),this._detach()},this.$animate&&null!=this.leave?this.animation=this.leave(this.$cancelAnimation(this.animation,{animate:t,done:e})):e.call(this)},toggle:function(t){if(null==this.beforeToggle||this.beforeToggle(t))return this.isOpen?this.hide(t):this.show(t)}},watch:{open:function(t){return null==this.isOpen?t?this.toggle(!1):this.isOpen=t:t!==this.isOpen?this.toggle():void 0}},connectedCallback:function(){if(this._isFirstConnect)return this.__parentElement=this.parentElement,this.__placeholder=document.createComment("#open"),this.__parentElement.replaceChild(this.__placeholder,this)},disconnectedCallback:function(){if(this.isOpen)return this.toggle(!1)}}},function(t,e,n){var i,r;r=n(0),i=r.noop,r.isString,t.exports={_name:"parseActive",_prio:1e4,_v:1,mixins:[n(2)],methods:{$parseActive:function(t){var e,n,r,o;return o=!1,r=i,e=function(e){return function(){var n;if(o)return r(),n=t.activate.call(e),t.wasActivated=!0,r=function(){var r;return n.call(e),t.destroy&&(r=e.__activeToDestroy.indexOf(n))>-1&&e.__activeToDestroy.splice(r,1),n=i},t.destroy&&e.__activeToDestroy.push(r),r}}(this),n=function(n){return function(){return o=!0,t.delay?n.$nextTick(e):e()}}(this),t.active?this.$computed.orWatch(t.active,function(t,e){if(t!==e)return t?n():(o=!1,r())}):n()}},connectedCallback:function(){if(this._isFirstConnect)return this.__activeToDestroy=[]},destroy:function(){var t,e,n,i,r;for(i=this.__activeToDestroy,r=[],e=0,n=i.length;e<n;e++)t=i[e],r.push(t());return r}}},function(t,e,n){var i,r;i=n(0).isString,r=function(t,e){return t.reduce(function(t,e,n){return t.push(t[n][e]),t},[e])},t.exports={_name:"path",_v:1,_rebind:"$path",methods:{$path:{toValue:function(t){return null==t.value&&(t.parent&&t.name?t.value=t.parent[t.name]:(null==t.obj&&(t.obj=this),t.value=r(t.path.split("."),t.obj).pop())),t},getValue:function(t){return this.$path.toValue({path:t}).value},resolveValue:function(t){return i(t)?this.$path.getValue(t):t},resolveMultiple:function(t,e){var n,i,r,o;for(r=[],n=0,i=e.length;n<i;n++)o=e[n],t[o]?r.push(t[o]=this.$path.resolveValue(t[o])):r.push(void 0);return r},setValue:function(t){if(null!=t.value)return this.$path.toNameAndParent(t),t.parent[t.name]=t.value},toNameAndParent:function(t){var e;return t.name&&t.parent?t:(e=t.path.split("."),null==t.obj&&(t.obj=this),t.name=e.pop(),t.parent=r(e,t.obj).pop(),t)}}}}},function(t,e,n){var i,r,o,s,u;u=n(0),i=u.arrayize,s=u.hyphenate,r=u.camelize,o=u.clone,t.exports={_name:"props",_v:1,_prio:900,_mergers:n(1).copy({source:"props",finisher:function(t){var e,n,r,o;e=i(t.prototype.observedAttributes),o=t.prototype.props;for(r in o)o[r],n=s(r),e.indexOf(n)>-1||e.push(n);return Object.defineProperty(t,"observedAttributes",{value:e})}}),mixins:[n(8),n(7)],attributeChangedCallback:function(t,e,n){var i,o,s;if(i=r(t),null!=(o=this.props[i]))return s=o.type===Number&&null!=n?Number(n):o.type===Boolean?null!=n:n,null!=o.name&&(i=o.name),this[i]!==s?this[i]=s:void 0},created:function(){var t,e,n,r,u;null==this.props&&(this.props={}),n=this.props,r=[];for(t in n)u=n[t],null==u.type?(u={type:u,name:t},this.props[t]=u):null==u.name&&(u.name=t),u.type===Boolean&&null==u.default&&(u.default=!1),e=o(u),e.parent=this,e.value=this[e.name],e.cbs=i(e.cbs).concat([this.$setAttribute.bind(this,this,s(e.name))]),null==e.path&&(e.path=e.name),null==e.initial&&(e.initial=!1),r.push(this.$watch.path(e));return r},connectedCallback:function(){if(this._isFirstConnect)return this.$nextTick(function(){var t,e,n,i,r;n=this.props,i=[];for(t in n)r=n[t],null!=r.default?(e=r.name?r.name:t,i.push(null!=this[e]?this[e]:this[e]=r.default)):i.push(void 0);return i})}}},function(t,e,n){var i,r,o,s;s=n(0),s.isElement,o=s.isString,i=s.arrayize,r=s.camelize,t.exports={_name:"structure",_v:1,_prio:900,_mergers:[n(1).copy({source:"_elLookup"})],_rebind:"$structure",mixins:[n(4)],methods:{$structure:{beforeInsert:[],afterInsert:[]},el:function(t,e,n){var i,s,u,l,a,c,h,p,f;if(s=null!=(null!=(c=this._elLookup)?c[t]:void 0)?this._elLookup[t].call(this,t):document.createElement(t),null!=e)for(t in e){p=e[t];for(h in p)f=p[h],null!=f.mods?(a=f.mods,a.value=f.val):a={value:f},a.el=s,a.type=h,a.name=a.camel?r(t):t,this.$directive(a)}if(null!=n)for(u=0,l=n.length;u<l;u++)i=n[u],o(i)?this._slots[i]=s:s.appendChild(i);return s}},created:function(){return this._slots={}},connectedCallback:function(){var t,e,n,r,s,u,l,a,c,h,p,f,d,v,m,_,b,g,y;if(this._isFirstConnect&&null!=this.structure){for(y=i(this.structure()),f=this.$structure.beforeInsert,r=0,a=f.length;r<a;r++)n=f[r],n.call(this,y);for(d=this.children,s=0,c=d.length;s<c;s++)null!=(t=d[s])&&(g=t.getAttribute("slot"),null!=g?null!=(v=this._slots[g])&&v.appendChild(g):null!=(m=this._slots.default)&&m.appendChild(t));for(u=0,h=y.length;u<h;u++)e=y[u],o(e)?this._slots[e]=this:this.appendChild(e);for(_=this.$structure.afterInsert,b=[],l=0,p=_.length;l<p;l++)n=_[l],b.push(n.call(this));return b}}}},function(t,e,n){var i,r,o,s,u;s=["Webkit","Moz","ms"],u=n(0),i=u.camelize,r=u.capitalize,o=u.isArray,t.exports={_name:"style",_v:1,_rebind:"$style",_prio:700,_mergers:n(1).copy({source:"initStyle"}),methods:{$style:{normalize:function(t){var e,n,o,u;if(t=i(t),null!=this.style[t])return t;for(t=r(t),e=0,n=s.length;e<n;e++)if(o=s[e],u=o+t,null!=this.style[u])return u;return null},normalizeObj:function(t){var e,n,i,r;i={},n=this.$style.normalize;for(e in t)r=t[e],i[n(e)]=r;return i},setNormalized:function(t,e){var n,i,r;i=[];for(n in e)r=e[n],o(r)&&null!=r[0]?i.push(t.style[n]=r.join("")):i.push(t.style[n]=r);return i},set:function(t,e){return null==e&&(e=t,t=this),this.$style.setNormalized(t,this.$style.normalizeObj(e))}}},connectedCallback:function(){if(this._isFirstConnect&&null!=this.initStyle)return this.$style.set(this,this.initStyle)}}},function(t,e,n){t.exports={_name:"tests",_prio:0,_v:1,_mergers:[{source:"tests",setup:function(){return{iterate:function(){}}},finisher:function(t){}}],created:function(){}}},function(t,e,n){t.exports=n(10)},,function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);