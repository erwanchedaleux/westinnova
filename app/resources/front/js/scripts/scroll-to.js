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
