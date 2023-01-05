!function(e,t){"function"==typeof define&&define.amd?define("Chartist",[],function(){return e.Chartist=t()}):"object"==typeof module&&module.exports?module.exports=t():e.Chartist=t()}(this,function(){var e={version:"0.11.4"};return function(e,m){"use strict";var h=e.window,d=e.document;m.namespaces={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",ct:"http://gionkunz.github.com/chartist-js/ct"},m.noop=function(e){return e},m.alphaNumerate=function(e){return String.fromCharCode(97+e%26)},m.extend=function(e){var t,i,n;for(e=e||{},t=1;t<arguments.length;t++)for(var s in i=arguments[t])"object"!=typeof(n=i[s])||null===n||n instanceof Array?e[s]=n:e[s]=m.extend(e[s],n);return e},m.replaceAll=function(e,t,i){return e.replace(new RegExp(t,"g"),i)},m.ensureUnit=function(e,t){return"number"==typeof e&&(e+=t),e},m.quantity=function(e){if("string"!=typeof e)return{value:e};e=/^(\d+)\s*(.*)$/g.exec(e);return{value:+e[1],unit:e[2]||void 0}},m.querySelector=function(e){return e instanceof Node?e:d.querySelector(e)},m.times=function(e){return Array.apply(null,new Array(e))},m.sum=function(e,t){return e+(t||0)},m.mapMultiply=function(t){return function(e){return e*t}},m.mapAdd=function(t){return function(e){return e+t}},m.serialMap=function(n,s){var r=[],e=Math.max.apply(null,n.map(function(e){return e.length}));return m.times(e).forEach(function(e,t){var i=n.map(function(e){return e[t]});r[t]=s.apply(null,i)}),r},m.roundWithPrecision=function(e,t){t=Math.pow(10,t||m.precision);return Math.round(e*t)/t},m.precision=8,m.escapingMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},m.serialize=function(e){return null==e?e:("number"==typeof e?e=""+e:"object"==typeof e&&(e=JSON.stringify({data:e})),Object.keys(m.escapingMap).reduce(function(e,t){return m.replaceAll(e,t,m.escapingMap[t])},e))},m.deserialize=function(e){if("string"!=typeof e)return e;e=Object.keys(m.escapingMap).reduce(function(e,t){return m.replaceAll(e,m.escapingMap[t],t)},e);try{e=void 0!==(e=JSON.parse(e)).data?e.data:e}catch(e){}return e},m.createSvg=function(t,e,i,n){return e=e||"100%",i=i||"100%",Array.prototype.slice.call(t.querySelectorAll("svg")).filter(function(e){return e.getAttributeNS(m.namespaces.xmlns,"ct")}).forEach(function(e){t.removeChild(e)}),(n=new m.Svg("svg").attr({width:e,height:i}).addClass(n))._node.style.width=e,n._node.style.height=i,t.appendChild(n._node),n},m.normalizeData=function(e,t,i){var n={raw:e,normalized:{}};return n.normalized.series=m.getDataArray({series:e.series||[]},t,i),i=n.normalized.series.every(function(e){return e instanceof Array})?Math.max.apply(null,n.normalized.series.map(function(e){return e.length})):n.normalized.series.length,n.normalized.labels=(e.labels||[]).slice(),Array.prototype.push.apply(n.normalized.labels,m.times(Math.max(0,i-n.normalized.labels.length)).map(function(){return""})),t&&m.reverseData(n.normalized),n},m.safeHasProperty=function(e,t){return null!==e&&"object"==typeof e&&e.hasOwnProperty(t)},m.isDataHoleValue=function(e){return null==e||"number"==typeof e&&isNaN(e)},m.reverseData=function(e){e.labels.reverse(),e.series.reverse();for(var t=0;t<e.series.length;t++)"object"==typeof e.series[t]&&void 0!==e.series[t].data?e.series[t].data.reverse():e.series[t]instanceof Array&&e.series[t].reverse()},m.getDataArray=function(e,t,n){return e.series.map(function e(t){if(m.safeHasProperty(t,"value"))return e(t.value);if(m.safeHasProperty(t,"data"))return e(t.data);if(t instanceof Array)return t.map(e);if(!m.isDataHoleValue(t)){if(n){var i={};return"string"==typeof n?i[n]=m.getNumberOrUndefined(t):i.y=m.getNumberOrUndefined(t),i.x=t.hasOwnProperty("x")?m.getNumberOrUndefined(t.x):i.x,i.y=t.hasOwnProperty("y")?m.getNumberOrUndefined(t.y):i.y,i}return m.getNumberOrUndefined(t)}})},m.normalizePadding=function(e,t){return t=t||0,"number"==typeof e?{top:e,right:e,bottom:e,left:e}:{top:"number"==typeof e.top?e.top:t,right:"number"==typeof e.right?e.right:t,bottom:"number"==typeof e.bottom?e.bottom:t,left:"number"==typeof e.left?e.left:t}},m.getMetaData=function(e,t){t=(e.data||e)[t];return t?t.meta:void 0},m.orderOfMagnitude=function(e){return Math.floor(Math.log(Math.abs(e))/Math.LN10)},m.projectLength=function(e,t,i){return t/i.range*e},m.getAvailableHeight=function(e,t){return Math.max((m.quantity(t.height).value||e.height())-(t.chartPadding.top+t.chartPadding.bottom)-t.axisX.offset,0)},m.getHighLow=function(e,t,s){var r={high:void 0===(t=m.extend({},t,s?t["axis"+s.toUpperCase()]:{})).high?-Number.MAX_VALUE:+t.high,low:void 0===t.low?Number.MAX_VALUE:+t.low},a=void 0===t.high,o=void 0===t.low;return(a||o)&&function e(t){if(void 0!==t)if(t instanceof Array)for(var i=0;i<t.length;i++)e(t[i]);else{var n=s?+t[s]:+t;a&&n>r.high&&(r.high=n),o&&n<r.low&&(r.low=n)}}(e),!t.referenceValue&&0!==t.referenceValue||(r.high=Math.max(t.referenceValue,r.high),r.low=Math.min(t.referenceValue,r.low)),r.high<=r.low&&(0===r.low?r.high=1:r.low<0?r.high=0:(0<r.high||(r.high=1),r.low=0)),r},m.isNumeric=function(e){return null!==e&&isFinite(e)},m.isFalseyButZero=function(e){return!e&&0!==e},m.getNumberOrUndefined=function(e){return m.isNumeric(e)?+e:void 0},m.isMultiValue=function(e){return"object"==typeof e&&("x"in e||"y"in e)},m.getMultiValue=function(e,t){return m.isMultiValue(e)?m.getNumberOrUndefined(e[t||"y"]):m.getNumberOrUndefined(e)},m.rho=function(e){if(1===e)return e;function t(e){return e*e+1}var i,n=2,s=2;if(e%2==0)return 2;for(;n=t(n)%e,s=t(t(s))%e,1===(i=function e(t,i){return t%i==0?i:e(i,t%i)}(Math.abs(n-s),e)););return i},m.getBounds=function(e,t,i,n){var s,r,a=0,o={high:t.high,low:t.low};o.valueRange=o.high-o.low,o.oom=m.orderOfMagnitude(o.valueRange),o.step=Math.pow(10,o.oom),o.min=Math.floor(o.low/o.step)*o.step,o.max=Math.ceil(o.high/o.step)*o.step,o.range=o.max-o.min,o.numberOfSteps=Math.round(o.range/o.step);var l=m.projectLength(e,o.step,o)<i,t=n?m.rho(o.range):0;if(n&&m.projectLength(e,1,o)>=i)o.step=1;else if(n&&t<o.step&&m.projectLength(e,t,o)>=i)o.step=t;else for(;;){if(l&&m.projectLength(e,o.step,o)<=i)o.step*=2;else{if(l||!(m.projectLength(e,o.step/2,o)>=i))break;if(o.step/=2,n&&o.step%1!=0){o.step*=2;break}}if(1e3<a++)throw new Error("Exceeded maximum number of iterations while optimizing scale step!")}var h=2221e-19;function u(e,t){return e===(e+=t)&&(e*=1+(0<t?h:-h)),e}for(o.step=Math.max(o.step,h),s=o.min,r=o.max;s+o.step<=o.low;)s=u(s,o.step);for(;r-o.step>=o.high;)r=u(r,-o.step);o.min=s,o.max=r,o.range=o.max-o.min;for(var c=[],d=o.min;d<=o.max;d=u(d,o.step)){var p=m.roundWithPrecision(d);p!==c[c.length-1]&&c.push(p)}return o.values=c,o},m.polarToCartesian=function(e,t,i,n){n=(n-90)*Math.PI/180;return{x:e+i*Math.cos(n),y:t+i*Math.sin(n)}},m.createChartRect=function(e,t,i){var n=!(!t.axisX&&!t.axisY),s=n?t.axisY.offset:0,r=n?t.axisX.offset:0,a=e.width()||m.quantity(t.width).value||0,o=e.height()||m.quantity(t.height).value||0,e=m.normalizePadding(t.chartPadding,i),a=Math.max(a,s+e.left+e.right),o=Math.max(o,r+e.top+e.bottom),i={padding:e,width:function(){return this.x2-this.x1},height:function(){return this.y1-this.y2}};return n?("start"===t.axisX.position?(i.y2=e.top+r,i.y1=Math.max(o-e.bottom,i.y2+1)):(i.y2=e.top,i.y1=Math.max(o-e.bottom-r,i.y2+1)),"start"===t.axisY.position?(i.x1=e.left+s,i.x2=Math.max(a-e.right,i.x1+1)):(i.x1=e.left,i.x2=Math.max(a-e.right-s,i.x1+1))):(i.x1=e.left,i.x2=Math.max(a-e.right,i.x1+1),i.y2=e.top,i.y1=Math.max(o-e.bottom,i.y2+1)),i},m.createGrid=function(e,t,i,n,s,r,a,o){var l={};l[i.units.pos+"1"]=e,l[i.units.pos+"2"]=e,l[i.counterUnits.pos+"1"]=n,l[i.counterUnits.pos+"2"]=n+s;a=r.elem("line",l,a.join(" "));o.emit("draw",m.extend({type:"grid",axis:i,index:t,group:r,element:a},l))},m.createGridBackground=function(e,t,i,n){i=e.elem("rect",{x:t.x1,y:t.y2,width:t.width(),height:t.height()},i,!0);n.emit("draw",{type:"gridBackground",group:e,element:i})},m.createLabel=function(e,t,i,n,s,r,a,o,l,h,u){var c={};c[s.units.pos]=e+a[s.units.pos],c[s.counterUnits.pos]=a[s.counterUnits.pos],c[s.units.len]=t,c[s.counterUnits.len]=Math.max(0,r-10),l=h?((h=d.createElement("span")).className=l.join(" "),h.setAttribute("xmlns",m.namespaces.xhtml),h.innerText=n[i],h.style[s.units.len]=Math.round(c[s.units.len])+"px",h.style[s.counterUnits.len]=Math.round(c[s.counterUnits.len])+"px",o.foreignObject(h,m.extend({style:"overflow: visible;"},c))):o.elem("text",c,l.join(" ")).text(n[i]),u.emit("draw",m.extend({type:"label",axis:s,index:i,group:o,element:l,text:n[i]},c))},m.getSeriesOption=function(e,t,i){if(e.name&&t.series&&t.series[e.name]){e=t.series[e.name];return(e.hasOwnProperty(i)?e:t)[i]}return t[i]},m.optionsProvider=function(e,i,n){var s,r,a=m.extend({},e),t=[];function o(e){var t=s;if(s=m.extend({},a),i)for(r=0;r<i.length;r++)h.matchMedia(i[r][0]).matches&&(s=m.extend(s,i[r][1]));n&&e&&n.emit("optionsChanged",{previousOptions:t,currentOptions:s})}if(!h.matchMedia)throw"window.matchMedia not found! Make sure you're using a polyfill.";if(i)for(r=0;r<i.length;r++){var l=h.matchMedia(i[r][0]);l.addListener(o),t.push(l)}return o(),{removeMediaQueryListeners:function(){t.forEach(function(e){e.removeListener(o)})},getCurrentOptions:function(){return m.extend({},s)}}},m.splitIntoSegments=function(e,t,i){i=m.extend({},{increasingX:!1,fillHoles:!1},i);for(var n=[],s=!0,r=0;r<e.length;r+=2)void 0===m.getMultiValue(t[r/2].value)?i.fillHoles||(s=!0):((s=i.increasingX&&2<=r&&e[r]<=e[r-2]?!0:s)&&(n.push({pathCoordinates:[],valueData:[]}),s=!1),n[n.length-1].pathCoordinates.push(e[r],e[r+1]),n[n.length-1].valueData.push(t[r/2]));return n}}(this||global,e),function(f){"use strict";f.Interpolation={},f.Interpolation.none=function(l){return l=f.extend({},{fillHoles:!1},l),function(e,t){for(var i=new f.Svg.Path,n=!0,s=0;s<e.length;s+=2){var r=e[s],a=e[s+1],o=t[s/2];void 0!==f.getMultiValue(o.value)?(n?i.move(r,a,!1,o):i.line(r,a,!1,o),n=!1):l.fillHoles||(n=!0)}return i}},f.Interpolation.simple=function(c){c=f.extend({},{divisor:2,fillHoles:!1},c);var d=1/Math.max(1,c.divisor);return function(e,t){for(var i,n,s,r=new f.Svg.Path,a=0;a<e.length;a+=2){var o=e[a],l=e[a+1],h=(o-i)*d,u=t[a/2];void 0!==u.value?(void 0===s?r.move(o,l,!1,u):r.curve(i+h,n,o-h,l,o,l,!1,u),i=o,n=l,s=u):c.fillHoles||(i=o=s=void 0)}return r}},f.Interpolation.cardinal=function(h){h=f.extend({},{tension:1,fillHoles:!1},h);var u=Math.min(1,Math.max(0,h.tension)),c=1-u;return function t(e,i){var n=f.splitIntoSegments(e,i,{fillHoles:h.fillHoles});if(n.length){if(1<n.length){var s=[];return n.forEach(function(e){s.push(t(e.pathCoordinates,e.valueData))}),f.Svg.Path.join(s)}if(e=n[0].pathCoordinates,i=n[0].valueData,e.length<=4)return f.Interpolation.none()(e,i);for(var r=(new f.Svg.Path).move(e[0],e[1],!1,i[0]),a=0,o=e.length;a<o-2;a+=2){var l=[{x:+e[a-2],y:+e[a-1]},{x:+e[a],y:+e[a+1]},{x:+e[a+2],y:+e[a+3]},{x:+e[a+4],y:+e[a+5]}];o-4===a?l[3]=l[2]:a||(l[0]={x:+e[a],y:+e[a+1]}),r.curve(u*(-l[0].x+6*l[1].x+l[2].x)/6+c*l[2].x,u*(-l[0].y+6*l[1].y+l[2].y)/6+c*l[2].y,u*(l[1].x+6*l[2].x-l[3].x)/6+c*l[2].x,u*(l[1].y+6*l[2].y-l[3].y)/6+c*l[2].y,l[2].x,l[2].y,!1,i[(a+2)/2])}return r}return f.Interpolation.none()([])}},f.Interpolation.monotoneCubic=function(m){return m=f.extend({},{fillHoles:!1},m),function t(e,i){var n=f.splitIntoSegments(e,i,{fillHoles:m.fillHoles,increasingX:!0});if(n.length){if(1<n.length){var s=[];return n.forEach(function(e){s.push(t(e.pathCoordinates,e.valueData))}),f.Svg.Path.join(s)}if(e=n[0].pathCoordinates,i=n[0].valueData,e.length<=4)return f.Interpolation.none()(e,i);for(var r,a=[],o=[],l=e.length/2,h=[],u=[],c=[],d=[],p=0;p<l;p++)a[p]=e[2*p],o[p]=e[2*p+1];for(p=0;p<l-1;p++)c[p]=o[p+1]-o[p],d[p]=a[p+1]-a[p],u[p]=c[p]/d[p];for(h[0]=u[0],h[l-1]=u[l-2],p=1;p<l-1;p++)0===u[p]||0===u[p-1]||0<u[p-1]!=0<u[p]?h[p]=0:(h[p]=3*(d[p-1]+d[p])/((2*d[p]+d[p-1])/u[p-1]+(d[p]+2*d[p-1])/u[p]),isFinite(h[p])||(h[p]=0));for(r=(new f.Svg.Path).move(a[0],o[0],!1,i[0]),p=0;p<l-1;p++)r.curve(a[p]+d[p]/3,o[p]+h[p]*d[p]/3,a[p+1]-d[p]/3,o[p+1]-h[p+1]*d[p]/3,a[p+1],o[p+1],!1,i[p+1]);return r}return f.Interpolation.none()([])}},f.Interpolation.step=function(u){return u=f.extend({},{postpone:!0,fillHoles:!1},u),function(e,t){for(var i,n,s,r=new f.Svg.Path,a=0;a<e.length;a+=2){var o=e[a],l=e[a+1],h=t[a/2];void 0!==h.value?(void 0===s?r.move(o,l,!1,h):(u.postpone?r.line(o,n,!1,s):r.line(i,l,!1,h),r.line(o,l,!1,h)),i=o,n=l,s=h):u.fillHoles||(i=n=s=void 0)}return r}}}((this||global,e)),function(){"use strict";e.EventEmitter=function(){var n=[];return{addEventHandler:function(e,t){n[e]=n[e]||[],n[e].push(t)},removeEventHandler:function(e,t){n[e]&&(t?(n[e].splice(n[e].indexOf(t),1),0===n[e].length&&delete n[e]):delete n[e])},emit:function(t,i){n[t]&&n[t].forEach(function(e){e(i)}),n["*"]&&n["*"].forEach(function(e){e(t,i)})}}}}(this||global),function(n){"use strict";n.Class={extend:function(e,t){var t=t||this.prototype||n.Class,i=Object.create(t);return n.Class.cloneDefinitions(i,e),(e=function(){var e=i.constructor||function(){},t=this===n?Object.create(i):this;return e.apply(t,Array.prototype.slice.call(arguments,0)),t}).prototype=i,e.super=t,e.extend=this.extend,e},cloneDefinitions:function(){var e=function(e){var t=[];if(e.length)for(var i=0;i<e.length;i++)t.push(e[i]);return t}(arguments),i=e[0];return e.splice(1,e.length-1).forEach(function(t){Object.getOwnPropertyNames(t).forEach(function(e){delete i[e],Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(t,e))})}),i}}}((this||global,e)),function(e,r){"use strict";var a=e.window;r.Base=r.Class.extend({constructor:function(e,t,i,n,s){this.container=r.querySelector(e),this.data=t||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.defaultOptions=i,this.options=n,this.responsiveOptions=s,this.eventEmitter=r.EventEmitter(),this.supportsForeignObject=r.Svg.isSupported("Extensibility"),this.supportsAnimations=r.Svg.isSupported("AnimationEventsAttribute"),this.resizeListener=function(){this.update()}.bind(this),this.container&&(this.container.__chartist__&&this.container.__chartist__.detach(),this.container.__chartist__=this),this.initializeTimeoutId=setTimeout(function(){a.addEventListener("resize",this.resizeListener),this.optionsProvider=r.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.addEventHandler("optionsChanged",function(){this.update()}.bind(this)),this.options.plugins&&this.options.plugins.forEach(function(e){e instanceof Array?e[0](this,e[1]):e(this)}.bind(this)),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=void 0}.bind(this),0)},optionsProvider:void 0,container:void 0,svg:void 0,eventEmitter:void 0,createChart:function(){throw new Error("Base chart type can't be instantiated!")},update:function(e,t,i){return e&&(this.data=e||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.eventEmitter.emit("data",{type:"update",data:this.data})),t&&(this.options=r.extend({},i?this.options:this.defaultOptions,t),this.initializeTimeoutId||(this.optionsProvider.removeMediaQueryListeners(),this.optionsProvider=r.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter))),this.initializeTimeoutId||this.createChart(this.optionsProvider.getCurrentOptions()),this},detach:function(){return this.initializeTimeoutId?a.clearTimeout(this.initializeTimeoutId):(a.removeEventListener("resize",this.resizeListener),this.optionsProvider.removeMediaQueryListeners()),this},on:function(e,t){return this.eventEmitter.addEventHandler(e,t),this},off:function(e,t){return this.eventEmitter.removeEventHandler(e,t),this},version:r.version,supportsForeignObject:!1})}(this||global,e),function(e,l){"use strict";var r=e.document;l.Svg=l.Class.extend({constructor:function(e,t,i,n,s){e instanceof Element?this._node=e:(this._node=r.createElementNS(l.namespaces.svg,e),"svg"===e&&this.attr({"xmlns:ct":l.namespaces.ct})),t&&this.attr(t),i&&this.addClass(i),n&&(s&&n._node.firstChild?n._node.insertBefore(this._node,n._node.firstChild):n._node.appendChild(this._node))},attr:function(i,e){return"string"==typeof i?e?this._node.getAttributeNS(e,i):this._node.getAttribute(i):(Object.keys(i).forEach(function(e){var t;void 0!==i[e]&&(-1!==e.indexOf(":")?(t=e.split(":"),this._node.setAttributeNS(l.namespaces[t[0]],e,i[e])):this._node.setAttribute(e,i[e]))}.bind(this)),this)},elem:function(e,t,i,n){return new l.Svg(e,t,i,this,n)},parent:function(){return this._node.parentNode instanceof SVGElement?new l.Svg(this._node.parentNode):null},root:function(){for(var e=this._node;"svg"!==e.nodeName;)e=e.parentNode;return new l.Svg(e)},querySelector:function(e){return(e=this._node.querySelector(e))?new l.Svg(e):null},querySelectorAll:function(e){return(e=this._node.querySelectorAll(e)).length?new l.Svg.List(e):null},getNode:function(){return this._node},foreignObject:function(e,t,i,n){var s;return"string"==typeof e&&((s=r.createElement("div")).innerHTML=e,e=s.firstChild),e.setAttribute("xmlns",l.namespaces.xmlns),(n=this.elem("foreignObject",t,i,n))._node.appendChild(e),n},text:function(e){return this._node.appendChild(r.createTextNode(e)),this},empty:function(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this},remove:function(){return this._node.parentNode.removeChild(this._node),this.parent()},replace:function(e){return this._node.parentNode.replaceChild(e._node,this._node),e},append:function(e,t){return t&&this._node.firstChild?this._node.insertBefore(e._node,this._node.firstChild):this._node.appendChild(e._node),this},classes:function(){return this._node.getAttribute("class")?this._node.getAttribute("class").trim().split(/\s+/):[]},addClass:function(e){return this._node.setAttribute("class",this.classes(this._node).concat(e.trim().split(/\s+/)).filter(function(e,t,i){return i.indexOf(e)===t}).join(" ")),this},removeClass:function(e){var t=e.trim().split(/\s+/);return this._node.setAttribute("class",this.classes(this._node).filter(function(e){return-1===t.indexOf(e)}).join(" ")),this},removeAllClasses:function(){return this._node.setAttribute("class",""),this},height:function(){return this._node.getBoundingClientRect().height},width:function(){return this._node.getBoundingClientRect().width},animate:function(e,i,o){return void 0===i&&(i=!0),Object.keys(e).forEach(function(a){function t(t,e){var i,n,s,r={};t.easing&&(s=t.easing instanceof Array?t.easing:l.Svg.Easing[t.easing],delete t.easing),t.begin=l.ensureUnit(t.begin,"ms"),t.dur=l.ensureUnit(t.dur,"ms"),s&&(t.calcMode="spline",t.keySplines=s.join(" "),t.keyTimes="0;1"),e&&(t.fill="freeze",r[a]=t.from,this.attr(r),n=l.quantity(t.begin||0).value,t.begin="indefinite"),i=this.elem("animate",l.extend({attributeName:a},t)),e&&setTimeout(function(){try{i._node.beginElement()}catch(e){r[a]=t.to,this.attr(r),i.remove()}}.bind(this),n),o&&i._node.addEventListener("beginEvent",function(){o.emit("animationBegin",{element:this,animate:i._node,params:t})}.bind(this)),i._node.addEventListener("endEvent",function(){o&&o.emit("animationEnd",{element:this,animate:i._node,params:t}),e&&(r[a]=t.to,this.attr(r),i.remove())}.bind(this))}e[a]instanceof Array?e[a].forEach(function(e){t.bind(this)(e,!1)}.bind(this)):t.bind(this)(e[a],i)}.bind(this)),this}}),l.Svg.isSupported=function(e){return r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#"+e,"1.1")};l.Svg.Easing={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]},l.Svg.List=l.Class.extend({constructor:function(e){var n=this;this.svgElements=[];for(var t=0;t<e.length;t++)this.svgElements.push(new l.Svg(e[t]));Object.keys(l.Svg.prototype).filter(function(e){return-1===["constructor","parent","querySelector","querySelectorAll","replace","append","classes","height","width"].indexOf(e)}).forEach(function(i){n[i]=function(){var t=Array.prototype.slice.call(arguments,0);return n.svgElements.forEach(function(e){l.Svg.prototype[i].apply(e,t)}),n}})}})}(this||global,e),function(o){"use strict";var a={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},i={accuracy:3};function h(e,t,i,n,s,r){r=o.extend({command:s?e.toLowerCase():e.toUpperCase()},t,r?{data:r}:{});i.splice(n,0,r)}function e(s,r){s.forEach(function(i,n){a[i.command.toLowerCase()].forEach(function(e,t){r(i,e,n,t,s)})})}o.Svg.Path=o.Class.extend({constructor:function(e,t){this.pathElements=[],this.pos=0,this.close=e,this.options=o.extend({},i,t)},position:function(e){return void 0!==e?(this.pos=Math.max(0,Math.min(this.pathElements.length,e)),this):this.pos},remove:function(e){return this.pathElements.splice(this.pos,e),this},move:function(e,t,i,n){return h("M",{x:+e,y:+t},this.pathElements,this.pos++,i,n),this},line:function(e,t,i,n){return h("L",{x:+e,y:+t},this.pathElements,this.pos++,i,n),this},curve:function(e,t,i,n,s,r,a,o){return h("C",{x1:+e,y1:+t,x2:+i,y2:+n,x:+s,y:+r},this.pathElements,this.pos++,a,o),this},arc:function(e,t,i,n,s,r,a,o,l){return h("A",{rx:+e,ry:+t,xAr:+i,lAf:+n,sf:+s,x:+r,y:+a},this.pathElements,this.pos++,o,l),this},scale:function(i,n){return e(this.pathElements,function(e,t){e[t]*="x"===t[0]?i:n}),this},translate:function(i,n){return e(this.pathElements,function(e,t){e[t]+="x"===t[0]?i:n}),this},transform:function(r){return e(this.pathElements,function(e,t,i,n,s){s=r(e,t,i,n,s);!s&&0!==s||(e[t]=s)}),this},parse:function(e){var t=e.replace(/([A-Za-z])([0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(function(e,t){return t.match(/[A-Za-z]/)&&e.push([]),e[e.length-1].push(t),e},[]);return"Z"===t[t.length-1][0].toUpperCase()&&t.pop(),e=t.map(function(n){var e=n.shift(),t=a[e.toLowerCase()];return o.extend({command:e},t.reduce(function(e,t,i){return e[t]=+n[i],e},{}))}),t=[this.pos,0],Array.prototype.push.apply(t,e),Array.prototype.splice.apply(this.pathElements,t),this.pos+=e.length,this},stringify:function(){var n=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(function(e,t){var i=a[t.command.toLowerCase()].map(function(e){return this.options.accuracy?Math.round(t[e]*n)/n:t[e]}.bind(this));return e+t.command+i.join(",")}.bind(this),"")+(this.close?"Z":"")},clone:function(e){return(e=new o.Svg.Path(e||this.close)).pos=this.pos,e.pathElements=this.pathElements.slice().map(function(e){return o.extend({},e)}),e.options=o.extend({},this.options),e},splitByCommand:function(t){var i=[new o.Svg.Path];return this.pathElements.forEach(function(e){e.command===t.toUpperCase()&&0!==i[i.length-1].pathElements.length&&i.push(new o.Svg.Path),i[i.length-1].pathElements.push(e)}),i}}),o.Svg.Path.elementDescriptions=a,o.Svg.Path.join=function(e,t,i){for(var n=new o.Svg.Path(t,i),s=0;s<e.length;s++)for(var r=e[s],a=0;a<r.pathElements.length;a++)n.pathElements.push(r.pathElements[a]);return n}}((this||global,e)),function(e,d){"use strict";e.window,e.document;var s={x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}};d.Axis=d.Class.extend({constructor:function(e,t,i,n){this.units=e,this.counterUnits=e===s.x?s.y:s.x,this.chartRect=t,this.axisLength=t[e.rectEnd]-t[e.rectStart],this.gridOffset=t[e.rectOffset],this.ticks=i,this.options=n},createGridAndLabels:function(s,r,a,o,l){var h=o["axis"+this.units.pos.toUpperCase()],u=this.ticks.map(this.projectValue.bind(this)),c=this.ticks.map(h.labelInterpolationFnc);u.forEach(function(e,t){var i={x:0,y:0},n=u[t+1]?u[t+1]-e:Math.max(this.axisLength-e,30);d.isFalseyButZero(c[t])&&""!==c[t]||("x"===this.units.pos?(e=this.chartRect.x1+e,i.x=o.axisX.labelOffset.x,"start"===o.axisX.position?i.y=this.chartRect.padding.top+o.axisX.labelOffset.y+(a?5:20):i.y=this.chartRect.y1+o.axisX.labelOffset.y+(a?5:20)):(e=this.chartRect.y1-e,i.y=o.axisY.labelOffset.y-(a?n:0),"start"===o.axisY.position?i.x=a?this.chartRect.padding.left+o.axisY.labelOffset.x:this.chartRect.x1-10:i.x=this.chartRect.x2+o.axisY.labelOffset.x+10),h.showGrid&&d.createGrid(e,t,this,this.gridOffset,this.chartRect[this.counterUnits.len](),s,[o.classNames.grid,o.classNames[this.units.dir]],l),h.showLabel&&d.createLabel(e,n,t,c,this,h.offset,i,r,[o.classNames.label,o.classNames[this.units.dir],"start"===h.position?o.classNames[h.position]:o.classNames.end],a,l))}.bind(this))},projectValue:function(e,t,i){throw new Error("Base axis can't be instantiated!")}}),d.Axis.units=s}(this||global,e),function(e,s){"use strict";e.window,e.document;s.AutoScaleAxis=s.Axis.extend({constructor:function(e,t,i,n){t=n.highLow||s.getHighLow(t,n,e.pos),this.bounds=s.getBounds(i[e.rectEnd]-i[e.rectStart],t,n.scaleMinSpace||20,n.onlyInteger),this.range={min:this.bounds.min,max:this.bounds.max},s.AutoScaleAxis.super.constructor.call(this,e,i,this.bounds.values,n)},projectValue:function(e){return this.axisLength*(+s.getMultiValue(e,this.units.pos)-this.bounds.min)/this.bounds.range}})}(this||global,e),function(e,r){"use strict";e.window,e.document;r.FixedScaleAxis=r.Axis.extend({constructor:function(e,t,i,n){var s=n.highLow||r.getHighLow(t,n,e.pos);this.divisor=n.divisor||1,this.ticks=n.ticks||r.times(this.divisor).map(function(e,t){return s.low+(s.high-s.low)/this.divisor*t}.bind(this)),this.ticks.sort(function(e,t){return e-t}),this.range={min:s.low,max:s.high},r.FixedScaleAxis.super.constructor.call(this,e,i,this.ticks,n),this.stepLength=this.axisLength/this.divisor},projectValue:function(e){return this.axisLength*(+r.getMultiValue(e,this.units.pos)-this.range.min)/(this.range.max-this.range.min)}})}(this||global,e),function(e,s){"use strict";e.window,e.document;s.StepAxis=s.Axis.extend({constructor:function(e,t,i,n){s.StepAxis.super.constructor.call(this,e,i,n.ticks,n),n=Math.max(1,n.ticks.length-(n.stretch?1:0)),this.stepLength=this.axisLength/n},projectValue:function(e,t){return this.stepLength*t}})}(this||global,e),function(e,f){"use strict";e.window,e.document;var s={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:f.noop,type:void 0},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:f.noop,type:void 0,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,showGridBackground:!1,low:void 0,high:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};f.Line=f.Base.extend({constructor:function(e,t,i,n){f.Line.super.constructor.call(this,e,t,s,f.extend({},s,i),n)},createChart:function(h){var u=f.normalizeData(this.data,h.reverseData,!0);this.svg=f.createSvg(this.container,h.width,h.height,h.classNames.chart);var e=this.svg.elem("g").addClass(h.classNames.gridGroup),c=this.svg.elem("g"),t=this.svg.elem("g").addClass(h.classNames.labelGroup),d=f.createChartRect(this.svg,h,s.padding),p=void 0===h.axisX.type?new f.StepAxis(f.Axis.units.x,u.normalized.series,d,f.extend({},h.axisX,{ticks:u.normalized.labels,stretch:h.fullWidth})):h.axisX.type.call(f,f.Axis.units.x,u.normalized.series,d,h.axisX),m=void 0===h.axisY.type?new f.AutoScaleAxis(f.Axis.units.y,u.normalized.series,d,f.extend({},h.axisY,{high:(f.isNumeric(h.high)?h:h.axisY).high,low:(f.isNumeric(h.low)?h:h.axisY).low})):h.axisY.type.call(f,f.Axis.units.y,u.normalized.series,d,h.axisY);p.createGridAndLabels(e,t,this.supportsForeignObject,h,this.eventEmitter),m.createGridAndLabels(e,t,this.supportsForeignObject,h,this.eventEmitter),h.showGridBackground&&f.createGridBackground(e,d,h.classNames.gridBackground,this.eventEmitter),u.raw.series.forEach(function(n,s){var i=c.elem("g");i.attr({"ct:series-name":n.name,"ct:meta":f.serialize(n.meta)}),i.addClass([h.classNames.series,n.className||h.classNames.series+"-"+f.alphaNumerate(s)].join(" "));var r=[],a=[];u.normalized.series[s].forEach(function(e,t){var i={x:d.x1+p.projectValue(e,t,u.normalized.series[s]),y:d.y1-m.projectValue(e,t,u.normalized.series[s])};r.push(i.x,i.y),a.push({value:e,valueIndex:t,meta:f.getMetaData(n,t)})}.bind(this));var e,o,t={lineSmooth:f.getSeriesOption(n,h,"lineSmooth"),showPoint:f.getSeriesOption(n,h,"showPoint"),showLine:f.getSeriesOption(n,h,"showLine"),showArea:f.getSeriesOption(n,h,"showArea"),areaBase:f.getSeriesOption(n,h,"areaBase")},l=("function"==typeof t.lineSmooth?t.lineSmooth:t.lineSmooth?f.Interpolation.monotoneCubic():f.Interpolation.none())(r,a);t.showPoint&&l.pathElements.forEach(function(e){var t=i.elem("line",{x1:e.x,y1:e.y,x2:e.x+.01,y2:e.y},h.classNames.point).attr({"ct:value":[e.data.value.x,e.data.value.y].filter(f.isNumeric).join(","),"ct:meta":f.serialize(e.data.meta)});this.eventEmitter.emit("draw",{type:"point",value:e.data.value,index:e.data.valueIndex,meta:e.data.meta,series:n,seriesIndex:s,axisX:p,axisY:m,group:i,element:t,x:e.x,y:e.y})}.bind(this)),t.showLine&&(e=i.elem("path",{d:l.stringify()},h.classNames.line,!0),this.eventEmitter.emit("draw",{type:"line",values:u.normalized.series[s],path:l.clone(),chartRect:d,index:s,series:n,seriesIndex:s,seriesMeta:n.meta,axisX:p,axisY:m,group:i,element:e})),t.showArea&&m.range&&(t=Math.max(Math.min(t.areaBase,m.range.max),m.range.min),o=d.y1-m.projectValue(t),l.splitByCommand("M").filter(function(e){return 1<e.pathElements.length}).map(function(e){var t=e.pathElements[0],i=e.pathElements[e.pathElements.length-1];return e.clone(!0).position(0).remove(1).move(t.x,o).line(t.x,t.y).position(e.pathElements.length+1).line(i.x,o)}).forEach(function(e){var t=i.elem("path",{d:e.stringify()},h.classNames.area,!0);this.eventEmitter.emit("draw",{type:"area",values:u.normalized.series[s],path:e.clone(),series:n,seriesIndex:s,axisX:p,axisY:m,chartRect:d,index:s,group:i,element:t})}.bind(this)))}.bind(this)),this.eventEmitter.emit("created",{bounds:m.bounds,chartRect:d,axisX:p,axisY:m,svg:this.svg,options:h})}})}(this||global,e),function(e,y){"use strict";e.window,e.document;var r={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:y.noop,scaleMinSpace:30,onlyInteger:!1},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:y.noop,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,high:void 0,low:void 0,referenceValue:0,chartPadding:{top:15,right:15,bottom:5,left:10},seriesBarDistance:15,stackBars:!1,stackMode:"accumulate",horizontalBars:!1,distributeSeries:!1,reverseData:!1,showGridBackground:!1,classNames:{chart:"ct-chart-bar",horizontalBars:"ct-horizontal-bars",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",bar:"ct-bar",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};y.Bar=y.Base.extend({constructor:function(e,t,i,n){y.Bar.super.constructor.call(this,e,t,r,y.extend({},r,i),n)},createChart:function(u){var c;u.distributeSeries?(c=y.normalizeData(this.data,u.reverseData,u.horizontalBars?"x":"y")).normalized.series=c.normalized.series.map(function(e){return[e]}):c=y.normalizeData(this.data,u.reverseData,u.horizontalBars?"x":"y"),this.svg=y.createSvg(this.container,u.width,u.height,u.classNames.chart+(u.horizontalBars?" "+u.classNames.horizontalBars:""));var e,t=this.svg.elem("g").addClass(u.classNames.gridGroup),i=this.svg.elem("g"),n=this.svg.elem("g").addClass(u.classNames.labelGroup);(e=u.stackBars&&0!==c.normalized.series.length?(s=y.serialMap(c.normalized.series,function(){return Array.prototype.slice.call(arguments).map(function(e){return e}).reduce(function(e,t){return{x:e.x+(t&&t.x)||0,y:e.y+(t&&t.y)||0}},{x:0,y:0})}),y.getHighLow([s],u,u.horizontalBars?"x":"y")):y.getHighLow(c.normalized.series,u,u.horizontalBars?"x":"y")).high=+u.high||(0===u.high?0:e.high),e.low=+u.low||(0===u.low?0:e.low);var d,p,m,f,g=y.createChartRect(this.svg,u,r.padding),s=u.distributeSeries&&u.stackBars?c.normalized.labels.slice(0,1):c.normalized.labels;u.horizontalBars?(d=m=void 0===u.axisX.type?new y.AutoScaleAxis(y.Axis.units.x,c.normalized.series,g,y.extend({},u.axisX,{highLow:e,referenceValue:0})):u.axisX.type.call(y,y.Axis.units.x,c.normalized.series,g,y.extend({},u.axisX,{highLow:e,referenceValue:0})),p=f=void 0===u.axisY.type?new y.StepAxis(y.Axis.units.y,c.normalized.series,g,{ticks:s}):u.axisY.type.call(y,y.Axis.units.y,c.normalized.series,g,u.axisY)):(p=m=void 0===u.axisX.type?new y.StepAxis(y.Axis.units.x,c.normalized.series,g,{ticks:s}):u.axisX.type.call(y,y.Axis.units.x,c.normalized.series,g,u.axisX),d=f=void 0===u.axisY.type?new y.AutoScaleAxis(y.Axis.units.y,c.normalized.series,g,y.extend({},u.axisY,{highLow:e,referenceValue:0})):u.axisY.type.call(y,y.Axis.units.y,c.normalized.series,g,y.extend({},u.axisY,{highLow:e,referenceValue:0})));var x=u.horizontalBars?g.x1+d.projectValue(0):g.y1-d.projectValue(0),v=[];p.createGridAndLabels(t,n,this.supportsForeignObject,u,this.eventEmitter),d.createGridAndLabels(t,n,this.supportsForeignObject,u,this.eventEmitter),u.showGridBackground&&y.createGridBackground(t,g,u.classNames.gridBackground,this.eventEmitter),c.raw.series.forEach(function(r,a){var o=a-(c.raw.series.length-1)/2,l=u.distributeSeries&&!u.stackBars?p.axisLength/c.normalized.series.length/2:u.distributeSeries&&u.stackBars?p.axisLength/2:p.axisLength/c.normalized.series[a].length/2,h=i.elem("g");h.attr({"ct:series-name":r.name,"ct:meta":y.serialize(r.meta)}),h.addClass([u.classNames.series,r.className||u.classNames.series+"-"+y.alphaNumerate(a)].join(" ")),c.normalized.series[a].forEach(function(e,t){var i,n=u.distributeSeries&&!u.stackBars?a:u.distributeSeries&&u.stackBars?0:t,s=u.horizontalBars?{x:g.x1+d.projectValue(e&&e.x?e.x:0,t,c.normalized.series[a]),y:g.y1-p.projectValue(e&&e.y?e.y:0,n,c.normalized.series[a])}:{x:g.x1+p.projectValue(e&&e.x?e.x:0,n,c.normalized.series[a]),y:g.y1-d.projectValue(e&&e.y?e.y:0,t,c.normalized.series[a])};p instanceof y.StepAxis&&(p.options.stretch||(s[p.units.pos]+=l*(u.horizontalBars?-1:1)),s[p.units.pos]+=u.stackBars||u.distributeSeries?0:o*u.seriesBarDistance*(u.horizontalBars?-1:1)),i=v[t]||x,v[t]=i-(x-s[p.counterUnits.pos]),void 0!==e&&((n={})[p.units.pos+"1"]=s[p.units.pos],n[p.units.pos+"2"]=s[p.units.pos],!u.stackBars||"accumulate"!==u.stackMode&&u.stackMode?(n[p.counterUnits.pos+"1"]=x,n[p.counterUnits.pos+"2"]=s[p.counterUnits.pos]):(n[p.counterUnits.pos+"1"]=i,n[p.counterUnits.pos+"2"]=v[t]),n.x1=Math.min(Math.max(n.x1,g.x1),g.x2),n.x2=Math.min(Math.max(n.x2,g.x1),g.x2),n.y1=Math.min(Math.max(n.y1,g.y2),g.y1),n.y2=Math.min(Math.max(n.y2,g.y2),g.y1),s=y.getMetaData(r,t),i=h.elem("line",n,u.classNames.bar).attr({"ct:value":[e.x,e.y].filter(y.isNumeric).join(","),"ct:meta":y.serialize(s)}),this.eventEmitter.emit("draw",y.extend({type:"bar",value:e,index:t,meta:s,series:r,seriesIndex:a,axisX:m,axisY:f,chartRect:g,group:h,element:i},n)))}.bind(this))}.bind(this)),this.eventEmitter.emit("created",{bounds:d.bounds,chartRect:g,axisX:m,axisY:f,svg:this.svg,options:u})}})}(this||global,e),function(e,v){"use strict";e.window,e.document;var s={width:void 0,height:void 0,chartPadding:5,classNames:{chartPie:"ct-chart-pie",chartDonut:"ct-chart-donut",series:"ct-series",slicePie:"ct-slice-pie",sliceDonut:"ct-slice-donut",sliceDonutSolid:"ct-slice-donut-solid",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutSolid:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelPosition:"inside",labelInterpolationFnc:v.noop,labelDirection:"neutral",reverseData:!1,ignoreEmptyValues:!1};function y(e,t,i){e=t.x>e.x;return e&&"explode"===i||!e&&"implode"===i?"start":e&&"implode"===i||!e&&"explode"===i?"end":"middle"}v.Pie=v.Base.extend({constructor:function(e,t,i,n){v.Pie.super.constructor.call(this,e,t,s,v.extend({},s,i),n)},createChart:function(o){var l,h,u=v.normalizeData(this.data),c=[],d=o.startAngle;this.svg=v.createSvg(this.container,o.width,o.height,o.donut?o.classNames.chartDonut:o.classNames.chartPie);var e=v.createChartRect(this.svg,o,s.padding),p=Math.min(e.width()/2,e.height()/2),m=o.total||u.normalized.series.reduce(function(e,t){return e+t},0),f=v.quantity(o.donutWidth);"%"===f.unit&&(f.value*=p/100),p-=o.donut&&!o.donutSolid?f.value/2:0,h="outside"===o.labelPosition||o.donut&&!o.donutSolid?p:"center"===o.labelPosition?0:o.donutSolid?p-f.value/2:p/2,h+=o.labelOffset;var g={x:e.x1+e.width()/2,y:e.y2+e.height()/2},x=1===u.raw.series.filter(function(e){return e.hasOwnProperty("value")?0!==e.value:0!==e}).length;u.raw.series.forEach(function(e,t){c[t]=this.svg.elem("g",null,null)}.bind(this)),o.showLabel&&(l=this.svg.elem("g",null,null)),u.raw.series.forEach(function(e,t){var i,n,s,r,a;0===u.normalized.series[t]&&o.ignoreEmptyValues||(c[t].attr({"ct:series-name":e.name}),c[t].addClass([o.classNames.series,e.className||o.classNames.series+"-"+v.alphaNumerate(t)].join(" ")),359.99<=(i=0<m?d+u.normalized.series[t]/m*360:0)-(r=Math.max(0,d-(0===t||x?0:.2)))&&(i=r+359.99),n=v.polarToCartesian(g.x,g.y,p,r),s=v.polarToCartesian(g.x,g.y,p,i),r=new v.Svg.Path(!o.donut||o.donutSolid).move(s.x,s.y).arc(p,p,0,180<i-d,0,n.x,n.y),o.donut?o.donutSolid&&(s=p-f.value,n=v.polarToCartesian(g.x,g.y,s,d-(0===t||x?0:.2)),a=v.polarToCartesian(g.x,g.y,s,i),r.line(n.x,n.y),r.arc(s,s,0,180<i-d,1,a.x,a.y)):r.line(g.x,g.y),a=o.classNames.slicePie,o.donut&&(a=o.classNames.sliceDonut,o.donutSolid&&(a=o.classNames.sliceDonutSolid)),(a=c[t].elem("path",{d:r.stringify()},a)).attr({"ct:value":u.normalized.series[t],"ct:meta":v.serialize(e.meta)}),o.donut&&!o.donutSolid&&(a._node.style.strokeWidth=f.value+"px"),this.eventEmitter.emit("draw",{type:"slice",value:u.normalized.series[t],totalDataSum:m,index:t,meta:e.meta,series:e,group:c[t],element:a,path:r.clone(),center:g,radius:p,startAngle:d,endAngle:i}),o.showLabel&&(e=1===u.raw.series.length?{x:g.x,y:g.y}:v.polarToCartesian(g.x,g.y,h,d+(i-d)/2),a=(u.normalized.labels&&!v.isFalseyButZero(u.normalized.labels[t])?u.normalized.labels:u.normalized.series)[t],!(r=o.labelInterpolationFnc(a,t))&&0!==r||(a=l.elem("text",{dx:e.x,dy:e.y,"text-anchor":y(g,e,o.labelDirection)},o.classNames.label).text(""+r),this.eventEmitter.emit("draw",{type:"label",index:t,group:l,element:a,text:""+r,x:e.x,y:e.y}))),d=i)}.bind(this)),this.eventEmitter.emit("created",{chartRect:e,svg:this.svg,options:o})},determineAnchorPosition:y})}(this||global,e),e});