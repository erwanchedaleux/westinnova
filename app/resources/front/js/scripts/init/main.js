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
