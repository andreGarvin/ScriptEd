$(document).ready(function() {
    $('#query').keydown(function( k ) {
        var time = $('#query');
        if ( k.which === 13 ) {
            
            if ( time.val().length > 0 ) {
                var stops = [];
                
                $.getJSON('https://ajar-target.gomix.me/stops', function( resp ) {
                    for ( var s in resp ) {
                        $.getJSON('https://ajar-target.gomix.me/stops', function( resp ) {
                        stops.push( resp[s].stop_id );
                    }
                    
                });
            }
            
        }
    });
});