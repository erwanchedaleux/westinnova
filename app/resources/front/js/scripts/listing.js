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
