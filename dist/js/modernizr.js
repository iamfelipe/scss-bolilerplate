!function(a,d,p){var s=[],e={_version:"3.9.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}},l=function(){};l.prototype=e,l=new l;var c=[];function A(e,t){return typeof e===t}var i,n,m=d.documentElement,h="svg"===m.nodeName.toLowerCase();function u(e){var t=m.className,n=l._config.classPrefix||"";if(h&&(t=t.baseVal),l._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}l._config.enableClasses&&(0<e.length&&(t+=" "+n+e.join(" "+n)),h?m.className.baseVal=t:m.className=t)}function f(e,t){if("object"==typeof e)for(var n in e)i(e,n)&&f(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=l[r[0]];if(2===r.length&&(o=o[r[1]]),void 0!==o)return l;t="function"==typeof t?t():t,1===r.length?l[r[0]]=t:(!l[r[0]]||l[r[0]]instanceof Boolean||(l[r[0]]=new Boolean(l[r[0]])),l[r[0]][r[1]]=t),u([(t&&!1!==t?"":"no-")+r.join("-")]),l._trigger(e,t)}return l}function v(){return"function"!=typeof d.createElement?d.createElement(arguments[0]):h?d.createElementNS.call(d,"http://www.w3.org/2000/svg",arguments[0]):d.createElement.apply(d,arguments)}i=A(n={}.hasOwnProperty,"undefined")||A(n.call,"undefined")?function(e,t){return t in e&&A(e.constructor.prototype[t],"undefined")}:function(e,t){return n.call(e,t)},e._l={},e.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout(function(){l._trigger(e,l[e])},0)},e._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},l._q.push(function(){e.addTest=f}),h||function(e,a){var o,s,t=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",r=0,c={};function f(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function d(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function p(e){var t=c[e[n]];return t||(t={},r++,e[n]=r,c[r]=t),t}function u(e,t,n){return t||(t=a),s?t.createElement(e):(n||(n=p(t)),!(r=n.cache[e]?n.cache[e].cloneNode():l.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||i.test(e)||r.tagUrn?r:n.frag.appendChild(r));var r}function A(e){e||(e=a);var t,n,r=p(e);return!m.shivCSS||o||r.hasCSS||(r.hasCSS=!!f(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||(t=e,(n=r).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return m.shivMethods?u(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(m,n.frag)),e}!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,s=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=o=!0}}();var m={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:s,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:A,createElement:u,createDocumentFragment:function(e,t){if(e||(e=a),s)return e.createDocumentFragment();for(var n=(t=t||p(e)).frag.cloneNode(),r=0,o=d(),i=o.length;r<i;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=m.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),m.elements=n+" "+e,A(t)}};e.html5=m,A(a);var h,v=/^$|\b(?:all|print)\b/,g="html5shiv",y=!(s||(h=a.documentElement,void 0===a.namespaces||void 0===a.parentWindow||void 0===h.applyElement||void 0===h.removeNode||void 0===e.attachEvent));function b(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(g+":"+e.nodeName);r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function E(s){var l,c,e=p(s),t=s.namespaces,n=s.parentWindow;if(!y||s.printShived)return s;function u(){clearTimeout(e._removeSheetTimer),l&&l.removeNode(!0),l=null}return void 0===t[g]&&t.add(g),n.attachEvent("onbeforeprint",function(){u();for(var e,t,n,r=s.styleSheets,o=[],i=r.length,a=Array(i);i--;)a[i]=r[i];for(;n=a.pop();)if(!n.disabled&&v.test(n.media)){try{t=(e=n.imports).length}catch(e){t=0}for(i=0;i<t;i++)a.push(e[i]);try{o.push(n.cssText)}catch(e){}}o=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+d().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+g+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(o.reverse().join("")),c=function(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+d().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(b(t)));return i}(s),l=f(s,o)}),n.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(c),clearTimeout(e._removeSheetTimer),e._removeSheetTimer=setTimeout(u,500)}),s.printShived=!0,s}m.type+=" print",(m.shivPrint=E)(a),"object"==typeof module&&module.exports&&(module.exports=m)}(void 0!==a?a:this,d);var t={elem:v("modernizr")};l._q.push(function(){delete t.elem});var g={style:t.elem.style};function o(e,t,n,r){var o,i,a,s,l,c="modernizr",u=v("div"),f=((l=d.body)||((l=v(h?"svg":"body")).fake=!0),l);if(parseInt(n,10))for(;n--;)(a=v("div")).id=r?r[n]:c+(n+1),u.appendChild(a);return(o=v("style")).type="text/css",o.id="s"+c,(f.fake?f:u).appendChild(o),f.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(d.createTextNode(e)),u.id=c,f.fake&&(f.style.background="",f.style.overflow="hidden",s=m.style.overflow,m.style.overflow="hidden",m.appendChild(f)),i=t(u,e),f.fake?(f.parentNode.removeChild(f),m.style.overflow=s,m.offsetHeight):u.parentNode.removeChild(u),!!i}function y(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function b(e,t){var n=e.length;if("CSS"in a&&"supports"in a.CSS){for(;n--;)if(a.CSS.supports(y(e[n]),t))return!0;return!1}if("CSSSupportsRule"in a){for(var r=[];n--;)r.push("("+y(e[n])+":"+t+")");return o("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===function(e,t,n){var r;if("getComputedStyle"in a){r=getComputedStyle.call(a,e,t);var o=a.console;null!==r?n&&(r=r.getPropertyValue(n)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}(e,null,"position")})}return p}function E(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function w(e,t,n,r){if(r=!A(r,"undefined")&&r,!A(n,"undefined")){var o=b(e,n);if(!A(o,"undefined"))return o}for(var i,a,s,l,c,u=["modernizr","tspan","samp"];!g.style&&u.length;)i=!0,g.modElem=v(u.shift()),g.style=g.modElem.style;function f(){i&&(delete g.style,delete g.modElem)}for(s=e.length,a=0;a<s;a++)if(l=e[a],c=g.style[l],~(""+l).indexOf("-")&&(l=E(l)),g.style[l]!==p){if(r||A(n,"undefined"))return f(),"pfx"!==t||l;try{g.style[l]=n}catch(e){}if(g.style[l]!==c)return f(),"pfx"!==t||l}return f(),!1}l._q.unshift(function(){delete g.style});e.testProp=function(e,t,n){return w([e],p,t,n)};function C(e,t){return function(){return e.apply(t,arguments)}}var r="Moz O ms Webkit",S=e._config.usePrefixes?r.split(" "):[];e._cssomPrefixes=S;var x=e._config.usePrefixes?r.toLowerCase().split(" "):[];function _(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(i+" ")+i).split(" ");return A(t,"string")||A(t,"undefined")?w(a,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:A(r=t[e[o]],"function")?C(r,n||t):r;return!1}(a=(e+" "+x.join(i+" ")+i).split(" "),t,n)}e._domPrefixes=x,e.testAllProps=_;var T=function(e){var t,n=prefixes.length,r=a.CSSRule;if(void 0===r)return p;if(!e)return!1;if((t=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in r)return"@"+e;for(var o=0;o<n;o++){var i=prefixes[o];if(i.toUpperCase()+"_"+t in r)return"@-"+i.toLowerCase()+"-"+e}return!1};e.atRule=T;var B=e.prefixed=function(e,t,n){return 0===e.indexOf("@")?T(e):(-1!==e.indexOf("-")&&(e=E(e)),t?_(e,t,n):_(e,"pfx"))};l.addTest("objectfit",!!B("objectFit"),{aliases:["object-fit"]}),l.addAsyncTest(function(){var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],e=n.shift();function r(n,e,r){var o=new Image;function t(e){var t=!(!e||"load"!==e.type)&&1===o.width;f(n,"webp"===n&&t?new Boolean(t):t),r&&r(e)}o.onerror=t,o.onload=t,o.src=e}r(e.name,e.uri,function(e){if(e&&"load"===e.type)for(var t=0;t<n.length;t++)r(n[t].name,n[t].uri)})}),l.addTest("backgroundblendmode",B("backgroundBlendMode","text")),function(){var e,t,n,r,o,i;for(var a in s)if(s.hasOwnProperty(a)){if(e=[],(t=s[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=A(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?l[i[0]]=r:(l[i[0]]&&(!l[i[0]]||l[i[0]]instanceof Boolean)||(l[i[0]]=new Boolean(l[i[0]])),l[i[0]][i[1]]=r),c.push((r?"":"no-")+i.join("-"))}}(),u(c),delete e.addTest,delete e.addAsyncTest;for(var j=0;j<l._q.length;j++)l._q[j]();a.Modernizr=l}(window,document);