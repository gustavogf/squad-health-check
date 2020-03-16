$('.front, .back').on('click', function () {
  $(this).parent('.card').toggleClass('flipped');
});

$('body').on('click', () => {
  $('.supertext').remove();
  $('.container').addClass('show');
  $('body').off('click');
});
