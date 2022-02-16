$(document).ready(function() {
    'use strict';
    (function($) {
        'use strict';
        var position = $(window).scrollTop();
    })(jQuery);
    (function($) {
        'use strict';
        $('.load-more .item').slice(0, 4).show();
        $('#load-btn').on('click', function(e) {
            e.preventDefault();
            $('.load-more .item:hidden').slice(0, 4).slideDown();
            if ($('.load-more .item:hidden').length == 0) {
                $('#load-btn').fadeOut('slow');
            }
        });
    })(jQuery);
});