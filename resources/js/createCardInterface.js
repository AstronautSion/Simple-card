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



    // var createFont = function(){
    //     var index = $('#menu-font').find('.f-list').length;
    //     console.log(index);
    //     var fontList = '<li class="f-list">'+
    //                         '<input type="text" placeholder="텍스트를 입력해 주세요." />' + 
    //                         '<button class="btn-delete" type="button">삭제</button>' +
    //                     '</li>';
    //     $(this).siblings('#menu-font').append(fontList);
    //     //list focus event
    //     $('.f-list input').on('focusin', function(){
    //         $(this).parent().css({
    //             border:'1px solid #ff7171',
    //             backgroundColor:'#fff6f6'
    //         });
    //     });
    //     $('.f-list input').on('focusout', function(){
    //         $(this).parent().css({
    //             border:'1px solid #fff',
    //             borderBottom:'1px solid #ddd',
    //             backgroundColor:'#fff'
    //         });
    //     });   

    //     //font delete
    //     $('.btn-delete').on('click', function(){
    //         var thisObj = this;
    //         showAlert('삭제하시겠습니까?', function(){
    //             $(thisObj).parents('.f-list').remove();
    //         });
    //     });
    // };
    // var createImg = function(){
    // };
    // $('#btn-create-font').on('click', function(){createFont.call(this);});
    // $('#btn-create-img').on('click', function(){createImg.call(this);});



    
/*
 * svg event
 * 카드 그리기
*/

//btn create
var $createTextBtn = $('.btn-create-text');
var $createImgBtn = $('.btn-create-img');

//card
var $cards = $('.create-card-board .card-canvas-area');
var $frontCard = $('.card-front');
var $backCard = $('.card-back');
var $thumbs = $('.card-thumb-area .card-thumb');

//control box
var $controlBox = $('.control-box');
var $closeControlBoxBtn = $controlBox.find('.btn-close');

$thumbs.on('click', function(){
    
    if(!$(this).hasClass('is-active')){
        $thumbs.removeClass('is-active');
        $(this).addClass('is-active');

        if($(this).hasClass('card-thumb-front')){
            $backCard.hide();
            $frontCard.show();
            //front
        }else{
            $frontCard.hide();
            $backCard.show();
            //back
        }
    }
});

var openControlBox = function(){
    
    var openTextControl = function(){
        $controlBox.find('.control-area').hide();
        $controlBox.find('.control-area.text-control-area').show();
    };
    var openImgControl = function(){
        $controlBox.find('.control-area').hide();
        $controlBox.find('.control-area.img-control-area').show();
    };
    
    var dataNum = $(this).attr('data-control-btn');
    if( dataNum == 1 ){ $controlBox.slideUp( 200 ,function(){openTextControl();});}
    else{$controlBox.slideUp(200, function(){openImgControl();});}
    $controlBox.slideDown();

    //var nowCanvas = nowActiveCanvas();
    //createTextBox(nowCanvas);
};

var closeControlBox = function(){
    $controlBox.slideUp();
}

var createTextBox = function(canvas){
    var svg = '<p> hello world hello world hello world</p>';
    $(canvas).find('.canvas').append(svg);
};

var nowActiveCanvas = function(){
    var index;
    $thumbs.each(function(i,t){ if( $(t).hasClass('is-active')){ index = i;} });
    return $cards.eq(index);
};

var modifyTextBox = function(){

};

var deleteTypeBox = function(){

};


$createTextBtn.add($createImgBtn).on('click', function(){ openControlBox.call(this); });

$closeControlBoxBtn.on('click', function(){ closeControlBox(); });




})(window, window.document, window.jQuery);



