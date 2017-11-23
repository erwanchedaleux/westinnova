module.exports = function( gulp, pkg, config ) {
    var replace, savefile;

    replace                             = require( 'gulp-replace' );
    savefile                            = require( 'gulp-savefile' );


    function UpdateDebugMode( debugMode ) {

        return gulp.src( './../../config/config.yml' )
                .pipe( replace( /debug: (.*)/g, "debug: " + debugMode) )
                .pipe( gulp.dest( './../../config/' ) )
                .pipe( savefile() );
    }

    gulp.task( 'refreshDebugModeDevelop',  function() {
        return UpdateDebugMode( true );
    } );

    gulp.task( 'refreshDebugModeRelease',  function() {
        return UpdateDebugMode( false );
    } );

};
