(function($){
      // This is a wrapper for your jQuery stuff

    'use strict';

    function clearForm() {
        var starNum = 5, i;

        $('#name').val('');
        $('#linkedin-url').val('');
        $('#person_email').val('');
        $('#textarea').val('');
        for(i=1; i <= starNum; i++){
               $('#star'+i).removeClass('fa-star');
               $('#star'+i).addClass('fa-star-o');
        }
    }

    $(document).ready(function(){

        var reviewStars = $('.review-stars');
        $('.thanks-response').hide();
        $('.error-response').hide();
        reviewStars.hover(function(event){
            var starNum = event.target.getAttribute('data-value');
            var i;

            for(i=1; i <= starNum; i++){
               $('#star'+i).removeClass('fa-star-o');
               $('#star'+i).addClass('fa-star');
            }
        });

        reviewStars.click(function(event){
            var starNum = event.target.getAttribute('data-value'),
                i;

            for(i=1; i <= 5; i++){
                if(i < starNum && !$('#star'+i).hasClass('fa-star')){
                    $('#star'+i).removeClass('fa-star-o');
                    $('#star'+i).addClass('fa-star');
                } else if(i > starNum){
                    $('#star'+i).removeClass('fa-star');
                    $('#star'+i).addClass('fa-star-o');
                }
            }
            $('#rating').val(starNum);
        });

        $('#form1').on('submit',function(event){
            event.preventDefault();
            var formData = $(this).serialize();
            if(formData.split('&').length === 5) {
                $.ajax({
                    method: 'POST',
                    url: 'https://formspree.io/psy.startup.ai@gmail.com',
                    dataType: 'json',
                    data: formData,
                    success: function() {
                        $('.error-response').hide();
                        $('.thanks-response').show(2000);
                        clearForm();
                    },
                    error: function(xhr){
                        console.log(xhr);
                    }
                });
            } else{
                $('.error-response').show(200);
            }
        });
    });
})(window.jQuery);
