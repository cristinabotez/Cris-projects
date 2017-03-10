/**
 * Created by web4 on 2/17/2017.
 */
$(document).ready(function(){
    $('#exampleModal').on('show.bs.modal', function (event) {


        var button = $(event.relatedTarget);

        var color = button.data('colorname');

        var modal = $(this);

        modal.find('modal-message').text('do you want change the background color to ');

        modal.find('#color-name').html(color).css({'color':color});

        console.log(event);
    });
});


modal.on('click', '.close', function(){});

////

$(document).ready(function(){
    $('button').addClass("myClass");
})

////

$(document).ready(function () {

})
