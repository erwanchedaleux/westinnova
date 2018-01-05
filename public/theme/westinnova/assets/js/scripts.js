/*!
 *  Westinnova
 *  @author: Erwan Chedaleux
 *  @version: 0.1.2
 *  
*/

!function t(e,n,a){function i(o,s){if(!n[o]){if(!e[o]){var c="function"==typeof require&&require;if(!s&&c)return c(o,!0);if(r)return r(o,!0);throw new Error("Cannot find module '"+o+"'")}var l=n[o]={exports:{}};e[o][0].call(l.exports,function(t){var n=e[o][1][t];return i(n||t)},l,l.exports,t,e,n,a)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<a.length;o++)i(a[o]);return i}({1:[function(t,e,n){(function(){function e(){n()}var n;n=t("./scripts/init/main.js"),jQuery(document).ready(function(){e()})}).call(this)},{"./scripts/init/main.js":7}],2:[function(t,e,n){e.exports=function(t){function e(e){function n(){t.cookie(r,o,{expires:365}),e.removeClass(i)}var a,i,r,o;a=e.find(".scb-close"),i="active",r="use_of_cookies",o=!0,t.cookie(r)&&!1!==t.cookie(r)||(e.prependTo("#main"),e.addClass(i)),a.on("click",n)}return e}(jQuery)},{}],3:[function(t,e,n){e.exports=function(){function t(t){function e(t){t.preventDefault()}var n;Modernizr.touchevents&&(n=t.find("a"),n.on("click",e))}return t}(jQuery)},{}],4:[function(t,e,n){e.exports=function(t){function e(e){function n(n){var a;(a=e[0].checkValidity())||(n.preventDefault(),i.each(function(e,n){var a,i,r,o;a=t(n),a.required="required"===a.attr("required"),a.email="email"===a.attr("type"),a.phone="phone"===a.attr("data-pattern"),i=a.parent(".boltforms-value").prev(".boltforms-error"),r=i.parent(".boltforms-row"),o=a[0].validity.valid,o?(r.removeClass("error"),i.html("")):(r.addClass("error"),!a.required||a.val()||o?a.email&&!o?i.html("Veuillez renseigner une adresse email valide."):a.phone&&!o&&i.html("Veuillez renseigner un numéro de téléphone valide."):i.html("Ce champ ne peut pas être vide."))}))}var a,i;a=e.find(".boltforms-row select"),i=e.find(".boltforms-value input, .boltforms-value textarea, .boltforms-value select"),function(){a.SumoSelect()}(),e.on("click",'button[type="submit"]',n)}return e}(jQuery)},{}],5:[function(t,e,n){e.exports=function(t){function e(e,n){function a(){var n;if(Modernizr.mq("(max-width: 960px)"))return void e.removeClass(v);n=t(this).scrollTop(),d!==n&&(d=n,n<=f&&e.hasClass(v)?e.removeClass(v):n>f&&!e.hasClass(v)&&e.addClass(v))}function i(){e.toggleClass(p)}function r(n){var a,i;a=n.target.id,i=t(n.target),e.hasClass(p)&&("main"===a||i.hasClass("sn-lnk"))&&e.removeClass(p)}function o(n){var a;Modernizr.mq("(min-width: 960px)")||(n.preventDefault(),a=t(this).attr("href"),e.removeClass(p),window.setTimeout(function(){h.animate({opacity:0}),u.length&&u.addClass("active"),t(location).attr("href",a)},100))}function s(){h.animate({opacity:1})}var c,l,h,u,d,f,p,v;l=n.find(".snm-btn"),h=t(".site-wrapper").children().not(".site-header"),u=t(".site-preloader"),c=t("#main"),d=0,f=parseInt(n.outerHeight(),10),p="js-nav-mobile-opened",v="sticky-nav",Modernizr.mq("(max-width: 960px)")&&h.animate({opacity:1}),a(),t(window).scroll(a),t(window).resize(s),l.on("click",i),c.on("click",r),n.on("click",'.sn-lnk[href!="#"]',o),t(".sn-lnk.scroll-to").on("click",r)}return e}(jQuery)},{}],6:[function(t,e,n){e.exports=function(t){function e(e){function n(){l=parseInt(e.outerWidth()),h=parseInt(e.outerHeight()),t("#canvas, #canvasbg").attr("width",l).attr("height",h)}function a(t){this.background=t||!1,this.x=r(-canvas.width/2,canvas.width/2),this.y=r(-canvas.height/2,canvas.height/2),this.radius=t?o(u,d)*k:o(u,d),this.filled=this.radius<v?!(i(0,100)>f)&&"full":!(i(0,100)>p)&&"concentric",this.color=t?w[i(0,w.length-1)]:b[i(0,b.length-1)],this.borderColor=t?w[i(0,w.length-1)]:b[i(0,b.length-1)],this.opacity=.05,this.speed=t?r(m,g)/k:r(m,g),this.speedAngle=2*Math.random()*Math.PI,this.speedx=Math.cos(this.speedAngle)*this.speed,this.speedy=Math.sin(this.speedAngle)*this.speed;var e=Math.abs((this.x-(this.speedx<0?-1:1)*(canvas.width/2+this.radius))/this.speedx),n=Math.abs((this.y-(this.speedy<0?-1:1)*(canvas.height/2+this.radius))/this.speedy);this.ttl=Math.min(e,n)}function i(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function r(t,e){return Math.random()*(e-t)+t}function o(t,e){return Math.random()*Math.random()*Math.random()*(e-t)+t}function s(t,e){var n=e.background?e.radius*=I:e.radius/=I;t.beginPath(),t.arc(e.x,e.y,n*I,0,2*Math.PI,!1),t.lineWidth=Math.max(1,x*(u-e.radius)/(u-d)),t.strokeStyle=["rgba(",e.borderColor,",",e.opacity,")"].join(""),"full"==e.filled&&(t.fillStyle=["rgba(",e.borderColor,",",e.background?.8*e.opacity:e.opacity,")"].join(""),t.fill(),t.lineWidth=0,t.strokeStyle=["rgba(",e.borderColor,",",0,")"].join("")),t.stroke(),"concentric"==e.filled&&(t.beginPath(),t.arc(e.x,e.y,n/2,0,2*Math.PI,!1),t.lineWidth=Math.max(1,x*(u-e.radius)/(u-d)),t.strokeStyle=["rgba(",e.color,",",e.opacity,")"].join(""),t.stroke()),e.x+=e.speedx,e.y+=e.speedy,e.opacity<(e.background?y:1)&&(e.opacity+=.01),e.ttl--}function c(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.ttl;canvas.width,a.radius,canvas.height,a.radius;a.ttl<-20&&e[n].initialize(e[n].background),s(t,a)}for(var n=0;n<e.length-1;n++)for(var i=n+1;i<e.length;i++){var r=e[n].x-e[i].x,o=e[n].y-e[i].y,c=Math.pow(Math.pow(r,2)+Math.pow(o,2),.5);if(!(c<=e[n].radius+e[i].radius)&&c<M){var l=(e[n].x<e[i].x?1:-1)*Math.abs(e[n].radius*r/c),h=(e[n].y<e[i].y?1:-1)*Math.abs(e[n].radius*o/c),u=(e[n].x<e[i].x?-1:1)*Math.abs(e[i].radius*r/c),d=(e[n].y<e[i].y?-1:1)*Math.abs(e[i].radius*o/c);t.beginPath(),t.moveTo(e[n].x+l,e[n].y+h),t.lineTo(e[i].x+u,e[i].y+d);e[n].color,e[i].color;t.strokeStyle=["rgba(",e[n].borderColor,",",Math.min(e[n].opacity,e[i].opacity)*((M-c)/M),")"].join(""),t.lineWidth=(e[n].background?j*k:j)*((M-c)/M),t.stroke()}}}T&&((I<W||I>Q)&&(S*=-1),I+=S);var e=document.getElementById("canvas").getContext("2d"),n=document.getElementById("canvasbg").getContext("2d");e.globalCompositeOperation="destination-over",e.clearRect(0,0,canvas.width,canvas.height),n.globalCompositeOperation="destination-over",n.clearRect(0,0,canvas.width,canvas.height),e.save(),e.translate(canvas.width/2,canvas.height/2),n.save(),n.translate(canvas.width/2,canvas.height/2);var a=Date.now();t(e,C),t(n,q),deltaT=Date.now()-a,e.restore(),n.restore(),window.requestAnimationFrame(c)}var l,h;n(),t(window).on("resize",n);for(var u=59,d=60,f=100,p=30,v=25,m=.3,g=1,y=.1,b=["17,185,255","110,212,255","57,57,59"],w=["17,185,255","110,212,255","57,57,59"],x=60,k=(w[0],.85),M=Math.min(canvas.width,canvas.height)/2.4,j=2.5,C=[],q=[],z=0;z<8;z++)C.push(new a);for(var z=0;z<4;z++)q.push(new a(!0));var I=1,Q=1.003,W=.997,S=4e-5,T=!1;a.prototype.initialize=function(){a.call(this,this.background)},function(){window.requestAnimationFrame(c)}()}return e}(jQuery)},{}],7:[function(t,e,n){e.exports=function(e){function n(){var n,a,i,r,o,s,c,l,h,u,d,f,p;n=t("../cookies.js"),a=t("../header.js"),i=t("../expertise.js"),r=t("../form.js"),o=t("../scroll-to.js"),s=t("../hero.js"),c=e(document.body),l=e(".site-cookies"),h=e(".site-header"),u=e(".mod-panel-home-expertise"),d=e(".boltform form"),f=e(".scroll-to"),p=e(".hero-effect"),l.length&&new n(l),h.length&&new a(c,h),u.length&&new i(u),p.length&&new s(p),d.length&&d.each(function(t,n){new r(e(n))}),f.length&&f.each(function(t,n){new o(e(n))}),"undefined"!=typeof Waves&&(window.Waves.attach('[class^="btn-"]',["waves-button"]),window.Waves.init())}return n}(jQuery)},{"../cookies.js":2,"../expertise.js":3,"../form.js":4,"../header.js":5,"../hero.js":6,"../scroll-to.js":8}],8:[function(t,e,n){e.exports=function(t){function e(e){function n(){var e,n,i;return e=t(this).attr("href"),n="#"+e.substr(e.indexOf("#")+1),i=750,t(this).attr("data-offsettop")&&(a=t(this).attr("data-offsettop")),t("html, body").animate({scrollTop:t(n).offset().top-a},i),!1}var a;a=0,e.on("click",n)}return e}(jQuery)},{}]},{},[1]);