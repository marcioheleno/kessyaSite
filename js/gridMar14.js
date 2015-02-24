/**
 * Created by marciohelenomaiapessoa on 19/02/15.
 */
    // TOGGLE GRID
$('#gridB').click(function(){
    if($('#grid').length == 0) {
        var height = $('body').height();
        var html = '<section id="grid">' +
            '<div class="overlay">' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '<div></div>' +
            '</div>' +      // sao inseridos as div conforme a quantidade de grids
            '</section>';

        $('body').prepend(html);
        $('#grid div').css('height', height);
    }else{
        $('#grid').remove();
    }

    $(window).resize(function() {
        if($('#grid').length > 0) {
            var height = $('body').height();
            $('#grid div').css('height', height);
        }
    });

    // CHANGE GRID OVERLAY BEHAVIOUR FOR BROWSERS
    // THAT DONT SUPPORT "pointer-events: none;" CSS
    if ($.browser.msie || $.browser.opera) {
        $('#grid').live('click', function(){
            $('#grid').remove();
        });
    }

    // TOOLTIP
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    $('nav a').hover(function(){
        if (isMobile == false){
            var pos = $(this).offset();
            var title = $(this).attr('title');
            if ($.trim(title) == ''){
                return;
            }
            $(this).data('tipText', title).removeAttr('title');
            if($('.tooltip').length == 0) {
                var html = '<p class="tooltip"></p>';
                $('body').append(html);
            }
            $('.tooltip').html('<div class="arrow"></div><div>'+title+'</div>');
            $('.tooltip').css('top', pos.top+55).css('left', pos.left+25);
            var width = $('.tooltip').outerWidth();
            $('.tooltip').css('margin-left', 0-width*0.5);
            $('.tooltip').addClass('show');
        }
    }, function() {
        if (isMobile == false){
            $('.tooltip').removeClass('show');
            $(this).attr('title', $(this).data('tipText'));
        }
    });
});
