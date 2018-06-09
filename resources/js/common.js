$(document).ready(function(){

    //input file 
    (function(){
        var fileTarget = $('.input-file .upload-hidden'); 
        var filename = null;

        fileTarget.on('change', function(){ 
            if(window.FileReader){ 
                filename = $(this)[0].files[0].name; 
            } else { 
                filename = $(this).val().split('/').pop().split('\\').pop(); 
            } 
            $(this).siblings('.upload-name').val(filename); });
    })();

    
})