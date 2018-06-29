/*$(function(){*/
    $('.new').submit(function () {
        if ($('#new').val() !== '') {
            var item = $('input').val();
            var input = '<input type="text" value="' + item + '" />';
            var edit = '<ol><li class="check fa fa-check"></li><li class="delete fa fa-times"></li></ol>';
            $('.list').append('<li class="item">' + input + edit + '</li>');
        };
        $('#new').val('');
        
        /*
        $('#list .list .item').each(function(e){
            var hue = ( e * 3 );
            $(this).css({ backgroundColor: 'hsl(' + hue + ',75%,50%)' });
            $('ol li', this).each(function(i){
              var o = .1 + ( i * .1 );
              $(this).css({ backgroundColor: 'rgba(0,0,0,' + o + ')' });
            });
          });
          */

          $('#list .list .item ol li').on('click',function(){
            if ( $(this).hasClass('check') ) {
              $(this).parent('ol').parent('.item').css("background", "lime");
            } else if ( $(this).hasClass('delete') ) {
              $(this).parent('ol').parent('.item').remove();
            }
          });
          
          return false;
    });

    $('#list .list .item ol li').on('click',function(){
        if ( $(this).hasClass('check') ) {
          $(this).parent('ol').parent('.item').css("background", "lime");
        } else if ( $(this).hasClass('delete') ) {
          $(this).parent('ol').parent('.item').remove();
        }
      });
/*});*/