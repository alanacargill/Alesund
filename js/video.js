window.addEventListener('DOMContentLoaded', (event) => {
    (function () {
        const videoStarter = document.querySelector( '.video-starter' );
        const videoPlayer = document.querySelector( '.player');
    
        videoStarter.classList.remove( 'hide' );
    
        videoStarter.addEventListener( 'click', function() { 
            videoPlayer.play();
            videoStarter.classList.add( 'hide' );
        }, false );

        videoPlayer.addEventListener( 'ended', 
        function() { 
            videoPlayer.load();
            videoStarter.classList.remove( 'hide' );
        }, false );
    
    }( document ));

});