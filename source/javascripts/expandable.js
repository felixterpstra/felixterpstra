$( document ).ready(function() {
  return $('[data-expandable]').each(function() {
    var expander, hit;
    expander = $(this);
    hit = $(this).data('expandable-hit') ? $(this).find($(this).data('expandable-hit')) : $(this);
    return hit.click(function() {

      img = $(this).find('img');

      if ($(".bg").length == 0){
        var bg = $('<div class="bg"></div>').appendTo('body');
        bg.css('opacity', 0)
        bg.animate({
            opacity: 0.8
          }, 300, 'ease-out'
        );
        $(this).find('.image').height(img.height());
      }else{
        $('.bg').remove()
        $(this).find('.image').height(340);
      }
      return expander.toggleClass('active');
    });
  });
});