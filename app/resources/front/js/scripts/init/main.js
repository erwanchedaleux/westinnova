/* global jQuery */
module.exports = ( function ( $ ) {

    function init() {
        var Cookies, Header, Form, ScrollTo, Hero,
            $body, $cookies, $header, $forms, $scrollsTo, $heroEffect;

        Cookies                                 = require( '../cookies.js' );
        Header                                  = require( '../header.js' );
        Form                                    = require( '../form.js' );
        ScrollTo                                = require( '../scroll-to.js' );
        Hero                                    = require( '../hero.js' );

        $body                                   = $( document.body );
        $cookies                                = $( '.site-cookies' );
        $header                                 = $( '.site-header' );
        $forms                                  = $( '.boltform form' );
        $scrollsTo                              = $( '.scroll-to' );
        $heroEffect                             = $( '.hero-effect' );


        if ( $cookies.length ) {
            new Cookies( $cookies );

        }

        if ( $header.length ) {
            new Header( $body, $header );

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

        if( typeof( Waves ) !== 'undefined' ){
            window.Waves.attach( '[class^="btn-"]', [ 'waves-button' ] );
            window.Waves.init();

        }

    }


    return init;

} )( jQuery );
