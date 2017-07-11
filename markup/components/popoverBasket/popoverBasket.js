$('#btn-basket').webuiPopover({
	padding: false,
	width: 300
});

$(".btn-close").click(function () {
	$(this).parent('.item-basket').slideUp('400');
});
