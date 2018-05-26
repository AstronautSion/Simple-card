(function(global, document, $){
    //alert box event
    var showAlert = function(text, callback){
        if(typeof text !== 'string' || text.trim() === ''){return false;}
        
        var $alertBox = $('.alert-box');
        var $btnAgree = $alertBox.find('.btn-agree');
        var $btnCancel = $alertBox.find('.btn-cencel');
        var $overlay = $('.overlay');
        var hideAlertBox = function(){
            $overlay.hide();
            $alertBox.hide();
        };
        $overlay.show();
        $alertBox.find('.text-box').text(text);
        $alertBox.show();

        $btnAgree.on('click', function(){
            hideAlertBox();
            callback();
        });

        $btnCancel.on('click', function(){ hideAlertBox(); });
    };



    var createFont = function(){

        var index = $('#menu-font').find('.f-list').length;
        console.log(index);

        var fontList = '<li class="f-list">'+
                            '<input type="text" placeholder="텍스트를 입력해 주세요." />' + 
                            '<button class="btn-delete" type="button">삭제</button>' +
                        '</li>';
        $(this).siblings('#menu-font').append(fontList);

        //list focus event
        $('.f-list input').on('focusin', function(){
            $(this).parent().css({
                border:'1px solid #ff7171',
                backgroundColor:'#fff6f6'
            });
        });
        $('.f-list input').on('focusout', function(){
            $(this).parent().css({
                border:'1px solid #fff',
                borderBottom:'1px solid #ddd',
                backgroundColor:'#fff'
            });
        });   

        //font delete
        $('.btn-delete').on('click', function(){
            var thisObj = this;
            showAlert('삭제하시겠습니까?', function(){
                $(thisObj).parents('.f-list').remove();
            });
        });
    };

    var createImg = function(){
        
    };

    $('#btn-create-font').on('click', function(){createFont.call(this);});
    $('#btn-create-img').on('click', function(){createImg.call(this);});


    //canvas
    var frontCanvas = document.getElementById('card-front');
    var backCanvas = document.getElementById('card-back');
    var initCanvas = function(canvas){
         return canvas.getContext("2d");
    };

    var fCtx = initCanvas(frontCanvas);
    var bCtx = initCanvas(backCanvas);

    


})(window, window.document, window.jQuery);



