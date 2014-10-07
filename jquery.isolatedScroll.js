/**
 * Isolate Scrolling to only element being scrolled
 * @Version: 1.0
 * @Author: Patrick Springstubbe
 * @Contact: @JediNobleclem
 * @Website: springstubbe.us
 * 
 * Usage:
 *     $('.scrollable').isolatedScroll();
 *     $('.scrollable').isolatedScroll({ autoscroll: false });
 * 
 * @Credit: http://stackoverflow.com/questions/7600454/how-to-prevent-page-scrolling-when-scrolling-a-div-element/15821417#15821417
 **/
(function($){
    $.fn.isolatedScroll = function( options ){
        defaults = {
            // only blocks scroll if area is scrollable, set to false to always disable other element scroll
            autoscroll: true
        }
        options = $.extend( defaults, options );
        
        return this.bind( 'touchmove mousewheel DOMMouseScroll', function ( e ) {
            if( !options.autoscroll || ($(this).outerHeight() < $(this)[0].scrollHeight) ) {
                var e0 = e.originalEvent,
                    delta = e0.wheelDelta || -e0.detail;

                this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
                e.preventDefault();
            }
        });
    };
}(jQuery));
