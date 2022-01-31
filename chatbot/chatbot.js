function chatbot(){
    $('.chatbot').css('display','block');
    $('.chatbot').append('<script src="./chatbot/chat.js"></script>');
}

function closeChat(){
    $('.chatbot').css('display','none');
    $('#chat').remove();
    $('.chatbot').append('<div id="chat"></div>');
}