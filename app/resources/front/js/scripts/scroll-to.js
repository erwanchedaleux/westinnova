/* global jQuery */
module.exports = ( function ( $ ) {

    function ScrollTo( $scrollTo ) {


        /**
         * Scroll to href target element
         * @return {void}
         */
        function scrollToHandler() {
            var href, target, speed;

            href                        = $( this ).attr( 'href' );
            target                      = '#' + href.substr( href.indexOf( '#' ) + 1 );
            speed                       = 750;

            $( 'html, body' ).animate( { scrollTop: $( target ).offset().top }, speed );

            return false;

        }

        $scrollTo.on( 'click', scrollToHandler );

    }

    return ScrollTo;

}( jQuery ) );
