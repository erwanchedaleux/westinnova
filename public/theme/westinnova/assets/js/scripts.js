/*!
 *  Westinnova
 *  @author: Erwan Chedaleux
 *  @version: 0.1.10
 *  
*/

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global jQuery, document */
( function() {

    var mainInit;

    mainInit                                = require( './scripts/init/main.js' );


    function init() {
        mainInit();

    }


    jQuery( document ).ready( function() {
        init();
    } );

} ).call( this );

},{"./scripts/init/main.js":7}],2:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function Cookies( $cookies ) {
        var $btnClose,
            COOKIES_ACTIVE_CLS, COOKIES_NAME, COOKIES_VALUE;

        $btnClose                       = $cookies.find( '.scb-close' );

        COOKIES_ACTIVE_CLS              = 'active';
        COOKIES_NAME                    = 'use_of_cookies';
        COOKIES_VALUE                   = true;

        if ( !$.cookie( COOKIES_NAME ) || $.cookie( COOKIES_NAME ) === false ) {
            $cookies.prependTo( '#main' );
            $cookies.addClass( COOKIES_ACTIVE_CLS );
        }


        function closeCookies() {
            $.cookie( COOKIES_NAME, COOKIES_VALUE, { expires: 365 } );
            $cookies.removeClass( COOKIES_ACTIVE_CLS );
        }


        $btnClose.on( 'click', closeCookies );

    }

    return Cookies;

}( jQuery ) );

},{}],3:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( /*$*/ ) {

    function Expertise( $expertise ) {
        var $lnks;

        if ( !Modernizr.touchevents ) {
            return;
        }

        $lnks                           = $expertise.find( 'a' );
        

        /**
         * Allows to prevent default comportment of link
         * @return {void}
         */
        function clickHandler( e ) {
            e.preventDefault();

        }


        $lnks.on( 'click', clickHandler );

    }

    return Expertise;

}( jQuery ) );

},{}],4:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function Form( $form ) {
        var $select, $inputs;

        $select                         = $form.find( '.boltforms-row select' );
        $inputs                         = $form.find( '.boltforms-value input, .boltforms-value textarea, .boltforms-value select' );


        /**
         * Prevent default if if form submission is invalid
         * @param  {Event} e
         * @return {void}
         */
        function submitForm( e ) {
            var isFormValidate;

            isFormValidate              = $form[0].checkValidity();

            if ( !isFormValidate ) {
                e.preventDefault();

                $inputs.each( function( index, input ) {
                    var $input, $error, $row,
                        isInputValidate;

                    $input              = $( input );
                    $input.required     = $input.attr( 'required' ) === 'required';
                    $input.email        = $input.attr( 'type' ) === 'email';
                    $input.phone        = $input.attr( 'data-pattern' ) === 'phone';
                    $error              = $input.parent( '.boltforms-value' ).prev( '.boltforms-error' );
                    $row                = $error.parent( '.boltforms-row' );

                    isInputValidate     = $input[0].validity.valid;

                    if ( !isInputValidate ) {
                        $row.addClass( 'error' );

                        if ( $input.required && !$input.val() && !isInputValidate ) {
                            $error.html( 'Ce champ ne peut pas être vide.' );
                        } else if ( $input.email  && !isInputValidate ) {
                            $error.html( 'Veuillez renseigner une adresse email valide.' );
                        } else if ( $input.phone  && !isInputValidate ) {
                            $error.html( 'Veuillez renseigner un numéro de téléphone valide.' );
                        }
                    } else {
                        $row.removeClass( 'error' );
                        $error.html( '' );
                    }

                } );

            }

        }

        /**
         * Initialize sumo select plugin
         * @return {void}
         */
        ( function InitSumoSelect() {
            $select.SumoSelect();

        } )();


        $form.on( 'click', 'button[type="submit"]', submitForm );

    }

    return Form;

}( jQuery ) );

},{}],5:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function Header( $body, $header ) {
        var $main, $btnNavMobile, $siteContent, $preloader,
            prevTop, headerHeight,
            OPENED_NAV_CLS, STICKY_NAV_CLS;

        $btnNavMobile                   = $header.find( '.snm-btn' );
        $siteContent                    = $( '.site-wrapper' ).children().not( '.site-header' );
        $preloader                      = $( '.site-preloader' );
        $main                           = $( '#main' );

        prevTop                         = 0;
        headerHeight                    = parseInt( $header.outerHeight(), 10 );

        OPENED_NAV_CLS                  = 'js-nav-mobile-opened';
        STICKY_NAV_CLS                  = 'sticky-nav';

        if ( Modernizr.mq( '(max-width: 960px)' ) ) {
            $siteContent.animate( {
                'opacity':          1
            } );
        }

        scrollHandler();

        /**
         * Receive window scroll user and animate site header instead body css class
         * @return {void}
         */
        function scrollHandler() {
            var currentTop;

            if( Modernizr.mq( '(max-width: 960px)' ) ) {
                $body.removeClass( STICKY_NAV_CLS );
                return;
            }

            currentTop                  = $( this ).scrollTop();

            if( prevTop !== currentTop ) {
                prevTop                 = currentTop;

                if ( currentTop <= headerHeight && $body.hasClass( STICKY_NAV_CLS ) ) {
                    $body.removeClass( STICKY_NAV_CLS );
                } else if ( currentTop > headerHeight && !$body.hasClass( STICKY_NAV_CLS ) ) {
                    $body.addClass( STICKY_NAV_CLS );
                }

            }

        }

        /**
         * Toggle mobile navigation instead body css class
         * @return {void}
         */
        function toggleMobileNav() {
            $body.toggleClass( OPENED_NAV_CLS );

        }

        /**
         * Close mobile navigation instead body css class
         * @return {void}
         */
        function closeMobileNav( e ) {
            var targetId, targetClass;

            targetId                    = e.target.id;
            targetClass                 = $( e.target );

            if ( $body.hasClass( OPENED_NAV_CLS ) && ( targetId === 'main' || targetClass.hasClass( 'sn-lnk' ) ) ) {
                $body.removeClass( OPENED_NAV_CLS );
            }

        }

        /**
         * Prevent the normal behavior of the click on the navigation links to close the mobile menu
         * @return {void}
         */
        function navigationHandler( e ) {
            var currentLnkHref;

            if ( Modernizr.mq( '(min-width: 960px)' ) ) {
                return;
            }

            e.preventDefault();

            currentLnkHref              = $( this ).attr( 'href' );

            $body.removeClass( OPENED_NAV_CLS );

            window.setTimeout( function() {
                $siteContent.animate( {
                    'opacity':          0
                } );

                if ( $preloader.length ) {
                    $preloader.addClass( 'active' );
                }

                $( location ).attr( 'href', currentLnkHref );

            }, 100 );

        }

        /**
         * Allows to display site content on resize window
         * @return {void}
         */
        function resizehandler() {
            $siteContent.animate( {
                'opacity':          1
            } );

        }

        $( window ).scroll( scrollHandler );
        $( window ).resize( resizehandler );
        $btnNavMobile.on( 'click', toggleMobileNav );
        $main.on( 'click', closeMobileNav );
        $header.on( 'click', '.sn-lnk[href!="#"]', navigationHandler );
        $( '.sn-lnk.scroll-to' ).on( 'click', closeMobileNav );

    }

    return Header;

}( jQuery ) );

},{}],6:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function Hero( $container ) {
        var widthContainer, heightContainer;

        /**
         * Allows to recalcul width and height of hero effect container
         * @return {void}
         */
        function resize() {
            widthContainer              = parseInt( $container.outerWidth() );
            heightContainer             = parseInt( $container.outerHeight() );

            $("#canvas, #canvasbg").attr( 'width', widthContainer ).attr( 'height', heightContainer );

        }

        resize();

        $( window ).on( 'resize', resize );

        /* eslint-disable */

        // min and max radius, radius threshold and percentage of filled circles
    var radMin = 59,
      radMax = 60,
      filledCircle = 100, //percentage of filled circles
      concentricCircle = 30, //percentage of concentric circles
      radThreshold = 25; //IFF special, over this radius concentric, otherwise filled

    //min and max speed to move
    var speedMin = 0.3,
      speedMax = 1;

    //max reachable opacity for every circle and blur effect
    var maxOpacity = 0.1;

    //default palette choice
    var colors = ['17,185,255', '110,212,255', '57,57,59'],
      bgColors = ['17,185,255', '110,212,255', '57,57,59'],
      circleBorder = 60,
      backgroundLine = bgColors[0];
    var backgroundMlt = 0.85;

    //min distance for links
    var linkDist = Math.min(canvas.width, canvas.height) / 2.4,
      lineBorder = 2.5;

    //most importantly: number of overall circles and arrays containing them
    var maxCircles = 4,
      points = [],
      pointsBack = [];

    //populating the screen
    for (var i = 0; i < maxCircles * 2; i++) points.push(new Circle());
    for (var i = 0; i < maxCircles; i++) pointsBack.push(new Circle(true));

    //experimental vars
    var circleExp = 1,
      circleExpMax = 1.003,
      circleExpMin = 0.997,
      circleExpSp = 0.00004,
      circlePulse = false;

    //circle class
    function Circle(background) {
      //if background, it has different rules
      this.background = (background || false);
      this.x = randRange(-canvas.width / 2, canvas.width / 2);
      this.y = randRange(-canvas.height / 2, canvas.height / 2);
      this.radius = background ? hyperRange(radMin, radMax) * backgroundMlt : hyperRange(radMin, radMax);
      this.filled = this.radius < radThreshold ? (randint(0, 100) > filledCircle ? false : 'full') : (randint(0, 100) > concentricCircle ? false : 'concentric');
      this.color = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
      this.borderColor = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
      this.opacity = 0.05;
      this.speed = (background ? randRange(speedMin, speedMax) / backgroundMlt : randRange(speedMin, speedMax)); // * (radMin / this.radius);
      this.speedAngle = Math.random() * 2 * Math.PI;
      this.speedx = Math.cos(this.speedAngle) * this.speed;
      this.speedy = Math.sin(this.speedAngle) * this.speed;
      var spacex = Math.abs((this.x - (this.speedx < 0 ? -1 : 1) * (canvas.width / 2 + this.radius)) / this.speedx),
        spacey = Math.abs((this.y - (this.speedy < 0 ? -1 : 1) * (canvas.height / 2 + this.radius)) / this.speedy);
      this.ttl = Math.min(spacex, spacey);
    };

    Circle.prototype.initialize = function() {
      Circle.call(this, this.background);
    }

    //support functions
    //generate random int a<=x<=b
    function randint(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
      }
      //generate random float
    function randRange(a, b) {
        return Math.random() * (b - a) + a;
      }
      //generate random float more likely to be close to a
    function hyperRange(a, b) {
      return Math.random() * Math.random() * Math.random() * (b - a) + a;
    }

    //rendering function
    function drawCircle(ctx, circle) {
      //circle.radius *= circleExp;
      var radius = circle.background ? circle.radius *= circleExp : circle.radius /= circleExp;
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, radius * circleExp, 0, 2 * Math.PI, false);
      ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
      ctx.strokeStyle = ['rgba(', circle.borderColor, ',', circle.opacity, ')'].join('');
      if (circle.filled == 'full') {
        ctx.fillStyle = ['rgba(', circle.borderColor, ',', circle.background ? circle.opacity * 0.8 : circle.opacity, ')'].join('');
        ctx.fill();
        ctx.lineWidth=0;
        ctx.strokeStyle = ['rgba(', circle.borderColor, ',', 0, ')'].join('');
      }
      ctx.stroke();
      if (circle.filled == 'concentric') {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, radius / 2, 0, 2 * Math.PI, false);
        ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
        ctx.strokeStyle = ['rgba(', circle.color, ',', circle.opacity, ')'].join('');
        ctx.stroke();
      }
      circle.x += circle.speedx;
      circle.y += circle.speedy;
      if (circle.opacity < (circle.background ? maxOpacity : 1)) circle.opacity += 0.01;
      circle.ttl--;
    }

    //initializing function
    function initialize() {
      window.requestAnimationFrame(draw);
    }

    //rendering function
    function draw() {

      if (circlePulse) {
        if (circleExp < circleExpMin || circleExp > circleExpMax) circleExpSp *= -1;
        circleExp += circleExpSp;
      }
      var ctxfr = document.getElementById('canvas').getContext('2d');
      var ctxbg = document.getElementById('canvasbg').getContext('2d');

      ctxfr.globalCompositeOperation = 'destination-over';
      ctxfr.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
      ctxbg.globalCompositeOperation = 'destination-over';
      ctxbg.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

      ctxfr.save();
      ctxfr.translate(canvas.width / 2, canvas.height / 2);
      ctxbg.save();
      ctxbg.translate(canvas.width / 2, canvas.height / 2);

      //function to render each single circle, its connections and to manage its out of boundaries replacement
      function renderPoints(ctx, arr) {
        for (var i = 0; i < arr.length; i++) {
          var circle = arr[i];
          //checking if out of boundaries
          if (circle.ttl<0) {}
          var xEscape = canvas.width / 2 + circle.radius,
            yEscape = canvas.height / 2 + circle.radius;
          if (circle.ttl < -20) arr[i].initialize(arr[i].background);
          //if (Math.abs(circle.y) > yEscape || Math.abs(circle.x) > xEscape) arr[i].init(arr[i].background);
          drawCircle(ctx, circle);
        }
        for (var i = 0; i < arr.length - 1; i++) {
          for (var j = i + 1; j < arr.length; j++) {
            var deltax = arr[i].x - arr[j].x;
            var deltay = arr[i].y - arr[j].y;
            var dist = Math.pow(Math.pow(deltax, 2) + Math.pow(deltay, 2), 0.5);
            //if the circles are overlapping, no laser connecting them
            if (dist <= arr[i].radius + arr[j].radius) continue;
            //otherwise we connect them only if the dist is < linkDist
            if (dist < linkDist) {
              var xi = (arr[i].x < arr[j].x ? 1 : -1) * Math.abs(arr[i].radius * deltax / dist);
              var yi = (arr[i].y < arr[j].y ? 1 : -1) * Math.abs(arr[i].radius * deltay / dist);
              var xj = (arr[i].x < arr[j].x ? -1 : 1) * Math.abs(arr[j].radius * deltax / dist);
              var yj = (arr[i].y < arr[j].y ? -1 : 1) * Math.abs(arr[j].radius * deltay / dist);
              ctx.beginPath();
              ctx.moveTo(arr[i].x + xi, arr[i].y + yi);
              ctx.lineTo(arr[j].x + xj, arr[j].y + yj);
              var samecolor = arr[i].color == arr[j].color;
              ctx.strokeStyle = ["rgba(", arr[i].borderColor, ",", Math.min(arr[i].opacity, arr[j].opacity) * ((linkDist - dist) / linkDist), ")"].join("");
              ctx.lineWidth = (arr[i].background ? lineBorder * backgroundMlt : lineBorder) * ((linkDist - dist) / linkDist); //*((linkDist-dist)/linkDist);
              ctx.stroke();
            }
          }
        }
      }

      var startTime = Date.now();
      renderPoints(ctxfr, points);
      renderPoints(ctxbg, pointsBack);
      deltaT = Date.now() - startTime;

      ctxfr.restore();
      ctxbg.restore();

      window.requestAnimationFrame(draw);
    }

    initialize();

    /* eslint-enable */

    }

    return Hero;

}( jQuery ) );

},{}],7:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function init() {
        var Cookies, Header, Expertise, Form, ScrollTo, Hero, Listing,
            $body, $cookies, $header, $expertise, $forms, $scrollsTo, $heroEffect, $messageForm, $listing;

        Cookies                                 = require( '../cookies.js' );
        Header                                  = require( '../header.js' );
        Expertise                               = require( '../expertise.js' );
        Form                                    = require( '../form.js' );
        ScrollTo                                = require( '../scroll-to.js' );
        Hero                                    = require( '../hero.js' );
        Listing                                 = require( '../listing.js' );

        $body                                   = $( document.body );
        $cookies                                = $( '.site-cookies' );
        $header                                 = $( '.site-header' );
        $expertise                              = $( '.mod-panel-home-expertise' );
        $forms                                  = $( '.boltform form' );
        $scrollsTo                              = $( '.scroll-to' );
        $heroEffect                             = $( '.hero-effect' );
        $messageForm                            = $( '.boltform-message' );
        $listing                                = $( '.site-listing' );


        if ( $cookies.length ) {
            new Cookies( $cookies );

        }

        if ( $header.length ) {
            new Header( $body, $header );

        }

        if ( $expertise.length ) {
            new Expertise( $expertise );

        }

        if ( $heroEffect.length ) {
            new Hero( $heroEffect );

        }

        if ( $forms.length ) {
            $forms.each( function( index, form ) {
                new Form( $( form ) );
            } );

        }

        if ( $scrollsTo.length ) {
            $scrollsTo.each( function( index, scrollTo ) {
                new ScrollTo( $( scrollTo ) );
            } );

        }

        if ( $messageForm.length ) {
            $( 'html, body' ).animate( { scrollTop: $messageForm.offset().top - 150 }, 750 );
        }

        if( typeof( Waves ) !== 'undefined' ){
            window.Waves.attach( '[class^="btn-"]', [ 'waves-button' ] );
            window.Waves.init();

        }

        if ( $listing.length ) {
            new Listing( $listing );

        }

    }


    return init;

} )( jQuery );

},{"../cookies.js":2,"../expertise.js":3,"../form.js":4,"../header.js":5,"../hero.js":6,"../listing.js":8,"../scroll-to.js":9}],8:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function Listing( $listing ) {
        var $sortbar, $sortbarBtns, $itmListing,
            ACTIVE_CLS, HIDDEN_CLS;

        $sortbar                        = $listing.find( '.sl-sortbar' );
        $itmListing                     = $listing.find( '.sl-reference' );


        if ( !$sortbar.length || !$itmListing.length ) {
            return;
        }

        $sortbarBtns                    = $sortbar.find( '.sls-btn' );

        ACTIVE_CLS                      = 'active';
        HIDDEN_CLS                      = 'hidden';


        if ( window.location.hash ) {
            var urlHash;

            urlHash                     = window.location.hash.split( '#' )[1];

            activateBtn( $( '[data-category~="' + urlHash + '"]' ) );
            showCategories( urlHash );

        }


        /**
         * [categoryHandler description]
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
        function categoryHandler( e ) {
            var $btn,
                dataCategory;

            $btn                        = $( e.target );
            dataCategory                = $btn.attr( 'data-category' );

            activateBtn( $btn );
            showCategories( dataCategory );
            pushUrl( e, dataCategory );
        }

        /**
         * [showCategories description]
         * @param  {[type]} dataCategory [description]
         * @return {[type]}              [description]
         */
        function showCategories( dataCategory ) {
            if ( dataCategory === 'all' ) {
                $itmListing.parent().removeClass( HIDDEN_CLS );
                return;
            }

            $itmListing.parent().addClass( HIDDEN_CLS );
            $( '[data-categories*="' + dataCategory + '"]' ).parent().removeClass( HIDDEN_CLS );

        }

        /**
         * [activateBtn description]
         * @param  {[type]} $btn [description]
         * @return {[type]}      [description]
         */
        function activateBtn( $btn ) {
            $sortbarBtns.removeClass( ACTIVE_CLS );
            $btn.addClass( ACTIVE_CLS );
        }

        /**
         * [pushUrl description]
         * @param  {[type]} e            [description]
         * @param  {[type]} dataCategory [description]
         * @return {[type]}              [description]
         */
        function pushUrl( e, dataCategory ) {
            window.location.hash = dataCategory;
        }



        $listing.on( 'click', '.sls-btn', categoryHandler );

    }

    return Listing;

}( jQuery ) );

},{}],9:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function ScrollTo( $scrollTo ) {
        var offsetTop;

        offsetTop                       = 0;


        /**
         * Scroll to href target element
         * @return {void}
         */
        function scrollToHandler() {
            var href, target, speed;

            href                        = $( this ).attr( 'href' );
            target                      = '#' + href.substr( href.indexOf( '#' ) + 1 );
            speed                       = 750;

            if ( $( this ).attr( 'data-offsettop' ) ) {
                offsetTop               = $( this ).attr( 'data-offsettop' );
            }

            $( 'html, body' ).animate( { scrollTop: $( target ).offset().top - offsetTop }, speed );

            return false;

        }

        $scrollTo.on( 'click', scrollToHandler );

    }

    return ScrollTo;

}( jQuery ) );

},{}]},{},[1])