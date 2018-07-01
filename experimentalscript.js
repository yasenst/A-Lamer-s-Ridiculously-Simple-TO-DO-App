/*$(function(){*/
    
    $('.new').submit(function () {
        if (   $('#new').val() !== ''
            && $('#todo-description').val() !== ''
            && $('#datetimepicker').val() !== '') {
            var itemTitle = $('#new').val();
            var itemDate = $('#datetimepicker').val();
            var itemDescription = $('#todo-description').val();
            var input = '<div class="task-value"><input type="text" value="' + itemTitle + '" readonly/></div>';
            var edit = '<ol><li class="description">'+itemDescription+'</li><li class="due-date">'+itemDate+'</li><li class="check fa fa-check"></li><li class="delete fa fa-times"></li></ol>';
            $('.list').append('<li class="item">' + input + edit + '</li>');
        };
        $('#new').val('');
        $('#todo-description').val('');
        $('#datetimepicker').val('');
       
          $('#list .list .item ol li').on('click',function(){
            if ( $(this).hasClass('check') ) {
              $(this).parent('ol').parent('.item').css("background", "lime");
            } else if ( $(this).hasClass('delete') ) {
              $(this).parent('ol').parent('.item').remove();
            }
          });


          $('#list .list .item div.task-value').click(function(){
            var todoTitle = $(this).children('input').val();
            var todoDesc = $(this).parent().children('ol').children('li .description').text();
            var todoDate = $(this).parent().children('ol').children('li .due-date').text();
            $.createAlert({
              attachAfter: '#list .list .item div.task-value',
              title: 'Title: '+todoTitle + '</br>' +
                     ' Description: ' + todoDesc + '</br>' +
                     ' Due date: ' + todoDate,
                      
              template: `
              <p> This a template to provide some info to the customer <p>
              <p> <strong> Alert: </strong> Read it carefully </p>`,
              confirmText: 'Accept',
              confirmStyle: 'blue',
              callback: null
            });
            $.showAlert();
            $.deleteAlert();
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

      $('#datetimepicker').datetimepicker({
        
        });
        
        $('#list .list .item div.task-value').click(function(){
          var todoTitle = $(this).children('input').val();
          var todoDesc = $(this).parent().children('ol').children('li .description').text();
          var todoDate = $(this).parent().children('ol').children('li .due-date').text();
          $.createAlert({
            attachAfter: '#list .list .item div.task-value',
            title: 'Title: '+todoTitle + '</br>' +
                   ' Description: ' + todoDesc + '</br>' +
                   ' Due date: ' + todoDate,
                    
            template: `
            <p> This a template to provide some info to the customer <p>
            <p> <strong> Alert: </strong> Read it carefully </p>`,
            confirmText: 'Accept',
            confirmStyle: 'blue',
            callback: null
          });
          $.showAlert();
          $.deleteAlert();
          });

        
/*});*/