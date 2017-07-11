$('#btn-basket').webuiPopover({
	padding: false,
	width: 270
});

$(".btn-close").click(function () {
	$(this).parent('.item-basket').slideUp('400');
});
