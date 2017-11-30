/* global jQuery */
module.exports = ( function ( $ ) {

    function init() {
        var Header, Form, ScrollTo,
            $body, $header, $forms, $scrollsTo;

        Header                                  = require( '../header.js' );
        Form                                    = require( '../form.js' );
        ScrollTo                                = require( '../scroll-to.js' );

        $body                                   = $( document.body );
        $header                                 = $( '.site-header' );
        $forms                                  = $( '.boltform form' );
        $scrollsTo                              = $( '.scroll-to' );


        if ( $header ) {
            new Header( $body, $header );

        }

        if ( $forms ) {
            $forms.each( function( index, form ) {
                new Form( $( form ) );
            } );

        }

        if ( $scrollsTo ) {
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
