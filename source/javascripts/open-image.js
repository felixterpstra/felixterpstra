$( document ).ready(function() {
  return $('[data-expandable]').each(function() {
    var expander, hit;
    expander = $(this);
    hit = $(this).data('expandable-hit') ? $(this).find($(this).data('expandable-hit')) : $(this);
    return hit.click(function() {

      img = $(this).find('img');
      target = $(this);

      if ($(".bg").length == 0){
        var bg = $('<div class="bg"></div>').appendTo('.article-body');
        bg.css('opacity', 0)
        bg.animate({
            opacity: 0.8
          }, 300, 'ease-out'
        );
        $('.position-indicator').animate({
            opacity: 0
          }, 300, 'ease-out'
        );
        bg.click(function(){
          $('.bg').remove()
          target.find('.image').height(340);
          target.removeClass('active');
          $('.position-indicator').animate({
            opacity: 1
            }, 300, 'ease-out'
          );
        });
        $(this).find('.image').height(img.height());
      }else{
        $('.bg').remove()
        $(this).find('.image').height(340);
        $('.position-indicator').animate({
            opacity: 1
          }, 300, 'ease-out'
        );
      }
      return expander.toggleClass('active');
    });
  });
});