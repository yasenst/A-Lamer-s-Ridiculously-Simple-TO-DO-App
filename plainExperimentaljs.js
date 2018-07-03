$(function(){
    
    $('.new').submit(function () {
        if (   $('#new').val() !== ''
            && $('#todo-description').val() !== ''
            && $('#datetimepicker').val() !== '') {
            var itemTitle = $('#new').val();
            var itemDate = $('#datetimepicker').val();
            var itemDescription = $('#todo-description').val();
            var input = '<div class="task-value"><input type="text" value="' + itemTitle + '" readonly/></div>';
            var edit = '<ol><li class="description">'+itemDescription+'</li><li class="due-date">'+itemDate+'</li><input type="input" class="hiddenField"/><li class="check fa fa-check"></li><li class="delete fa fa-times"></li></ol>';
            $('.list').append('<li class="item">' + input + edit + '</li>');
        };
        $('#new').val('');
        $('#todo-description').val('');
        $('#datetimepicker').val('');
       
        $('#list .list .item ol li').on('click',function(){
            if ( $(this).hasClass('check') ) {
              $(this).parent('ol').parent('.item').children('div').children('input').css("background-color", "green");
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

            $( ".hiddenField" ).datepicker({
                showOn: "button",
                buttonText: "<i class='far fa-edit'></i>",
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd MM yy',
                onSelect: function(dateText, inst) {
                  var date = $(this).val();
                 
                  $(this).parent().children('li.due-date').text(date);
          
              }
              });
          
              $('#list .list .item ol li[class="check fa fa-check"]').hover(
                
                    
                    function() {
                        
                        var dis = $(this);
                        var inputEntity = dis.parent('ol').parent('.item').children('div.task-value').children('input');
                        if ( inputEntity.css('background-color') === 'rgb(220, 20, 60)') {
                            dis.css('color','green');              
                        }
                        
                        
                    },
                    function() {
                        $(this).css('color','white');
                    }
    
                    
              );
          return false;
    });

    $('#list .list .item ol li').on('click',function(){
        if ( $(this).hasClass('check') ) {
          $(this).parent('ol').parent('.item').children('div').children('input').css("background-color", "green");
          $(this).parent('ol').children('.hiddenField').datepicker("option", "disabled", true);
          $(this).parent('ol').children('.ui-datepicker-trigger').css('visibility','hidden');
          $(this).parent('ol').children('.ui-datepicker-trigger').css('cursor','default');
        } else if ( $(this).hasClass('delete') ) {
          $(this).parent('ol').parent('.item').remove();
        }
        
      });

      $('#datetimepicker').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd MM yy',   
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

          $(window).scroll(function(){
            var sticky = $('#page-header'),
                scroll = $(window).scrollTop();
          
            if (scroll >= 100) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
          });
        
          $( ".hiddenField" ).datepicker({
              showOn: "button",
              buttonText: "<i class='far fa-edit'></i>",/*,
              onSelect: function() {
                $('body').append('<div>HIIII</div>');
              }*/
              changeMonth: true,
              changeYear: true,
              dateFormat: 'dd MM yy',
              onSelect: function(dateText, inst) {
                var date = $(this).val();
               
                $(this).parent().children('li.due-date').text(date);
        
            }
            });
            
            $('#list .list .item ol li[class="check fa fa-check"]').hover(
            
                
                function() {
                    
                    var dis = $(this);
                    var inputEntity = dis.parent('ol').parent('.item').children('div.task-value').children('input');
                    if ( inputEntity.css('background-color') === 'rgb(220, 20, 60)') {
                        dis.css('color','green');              
                    }
                    
                    
                },
                function() {
                    $(this).css('color','white');
                }

                
          );
            /*
           if ($('#list .list .item div.task-value input').css('background-color') === 'rgb(0, 128, 0)') {
               $(this).parent('div.task-value').parent('.item').children('ol').children('.hiddenField').datepicker("destroy");
           }
           */
           
});

