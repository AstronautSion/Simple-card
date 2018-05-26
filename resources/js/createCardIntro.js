  
(function(){
    
    var $popup = $('.popup');
    
    var popupCardEvent = function(){
        var $cards = $('.choice-card');
        var choiceTypeVal = $cards.find('input[type=radio][name=c-type]:checked').val();
        //var choiceTemp = null;

        var cardsClassEvent = function(){
            $cards.removeClass('is-choice');
            $(this).addClass('is-choice');
        };

        var cardsChoiceInput = function(){
            $cards.find('input[type="radio"]').removeAttr('checked');
            $(this).find('input[type="radio"]').attr('checked','checked');
            choiceTypeVal = $cards.find('input[type=radio][name=c-type]:checked').val();
        };

        $cards.on('click', function(){
            cardsClassEvent.call(this);
            cardsChoiceInput.call(this);
        });
        return choiceTypeVal;
    };

    var divisionOfCardType = function(typeVal){

        var $popupTitle = $('.popup-title');
        var jsonUrl = null;
        var fName = null;
        
        switch(typeVal){
            case 'c-horizontal' :
                $popupTitle.text('Please select Horizontal template');
                jsonUrl = "/resources/data/json/horizontalTemplate.json";
                fName = 'h-';
                break;

            case 'c-vertical' :
                $popupTitle.text('Please select Vertical template');
                jsonUrl = "/resources/data/json/verticalTemplate.json";
                fName = 'v-';
                break;
        }
        return { jsonUrl: jsonUrl, fName : fName };
    };

    //slider 내용 채우기
    var appendTempSlider = function(data, resultVal){
        var $tempSlider = $('.template-slider');
        data.forEach(function(dt){
            $tempSlider.append('<li class="temp-slide"><div class="'+ resultVal.fName + dt.name +'">'+ dt.name +'</div></li>');
        });
        $tempSlider.slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 6
        });

        // tempslider 이벤트 세팅
        var $items = $tempSlider.find('.temp-slide');
        var className = 'is-choice';
        
        var firstChlidActive = function(target){
            if($items.find(target).length > 0){
                $items.find(target).parent('.temp-slide').addClass(className);
            }
        };
        firstChlidActive('.'+ resultVal.fName +'default');
        
        $items.on('click', function(){
            if(!$(this).hasClass(className)){
                $items.removeClass(className);
                $(this).addClass(className);
            }
        });
    };



/**
* AJAX Event
*/
    // 카드타입 popup 띄우기
    var getCardType = function(){
        $.ajax({
            type:'GET',
            url: '/resources/data/html/popupSelectType.html',
            dataType: 'html',
            success: function(data){
                $popup.html(data);
                var typeVal = popupCardEvent();
                getCardTemp(typeVal);
              
            }
        });
    };
    
    // 선택한 type의 card templte popup 띄우기
    var getCardTemp = function(typeVal){
        var $btn1 = $('#btn-choice-1');
        $btn1.on('click', function(){
            $.ajax({
                type:'GET',
                url: '/resources/data/html/popupSelectTemp.html',
                dataType: 'html',
                success: function(data){
                    $popup.html(data);
                    var resultVal = divisionOfCardType(typeVal);
                    getJsonTempInfo(typeVal, resultVal);
                }
            });
        });
    };

    // Temp 팝업에 tempinfo가져와 뿌리기
    var getJsonTempInfo = function(typeVal, resultVal){

        $.ajax({
            url: resultVal.jsonUrl,
            dataType: "json",
            success: function(data){
                console.log(data);
                appendTempSlider(data, resultVal);
                getCreateCardBoard();
            }
        });
    };

    // 선택한 template 가지고 작업뷰 가기
    var getCreateCardBoard = function(){
        var $btn2 = $('#btn-choice-2');
        $btn2.on('click', function(){
            $.ajax({
                type : "GET",
                url  : "/resources/data/html/createCardBoard.html",
                dataType: 'html',
                success:function(data){
                    $('#wrapper').html(data);
                    $popup.add('.overlay').fadeOut();
                    
                },
            });
        });
    };
    $('.overlay').show();
    getCardType();

})();