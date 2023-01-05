!function(e,o,c,f){var a=[],t={_version:"3.11.6",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){a.push({name:e,fn:t,options:n})},addAsyncTest:function(e){a.push({name:null,fn:e})}};(l=function(){}).prototype=t;var l=new l,d=[];function u(e,t){return typeof e===t}var p=c.documentElement,g="svg"===p.nodeName.toLowerCase();function i(e){var t,n=p.className,r=l._config.classPrefix||"";g&&(n=n.baseVal),l._config.enableJSClass&&(t=new RegExp("(^|\\s)"+r+"no-js(\\s|$)"),n=n.replace(t,"$1"+r+"js$2")),l._config.enableClasses&&(0<e.length&&(n+=" "+r+e.join(" "+r)),g?p.className.baseVal=n:p.className=n)}function m(e){return"function"!=typeof c.createElement?c.createElement(e):g?c.createElementNS.call(c,"http://www.w3.org/2000/svg",e):c.createElement.apply(c,arguments)}l.addTest("bgpositionshorthand",function(){var e=m("a").style,t="right 10px bottom 10px";return e.cssText="background-position: "+t+";",e.backgroundPosition===t});var n="Moz O ms Webkit",h=t._config.usePrefixes?n.split(" "):[];t._cssomPrefixes=h;var r={elem:m("modernizr")};l._q.push(function(){delete r.elem});var v={style:r.elem.style};function s(e,t,n,r){var s,o,i,a="modernizr",l=m("div"),d=((i=c.body)||((i=m(g?"svg":"body")).fake=!0),i);if(parseInt(n,10))for(;n--;)(s=m("div")).id=r?r[n]:a+(n+1),l.appendChild(s);return(i=m("style")).type="text/css",i.id="s"+a,(d.fake?d:l).appendChild(i),d.appendChild(l),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(c.createTextNode(e)),l.id=a,d.fake&&(d.style.background="",d.style.overflow="hidden",o=p.style.overflow,p.style.overflow="hidden",p.appendChild(d)),e=t(l,e),d.fake&&d.parentNode?(d.parentNode.removeChild(d),p.style.overflow=o,p.offsetHeight):l.parentNode.removeChild(l),!!e}function w(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function y(e,t){var n=e.length;if("CSS"in o&&"supports"in o.CSS){for(;n--;)if(o.CSS.supports(w(e[n]),t))return!0;return!1}if("CSSSupportsRule"in o){for(var r=[];n--;)r.push("("+w(e[n])+":"+t+")");return s("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===(t=e,n=null,r="position","getComputedStyle"in o?(s=getComputedStyle.call(o,t,n),e=o.console,null!==s?r&&(s=s.getPropertyValue(r)):e&&e[e.error?"error":"log"].call(e,"getComputedStyle returning null, its possible modernizr test results are inaccurate")):s=!n&&t.currentStyle&&t.currentStyle[r],s);var t,n,r,s})}return f}l._q.unshift(function(){delete v.style});var S=t._config.usePrefixes?n.toLowerCase().split(" "):[];function T(e,t,n){var r,s;for(s in e)if(e[s]in t)return!1===n?e[s]:u(r=t[e[s]],"function")?function(e,t){return function(){return e.apply(t,arguments)}}(r,n||t):r;return!1}function b(e,t,n,r,s){var o=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+h.join(o+" ")+o).split(" ");return u(t,"string")||void 0===t?function(e,t,n,r){if(r=void 0!==r&&r,void 0!==n){var s=y(e,n);if(void 0!==s)return s}for(var o,i,a,l,d,c=["modernizr","tspan","samp"];!v.style&&c.length;)o=!0,v.modElem=m(c.shift()),v.style=v.modElem.style;function u(){o&&(delete v.style,delete v.modElem)}for(a=e.length,i=0;i<a;i++)if(l=e[i],d=v.style[l],~(""+l).indexOf("-")&&(l=l.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),v.style[l]!==f){if(r||void 0===n)return u(),"pfx"!==t||l;try{v.style[l]=n}catch(e){}if(v.style[l]!==d)return u(),"pfx"!==t||l}return u(),!1}(i,t,r,s):T(i=(e+" "+S.join(o+" ")+o).split(" "),t,n)}function x(e,t,n){return b(e,f,f,t,n)}t._domPrefixes=S,t.testAllProps=b,t.testAllProps=x,l.addTest("bgpositionxy",function(){return x("backgroundPositionX","3px",!0)&&x("backgroundPositionY","5px",!0)}),l.addTest("bgrepeatround",x("backgroundRepeat","round")),l.addTest("bgrepeatspace",x("backgroundRepeat","space")),l.addTest("bgsizecover",x("backgroundSize","cover")),l.addTest("borderradius",x("borderRadius","0px",!0)),l.addTest("cssanimations",x("animationName","a",!0));var C=t._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];t._prefixes=C,l.addTest("csscalc",function(){var e=m("a");return e.style.cssText="width:"+C.join("calc(10px);width:"),!!e.style.length}),l.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&x("transform","scale(1)",!0)});var _="CSS"in o&&"supports"in o.CSS,E="supportsCSS"in o;l.addTest("supports",_||E),l.addTest("csstransforms3d",function(){return!!x("perspective","1px",!0)}),l.addTest("preserve3d",function(){var e,t=o.CSS,n=!1;return!!(t&&t.supports&&t.supports("(transform-style: preserve-3d)"))||(e=m("a"),t=m("a"),e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),p.appendChild(e),n=t.getBoundingClientRect(),p.removeChild(e),n=n.width&&n.width<4)}),l.addTest("csstransitions",x("transition","all",!0)),l.addTest("flexboxtweener",x("flexAlign","end",!0));var P,k,n=t.testStyles=s;function N(e,t){if("object"==typeof e)for(var n in e)P(e,n)&&N(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),s=l[r[0]];if(void 0!==(s=2===r.length?s[r[1]]:s))return l;t="function"==typeof t?t():t,1===r.length?l[r[0]]=t:(!l[r[0]]||l[r[0]]instanceof Boolean||(l[r[0]]=new Boolean(l[r[0]])),l[r[0]][r[1]]=t),i([(t&&!1!==t?"":"no-")+r.join("-")]),l._trigger(e,t)}return l}(_=navigator.userAgent,E=_.match(/w(eb)?osbrowser/gi),_=_.match(/windows phone/gi)&&_.match(/iemobile\/([0-9])+/gi)&&9<=parseFloat(RegExp.$1),E||_)?l.addTest("fontface",!1):n('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=c.getElementById("smodernizr"),n=n.sheet||n.styleSheet,n=n?n.cssRules&&n.cssRules[0]?n.cssRules[0].cssText:n.cssText||"":"",t=/src/i.test(n)&&0===n.indexOf(t.split(" ")[0]);l.addTest("fontface",t)}),l.addTest("svg",!!c.createElementNS&&!!c.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),P=void 0!==(k={}.hasOwnProperty)&&void 0!==k.call?function(e,t){return k.call(e,t)}:function(e,t){return t in e&&void 0===e.constructor.prototype[t]},t._l={},t.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout(function(){l._trigger(e,l[e])},0)},t._trigger=function(e,t){var n;this._l[e]&&(n=this._l[e],setTimeout(function(){for(var e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e])},l._q.push(function(){t.addTest=N}),l.addTest("svgasimg",c.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var R={}.toString;l.addTest("svgclippaths",function(){return!!c.createElementNS&&/SVGClipPath/.test(R.call(c.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),l.addTest("svgfilters",function(){var e=!1;try{e="SVGFEColorMatrixElement"in o&&2===SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(e){}return e}),l.addTest("svgforeignobject",function(){return!!c.createElementNS&&/SVGForeignObject/.test(R.call(c.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),l.addTest("inlinesvg",function(){var e=m("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),l.addTest("smil",function(){return!!c.createElementNS&&/SVGAnimate/.test(R.call(c.createElementNS("http://www.w3.org/2000/svg","animate")))}),l.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),l.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(e){return!1}}),l.addTest("websqldatabase","openDatabase"in o),l.addTest("multiplebgs",function(){var e=m("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),function(){var e,t,n,r,s,o,i;for(i in a)if(a.hasOwnProperty(i)){if(e=[],(t=a[i]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=u(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(o=e[s].split(".")).length?l[o[0]]=r:(l[o[0]]&&(!l[o[0]]||l[o[0]]instanceof Boolean)||(l[o[0]]=new Boolean(l[o[0]])),l[o[0]][o[1]]=r),d.push((r?"":"no-")+o.join("-"))}}(),i(d),delete t.addTest,delete t.addAsyncTest;for(var z=0;z<l._q.length;z++)l._q[z]();e.Modernizr=l}(window,window,document);