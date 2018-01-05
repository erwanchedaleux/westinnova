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
