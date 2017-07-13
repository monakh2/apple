$('#btn-search').webuiPopover({
    padding: false,
    width: 300
});
function makeSearchFormSmall() {
    var form = $('#search-form');
    var btn = form.find('.btn-info');

    form.appendTo('.webui-popover-content-search > .panel-body')
        .find('div:first-child').removeClass('input-group').addClass('form-group');

    btn.unwrap().appendTo(form).text('Поиск').find('.glyphicon-search').remove();
}

function makeSearchFormLarge() {
    var form = $('#search-form');
    var btn = form.find('.btn-info');
    form.appendTo('.header .block-search')
        .find('div:first-child').removeClass('form-group').addClass('input-group');
    btn.insertAfter('#search-form .form-control').wrap('<span class="input-group-btn"></span>');
    btn.html('<i class="glyphicon glyphicon-search"></i>');
}

if ($(window).width() <= (992 - 17)) {
    console.log($(window).width() + 17);
    makeSearchFormSmall();
}

$(window).on('resizeend', function() {
    if ($(window).width() <= (992 - 17)) {
        console.log($(window).width() + 17);
        makeSearchFormSmall();
    } else {
        makeSearchFormLarge();
    }
});
