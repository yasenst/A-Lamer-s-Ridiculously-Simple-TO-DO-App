$(function(){
    
    $('.new').submit(function () {
        if (   $('#new').val() !== ''
            && $('#todo-description').val() !== ''
            && $('#datetimepicker').val() !== '') {
            var itemTitle = $('#new').val();
            var itemDate = $('#datetimepicker').val();
            var itemDescription = $('#todo-description').val();
            var input = '<div class="task-value"><input type="text" value="' + itemTitle + '" readonly/></div>';
            var edit = '<ol><li class="description">'+itemDescription+'</li><li class="status status-not-done">NOT DONE</li><li class="due-date">'+itemDate+'</li><input type="input" class="hiddenField"/><li class="check fa fa-check"></li><li class="delete fa fa-times"></li></ol>';
            $('.list').append('<li class="item">' + input + edit + '</li>');
        };

        $('#new').val('');
        $('#todo-description').val('');
        $('#datetimepicker').val('');
       
        $('#list .list .item ol li').on('click',function(){
            if ( $(this).hasClass('check') ) {
              $(this).parent('ol').parent('.item').children('div').children('input').css("background-color", "green");
              $(this).parent('ol').children('li.status').removeClass('status-not-done');
              $(this).parent('ol').children('li.status').addClass('status-done');
              $(this).parent('ol').children('li.status').css('color','green');  
              $(this).parent('ol').children('li.status').text('DONE');
              $(this).parent('ol').children('.hiddenField').datepicker("option", "disabled", true);
              $(this).parent('ol').children('.ui-datepicker-trigger').css('visibility','hidden');   
              $(this).css('visibility','hidden');
            } else if ( $(this).hasClass('delete') ) {
              $(this).parent('ol').parent('.item').remove();
            }
        });
    
    


        $('#list .list .item div.task-value').click(function(){
            var todoTitle = $(this).children('input').val();
            var todoDesc = $(this).parent().children('ol').children('li .description').text();
            var todoDate = $(this).parent().children('ol').children('li .due-date').text();
            
            /*$(this).parent().children('ol').children('li .status').css('color', 'blue');*/
            var todoStatus = $(this).parent().children('ol').children('li.status').text();
            var todoClass;
            if ($(this).parent().children('ol').children('li.status').hasClass('status-done')) {
                todoClass = 'status-done';
            } else {
                todoClass = 'status-not-done';
            }
            
            $.createAlert({
              attachAfter: '#list .list .item div.task-value',
              title: '<span style="color:black;">' + 'Title: </span>'+todoTitle + '</br>' +
                     '<span style="color:black;">'  + ' Description: </span>'  + todoDesc + '</br>' +
                     '<span style="color:black;">'  + ' Due date: </span>' + todoDate + '</br>' +
                     '<span style="color:black;">' + 'Status: </span>' +
                     '<p class="' + todoClass +'" style="display:inline;">' + todoStatus + '</p>',

              
              confirmText: 'Close',
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
       
        return false;
    });

    $('#list .list .item ol li').on('click',function(){
        if ( $(this).hasClass('check') ) {
          $(this).parent('ol').parent('.item').children('div').children('input').css("background-color", "green");
          $(this).parent('ol').children('li.status').removeClass('status-not-done');
          $(this).parent('ol').children('li.status').addClass('status-done');
          $(this).parent('ol').children('li.status').css('color','green');  
          $(this).parent('ol').children('li.status').text('DONE');
          $(this).parent('ol').children('.hiddenField').datepicker("option", "disabled", true);
          $(this).parent('ol').children('.ui-datepicker-trigger').css('visibility','hidden');   
          $(this).css('visibility','hidden');
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
          var todoStatusText = $(this).parent().children('ol').children('li .status').text();

          var todoClass; 
          if ($(this).parent().children('ol').children('li .status').hasClass('status-done')) {
              todoClass = 'status-done';
          } else {
              todoClass = 'status-not-done';
          }
          
          $.createAlert({
            attachAfter: '#list .list .item div.task-value',
            title: '<span style="color:black;">' + 'Title: </span>'+todoTitle + '</br>' +
                   '<span style="color:black;">'  + ' Description: </span>'  + todoDesc + '</br>' +
                   '<span style="color:black;">'  + ' Due date: </span>' + todoDate + '</br>' +
                   '<span style="color:black;">' + 'Status: </span>' +
                   '<p class="' + todoClass +'" style="display:inline;">' + todoStatusText + '</p>',
            confirmText: 'Close',
            confirmStyle: 'blue',
            callback: null
          });

          $.showAlert();
          $.deleteAlert();
        });


        var h = $("header").outerHeight();
        $('#list').css('padding-top', h);

        
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
});

