$(document).ready(function(){
    $('#contact_info').on('click', function(){
        $('#contact_info').css('display','none');
        change_display();
    });

    $('#stamp').on('click', function(){
        $('#pushbtn').css('pointer-events','none');
        $('#rightbtn').css('pointer-events', 'none');
        $('#leftbtn').css('pointer-events', 'none');
        change_display();
    });

    $('#close_info').on('click', function(){
        $('#pushbtn').css('pointer-events','all');
        $('#rightbtn').css('pointer-events', 'all');
        $('#leftbtn').css('pointer-events', 'all');
        $('.info').css('display', 'none');
    })
});

function change_display(){
    $('.info').css('display','block');
    $('#stamp').css('display','block');
}