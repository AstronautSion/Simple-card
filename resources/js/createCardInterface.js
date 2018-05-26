(function(global, document, $){

    var createFont = function(){
        var fontList = '<li class="f-list">'+
                            '<input type="text" placeholder="텍스트를 입력해 주세요." />' + 
                            '<button class="btn-modify" type="button">수정</button>' +
                            '<button class="btn-delete" type="button">삭제</button>' +
                        '</li>';
        $(this).siblings('#menu-font').append(fontList);

        $('.btn-delete').on('click', function(){
            $(this).parents('.f-list').remove();
        });
    };
    var createImg = function(){

    };

    $('#btn-create-font').on('click', function(){createFont.call(this);});
    $('#btn-create-img').on('click', function(){createImg.call(this);});



    function showAlert(text){
        if(typeof text !== string || text.trim() === ''){return false;}
        $('.alert-box').find('.text-box').text(text);
        $('.alert-box').show();
    }
    
})(window, window.document, window.jQuery);



