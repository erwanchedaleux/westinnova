/*!
 *  Westinnova
 *  @author: Erwan Chedaleux
 *  @version: 0.1.5
 *  
 *  Thanks to 
 *
 *  picturefill | MIT (https://scottjehl.github.io/picturefill/) | Gecko-Picture
 *  
*/

!function e(t,r,n){function s(c,a){if(!r[c]){if(!t[c]){var u="function"==typeof require&&require;if(!a&&u)return u(c,!0);if(i)return i(c,!0);throw new Error("Cannot find module '"+c+"'")}var o=r[c]={exports:{}};t[c][0].call(o.exports,function(e){var r=t[c][1][e];return s(r||e)},o,o.exports,e,t,r,n)}return r[c].exports}for(var i="function"==typeof require&&require,c=0;c<n.length;c++)s(n[c]);return s}({1:[function(e,t,r){Modernizr.picture||e("picturefill")},{picturefill:2}],2:[function(e,t,r){!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,r=document.createElement("source"),n=function(e){var t,n,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=r.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){i(),c&&c.addListener&&c.addListener(i)};return r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),i}())}(window),function(e,r,n){"use strict";function s(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function i(){I=!1,k=e.devicePixelRatio,U={},$={},g.DPR=k||1,W.width=Math.max(e.innerWidth||0,z.clientWidth),W.height=Math.max(e.innerHeight||0,z.clientHeight),W.vw=W.width/100,W.vh=W.height/100,h=[W.height,W.width,k].join("-"),W.em=g.getEmValue(),W.rem=W.em}function c(e,t,r,n){var s,i,c,a;return"saveData"===T.algorithm?e>2.7?a=r+1:(i=t-r,s=Math.pow(e-.6,1.5),c=i*s,n&&(c+=.1*s),a=e+c):a=r>1?Math.sqrt(e*t):e,a>r}function a(e){var t,r=g.getSet(e),n=!1;"pending"!==r&&(n=h,r&&(t=g.setRes(r),g.applySetCandidate(t,e))),e[g.ns].evaled=n}function u(e,t){return e.res-t.res}function o(e,t,r){var n;return!r&&t&&(r=e[g.ns].sets,r=r&&r[r.length-1]),n=l(t,r),n&&(t=g.makeUrl(t),e[g.ns].curSrc=t,e[g.ns].curCan=n,n.res||J(n,n.set.sizes)),n}function l(e,t){var r,n,s;if(e&&t)for(s=g.parseSet(t),e=g.makeUrl(e),r=0;r<s.length;r++)if(e===g.makeUrl(s[r].url)){n=s[r];break}return n}function f(e,t){var r,n,s,i,c=e.getElementsByTagName("source");for(r=0,n=c.length;r<n;r++)s=c[r],s[g.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function d(e,t){function r(t){var r,n=t.exec(e.substring(f));if(n)return r=n[0],f+=r.length,r}function n(){var e,r,n,s,a,u,o,l,f,p=!1,A={};for(s=0;s<c.length;s++)a=c[s],u=a[a.length-1],o=a.substring(0,a.length-1),l=parseInt(o,10),f=parseFloat(o),O.test(o)&&"w"===u?((e||r)&&(p=!0),0===l?p=!0:e=l):j.test(o)&&"x"===u?((e||r||n)&&(p=!0),f<0?p=!0:r=f):O.test(o)&&"h"===u?((n||r)&&(p=!0),0===l?p=!0:n=l):p=!0;p||(A.url=i,e&&(A.w=e),r&&(A.d=r),n&&(A.h=n),n||r||e||(A.d=1),1===A.d&&(t.has1x=!0),A.set=t,d.push(A))}for(var i,c,a,u,o,l=e.length,f=0,d=[];;){if(r(H),f>=l)return d;i=r(F),c=[],","===i.slice(-1)?(i=i.replace(N,""),n()):function(){for(r(G),a="",u="in descriptor";;){if(o=e.charAt(f),"in descriptor"===u)if(s(o))a&&(c.push(a),a="",u="after descriptor");else{if(","===o)return f+=1,a&&c.push(a),void n();if("("===o)a+=o,u="in parens";else{if(""===o)return a&&c.push(a),void n();a+=o}}else if("in parens"===u)if(")"===o)a+=o,u="in descriptor";else{if(""===o)return c.push(a),void n();a+=o}else if("after descriptor"===u)if(s(o));else{if(""===o)return void n();u="in descriptor",f-=1}f+=1}}()}}function p(e){var t,r,n,i,c,a,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,o=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=function(e){function t(){i&&(c.push(i),i="")}function r(){c[0]&&(a.push(c),c=[])}for(var n,i="",c=[],a=[],u=0,o=0,l=!1;;){if(""===(n=e.charAt(o)))return t(),r(),a;if(l){if("*"===n&&"/"===e[o+1]){l=!1,o+=2,t();continue}o+=1}else{if(s(n)){if(e.charAt(o-1)&&s(e.charAt(o-1))||!i){o+=1;continue}if(0===u){t(),o+=1;continue}n=" "}else if("("===n)u+=1;else if(")"===n)u-=1;else{if(","===n){t(),r(),o+=1;continue}if("/"===n&&"*"===e.charAt(o+1)){l=!0,o+=2;continue}}i+=n,o+=1}}}(e),n=r.length,t=0;t<n;t++)if(i=r[t],c=i[i.length-1],function(e){return!!(u.test(e)&&parseFloat(e)>=0)||(!!o.test(e)||("0"===e||"-0"===e||"+0"===e))}(c)){if(a=c,i.pop(),0===i.length)return a;if(i=i.join(" "),g.matchesMedia(i))return a}return"100vw"}r.createElement("picture");var A,m,h,g={},v=!1,w=function(){},S=r.createElement("img"),x=S.getAttribute,y=S.setAttribute,E=S.removeAttribute,z=r.documentElement,b={},T={algorithm:""},C=navigator.userAgent,R=/rident/.test(C)||/ecko/.test(C)&&C.match(/rv\:(\d+)/)&&RegExp.$1>35,M="currentSrc",L=/\s+\+?\d+(e\d+)?w/,P=/(\([^)]+\))?\s*(.+)/,D=e.picturefillCFG,B="font-size:100%!important;",I=!0,U={},$={},k=e.devicePixelRatio,W={px:1,in:96},Q=r.createElement("a"),q=!1,G=/^[ \t\n\r\u000c]+/,H=/^[, \t\n\r\u000c]+/,F=/^[^ \t\n\r\u000c]+/,N=/[,]+$/,O=/^\d+$/,j=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,V=function(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n||!1):e.attachEvent&&e.attachEvent("on"+t,r)},_=function(e){var t={};return function(r){return r in t||(t[r]=e(r)),t[r]}},K=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r},r=_(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,n){var s;if(!(t in U))if(U[t]=!1,n&&(s=t.match(e)))U[t]=s[1]*W[s[2]];else try{U[t]=new Function("e",r(t))(W)}catch(e){}return U[t]}}(),J=function(e,t){return e.w?(e.cWidth=g.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},X=function(e){if(v){var t,n,s,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||g.qsa(i.context||r,i.reevaluate||i.reselect?g.sel:g.selShort),s=t.length){for(g.setupRun(i),q=!0,n=0;n<s;n++)g.fillImg(t[n],i);g.teardownRun(i)}}};e.console&&console.warn,M in S||(M="src"),b["image/jpeg"]=!0,b["image/gif"]=!0,b["image/png"]=!0,b["image/svg+xml"]=r.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),g.ns=("pf"+(new Date).getTime()).substr(0,9),g.supSrcset="srcset"in S,g.supSizes="sizes"in S,g.supPicture=!!e.HTMLPictureElement,g.supSrcset&&g.supPicture&&!g.supSizes&&function(e){S.srcset="data:,a",e.src="data:,a",g.supSrcset=S.complete===e.complete,g.supPicture=g.supSrcset&&g.supPicture}(r.createElement("img")),g.supSrcset&&!g.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=r.createElement("img"),n=function(){2===t.width&&(g.supSizes=!0),m=g.supSrcset&&!g.supSizes,v=!0,setTimeout(X)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():v=!0,g.selShort="picture>img,img[srcset]",g.sel=g.selShort,g.cfg=T,g.DPR=k||1,g.u=W,g.types=b,g.setSize=w,g.makeUrl=_(function(e){return Q.href=e,Q.href}),g.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},g.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?g.matchesMedia=function(e){return!e||matchMedia(e).matches}:g.matchesMedia=g.mMQ,g.matchesMedia.apply(this,arguments)},g.mMQ=function(e){return!e||K(e)},g.calcLength=function(e){var t=K(e,!0)||!1;return t<0&&(t=!1),t},g.supportsType=function(e){return!e||b[e]},g.parseSize=_(function(e){var t=(e||"").match(P);return{media:t&&t[1],length:t&&t[2]}}),g.parseSet=function(e){return e.cands||(e.cands=d(e.srcset,e)),e.cands},g.getEmValue=function(){var e;if(!A&&(e=r.body)){var t=r.createElement("div"),n=z.style.cssText,s=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",z.style.cssText=B,e.style.cssText=B,e.appendChild(t),A=t.offsetWidth,e.removeChild(t),A=parseFloat(A,10),z.style.cssText=n,e.style.cssText=s}return A||16},g.calcListLength=function(e){if(!(e in $)||T.uT){var t=g.calcLength(p(e));$[e]=t||W.width}return $[e]},g.setRes=function(e){var t;if(e){t=g.parseSet(e);for(var r=0,n=t.length;r<n;r++)J(t[r],e.sizes)}return t},g.setRes.res=J,g.applySetCandidate=function(e,t){if(e.length){var r,n,s,i,a,l,f,d,p,A=t[g.ns],m=g.DPR;if(l=A.curSrc||t[M],f=A.curCan||o(t,l,e[0].set),f&&f.set===e[0].set&&((p=R&&!t.complete&&f.res-.1>m)||(f.cached=!0,f.res>=m&&(a=f))),!a)for(e.sort(u),i=e.length,a=e[i-1],n=0;n<i;n++)if(r=e[n],r.res>=m){s=n-1,a=e[s]&&(p||l!==g.makeUrl(r.url))&&c(e[s].res,r.res,m,e[s].cached)?e[s]:r;break}a&&(d=g.makeUrl(a.url),A.curSrc=d,A.curCan=a,d!==l&&g.setSrc(t,a),g.setSize(t))}},g.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},g.getSet=function(e){var t,r,n,s=!1,i=e[g.ns].sets;for(t=0;t<i.length&&!s;t++)if(r=i[t],r.srcset&&g.matchesMedia(r.media)&&(n=g.supportsType(r.type))){"pending"===n&&(r=n),s=r;break}return s},g.parseSets=function(e,t,r){var n,s,i,c,a=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[g.ns];(void 0===u.src||r.src)&&(u.src=x.call(e,"src"),u.src?y.call(e,"data-pfsrc",u.src):E.call(e,"data-pfsrc")),(void 0===u.srcset||r.srcset||!g.supSrcset||e.srcset)&&(n=x.call(e,"srcset"),u.srcset=n,c=!0),u.sets=[],a&&(u.pic=!0,f(t,u.sets)),u.srcset?(s={srcset:u.srcset,sizes:x.call(e,"sizes")},u.sets.push(s),(i=(m||u.src)&&L.test(u.srcset||""))||!u.src||l(u.src,s)||s.has1x||(s.srcset+=", "+u.src,s.cands.push({url:u.src,d:1,set:s}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=void 0,u.supported=!(a||s&&!g.supSrcset||i&&!g.supSizes),c&&g.supSrcset&&!u.supported&&(n?(y.call(e,"data-pfsrcset",n),e.srcset=""):E.call(e,"data-pfsrcset")),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==g.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},g.fillImg=function(e,t){var r,n=t.reselect||t.reevaluate;e[g.ns]||(e[g.ns]={}),r=e[g.ns],(n||r.evaled!==h)&&(r.parsed&&!t.reevaluate||g.parseSets(e,e.parentNode,t),r.supported?r.evaled=h:a(e))},g.setupRun=function(){q&&!I&&k===e.devicePixelRatio||i()},g.supPicture?(X=w,g.fillImg=w):function(){var t,n=e.attachEvent?/d$|^c/:/d$|^c|^i/,s=function(){var e=r.readyState||"";i=setTimeout(s,"loading"===e?200:999),r.body&&(g.fillImgs(),(t=t||n.test(e))&&clearTimeout(i))},i=setTimeout(s,r.body?9:99),c=z.clientHeight,a=function(){I=Math.max(e.innerWidth||0,z.clientWidth)!==W.width||z.clientHeight!==c,c=z.clientHeight,I&&g.fillImgs()};V(e,"resize",function(e,t){var r,n,s=function(){var i=new Date-n;i<t?r=setTimeout(s,t-i):(r=null,e())};return function(){n=new Date,r||(r=setTimeout(s,t))}}(a,99)),V(r,"readystatechange",s)}(),g.picturefill=X,g.fillImgs=X,g.teardownRun=w,X._=g,e.picturefillCFG={pf:g,push:function(e){var t=e.shift();"function"==typeof g[t]?g[t].apply(g,e):(T[t]=e[0],q&&g.fillImgs({reselect:!0}))}};for(;D&&D.length;)e.picturefillCFG.push(D.shift());e.picturefill=X,"object"==typeof t&&"object"==typeof t.exports?t.exports=X:"function"==typeof define&&define.amd&&define("picturefill",function(){return X}),g.supPicture||(b["image/webp"]=function(t,r){var n=new e.Image;return n.onerror=function(){b[t]=!1,X()},n.onload=function(){b[t]=1===n.width,X()},n.src=r,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},{}]},{},[1]);